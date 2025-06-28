// import React from "react";
// import { useParams } from "react-router-dom";
// import useAppData from "../utils/appData";

// const ProductDetailPage = () => {
//   const { id } = useParams();
//   const { productos } = useAppData();
//   const producto = productos.find(p => p.id === parseInt(id));

//   if (!producto) {
//     return (
//       <div className="py-20 text-center text-red-500 text-xl">
//         Producto no encontrado
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white min-h-screen py-12 px-6">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
//         {/* Imagen principal */}
//         <div>
//           <img
//             src={producto.imagen}
//             alt={producto.nombre}
//             className="w-full h-auto rounded-xl shadow-md"
//           />
//         </div>

//         {/* Detalles */}
//         <div>
//           <h1 className="text-4xl font-bold text-gray-800 mb-2">{producto.nombre}</h1>
//           <p className="text-sm text-gray-500 mb-4">📍 {producto.ubicacion}</p>
//           <p className="text-2xl font-bold text-orange-600 mb-6">{producto.precio}</p>

//           <h2 className="text-xl font-semibold text-gray-700 mb-2">Descripción</h2>
//           <p className="text-gray-600 mb-6">{producto.descripcion}</p>

//           <h2 className="text-xl font-semibold text-gray-700 mb-2">Características</h2>
//           <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-6">
//             {producto.caracteristicas?.map((carac, i) => (
//               <li key={i}>{carac}</li>
//             ))}
//           </ul>

//           <a
//             href={`https://wa.me/5491112345678?text=Hola%20quisiera%20más%20información%20sobre%20${encodeURIComponent(producto.nombre)}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition shadow"
//           >
//             Consultar por WhatsApp
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };
import React from "react";
import { useParams } from "react-router-dom";
import useAppData from "../utils/appData";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { prod } = useAppData();
  const producto = prod.find((p) => p.id === parseInt(id));
  const [modalOpen, setModalOpen] = React.useState(false);

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
        <div className="max-w-6xl mx-auto space-y-16">

          {/* Detalle del producto */}
          <div className="grid md:grid-cols-2 gap-8 items-start bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Galería de imágenes - ahora con click para abrir modal */}
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
                <span className="text-white font-semibold text-lg">Haz clic para ver más</span>
              </div>
              <div className="absolute top-4 left-4 bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-md">
                {producto.tipo || "Destacado"}
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
                    <i className="fas fa-check-circle text-green-500"></i> {carac}
                  </li>
                ))}
              </ul>

              {/* Botón WhatsApp */}
              <a
                href={`https://wa.me/5491112345678?text=Hola%20quisiera%20más%20información%20sobre%20${encodeURIComponent(producto.nombre)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full sm:w-auto text-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow hover:shadow-lg transform hover:-translate-y-1"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </div>

          {/* Sección Nueva: ¿Qué incluye tu compra? */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-orange-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">¿Tu compra incluye?</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-800">Asesoramiento y presupuesto</h3>
                <p className="text-gray-600 mt-2">
                  Nuestros asesores comerciales están esperando por tu llamado.
                </p>
                <p className="text-gray-600 mt-1">
                  Solicita ya mismo tu visita con muestrarios, replanteo del espacio y presupuesto sin cargo.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-800">Instalación</h3>
                <p className="text-gray-600 mt-2">
                  Ofrecemos servicio de instalación a cargo de profesionales para garantizar un acabado impecable.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-800">Acopio o entrega</h3>
                <p className="text-gray-600 mt-2">
                  Nos encargamos de la entrega hasta la puerta de tu hogar o proyecto. Además, ofrecemos la opción de acopio sin costo por hasta 30 días.
                </p>
              </div>
            </div>
          </div>

          {/* Botón inferior opcional */}
          <div className="text-center">
            <a
              href="#contacto"
              className="inline-block text-orange-600 font-medium hover:underline"
            >
              ¿Tienes dudas? Contáctanos aquí
            </a>
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
              className="absolute top-4 right-4 bg-white text-gray-800 rounded-full p-2 shadow-lg"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetailPage;