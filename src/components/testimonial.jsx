import React from "react";
import useAppData from "../utils/appData";

const TestimonialsSection = () => {
  const { testimonios } = useAppData();

  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-orange-900">
          Lo que dicen nuestros <span className="text-orange-500">clientes</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {Array.isArray(testimonios) &&
            testimonios.map((testimonio, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`fas fa-star ${
                        i < testimonio.valoracion ? "text-yellow-500" : "text-gray-300"
                      } mr-1`}
                    ></i>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonio.texto}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-indigo-700 font-bold">
                      {testimonio.nombre.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonio.nombre}</h4>
                    <p className="text-gray-600 text-sm">Cliente satisfecho</p>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-indigo-50 rounded-lg">
            <span className="text-indigo-700 font-bold text-xl mr-4">4.9</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fas fa-star text-yellow-500 mr-1"></i>
              ))}
            </div>
            <span className="ml-4 text-gray-700">Basado en más de 500 reseñas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
