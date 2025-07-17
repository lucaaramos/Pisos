// import React, { useState } from "react";
// import hero from "../assets/hero.jpg";
// import hero1 from "../assets/fondo.JPG";



// const HeroSlider = () => {
//   const [activeSlide, setActiveSlide] = useState(0);

//   const slides = [
//     { id: 0, img: hero1, alt: "Edificio moderno" },
//     { id: 1, img: hero, alt: "Interior elegante" },
//     { id: 2, img: hero, alt: "Familia feliz" },
//   ];

//   return (
//     <section id="inicio" className="relative h-[600px] overflow-hidden">
//       <div className="absolute inset-0 w-full h-full">
//         {slides.map((slide) => (
//           <div
//             key={slide.id}
//             className={`absolute inset-0 transition-opacity duration-1000 ${
//               activeSlide === slide.id ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-transparent z-10"></div>
//             <img
//               src={slide.img}
//               alt={slide.alt}
//               className="w-full h-full object-cover object-top"
//             />
//           </div>
//         ))}
//       </div>

//       <div className="container mx-auto px-4 h-full flex items-center relative z-20">
//         <div className="max-w-xl text-white">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             Encuentra el mejor piso
//           </h2>
//           <p className="text-xl mb-8">
//             Más de 10 productos disponibles para ti. Servicio personalizado y sin comisiones ocultas.
//           </p>
//           <button
//             onClick={() => console.log("Agenda una visita")}
//             className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 !rounded-button whitespace-nowrap cursor-pointer"
//           >
//             Agenda una visita
//           </button>
//         </div>
//       </div>

//       <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
//         {slides.map((slide) => (
//           <button
//             key={slide.id}
//             onClick={() => setActiveSlide(slide.id)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
//               activeSlide === slide.id ? "bg-yellow-500 w-10" : "bg-white/50"
//             }`}
//             aria-label={`Slide ${slide.id + 1}`}
//           ></button>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HeroSlider;

// import React, { useState } from "react";
// import hero from "../assets/hero/13.png";
// import hero1 from "../assets/hero/fondo.JPG";
// import hero2 from "../assets/hero/este.jpg";
// import hero3 from "../assets/hero/este2.jpg";



// const HeroSlider = () => {
//   const [activeSlide, setActiveSlide] = useState(0);

//   const slides = [
//     { id: 0, img: hero, alt: "Edificio moderno" },
//     { id: 1, img: hero1, alt: "Interior elegante" },
//     { id: 2, img: hero3, alt: "Familia feliz" },
//   ];

//   return (
//     <section id="inicio" className="relative h-[600px] overflow-hidden">
//       {/* Contenedor de imágenes */}
//       <div className="absolute inset-0 w-full h-full">
//         {slides.map((slide) => (
//           <div
//             key={slide.id}
//             className={`absolute inset-0 transition-opacity duration-1000 ${
//               activeSlide === slide.id ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-transparent z-10"></div>
//             <img
//               src={slide.img}
//               alt={slide.alt}
//               className="w-full h-full object-contain d:object-cover object-center bg-gray-900" // 👈 Aquí está el cambio
//             />
//           </div>
//         ))}
//       </div>

//       {/* Texto y botón */}
//       <div className="container mx-auto px-4 h-full flex items-center relative z-20">
//         <div className="max-w-xl text-white">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             Encuentra el mejor piso
//           </h2>
//           <p className="text-xl mb-8">
//             Más de 10 productos disponibles para ti. Servicio personalizado y sin comisiones ocultas.
//           </p>
//           <button
//             onClick={() => console.log("Agenda una visita")}
//             className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
//           >
//             Agenda una visita
//           </button>
//         </div>
//       </div>

//       {/* Puntos del slider */}
//       <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
//         {slides.map((slide) => (
//           <button
//             key={slide.id}
//             onClick={() => setActiveSlide(slide.id)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
//               activeSlide === slide.id ? "bg-yellow-500 w-10" : "bg-white/50"
//             }`}
//             aria-label={`Slide ${slide.id + 1}`}
//           ></button>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HeroSlider;
import React, { useState } from "react";
import hero from "../assets/hero/24.png";
import hero1 from "../assets/hero/fondo.JPG";
import hero3 from "../assets/hero/este2.jpg";

const HeroSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    { 
      id: 0, 
      img: hero, 
      alt: "Piso vinílico de alta calidad",
      // Configuración balanceada
      class: "object-contain md:object-[center_30%] md:object-cover",
      zoom: "scale-110 md:scale-100"
    },
    { 
      id: 1, 
      img: hero1, 
      alt: "Interior elegante con pisos vinílicos",
      class: "object-cover object-center"
    },
    { 
      id: 2, 
      img: hero3, 
      alt: "Instalación profesional de pisos",
      class: "object-cover object-center"
    },
  ];

  return (
    <section id="inicio" className="relative h-[600px] overflow-hidden">
      {/* Contenedor de imágenes con ajuste balanceado */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              activeSlide === slide.id ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/40 to-transparent z-10"></div>
            <img
              src={slide.img}
              alt={slide.alt}
              className={`w-full h-full ${slide.class} bg-gray-900 transition-transform duration-1000 ease-out ${slide.zoom}`}
              style={{ 
                objectPosition: slide.id === 0 ? 'center 30%' : 'center center'
              }}
            />
          </div>
        ))}
      </div>

      {/* Resto del componente permanece igual */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-20">
        <div className="max-w-2xl text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Encuentra el mejor <span className="text-orange-400">piso vinílico</span>
          </h2>
          <p className="text-lg md:text-xl mb-8 font-light max-w-lg">
            Más de 10 productos premium disponibles. Instalación profesional sin comisiones ocultas.
          </p>
          <button
            onClick={() => console.log("Agenda una visita")}
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer group"
          >
            <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
              Agenda una visita →
            </span>
          </button>
          
          <div className="flex items-center mt-4 text-sm bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 w-fit">
            <svg className="w-5 h-5 mr-2 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span>Garantía de X años en todos nuestros productos</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((slide) => (
          <button
            key={slide.id}
            onClick={() => setActiveSlide(slide.id)}
            className={`w-10 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              activeSlide === slide.id ? "bg-orange-500" : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Ir a slide ${slide.id + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;  