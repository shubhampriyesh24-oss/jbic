import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      text: "The faculty here is outstanding. They don't just teach; they inspire. My son has shown tremendous growth in both academics and sports.",
      name: "Rajesh Kumar",
      role: "Parent",
      image: "https://i.pravatar.cc/150?img=12"
    },
    {
      id: 2,
      text: "The state-of-the-art facilities and focus on holistic development make this school the best choice in the city. Highly recommended!",
      name: "Priya Sharma",
      role: "Parent",
      image: "https://i.pravatar.cc/150?img=47"
    },
    {
      id: 3,
      text: "As a student, I love the environment. The teachers are approachable, and the smart classrooms make learning so much fun.",
      name: "Aman Gupta",
      role: "Alumni",
      image: "https://i.pravatar.cc/150?img=33"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative z-10 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            What Parents <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Say</span>
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex gap-1 text-yellow-400 mb-6 text-lg">
                ★★★★★
              </div>
              <p className="text-gray-600 italic mb-8 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover border-2 border-gray-100" />
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;