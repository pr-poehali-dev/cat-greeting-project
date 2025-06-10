import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-pink-50 to-purple-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-block bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
              ТРЕНД НЕДЕЛИ
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-montserrat">
              Секреты молодости от корейских бьюти-гуру
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Узнайте, как звёзды K-pop поддерживают идеальную кожу и какие
              средства они используют каждый день
            </p>
            <button className="bg-pink-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-pink-600 transition-colors">
              Читать статью
            </button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Корейская косметика"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
              <span className="text-sm font-medium text-gray-800">🔥 ХИТ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
