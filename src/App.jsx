import React from "react";
import Home from "./pages/home";

const App = () => {
  return <Home />;
};

export default App;



// import React, { useState, useEffect, useRef } from "react";
// import "./index.css";
// import piso from "./assets/8.png";
// import piso1 from "./assets/8.png";
// import piso2 from "./assets/11.png";
// import piso3 from "./assets/20.png";
// import piso4 from "./assets/14.png";
// import piso5 from "./assets/5.png";
// import fondo from "./assets/21.png";
// const App = () => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [formData, setFormData] = useState({
//     nombre: "",
//     email: "",
//     telefono: "",
//     horario: "mañana",
//     tipoPropiedad: "apartamento",
//   });
//   const [incentiveIndex, setIncentiveIndex] = useState(0);

//   const incentivos = [
//     "🏠 Primera visita gratis - ¡Agenda hoy mismo!",
//     "🔑 Sin comisiones ocultas - 100% transparencia",
//     "💰 Financiación especial disponible - Consulta condiciones",
//   ];

//   const testimonios = [
//     {
//       nombre: "María González",
//       texto:
//         "Gracias a Pisos Ya encontré mi apartamento ideal en menos de una semana. El proceso fue rápido y sin complicaciones.",
//       valoracion: 5,
//     },
//     {
//       nombre: "Carlos Rodríguez",
//       texto:
//         "Excelente servicio y atención personalizada. Me ayudaron a encontrar exactamente lo que buscaba dentro de mi presupuesto.",
//       valoracion: 5,
//     },
//     {
//       nombre: "Laura Martínez",
//       texto:
//         "Profesionales y eficientes. Me sorprendió la cantidad de opciones que me ofrecieron y lo rápido que cerramos el trato.",
//       valoracion: 4,
//     },
//   ];

//   const instagramPosts = [
//     {
//       id: 1,
//       imagen:
//         fondo,
//       caption: "Apartamento moderno en el centro de la ciudad #PisosYa",
//     },
//     {
//       id: 2,
//       imagen:
//         piso1,
//       caption: "Áticos con vistas panorámicas #LujoUrbano",
//     },
//     {
//       id: 3,
//       imagen:
//         piso3,
//       caption: "Hogares familiares con todas las comodidades #TuNuevoComienzo",
//     },
//     {
//       id: 4,
//       imagen:
//         piso,
//       caption: "Espacios comerciales para tu negocio #OficinasYa",
//     },
//   ];

//   const productos = [
//   {
//     id: 1,
//     nombre: "Piso",
//     imagen: piso,
//     precio: "€180,000",
//     ubicacion: "Madrid, Centro",
//   },
//   {
//     id: 2,
//     nombre: "Ático con terraza",
//     imagen: piso1,
//     precio: "€250,000",
//     ubicacion: "Barcelona, Eixample",
//   },
//   {
//     id: 3,
//     nombre: "Loft minimalista",
//     imagen: piso2,
//     precio: "€145,000",
//     ubicacion: "Valencia, Ruzafa",
//   },
//   {
//     id: 4,
//     nombre: "Casa familiar",
//     imagen: piso3,
//     precio: "€300,000",
//     ubicacion: "Sevilla, Triana",
//   },
//   {
//     id: 5,
//     nombre: "Estudio céntrico",
//     imagen: piso4,
//     precio: "€95,000",
//     ubicacion: "Bilbao, Casco Viejo",
//   },
//   {
//     id: 6,
//     nombre: "Dúplex de diseño",
//     imagen: piso5,
//     precio: "€210,000",
//     ubicacion: "Málaga, Centro",
//   },
// ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     const incentiveInterval = setInterval(() => {
//       setIncentiveIndex((prevIndex) => (prevIndex + 1) % incentivos.length);
//     }, 5000);

//     const slideInterval = setInterval(() => {
//       setActiveSlide((prevSlide) => (prevSlide + 1) % 3);
//     }, 7000);

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       clearInterval(incentiveInterval);
//       clearInterval(slideInterval);
//     };
//   }, [incentivos.length]);

