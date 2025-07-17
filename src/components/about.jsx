// import React from "react";
// import piso2 from "../assets/21.png";

// const AboutUsSection = () => {
//   return (
//     <section id="nosotros" className="py-20 bg-orange-50">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-orange-900">
//           Sobre <span className="text-orange-600">PisosYa</span>
//         </h2>

//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Imagen */}
//           <div className="relative flex justify-center">
//             <div className="absolute -top-6 -left-6 w-20 h-20 bg-yellow-500 rounded-lg opacity-20"></div>
//             <img
//               src={piso2}
//               alt="Equipo de Pisos Ya"
//               className="rounded-lg shadow-xl relative z-10 w-[80%] max-w-xs md:max-w-sm lg:max-w-md"
//             />
//           </div>

//           {/* Texto */}
//           <div>
//             <h3 className="text-2xl font-bold mb-4 text-orange-800">
//               ¿Porque escogernos?
//             </h3>
//             {/* <p className="text-gray-700 mb-6 leading-relaxed">
//               En <strong>PisosYa</strong> nos dedicamos a hacer realidad el sueño de tener un hogar perfecto. Con más de 10 años de experiencia en el sector, hemos ayudado a miles de familias a encontrar la propiedad que se ajusta a sus necesidades y presupuesto.
//             </p>
//             <p className="text-gray-700 mb-8 leading-relaxed">
//               Nuestro equipo de profesionales trabaja con pasión y dedicación para ofrecerte un servicio personalizado y de calidad. Nos diferenciamos por nuestra transparencia, honestidad y compromiso con cada cliente.
//             </p> */}
//             <p className="text-gray-700 mb-6 leading-relaxed">
//             ¡Una opción moderna, resistente y fácil de instalar!
//             Gracias a su composición de piedra caliza y polímeros, estos pisos brindan una excelente durabilidad, resistencia al agua y gran estabilidad dimensional. Su sistema de encastre click permite una instalación rápida y sin necesidad de adhesivos, ideal para hogares, oficinas y comercios.
//             Ademas su diseño imita la madera y otros materiales con gran realismo, aportando calidez y estilo a cualquier ambiente
//             </p>

//             {/* Métricas */}
//             <div className="flex flex-wrap gap-6">
//               <div className="flex items-center">
//                 <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
//                   <i className="fas fa-home text-orange-700 text-xl"></i>
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-gray-800">+100</h4>
//                   <p className="text-gray-600 text-sm">Pisos vendidos</p>
//                 </div>
//               </div>

//               <div className="flex items-center">
//                 <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
//                   <i className="fas fa-users text-orange-800 text-xl"></i>
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-gray-800">+100</h4>
//                   <p className="text-gray-600 text-sm">Clientes satisfechos</p>
//                 </div>
//               </div>

//               <div className="flex items-center">
//                 {/* <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
//                   <i className="fas fa-map-marker-alt text-indigo-700 text-xl"></i>
//                 </div> */}
//                 {/* <div>
//                   <h4 className="font-bold text-gray-800">15</h4>
//                   <p className="text-gray-600 text-sm">Ciudades</p>
//                 </div> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUsSection;
import React from "react";
import piso2 from "../assets/21.png";

const AboutUsSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-orange-900 relative inline-block">
          <span className="relative z-10 px-4">Sobre <span className="text-orange-600">PisosYa</span></span>
          <div className="absolute bottom-2 left-0 w-full h-2 bg-orange-200/60 z-0"></div>
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Contenedor de imagen optimizado */}
          <div className="lg:order-1 w-full lg:w-1/2 relative group">
            {/* Sombra exterior ajustada */}
            <div className="absolute -inset-1 rounded-lg opacity-20 group-hover:opacity-30 blur-md transition-all duration-300"></div>
            
            {/* Contenedor de imagen sin espacio extra */}
            <div className="relative z-10 w-full max-w-md mx-auto">
              <img
                src={piso2}
                alt="Pisos vinílicos de calidad"
                className="rounded-lg w-full h-auto border-2 border-white/80 transform group-hover:-translate-y-1 transition-transform duration-300"
                loading="lazy"
                decoding="async"
              />
              {/* Sombra interior ajustada al tamaño exacto */}
              <div className="absolute inset-0 rounded-lg shadow-inner border border-orange-100/30 pointer-events-none"></div>
            </div>
          </div>

          {/* Sección de texto */}
          <div className="lg:order-2 w-full lg:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-orange-800">
              ¿Por qué elegir nuestros pisos vinílicos?
            </h3>
            
            <p className="text-gray-700 mb-6 leading-relaxed text-lg bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm">
              ¡Una opción moderna, resistente y fácil de instalar!
              <span className="block mt-2 text-orange-700 font-medium">
                Gracias a su composición de piedra caliza y polímeros, estos pisos brindan una excelente durabilidad y resistencia al agua.
              </span>
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Resistente al agua y humedad",
                "Fácil instalación con sistema click",
                "Diseños que imitan madera real",
                "Mantenimiento mínimo",
                "Estable dimensionalmente",
                "Ideal para cualquier ambiente"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-orange-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { value: "+100", label: "Pisos vendidos", icon: "fas fa-layer-group" },
                { value: "+100", label: "Clientes satisfechos", icon: "fas fa-smile" },
                { value: "10+", label: "Años garantía", icon: "fas fa-shield-alt" },
                { value: "24h", label: "Asesoramiento", icon: "fas fa-headset" }
              ].map((metric, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                  <div className="text-3xl font-bold text-orange-600 mb-1">{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Solicitar Catálogo Completo
                <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;