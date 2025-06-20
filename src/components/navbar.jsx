import React from "react";

const Navbar = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav
      className={`sticky top-0 z-50 bg-white shadow-md transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://static.readdy.ai/image/c4ab86b6dbb41c59c24329fde6ce2b66/c4728a2c8da3a9ebfbef55394f9fbadf.png" 
            alt="PisosYa Logo"
            className="h-12"
          />
        </div>

        {/* Menú desktop */}
        <div className="hidden md:flex space-x-6">
          <a
            href="/"
            className="text-gray-700 hover:text-orange-800 font-medium cursor-pointer"
          >
            Inicio
          </a>
          <a
            href="#nosotros"
            className="text-gray-700 hover:text-orange-800 font-medium cursor-pointer"
          >
            Nosotros
          </a>
          <a
            href="#beneficios"
            className="text-gray-700 hover:text-orange-800 font-medium cursor-pointer"
          >
            Beneficios
          </a>
          <a
            href="#testimonios"
            className="text-gray-700 hover:text-orange-800 font-medium cursor-pointer"
          >
            Testimonios
          </a>
          <a
            href="#contacto"
            className="text-gray-700 hover:text-orange-800 font-medium cursor-pointer"
          >
            Contacto
          </a>
        </div>

        {/* Botón hamburguesa */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full left-0 top-full border-t border-gray-200 animate-fadeIn">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <a
              href="/"
              className="text-gray-700 hover:text-orange-800 font-medium block py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </a>
            <a
              href="#nosotros" 
              className="text-gray-700 hover:text-orange-800 font-medium block py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Nosotros
            </a>
            <a
              href="#beneficios"
              className="text-gray-700 hover:text-orange-800 font-medium block py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Beneficios
            </a>
            <a
              href="#testimonios"
              className="text-gray-700 hover:text-orange-800 font-medium block py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonios
            </a>
            <a
              href="#contacto"
              data-scroll
              className="text-gray-700 hover:text-orange-800 font-medium block py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;