import React from 'react';

const Stats = () => {
  const stats = [
    { id: 1, number: '50+', label: 'Expert Faculty' },
    { id: 2, number: '1000+', label: 'Bright Students' },
    { id: 3, number: '100%', label: 'Success Rate' },
    { id: 4, number: '20+', label: 'Facilities' },
  ];

  return (
    <div className="py-20 bg-white relative z-10 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-gray-50/50 backdrop-blur-sm rounded-3xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {stat.number}
              </h3>
              <p className="mt-3 text-gray-600 font-semibold tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;