import React from 'react';
import { useNavigate } from 'react-router-dom';
import Stats from '../components/Stats';
import Facilities from '../components/Facilities';
import Teachers from '../components/Teachers';
import Admission from '../components/Admission';
import Testimonials from '../components/Testimonials';
import Faq from '../components/Faq';
import Footer from '../components/Footer';

function Home() {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background Mesh Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 animate-blob animation-delay-2000"></div>

      {/* Modern Navbar */}
      <nav className="fixed w-full top-5 z-50 flex justify-center">
        <div className="bg-white/40 backdrop-blur-md border border-white/40 shadow-lg px-8 py-4 rounded-full flex gap-10 items-center justify-between w-11/12 max-w-5xl">
          <h1 className="text-xl font-bold text-gray-800 tracking-tight">EduCore</h1>
          <ul className="hidden md:flex gap-8 text-gray-600 font-medium">
            <li
              className="hover:text-blue-600 cursor-pointer transition"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Home
            </li>
            <li
              className="hover:text-blue-600 cursor-pointer transition"
              onClick={() => scrollToSection('facilities')}
            >
              Facilities
            </li>
            <li
              className="hover:text-blue-600 cursor-pointer transition"
              onClick={() => scrollToSection('admission')}
            >
              Admission
            </li>
          </ul>
          <button 
            onClick={() => navigate('/login')} 
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-blue-500/30 transition hover:scale-105"
          >
            Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <span className="bg-white/60 backdrop-blur-sm border border-gray-200 text-blue-600 font-semibold px-4 py-1 rounded-full text-sm mb-6 shadow-sm">
          ✨ Next-Gen School Management
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight max-w-4xl">
          Empowering The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Future</span> of Education
        </h1>
        <p className="mt-6 text-lg text-gray-500 max-w-2xl">
          Experience the most premium, seamless, and powerful school management system designed for modern institutions.
        </p>
        <div className="mt-10 flex gap-4">
          <button 
            onClick={() => scrollToSection('admission')}
            className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:bg-gray-800 transition hover:scale-105"
          >
            Apply Now
          </button>
          <button 
            onClick={() => scrollToSection('facilities')}
            className="bg-white/50 backdrop-blur-sm border border-gray-200 text-gray-800 px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-white transition hover:scale-105"
          >
            Explore Campus
          </button>
        </div>
      </div>

      <Stats />
      <div id="facilities"><Facilities /></div>
      <Teachers />
      <div id="admission"><Admission /></div>
      <Testimonials />
      <Faq />
      <Footer />

    </div>
  );
}

export default Home;