//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     alert("¡Gracias por contactarnos! Te responderemos a la brevedad.");
//     setFormData({
//       nombre: "",
//       email: "",
//       telefono: "",
//       horario: "mañana",
//       tipoPropiedad: "apartamento",
//     });
//   };

//   const scrollToForm = () => {
//     const formElement = document.getElementById("contacto");
//     if (formElement) {
//       formElement.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const scrollRef = useRef(null);
 
//   const handleScrollRight = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
//     }
//   }

//   return (
//     <div className="min-h-screen font-sans">
//       {/* Navbar */}
//       <nav
//         className={`sticky top-0 z-50 bg-white shadow-md transition-all duration-300 ${isScrolled ? "py-2" : "py-4"}`}
//       >
//         <div className="container mx-auto px-4 flex justify-between items-center">
//           <div className="flex items-center">
//             <img
//               src="https://static.readdy.ai/image/c4ab86b6dbb41c59c24329fde6ce2b66/c4728a2c8da3a9ebfbef55394f9fbadf.png"
//               alt="PisosYa Logo"
//               className="h-12"
//             />
//           </div>
//           <div className="hidden md:flex space-x-6">
//             <a
//               href="#inicio"
//               className="text-gray-700 hover:text-orange-800 font-medium cursor-pointer"
//             >
//               Inicio
//             </a>
//             <a
//               href="#nosotros"
//               className="text-gray-700 hover:text-orange-800 font-medium cursor-pointer"
//             >
//               Nosotros
//             </a>
//             <a
//               href="#beneficios"
//               className="text-gray-700 hover:text-orange-800 font-medium cursor-pointer"
//             >
//               Beneficios
//             </a>
//             <a
//               href="#testimonios"
//               className="text-gray-700 hover:text-orange-800 font-medium cursor-pointer"
//             >
//               Testimonios
//             </a>
//             <a
//               href="#contacto"
//               className="text-gray-700 hover:text-orange-800 font-medium cursor-pointer"
//             >
//               Contacto
//             </a>
//           </div>
//           <button className="md:hidden text-gray-700">
//             <i className="fas fa-bars text-xl"></i>
//           </button>
//         </div>
//       </nav>
//       {/* Hero Section con slider */}
//       <section id="inicio" className="relative h-[600px] overflow-hidden">
//         <div className="absolute inset-0 w-full h-full">
//           <div
//             className={`absolute inset-0 transition-opacity duration-1000 ${activeSlide === 0 ? "opacity-100" : "opacity-0"}`}
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-transparent z-10"></div>
//             <img
//               src="https://readdy.ai/api/search-image?query=modern%20luxury%20apartment%20building%20exterior%20with%20large%20windows%2C%20contemporary%20architecture%2C%20landscaped%20entrance%2C%20blue%20sky%20background%2C%20high%20quality%20real%20estate%20photography%2C%20professional%20lighting%2C%20urban%20setting&width=1440&height=600&seq=5&orientation=landscape"
//               alt="Edificio moderno"
//               className="w-full h-full object-cover object-top"
//             />
//           </div>
//           <div
//             className={`absolute inset-0 transition-opacity duration-1000 ${activeSlide === 1 ? "opacity-100" : "opacity-0"}`}
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-transparent z-10"></div>
//             <img
//               src="https://readdy.ai/api/search-image?query=elegant%20interior%20of%20modern%20apartment%20with%20open%20plan%20living%20space%2C%20floor%20to%20ceiling%20windows%20with%20city%20view%2C%20designer%20furniture%2C%20wooden%20floors%2C%20ambient%20lighting%2C%20high%20quality%20real%20estate%20photography&width=1440&height=600&seq=6&orientation=landscape"
//               alt="Interior elegante"
//               className="w-full h-full object-cover object-top"
//             />
//           </div>
//           <div
//             className={`absolute inset-0 transition-opacity duration-1000 ${activeSlide === 2 ? "opacity-100" : "opacity-0"}`}
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-transparent z-10"></div>
//             <img
//               src="https://readdy.ai/api/search-image?query=happy%20family%20moving%20into%20new%20home%2C%20carrying%20boxes%2C%20smiling%2C%20modern%20house%20exterior%2C%20sunny%20day%2C%20green%20lawn%2C%20residential%20neighborhood%2C%20high%20quality%20real%20estate%20photography&width=1440&height=600&seq=7&orientation=landscape"
//               alt="Familia feliz"
//               className="w-full h-full object-cover object-top"
//             />
//           </div>
//         </div>
//         <div className="container mx-auto px-4 h-full flex items-center relative z-20">
//           <div className="max-w-xl text-white">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Encuentra el mejor piso
//             </h2>
//             <p className="text-xl mb-8">
//               Más de 10 productos disponibles para ti. Servicio
//               personalizado y sin comisiones ocultas.
//             </p>
//             <button
//               onClick={scrollToForm}
//               className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 !rounded-button whitespace-nowrap cursor-pointer"
//             >
//               Agenda una visita
//             </button>
//           </div>
//         </div>
//         <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
//           {[0, 1, 2].map((index) => (
//             <button
//               key={index}
//               onClick={() => setActiveSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
//                 activeSlide === index ? "bg-yellow-500 w-10" : "bg-white/50"
//               }`}
//               aria-label={`Slide ${index + 1}`}
//             ></button>
//           ))}
//         </div>
//       </section>
//       {/* Sección Nosotros */}
//       <section id="nosotros" className="py-20 bg-orange-50">
//         <div className="container mx-auto px-4">
//     <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-orange-900">
//       Sobre <span className="text-orange-600">PisosYa</span>
//     </h2>
//     <div className="grid md:grid-cols-2 gap-12 items-center">
//       <div className="relative flex justify-center">
//         <div className="absolute -top-6 -left-6 w-20 h-20 bg-yellow-500 rounded-lg opacity-20"></div>
//         <img
//           src={piso2}
//           alt="Equipo de Pisos Ya"
//           className="rounded-lg shadow-xl relative z-10 w-[80%] max-w-xs md:max-w-sm lg:max-w-md"
//         />
//       </div>
//       <div>
//         <h3 className="text-2xl font-bold mb-4 text-orange-800">
//           Tu socio de confianza en el mercado inmobiliario
//         </h3>
//         <p className="text-gray-700 mb-6 leading-relaxed">
//           En <strong>PisosYa</strong> nos dedicamos a hacer realidad el sueño de tener un hogar perfecto. Con más de 10 años de experiencia en el sector, hemos ayudado a miles de familias a encontrar la propiedad que se ajusta a sus necesidades y presupuesto.
//         </p>
//         <p className="text-gray-700 mb-8 leading-relaxed">
//           Nuestro equipo de profesionales trabaja con pasión y dedicación para ofrecerte un servicio personalizado y de calidad. Nos diferenciamos por nuestra transparencia, honestidad y compromiso con cada cliente.
//         </p>
//         <div className="flex flex-wrap gap-6">
//           <div className="flex items-center">
//             <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
//               <i className="fas fa-home text-orange-700 text-xl"></i>
//             </div>
//             <div>
//               <h4 className="font-bold text-gray-800">+5000</h4>
//               <p className="text-gray-600 text-sm">Propiedades vendidas</p>
//             </div>
//           </div>
//           <div className="flex items-center">
//             <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
//               <i className="fas fa-users text-orange-800 text-xl"></i>
//             </div>
//             <div>
//               <h4 className="font-bold text-gray-800">+8000</h4>
//               <p className="text-gray-600 text-sm">Clientes satisfechos</p>
//             </div>
//           </div>
//           <div className="flex items-center">
//             <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
//               <i className="fas fa-map-marker-alt text-indigo-700 text-xl"></i>
//             </div>
//             <div>
//               <h4 className="font-bold text-gray-800">15</h4>
//               <p className="text-gray-600 text-sm">Ciudades</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//       </section>
//       {/* Sección de productos
//       <div className="my-12 px-4">
//       <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Propiedades destacadas</h2>
//       <div className="flex overflow-x-auto gap-6 scrollbar-hide py-4 px-2">
//         {productos.map((p) => (
//           <div
//             key={p.id}
//             className="min-w-[280px] max-w-xs bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
//           >
//             <img
//               src={p.imagen}
//               alt={p.nombre}
//               className="w-full h-48 object-cover rounded-t-2xl"
//             />
//             <div className="p-4">
//               <h3 className="text-xl font-semibold text-gray-800">{p.nombre}</h3>
//               <p className="text-sm text-gray-500">{p.ubicacion}</p>
//               <p className="text-lg font-bold text-orange-600 mt-2">{p.precio}</p>
//               <button className="mt-4 w-full bg-orange-600 text-white font-semibold py-2 rounded-lg hover:bg-orange-700 transition duration-300">
//                 Ver más
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div> */}
//     {/* Sección de productos */}
//   <div className="relative py-10 px-6 bg-gray-50">
//       <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Propiedades destacadas</h2>

