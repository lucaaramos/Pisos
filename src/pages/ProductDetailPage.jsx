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
  const { productos } = useAppData();
  const producto = productos.find(p => p.id === parseInt(id));

  if (!producto) {
    return (
      <div className="py-20 text-center text-red-500 text-xl">
        Producto no encontrado
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Galería de imágenes */}
          <div className="space-y-4">
            {/* Imagen principal */}
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-[20rem] object-cover rounded-lg shadow-md"
            />

            {/* Miniaturas de galería si hay */}
            {producto.galeria && producto.galeria.length > 0 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {producto.galeria.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Miniatura ${i + 1}`}
                    className="w-20 h-20 object-cover rounded-md flex-shrink-0 cursor-pointer border border-gray-200 hover:border-orange-500 transition"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Detalles del producto */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{producto.nombre}</h1>
            <p className="text-sm text-gray-500 mb-2">📍 {producto.ubicacion}</p>
            <p className="text-xl font-bold text-orange-600 mb-4">{producto.precio}</p>

            <h2 className="text-lg font-semibold text-gray-700 mb-2">Descripción</h2>
            <p className="text-gray-600 mb-4">{producto.descripcion}</p>

            <h2 className="text-lg font-semibold text-gray-700 mb-2">Características</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-6">
              {producto.caracteristicas?.map((carac, i) => (
                <li key={i}>{carac}</li>
              ))}
            </ul>

            {/* Botón WhatsApp */}
            <a
              href={`https://wa.me/5491112345678?text=Hola%20quisiera%20más%20información%20sobre%20${encodeURIComponent(producto.nombre)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition shadow"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;