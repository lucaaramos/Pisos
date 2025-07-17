// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import useAppData from "../utils/appData";

// const ProductDetailPage = () => {
//   const { id } = useParams();
//   const { prod } = useAppData();
//   const producto = prod.find((p) => p.id === parseInt(id));
//   const [modalOpen, setModalOpen] = React.useState(false);

//   // Añade este efecto para desplazarse al inicio
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [id]); // Se ejecuta cada vez que cambia el ID del producto

//   if (!producto) {
//     return (
//       <div className="py-20 text-center text-red-500 text-xl">
//         Producto no encontrado
//       </div>
//     );
//   }

//   // Resto de tu componente...

//   return (
//     <>
//       {/* Contenido principal */}
//       <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto space-y-16">

//           {/* Detalle del producto */}
//           <div className="grid md:grid-cols-2 gap-8 items-start bg-white rounded-2xl shadow-xl overflow-hidden">
//             {/* Galería de imágenes - ahora con click para abrir modal */}
//             <div
//               className="relative group cursor-pointer"
//               onClick={() => setModalOpen(true)}
//             >
//               <img
//                 src={producto.imagen}
//                 alt={producto.nombre}
//                 className="w-full h-[26rem] object-cover transition-transform duration-500 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
//                 <span className="text-white font-semibold text-lg">Haz clic para ver más</span>
//               </div>
//               <div className="absolute top-4 left-4 bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-md">
//                 {producto.tipo || "Destacado"}
//               </div>
//             </div>

//             {/* Detalles del producto */}
//             <div className="p-8 space-y-6">
//               <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{producto.nombre}</h1>
//               <p className="text-xl font-bold text-orange-600">{producto.precio}</p>

//               <h2 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">Descripción</h2>
//               <p className="text-gray-700 leading-relaxed">{producto.descripcion}</p>

//               <h2 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">Características</h2>
//               <ul className="space-y-2">
//                 {producto.caracteristicas?.map((carac, i) => (
//                   <li key={i} className="flex items-center gap-2 text-gray-600">
//                     <i className="fas fa-check-circle text-green-500"></i> {carac}
//                   </li>
//                 ))}
//               </ul>

//               {/* Botón WhatsApp */}
//               <a
//                 href={`https://wa.me/5491112345678?text=Hola%20quisiera%20más%20información%20sobre%20${encodeURIComponent(producto.nombre)}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block w-full sm:w-auto text-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow hover:shadow-lg transform hover:-translate-y-1"
//               >
//                 Consultar por WhatsApp
//               </a>
//             </div>
//           </div>

