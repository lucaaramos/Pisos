import React, { useState } from "react";
import hero from "../assets/hero.jpg";

const HeroSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    { id: 0, img: hero, alt: "Edificio moderno" },
    { id: 1, img: hero, alt: "Interior elegante" },
    { id: 2, img: hero, alt: "Familia feliz" },
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
            Más de 10 productos disponibles para ti. Servicio personalizado y sin comisiones ocultas.
          </p>
          <button
            onClick={() => console.log("Agenda una visita")}
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
