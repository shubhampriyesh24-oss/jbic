const express = require('express');
const { login, logout, register, forgotPassword, resetPassword } = require('../controllers/authController');
const { protect, authorize } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.post('/forgot-password', forgotPassword);
router.put('/reset-password/:token', resetPassword);

router.get('/admin-only', protect, authorize('admin'), (req, res) => {
  res.json({ message: "Welcome Boss! Yeh sirf admin dekh sakta hai." });
});

module.exports = router;