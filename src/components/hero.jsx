import React from "react";

const HeroSlider = ({ activeSlide, setActiveSlide, scrollToForm }) => {
  const slides = [
    {
      id: 0,
      img: "https://readdy.ai/api/search-image?query=modern%20luxury%20apartment%20building%20exterior%20with%20large%20windows%2C%20contemporary%20architecture%2C%20landscaped%20entrance%2C%20blue%20sky%20background%2C%20high%20quality%20real%20estate%20photography%2C%20professional%20lighting%2C%20urban%20setting&width=1440&height=600&seq=5&orientation=landscape",
      alt: "Edificio moderno",
    },
    {
      id: 1,
      img: "https://readdy.ai/api/search-image?query=elegant%20interior%20of%20modern%20apartment%20with%20open%20plan%20living%20space%2C%20floor%20to%20ceiling%20windows%20with%20city%20view%2C%20designer%20furniture%2C%20wooden%20floors%2C%20ambient%20lighting%2C%20high%20quality%20real%20estate%20photography&width=1440&height=600&seq=6&orientation=landscape",
      alt: "Interior elegante",
    },
    {
      id: 2,
      img: "https://readdy.ai/api/search-image?query=happy%20family%20moving%20into%20new%20home%2C%20carrying%20boxes%2C%20smiling%2C%20modern%20house%20exterior%2C%20sunny%20day%2C%20green%20lawn%2C%20residential%20neighborhood%2C%20high%20quality%20real%20estate%20photography&width=1440&height=600&seq=7&orientation=landscape",
      alt: "Familia feliz",
    },
  ];

  return (
    <section id="inicio" className="relative h-[600px] overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              activeSlide === slide.id ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-transparent z-10"></div>
            <img
              src={slide.img}
              alt={slide.alt}
              className="w-full h-full object-cover object-top"
            />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 h-full flex items-center relative z-20">
        <div className="max-w-xl text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Encuentra el mejor piso
          </h2>
          <p className="text-xl mb-8">
            Más de 10 productos disponibles para ti. Servicio personalizado y
            sin comisiones ocultas.
          </p>
          <button
            onClick={scrollToForm}
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 !rounded-button whitespace-nowrap cursor-pointer"
          >
            Agenda una visita
          </button>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((slide) => (
          <button
            key={slide.id}
            onClick={() => setActiveSlide(slide.id)}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              activeSlide === slide.id ? "bg-yellow-500 w-10" : "bg-white/50"
            }`}
            aria-label={`Slide ${slide.id + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
