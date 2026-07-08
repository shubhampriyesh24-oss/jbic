import React from 'react';

const Facilities = () => {
  const facilitiesData = [
    {
      id: 1,
      title: "Smart Classrooms",
      desc: "Interactive digital boards and ergonomic seating for an immersive learning experience.",
      icon: "💻",
      color: "from-blue-500 to-cyan-400"
    },
    {
      id: 2,
      title: "Advanced Science Labs",
      desc: "State-of-the-art equipment for hands-on physics, chemistry, and biology experiments.",
      icon: "🔬",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Vast Library",
      desc: "Over 50,000 physical books and a massive digital library access for all students.",
      icon: "📚",
      color: "from-amber-400 to-orange-500"
    },
    {
      id: 4,
      title: "Sports Complex",
      desc: "Olympic-sized pool, indoor basketball courts, and a lush green football field.",
      icon: "⚽",
      color: "from-emerald-400 to-green-500"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Our Campus</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            World-Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Facilities</span>
          </h3>
          <p className="mt-4 text-gray-500 text-lg">
            Providing an environment where students can thrive academics, sports, and extracurricular activities.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilitiesData.map((item) => (
            <div key={item.id} className="group relative bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              {/* Background Glow Effect on Hover */}
              <div className={`absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br ${item.color} rounded-full mix-blend-multiply filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              <div className="relative z-10 flex items-start gap-6">
                <div className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} text-3xl shadow-lg shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Facilities;