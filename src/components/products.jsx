import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import p from "../assets/categoria/sis-click.jpg";
import p1 from "../assets/categoria/image.png";
import p2 from "../assets/categoria/image1.png";

const CategoriesSection = () => {
  const categories = [
    {
      id: "vinilico-click",
      title: "Pisos vinílicos sistema click",
      image: p,
      description: "Fácil instalación sin adhesivos"
    },
    {
      id: "autoadhesivo",
      title: "Pisos vinílicos autoadhesivos",
      image: p2,
      description: "Perfecto para renovaciones rápidas"
    },
    {
      id: "zocalo",
      title: "Zócalos de PVC",
      image: p1,
      description: "Acabado profesional y duradero"
    },
  ];

  return (
    <div className="relative py-16 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-orange-50">
      <div className="text-center mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-2"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-yellow-500">
            El arte en revestimientos
          </span>
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl font-medium text-gray-600 max-w-2xl mx-auto"
        >
          Servicio profesional de instalación y reparación
        </motion.h2>
      </div>

      <div className="hidden md:block max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                to={`/categoria/${cat.id}`}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden block h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="font-bold text-gray-800 text-lg mb-1">{cat.title}</h3>
                  <p className="text-gray-500 text-sm mb-3">{cat.description}</p>
                  <button className="mt-2 text-orange-600 font-medium text-sm flex items-center justify-center group-hover:text-orange-700">
                    Ver productos
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="md:hidden max-w-6xl mx-auto relative">
        <div className="flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory scroll-smooth scrollbar-hide px-4">
          {categories.map((cat, index) => (
            <div key={cat.id} className="snap-start shrink-0 w-[85vw]">
              <Link
                to={`/categoria/${cat.id}`}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 block h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-gray-800 text-lg">{cat.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{cat.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;