import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 relative z-10 border-t-4 border-blue-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h1 className="text-3xl font-bold tracking-tight mb-6">EduCore<span className="text-blue-500">.</span></h1>
            <p className="text-gray-400 text-lg max-w-md mb-8 leading-relaxed">
              Empowering the next generation with world-class education, state-of-the-art facilities, and a commitment to excellence.
            </p>
            <div className="flex gap-4">
              <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-blue-600 transition">FB</span>
              <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-blue-600 transition">IG</span>
              <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-blue-600 transition">X</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-blue-400 cursor-pointer transition">About Us</li>
              <li className="hover:text-blue-400 cursor-pointer transition">Admissions</li>
              <li className="hover:text-blue-400 cursor-pointer transition">Academic Calendar</li>
              <li className="hover:text-blue-400 cursor-pointer transition">Career</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-3 text-gray-400">
              <li>📍 123 Education Hub, Knowledge City</li>
              <li>📞 +91 98765 43210</li>
              <li>✉️ info@educore.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 EduCore Institutions. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;