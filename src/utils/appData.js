import { useState } from "react";
import fondo from "../assets/5.png";
import piso from "../assets/pisos-sin-especificaciones/1.png";
import piso1 from "../assets/14.png";
import piso2 from "../assets/20.png";
import piso3 from "../assets/21.png";
import piso4 from "../assets/8.png";

const useAppData = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    horario: "mañana",
    tipoPropiedad: "apartamento",
  });
  const [incentiveIndex, setIncentiveIndex] = useState(0);

  const incentivos = [
    "🏠 Primera visita gratis - ¡Agenda hoy mismo!",
    "🔑 Sin comisiones ocultas - 100% transparencia",
    "💰 Financiación especial disponible - Consulta condiciones",
  ];

  const testimonios = [
    {
      nombre: "María González",
      texto:
        "Gracias a Pisos Ya encontré mi piso ideal. El proceso fue rápido y sin complicaciones.",
      valoracion: 5,
    },
    {
      nombre: "Carlos Rodríguez",
      texto:
        "Excelente servicio y atención personalizada. Me ayudaron a encontrar exactamente lo que buscaba.",
      valoracion: 5,
    },
    {
      nombre: "Laura Martínez",
      texto:
        "Profesionales y eficientes. Me sorprendió la cantidad de opciones que me ofrecieron y lo rápido que realizaron el trabajo.",
      valoracion: 4,
    },
  ];

  const instagramPosts = [
    {
      id: 1,
      imagen: fondo,
      caption: "Apartamento moderno en el centro de la ciudad #PisosYa",
    },
    {
      id: 2,
      imagen: piso1,
      caption: "Áticos con vistas panorámicas #LujoUrbano",
    },
    {
      id: 3,
      imagen: piso3,
      caption: "Hogares familiares con todas las comodidades #TuNuevoComienzo",
    },
    {
      id: 4,
      imagen: piso,
      caption: "Espacios comerciales para tu negocio #OficinasYa",
    },
  ];

  const productos = [
    {
      id: 1,
      nombre: "Piso Madera",
      imagen: piso,
      precio: "€180,000",
    },
    {
      id: 2,
      nombre: "Piso Madera",
      imagen: piso1,
      precio: "€250,000",
    },
    {
      id: 3,
      nombre: "piso",
      imagen: piso2,
      precio: "€145,000",
    },
    {
      id: 4,
      nombre: "piso",
      imagen: piso3,
      precio: "€300,000",
    },
    {
      id: 5,
      nombre: "piso",
      imagen: piso4,
      precio: "€95,000",

    },
    // {
    //   id: 6,
    //   nombre: "Dúplex de diseño",
    //   imagen: piso5,
    //   precio: "€210,000",
    //   ubicacion: "Málaga, Centro",
    // },
  ];

  return {
    activeSlide,
    setActiveSlide,
    isScrolled,
    setIsScrolled,
    formData,
    setFormData,
    incentiveIndex,
    setIncentiveIndex,
    incentivos,
    testimonios,
    instagramPosts,
    productos,
  };
};

export default useAppData;
