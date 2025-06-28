// import React, { useRef, useEffect } from "react";
// import { Link } from "react-router-dom";
// import useAppData from "../utils/appData";

// const FeaturedProductsCarousel = () => {
//   const { productos } = useAppData();
//   const scrollRef = useRef(null);
//   const [showLeftArrow, setShowLeftArrow] = React.useState(false);
//   const [showRightArrow, setShowRightArrow] = React.useState(true);

//   // Funciones para hacer scroll
//   const handleScrollRight = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
//     }
//   };

//   const handleScrollLeft = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
//     }
//   };

//   // Detectar scroll para mostrar/ocultar flechas
//   const handleScroll = () => {
//     if (scrollRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
//       setShowLeftArrow(scrollLeft > 0);
//       setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
//     }
//   };

//   useEffect(() => {
//     const ref = scrollRef.current;
//     if (ref) {
//       ref.addEventListener("scroll", handleScroll);
//       handleScroll(); // Verificar estado inicial
//     }

//     return () => {
//       if (ref) {
//         ref.removeEventListener("scroll", handleScroll);
//       }
//     };
//   }, []);

//   if (!productos || productos.length === 0) return null;

//   return (
//     <div className="relative py-16 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-orange-50">
//        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900 tracking-tight">
//          Pisos Destacados
//        </h2>

//       {/* Contenedor centralizado */}
//       <div className="relative max-w-6xl mx-auto">
//         {/* Flecha izquierda */}
//         {showLeftArrow && (
//           <button
//             onClick={handleScrollLeft}
//             className="hidden md:flex items-center justify-center absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white border border-orange-300 shadow-lg rounded-full w-12 h-12 hover:bg-orange-500 hover:text-white transition-all duration-300 z-10"
//             aria-label="Ver pisos anteriores"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <polyline points="15 18 9 12 15 6"></polyline>
//             </svg>
//           </button>
//         )}

//         {/* Carrusel centrado */}
//         <div
//           ref={scrollRef}
//           className="flex overflow-x-auto gap-6 scrollbar-hide pb-6 scroll-smooth snap-x px-4"
//         >
//           {productos.map((p) => (
//             <Link
//               key={p.id}
//               to={`/producto/${p.id}`}
//               className="snap-start min-w-[280px] max-w-sm bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col group"
//             >
//               {/* Imagen */}
//               <div className="relative overflow-hidden">
//                 <img
//                   src={p.imagen}
//                   alt={p.nombre}
//                   className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//                 {p.tipo && (
//                   <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
//                     {p.tipo}
//                   </span>
//                 )}
//               </div>

//               {/* Contenido */}
//               <div className="p-5 flex-grow">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
//                   {p.nombre}
//                 </h3>
//                 <p className="text-sm text-gray-500 mb-3 truncate">
//                   {p.ubicacion}
//                 </p>
//                 <p className="text-lg font-bold text-orange-600 mb-4">{p.precio}</p>
//                 <button className="mt-auto w-full bg-orange-600 text-white font-medium py-2 rounded-md hover:bg-orange-700 transition-colors duration-300">
//                   Ver detalles
//                 </button>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {/* Flecha derecha */}
//         {showRightArrow && (
//           <button
//             onClick={handleScrollRight}
//             className="hidden md:flex items-center justify-center absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white border border-orange-300 shadow-lg rounded-full w-12 h-12 hover:bg-orange-500 hover:text-white transition-all duration-300 z-10"
//             aria-label="Ver más pisos"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <polyline points="9 18 15 12 9 6"></polyline>
//             </svg>
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import p from "../assets/categoria/sis-click.jpg";
import p1 from "../assets/categoria/image.png";
import p2 from "../assets/categoria/image1.png";


const CategoriesCarousel = () => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = React.useState(false);
  const [showRightArrow, setShowRightArrow] = React.useState(true);

  const categories = [
    {
      id: "vinilico-click",
      title: "Pisos vinílicos sistema click",
      image: p,
    },
    {
      id: "autoadhesivo",
      title: "Pisos vinílicos autoadhesivos",
      image: p1,
    },
    {
      id: "zocalo",
      title: "Zócalos de PVC",
      image: p2,
    },
  ];

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const ref = scrollRef.current;
    if (ref) {
      setShowLeftArrow(ref.scrollLeft > 0);
      setShowRightArrow(ref.scrollLeft + ref.clientWidth < ref.scrollWidth);
    }
  };

  useEffect(() => {
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (ref) {
        ref.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="relative py-16 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-orange-50 font-inter">
      <h1 className="text-5xl font-extrabold text-center mb-4 text-gray-900">
        El arte en revestimientos
      </h1>
      <h2 className="text-3xl font-medium text-center mb-12 text-gray-700">
        Servicio de instalación y reparación
      </h2>

      <div className="max-w-6xl mx-auto relative">
        {/* Flecha izquierda */}
        {showLeftArrow && (
          <button
            onClick={handleScrollLeft}
            className="hidden md:flex items-center justify-center absolute top-1/2 left-0 transform -translate-y-1/2 -ml-6 bg-white border border-orange-300 shadow-lg rounded-full w-12 h-12 hover:bg-orange-500 hover:text-white transition-all duration-300 z-10"
            aria-label="Ver categoría anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
        )}

        {/* Carrusel */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-6 snap-x scroll-smooth px-4 scrollbar-hide"
        >
          {/* Contenedor centrado */}
          <div className="flex flex-nowrap gap-6 min-w-max mx-auto">
            {categories.map((cat, index) => (
              <Link
                key={cat.id}
                to={`/categoria/${cat.id}`}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
                className="snap-start shrink-0 grow-0 basis-[280px] bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col group text-center"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="p-6 bg-white flex-grow">
                  <h3 className="font-semibold text-gray-800 text-lg">{cat.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Flecha derecha */}
        {showRightArrow && (
          <button
            onClick={handleScrollRight}
            className="hidden md:flex items-center justify-center absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-6 bg-white border border-orange-300 shadow-lg rounded-full w-12 h-12 hover:bg-orange-500 hover:text-white transition-all duration-300 z-10"
            aria-label="Ver siguiente categoría"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default CategoriesCarousel;