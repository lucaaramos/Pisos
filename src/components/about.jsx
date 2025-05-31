import React from "react";
import piso2 from "../assets/5.png"; // Asegúrate de que la ruta sea correcta

const AboutUsSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-orange-900">
          Sobre <span className="text-orange-600">PisosYa</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagen */}
          <div className="relative flex justify-center">
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-yellow-500 rounded-lg opacity-20"></div>
            <img
              src={piso2}
              alt="Equipo de Pisos Ya"
              className="rounded-lg shadow-xl relative z-10 w-[80%] max-w-xs md:max-w-sm lg:max-w-md"
            />
          </div>

          {/* Texto */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-orange-800">
              Tu socio de confianza en el mercado inmobiliario
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              En <strong>PisosYa</strong> nos dedicamos a hacer realidad el sueño de tener un hogar perfecto. Con más de 10 años de experiencia en el sector, hemos ayudado a miles de familias a encontrar la propiedad que se ajusta a sus necesidades y presupuesto.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Nuestro equipo de profesionales trabaja con pasión y dedicación para ofrecerte un servicio personalizado y de calidad. Nos diferenciamos por nuestra transparencia, honestidad y compromiso con cada cliente.
            </p>

            {/* Métricas */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-home text-orange-700 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">+5000</h4>
                  <p className="text-gray-600 text-sm">Propiedades vendidas</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-users text-orange-800 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">+8000</h4>
                  <p className="text-gray-600 text-sm">Clientes satisfechos</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-map-marker-alt text-indigo-700 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">15</h4>
                  <p className="text-gray-600 text-sm">Ciudades</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
