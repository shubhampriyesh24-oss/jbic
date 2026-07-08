import React from 'react';

const Teachers = () => {
  const facultyData = [
    {
      id: 1,
      name: "Dr. Sarah Jenkins",
      role: "Principal",
      subject: "Administration",
      image: "https://i.pravatar.cc/150?img=32",
    },
    {
      id: 2,
      name: "Mr. David Miller",
      role: "Head of Science",
      subject: "Physics",
      image: "https://i.pravatar.cc/150?img=11",
    },
    {
      id: 3,
      name: "Ms. Elena Rodriguez",
      role: "Senior Faculty",
      subject: "Mathematics",
      image: "https://i.pravatar.cc/150?img=5",
    },
    {
      id: 4,
      name: "Mr. James Wilson",
      role: "Sports Director",
      subject: "Physical Education",
      image: "https://i.pravatar.cc/150?img=60",
    }
  ];

  return (
    <section className="py-24 bg-white relative z-10 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-purple-600 uppercase mb-3">Our Team</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Meet Our Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Faculty</span>
          </h3>
          <p className="mt-4 text-gray-500 text-lg">
            Learn from the best. Our educators are highly qualified professionals dedicated to student success.
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyData.map((teacher) => (
            <div key={teacher.id} className="group bg-gray-50 rounded-3xl p-6 text-center border border-gray-100 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-2">
              <div className="relative mx-auto w-32 h-32 mb-6">
                {/* Decorative background ring */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
                <img 
                  src={teacher.image} 
                  alt={teacher.name} 
                  className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white shadow-md"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-1">{teacher.name}</h4>
              <p className="text-blue-600 font-medium text-sm mb-2">{teacher.role}</p>
              <span className="inline-block bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-500 border border-gray-200">
                {teacher.subject}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Teachers;