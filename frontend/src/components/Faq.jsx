import React, { useState } from 'react';

const Faq = () => {
  const [openId, setOpenId] = useState(1);

  const faqs = [
    {
      id: 1,
      question: "What is the admission process for the upcoming session?",
      answer: "The admission process starts with filling out the online application form, followed by an entrance test and a brief interaction with the principal."
    },
    {
      id: 2,
      question: "Are there any scholarship programs available?",
      answer: "Yes, we offer merit-based and sports scholarships for deserving students. Please contact the admin office for detailed criteria."
    },
    {
      id: 3,
      question: "What is the student-to-teacher ratio?",
      answer: "We maintain a strict 20:1 student-to-teacher ratio to ensure personalized attention and optimal learning for every child."
    },
    {
      id: 4,
      question: "Is transport facility available?",
      answer: "Yes, we have a fleet of GPS-enabled, air-conditioned buses covering all major routes in and around the city for safe commuting."
    }
  ];

  return (
    <section className="py-24 bg-white relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Got Questions?</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Questions</span>
          </h3>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div 
              key={faq.id} 
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openId === faq.id ? 'border-blue-500 bg-blue-50/30' : 'border-gray-200 bg-white hover:border-gray-300'}`}
            >
              <button 
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-bold text-gray-900 text-lg">{faq.question}</span>
                <span className={`text-blue-600 text-2xl transition-transform duration-300 ${openId === faq.id ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${openId === faq.id ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;