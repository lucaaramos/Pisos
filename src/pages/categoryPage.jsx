
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAppData from "../utils/appData";
import { Link } from "react-router-dom";

const CategoryPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { prod } = useAppData();
  
  // Formatear el título de la categoría
  const formatCategoryName = (id) => {
    const names = {
      'vinilico-click': 'Pisos Vinílicos Click',
      'autoadhesivo': 'Pisos Autoadhesivos',
      'zocalo': 'Zócalos de PVC'
    };
    return names[id] || id.replace(/-/g, " ");
  };

  // Desplazarse al inicio al cargar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const productosFiltrados = prod.filter(p => p.tipo === id);

  if (!productosFiltrados.length) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-4 text-center">
          No hay productos en esta categoría
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="text-orange-600 hover:text-orange-800 font-medium flex items-center mt-4"
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver atrás
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header con botón de regreso */}
        <div className="mb-10">
          <button
            onClick={() => navigate(`/`)}
            className="text-orange-600 hover:text-orange-800 font-medium flex items-center mb-6 cursor-pointer"
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver atrás
          </button>
          
          {/* Título con tipografía mejorada */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2 tracking-tight">
            {formatCategoryName(id)}
          </h2>
          <p className="text-gray-500 text-center text-lg">
            {productosFiltrados.length} productos disponibles
          </p>
        </div>

        {/* Grilla de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productosFiltrados.map((p) => (
            <Link
              key={p.id}
              to={`/producto/${p.id}`}
              className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={p.imagen}
                  alt={p.nombre}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1 leading-tight">
                  {p.nombre}
                </h3>
                <p className="text-orange-600 font-bold">{p.precio}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;