//           {/* Sección Nueva: ¿Qué incluye tu compra? */}
//           <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-orange-100">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">¿Tu compra incluye?</h2>
//             <div className="space-y-8">
//               <div className="border-l-4 border-orange-500 pl-4">
//                 <h3 className="text-xl font-semibold text-gray-800">Asesoramiento y presupuesto</h3>
//                 <p className="text-gray-600 mt-2">
//                   Nuestros asesores comerciales están esperando por tu llamado.
//                 </p>
//                 <p className="text-gray-600 mt-1">
//                   Solicita ya mismo tu visita con muestrarios, replanteo del espacio y presupuesto sin cargo.
//                 </p>
//               </div>
//               <div className="border-l-4 border-orange-500 pl-4">
//                 <h3 className="text-xl font-semibold text-gray-800">Instalación</h3>
//                 <p className="text-gray-600 mt-2">
//                   Ofrecemos servicio de instalación a cargo de profesionales para garantizar un acabado impecable.
//                 </p>
//               </div>
//               <div className="border-l-4 border-orange-500 pl-4">
//                 <h3 className="text-xl font-semibold text-gray-800">Acopio o entrega</h3>
//                 <p className="text-gray-600 mt-2">
//                   Nos encargamos de la entrega hasta la puerta de tu hogar o proyecto. Además, ofrecemos la opción de acopio sin costo por hasta 30 días.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Botón inferior opcional */}
//           <div className="text-center">
//             <a
//               href="#contacto"
//               className="inline-block text-orange-600 font-medium hover:underline"
//             >
//               ¿Tienes dudas? Contáctanos aquí
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Modal de imagen ampliada */}
//       {modalOpen && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
//           onClick={() => setModalOpen(false)}
//         >
//           <div
//             className="relative max-w-4xl max-h-[80vh] overflow-hidden rounded-lg shadow-2xl"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <img
//               src={producto.imagen}
//               alt={producto.nombre}
//               className="w-full h-[80vh] object-contain"
//             />
//             <button
//               onClick={() => setModalOpen(false)}
//               className="absolute top-4 right-4 bg-white text-gray-800 rounded-full p-2 shadow-lg"
//             >
//               <i className="fas fa-times text-xl"></i>
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ProductDetailPage;
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAppData from "../utils/appData";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { prod } = useAppData();
  const producto = prod.find((p) => p.id === parseInt(id));
  const [modalOpen, setModalOpen] = React.useState(false);

  // Función para obtener el nombre amigable de la categoría
  const getCategoryName = (type) => {
    const names = {
      'vinilico-click': 'Pisos Sistema Click',
      'autoadhesivo': 'Pisos Autoadhesivos',
      'zocalo': 'Zócalos de PVC',
      'auto-ade': 'Pisos Autoadhesivos' // Por si acaso usa esta variante
    };
    return names[type] || 'la categoría';
  };

  // Desplazarse al inicio al cargar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!producto) {
    return (
      <div className="py-20 text-center text-red-500 text-xl">
        Producto no encontrado
      </div>
    );
  }

  return (
    <>
      {/* Contenido principal */}
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Botón de regreso - Versión mejorada */}
          <button
            onClick={() => navigate(`/categoria/${producto.tipo}`)}
            className="flex items-center gap-2 text-orange-600 hover:text-orange-800 font-medium transition-all duration-300 group mb-4 cursor-pointer"
          >
            <span className="group-hover:-translate-x-1 transition-transform">
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                />
              </svg>
            </span>
            <span className="border-b border-transparent group-hover:border-orange-600 transition-all">
              Volver a todos los productos
            </span>
          </button>

          {/* Detalle del producto */}
          <div className="grid md:grid-cols-2 gap-8 items-start bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Galería de imágenes */}
            <div
              className="relative group cursor-pointer"
              onClick={() => setModalOpen(true)}
            >
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="w-full h-[26rem] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                <span className="text-white font-semibold text-lg">Haz clic para ampliar</span>
              </div>
              <div className="absolute top-4 left-4 bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-md">
                {getCategoryName(producto.tipo)}
              </div>
            </div>

            {/* Detalles del producto */}
            <div className="p-8 space-y-6">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{producto.nombre}</h1>
              <p className="text-xl font-bold text-orange-600">{producto.precio}</p>

              <h2 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">Descripción</h2>
              <p className="text-gray-700 leading-relaxed">{producto.descripcion}</p>

              <h2 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">Características</h2>
              <ul className="space-y-2">
                {producto.caracteristicas?.map((carac, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {carac}
                  </li>
                ))}
              </ul>

              {/* Botón WhatsApp */}
              <a
                href={`https://wa.me/5491112345678?text=Hola%20quisiera%20más%20información%20sobre%20${encodeURIComponent(producto.nombre)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto text-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow hover:shadow-lg transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Consultar por WhatsApp
              </a>
            </div>
          </div>

          {/* Sección: ¿Qué incluye tu compra? */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-orange-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">¿Qué incluye tu compra?</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-800">Asesoramiento profesional</h3>
                <p className="text-gray-600 mt-2">
                  Visita técnica sin cargo con muestrarios y medición precisa de tus espacios.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-800">Instalación garantizada</h3>
                <p className="text-gray-600 mt-2">
                  Servicio de instalación por profesionales certificados con garantía de trabajo.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-800">Logística incluida</h3>
                <p className="text-gray-600 mt-2">
                  Entrega coordinada y acopio gratuito por 30 días si lo necesitas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de imagen ampliada */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative max-w-4xl max-h-[80vh] overflow-hidden rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-[80vh] object-contain"
            />
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 bg-white text-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetailPage;