import React, { useRef } from "react";
import useAppData from "../utils/appData"; // Asegúrate de que la ruta sea correcta

const FeaturedProductsCarousel = () => {
  const { productos } = useAppData();
  const scrollRef = useRef(null);

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  if (!productos || productos.length === 0) return null;

  return (
    <div className="relative py-10 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Propiedades destacadas
      </h2>
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 scrollbar-hide pb-4 scroll-smooth"
        >
          {productos.map((p) => (
            <div
              key={p.id}
              className="min-w-[320px] max-w-sm bg-white rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="relative">
                <img
                  src={p.imagen}
                  alt={p.nombre}
                  className="w-full h-52 object-cover rounded-t-3xl"
                />
                <span className="absolute top-3 right-3 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {p.tipo || "Destacado"}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-1 flex items-center gap-2">
                  🏡 {p.nombre}
                </h3>
                <p className="text-sm text-gray-500 mb-3">📍 {p.ubicacion}</p>
                <p className="text-lg font-bold text-orange-600 mb-4">{p.precio}</p>
                <button className="w-full bg-orange-600 text-white font-semibold py-2 rounded-lg hover:bg-orange-700 transition duration-300 shadow">
                  Ver más detalles
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handleScrollRight}
          className="hidden md:flex items-center justify-center absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white border border-gray-300 shadow-md rounded-full w-10 h-10 hover:bg-orange-600 hover:text-white transition z-10"
          aria-label="Ver más"
        >
          ➡️
        </button>
      </div>
    </div>
  );
};

export default FeaturedProductsCarousel;