//       <div className="relative">
//         {/* Contenedor del carrusel */}
//         <div
//           ref={scrollRef}
//           className="flex overflow-x-auto gap-6 scrollbar-hide pb-4 scroll-smooth"
//         >
//           {productos.map((p) => (
//             <div
//               key={p.id}
//               className="min-w-[320px] max-w-sm bg-white rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border border-gray-100"
//             >
//               <div className="relative">
//                 <img
//                   src={p.imagen}
//                   alt={p.nombre}
//                   className="w-full h-52 object-cover rounded-t-3xl"
//                 />
//                 <span className="absolute top-3 right-3 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
//                   {p.tipo || "Destacado"}
//                 </span>
//               </div>
//               <div className="p-5">
//                 <h3 className="text-xl font-bold text-gray-800 mb-1 flex items-center gap-2">
//                   🏡 {p.nombre}
//                 </h3>
//                 <p className="text-sm text-gray-500 mb-3">📍 {p.ubicacion}</p>
//                 <p className="text-lg font-bold text-orange-600 mb-4">{p.precio}</p>
//                 <button className="w-full bg-orange-600 text-white font-semibold py-2 rounded-lg hover:bg-orange-700 transition duration-300 shadow">
//                   Ver más detalles
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Flecha de desplazamiento */}
//         <button
//           onClick={handleScrollRight}
//           className="hidden md:flex items-center justify-center absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white border border-gray-300 shadow-md rounded-full w-10 h-10 hover:bg-orange-600 hover:text-white transition z-10"
//           aria-label="Ver más"
//         >
//           ➡️
//         </button>
//       </div>
//     </div>

            
//       {/* Sección Beneficios */}
//       <section id="beneficios" className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-orange-900">
//             Nuestros <span className="text-orange-500">Beneficios</span>
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
//               <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
//                 <i className="fas fa-percentage text-orange-800 text-2xl"></i>
//               </div>
//               <h3 className="text-xl font-bold text-center mb-4 text-orange-800">
//                 Sin Comisiones Ocultas
//               </h3>
//               <p className="text-gray-600 text-center">
//                 Transparencia total en nuestros precios. Sin sorpresas ni cargos
//                 adicionales.
//               </p>
//             </div>
//             <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
//               <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
//                 <i className="fas fa-shield-alt text-indigo-700 text-2xl"></i>
//               </div>
//               <h3 className="text-xl font-bold text-center mb-4 text-indigo-700">
//                 Garantía Legal
//               </h3>
//               <p className="text-gray-600 text-center">
//                 Todas nuestras operaciones cuentan con respaldo jurídico y
//                 documentación verificada.
//               </p>
//             </div>
//             <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
//               <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
//                 <i className="fas fa-hand-holding-usd text-indigo-700 text-2xl"></i>
//               </div>
//               <h3 className="text-xl font-bold text-center mb-4 text-indigo-700">
//                 Financiación Flexible
//               </h3>
//               <p className="text-gray-600 text-center">
//                 Trabajamos con múltiples entidades financieras para ofrecerte
//                 las mejores condiciones.
//               </p>
//             </div>
//             <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
//               <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
//                 <i className="fas fa-clock text-indigo-700 text-2xl"></i>
//               </div>
//               <h3 className="text-xl font-bold text-center mb-4 text-indigo-700">
//                 Atención 24/7
//               </h3>
//               <p className="text-gray-600 text-center">
//                 Nuestro equipo está disponible para atenderte en cualquier
//                 momento que lo necesites.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Sección Formulario de Contacto */}
//       <section id="contacto" className="py-20 bg-orange-50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
//             <div className="grid md:grid-cols-2">
//               <div className="p-10 bg-orange-800 text-white">
//                 <h2 className="text-3xl font-bold mb-6">
//                   Agenda una visita con nosotros
//                 </h2>
//                 <p className="mb-8">
//                   Completa el formulario y uno de nuestros asesores se pondrá en
//                   contacto contigo para ayudarte a encontrar tu propiedad ideal.
//                 </p>
//                 <div className="space-y-4">
//                   <div className="flex items-start">
//                     <div className="mt-1 mr-4">
//                       <i className="fas fa-map-marker-alt"></i>
//                     </div>
//                     <div>
//                       <h3 className="font-bold">Dirección</h3>
//                       <p className="text-indigo-200">
//                         Av. Principal 123, Madrid, España
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex items-start">
//                     <div className="mt-1 mr-4">
//                       <i className="fas fa-phone-alt"></i>
//                     </div>
//                     <div>
//                       <h3 className="font-bold">Teléfono</h3>
//                       <p className="text-indigo-200">+34 91 123 45 67</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start">
//                     <div className="mt-1 mr-4">
//                       <i className="fas fa-envelope"></i>
//                     </div>
//                     <div>
//                       <h3 className="font-bold">Email</h3>
//                       <p className="text-indigo-200">info@pisosya.com</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="p-10">
//                 <form onSubmit={handleFormSubmit}>
//                   <div className="mb-4">
//                     <label
//                       htmlFor="nombre"
//                       className="block text-gray-700 font-medium mb-2"
//                     >
//                       Nombre completo
//                     </label>
//                     <input
//                       type="text"
//                       id="nombre"
//                       name="nombre"
//                       value={formData.nombre}
//                       onChange={handleFormChange}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                       required
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label
//                       htmlFor="email"
//                       className="block text-gray-700 font-medium mb-2"
//                     >
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleFormChange}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                       required
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label
//                       htmlFor="telefono"
//                       className="block text-gray-700 font-medium mb-2"
//                     >
//                       Teléfono
//                     </label>
//                     <input
//                       type="tel"
//                       id="telefono"
//                       name="telefono"
//                       value={formData.telefono}
//                       onChange={handleFormChange}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                       required
//                     />
//                   </div>
//                   <div className="grid grid-cols-2 gap-4 mb-6">
//                     <div>
//                       <label
//                         htmlFor="horario"
//                         className="block text-gray-700 font-medium mb-2"
//                       >
//                         Horario preferido
//                       </label>
//                       <select
//                         id="horario"
//                         name="horario"
//                         value={formData.horario}
//                         onChange={handleFormChange}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                       >
//                         <option value="mañana">Mañana (9-13h)</option>
//                         <option value="tarde">Tarde (16-20h)</option>
//                       </select>
//                     </div>
//                     <div>
//                       <label
//                         htmlFor="tipoPropiedad"
//                         className="block text-gray-700 font-medium mb-2"
//                       >
//                         Tipo de propiedad
//                       </label>
//                       <select
//                         id="tipoPropiedad"
//                         name="tipoPropiedad"
//                         value={formData.tipoPropiedad}
//                         onChange={handleFormChange}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                       >
//                         <option value="apartamento">Apartamento</option>
//                         <option value="casa">Casa</option>
//                         <option value="oficina">Oficina</option>
//                         <option value="local">Local comercial</option>
//                       </select>
//                     </div>
//                   </div>
//                   <button
//                     type="submit"
//                     className="w-full bg-orange-800 hover:bg-orange-900 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 !rounded-button whitespace-nowrap cursor-pointer"
//                   >
//                     Solicitar información
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Sección Testimonios */}
//       <section id="testimonios" className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-orange-900">
//             Lo que dicen nuestros{" "}
//             <span className="text-orange-500">clientes</span>
//           </h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {testimonios.map((testimonio, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
//               >
//                 <div className="flex mb-4">
//                   {[...Array(5)].map((_, i) => (
//                     <i
//                       key={i}
//                       className={`fas fa-star ${i < testimonio.valoracion ? "text-yellow-500" : "text-gray-300"} mr-1`}
//                     ></i>
//                   ))}
//                 </div>
//                 <p className="text-gray-700 mb-6 italic">
//                   "{testimonio.texto}"
//                 </p>
//                 <div className="flex items-center">
//                   <div className="w-12 h-12 bg-indigo-200 rounded-full flex items-center justify-center mr-4">
//                     <span className="text-indigo-700 font-bold">
//                       {testimonio.nombre.charAt(0)}
//                     </span>
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-gray-800">
//                       {testimonio.nombre}
//                     </h4>
//                     <p className="text-gray-600 text-sm">Cliente satisfecho</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="mt-16 text-center">
//             <div className="inline-flex items-center justify-center p-4 bg-indigo-50 rounded-lg">
//               <span className="text-indigo-700 font-bold text-xl mr-4">
//                 4.9
//               </span>
//               <div className="flex">
//                 {[...Array(5)].map((_, i) => (
//                   <i key={i} className="fas fa-star text-yellow-500 mr-1"></i>
//                 ))}
//               </div>
//               <span className="ml-4 text-gray-700">
//                 Basado en más de 500 reseñas
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Sección Instagram Feed */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-orange-900">
//             Síguenos en <span className="text-orange-500">Instagram</span>
//           </h2>
//           <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
//             Descubre nuestras últimas colocaciones y consejos inmobiliarios
//             siguiéndonos en Instagram
//           </p>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {instagramPosts.map((post) => (
//               <div
//                 key={post.id}
//                 className="relative group overflow-hidden rounded-lg shadow-md"
//               >
//                 <img
//                   src={post.imagen}
//                   alt={post.caption}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-orange-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
//                   <p className="text-white text-center">{post.caption}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="mt-10 text-center">
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center text-indigo-700 hover:text-indigo-800 font-bold cursor-pointer"
//             >
//               <i className="fab fa-instagram mr-2 text-xl"></i>
//               Seguir en Instagram
//             </a>
//           </div>
//         </div>
//       </section>
//       {/* Footer */}
//       <footer className="bg-orange-900 text-white py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-4 gap-8">
//             <div>
//               <h3 className="text-2xl font-bold mb-6">
//                 Pisos<span className="text-yellow-500">Ya</span>
//               </h3>
//               <p className="mb-6 text-indigo-200">
//                 Tu socio de confianza para encontrar el hogar de tus sueños. Más
//                 de 10 años de experiencia en el sector inmobiliario.
//               </p>
//               <div className="flex space-x-4">
//                 <a
//                   href="#"
//                   className="w-10 h-10 bg-indigo-800 hover:bg-indigo-700 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
//                 >
//                   <i className="fab fa-facebook-f"></i>
//                 </a>
//                 <a
//                   href="#"
//                   className="w-10 h-10 bg-indigo-800 hover:bg-indigo-700 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
//                 >
//                   <i className="fab fa-twitter"></i>
//                 </a>
//                 <a
//                   href="#"
//                   className="w-10 h-10 bg-indigo-800 hover:bg-indigo-700 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
//                 >
//                   <i className="fab fa-instagram"></i>
//                 </a>
//                 <a
//                   href="#"
//                   className="w-10 h-10 bg-indigo-800 hover:bg-indigo-700 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
//                 >
//                   <i className="fab fa-linkedin-in"></i>
//                 </a>
//               </div>
//             </div>
//             <div>
//               <h4 className="text-lg font-bold mb-6">Enlaces rápidos</h4>
//               <ul className="space-y-3">
//                 <li>
//                   <a
//                     href="#inicio"
//                     className="text-indigo-200 hover:text-white transition-colors duration-300 cursor-pointer"
//                   >
//                     Inicio
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#nosotros"
//                     className="text-indigo-200 hover:text-white transition-colors duration-300 cursor-pointer"
//                   >
//                     Nosotros
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#beneficios"
//                     className="text-indigo-200 hover:text-white transition-colors duration-300 cursor-pointer"
//                   >
//                     Beneficios
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#testimonios"
//                     className="text-indigo-200 hover:text-white transition-colors duration-300 cursor-pointer"
//                   >
//                     Testimonios
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#contacto"
//                     className="text-indigo-200 hover:text-white transition-colors duration-300 cursor-pointer"
//                   >
//                     Contacto
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-lg font-bold mb-6">Servicios</h4>
//               <ul className="space-y-3">
//                 <li>
//                   <a
//                     href="#"
//                     className="text-indigo-200 hover:text-white transition-colors duration-300 cursor-pointer"
//                   >
//                     Compra de propiedades
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-indigo-200 hover:text-white transition-colors duration-300 cursor-pointer"
//                   >
//                     Venta de propiedades
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-indigo-200 hover:text-white transition-colors duration-300 cursor-pointer"
//                   >
//                     Alquiler
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-indigo-200 hover:text-white transition-colors duration-300 cursor-pointer"
//                   >
//                     Asesoría legal
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-indigo-200 hover:text-white transition-colors duration-300 cursor-pointer"
//                   >
//                     Financiación
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-lg font-bold mb-6">Contacto</h4>
//               <ul className="space-y-3">
//                 <li className="flex items-start">
//                   <i className="fas fa-map-marker-alt mt-1 mr-3 text-yellow-500"></i>
//                   <span>Av. Principal 123, Madrid, España</span>
//                 </li>
//                 <li className="flex items-start">
//                   <i className="fas fa-phone-alt mt-1 mr-3 text-yellow-500"></i>
//                   <span>+34 91 123 45 67</span>
//                 </li>
//                 <li className="flex items-start">
//                   <i className="fas fa-envelope mt-1 mr-3 text-yellow-500"></i>
//                   <span>info@pisosya.com</span>
//                 </li>
//                 <li className="flex items-start">
//                   <i className="fas fa-clock mt-1 mr-3 text-yellow-500"></i>
//                   <span>Lun-Vie: 9:00 - 20:00</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="mt-12 pt-8 border-t border-indigo-800 text-center text-indigo-300">
//             <p>© 2025 PisosYa. Todos los derechos reservados.</p>
//             <div className="mt-4 flex justify-center space-x-6">
//               <i className="fab fa-cc-visa text-2xl"></i>
//               <i className="fab fa-cc-mastercard text-2xl"></i>
//               <i className="fab fa-cc-paypal text-2xl"></i>
//             </div>
//           </div>
//         </div>
//       </footer>
//       {/* Botón WhatsApp */}
//       <a
//         href="https://wa.me/34911234567"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 cursor-pointer"
//       >
//         <i className="fab fa-whatsapp text-3xl"></i>
//       </a>
//       {/* Botón Volver Arriba */}
//       {isScrolled && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-6 right-28 z-50 bg-orange-700 hover:bg-orange-800 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 !rounded-button whitespace-nowrap cursor-pointer"
//         >
//           <i className="fas fa-arrow-up"></i>
//         </button>
//       )}
//     </div>
//   );
//  }

// export default App;
