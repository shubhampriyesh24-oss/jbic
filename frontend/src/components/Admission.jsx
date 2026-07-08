import React from 'react';

const Admission = () => {
  return (
    <section className="py-16 bg-white relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gray-900 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-700/90 mix-blend-multiply"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-semibold tracking-wider uppercase mb-4 backdrop-blur-md border border-white/30">
                Admissions Open 2026-27
              </span>
              <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                Shape Your Child's Future With Us
              </h3>
              <p className="text-blue-100 text-lg">
                Join our legacy of excellence. Limited seats available for the upcoming academic session.
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold shadow-xl hover:bg-gray-100 transition hover:scale-105">
                Enroll Now
              </button>
              <button className="bg-transparent border border-white/50 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admission;