import React, { useState, useEffect } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer className="bg-orange-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Pisos<span className="text-yellow-500">Ya</span>
              </h3>
              {/* <p className="mb-6 text-indigo-200">
                Tu socio de confianza para encontrar el hogar de tus sueños. Más
                de 10 años de experiencia en el sector inmobiliario.
              </p> */}
              <div className="flex space-x-4">
                {["facebook-f", "instagram"].map(
                  (icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 bg-indigo-800 hover:bg-indigo-700 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
                    >
                      <i className={`fab fa-${icon}`}></i>
                    </a>
                  )
                )}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Enlaces rápidos</h4>
              <ul className="space-y-3">
                {[
                  { href: "#inicio", label: "Inicio" },
                  { href: "#nosotros", label: "Nosotros" },
                  { href: "#beneficios", label: "Beneficios" },
                  { href: "#testimonios", label: "Testimonios" },
                  { href: "#contacto", label: "Contacto" },
                ].map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-indigo-200 hover:text-white transition-colors duration-300 cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Servicios</h4>
              <ul className="space-y-3">
                {[
                  "example",
                  "example",
                  "example",
                  "example",
                  "example",
                ].map((servicio, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-indigo-200 hover:text-white transition-colors duration-300 cursor-pointer"
                    >
                      {servicio}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Contacto</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  {/* <i className="fas fa-map-marker-alt mt-1 mr-3 text-yellow-500"></i> */}
                  {/* <span>Av. Principal 123, Madrid, España</span> */}
                </li>
                <li className="flex items-start">
                  <i className="fas fa-phone-alt mt-1 mr-3 text-yellow-500"></i>
                  <span>+54 9 11 3473-8358</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-envelope mt-1 mr-3 text-yellow-500"></i>
                  <span>pisosya2@gmail.com</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-clock mt-1 mr-3 text-yellow-500"></i>
                  <span>Lun-Sab: 9:00 - 20:00</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-indigo-800 text-center text-indigo-300">
            <p>© 2025 PisosYa. Todos los derechos reservados.</p>
            <div className="mt-4 flex justify-center space-x-6">
              {["visa", "mastercard", "paypal"].map((method, i) => (
                <i key={i} className={`fab fa-cc-${method} text-2xl`}></i>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Botón WhatsApp */}
      <a
        href="https://wa.me/+5491134738358"
        target="_blank"
        rel="stylesheet"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 cursor-pointer"
      >
        <i className="fab fa-whatsapp text-3xl"></i>
      </a>

      {/* Botón Volver Arriba */}
      {isScrolled && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-28 z-50 bg-orange-700 hover:bg-orange-800 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </>
  );
};

export default Footer;
