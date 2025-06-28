import React from "react";
import { useParams } from "react-router-dom";
import useAppData from "../utils/appData";
import { Link } from "react-router-dom";

const CategoryPage = () => {
  const { id } = useParams(); // ej: 'vinilico-click'
  const { prod } = useAppData();
  const categoria = id.replace(/-/g, " "); // opcional: formatea el título

  const productosFiltrados = prod.filter(p => p.tipo === id);

  if (!productosFiltrados.length) {
    return (
      <div className="py-20 text-center text-gray-600">
        <h2 className="text-2xl">No hay productos en esta categoría aún</h2>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <h2 className="text-3xl font-bold text-center mb-10 capitalize">
          {categoria}
        </h2>

        {/* Grilla de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productosFiltrados.map((p) => (
            <Link
              key={p.id}
              to={`/producto/${p.id}`}
              className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={p.imagen}
                alt={p.nombre}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{p.nombre}</h3>
                <p className="text-orange-600 font-bold mt-2">{p.precio}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;