const User = require('../models/User');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const sendEmail = require('../utils/sendEmail');

const generateTokens = (userId) => {
  const accessToken = jwt.sign({ id: userId }, process.env.JWT_ACCESS_SECRET, { expiresIn: '15m' });
  const refreshToken = jwt.sign({ id: userId }, process.env.JWT_REFRESH_SECRET, { expiresIn: '7d' });
  return { accessToken, refreshToken };
};

const setCookies = (res, accessToken, refreshToken) => {
  const cookieOptions = { httpOnly: true, secure: false, sameSite: 'lax' };
  res.cookie('accessToken', accessToken, { ...cookieOptions, maxAge: 15 * 60 * 1000 }); 
  res.cookie('refreshToken', refreshToken, { ...cookieOptions, maxAge: 7 * 24 * 60 * 60 * 1000 }); 
};

// NAYA: Register Function
exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "Email already exists" });

    const user = await User.create({ name, email, password, role });
    
    const { accessToken, refreshToken } = generateTokens(user._id);
    setCookies(res, accessToken, refreshToken);

    res.status(201).json({ _id: user._id, name: user.name, role: user.role });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Purana: Login Function
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const { accessToken, refreshToken } = generateTokens(user._id);
    setCookies(res, accessToken, refreshToken);

    res.status(200).json({ _id: user._id, name: user.name, role: user.role });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.logout = (req, res) => {
  res.cookie('accessToken', '', { maxAge: 1 });
  res.cookie('refreshToken', '', { maxAge: 1 });
  res.status(200).json({ message: "Logged out successfully" });
};
// Forgot Password - Email bhejna
exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "Is email se koi account nahi mila" });
    }

    const resetToken = user.getResetPasswordToken();
    await user.save({ validateBeforeSave: false });

    const resetUrl = `http://localhost:5173/reset-password/${resetToken}`;

    const message = `
      <h2>Password Reset Request</h2>
      <p>Aapne password reset karne ki request bheji hai. Neeche diye link pe click karke naya password set karein:</p>
      <a href="${resetUrl}" target="_blank">${resetUrl}</a>
      <p>Ye link 15 minute mein expire ho jayega. Agar aapne ye request nahi ki, to is email ko ignore karein.</p>
    `;

    try {
      await sendEmail({
        email: user.email,
        subject: 'Password Reset Request - JBIC',
        message,
      });

      res.status(200).json({ message: "Reset link aapki email pe bhej diya gaya hai" });
    } catch (err) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;
      await user.save({ validateBeforeSave: false });
      return res.status(500).json({ message: "Email bhejne mein error aayi" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Reset Password - Naya password set karna
exports.resetPassword = async (req, res) => {
  try {
    const resetPasswordToken = crypto
      .createHash('sha256')
      .update(req.params.token)
      .digest('hex');

    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: "Link invalid ya expire ho chuka hai" });
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    res.status(200).json({ message: "Password successfully reset ho gaya" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};