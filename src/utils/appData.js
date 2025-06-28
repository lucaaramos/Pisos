import { useState } from "react";
import fondo from "../assets/5.png";
import piso from "../assets/pisos-sin-especificaciones/1.png";
import piso1 from "../assets/14.png";
import piso2 from "../assets/20.png";
import piso3 from "../assets/21.png";
import piso4 from "../assets/8.png";

import piso10 from "../assets/valvi/1.JPG";
import piso11 from "../assets/valvi/2.JPG";
import piso12 from "../assets/valvi/3.JPG";
import piso13 from "../assets/valvi/3.JPG";
import piso14 from "../assets/valvi/4.JPG";
import piso15 from "../assets/valvi/5.JPG";




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
      nombre: "VinicoG",
      imagen: piso1,
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
  ];

  const prod = [
    // Pisos vinílicos sistema click
    {
      id: 1,
      nombre: "ValviGreen 051",
      imagen: piso10,
      precio: "$4500/m²",
      tipo: "vinilico-click"
    },
    {
      id: 2,
      nombre: "ValviGreen 056",
      imagen: piso11,
      precio: "$5200/m²",
      tipo: "vinilico-click"
    },
       {
      id: 3,
      nombre: "ValviGreen 061",
      imagen: piso12,
      precio: "$4500/m²",
      tipo: "vinilico-click"
    },
    {
      id: 4,
      nombre: "Valvi Green 062",
      imagen: piso13,
      precio: "$5200/m²",
      tipo: "vinilico-click"
    },
    { 
    id: 5,
      nombre: "Valvi Green 063",
      imagen: piso13,
      precio: "$5200/m²",
      tipo: "vinilico-click"
     },
    
    {
      id: 3,
      nombre: "Piso Autoadhesivo Moderno - Modelo C",
      imagen: "https://picsum.photos/300/200?random=3",
      precio: "$2800/m²",
      ubicacion: "Interior económico",
      tipo: "autoadhesivo"
    },
    {
      id: 4,
      nombre: "Piso Autoadhesivo Decorativo - Modelo D",
      imagen: "https://picsum.photos/300/200?random=4",
      precio: "$3200/m²",
      ubicacion: "Para reformas rápidas",
      tipo: "autoadhesivo"
    },

    // Zócalos
    {
      id: 5,
      nombre: "Zócalo de PVC - Modelo E",
      imagen: "https://picsum.photos/300/200?random=5",
      precio: "$350/unidad",
      ubicacion: "Altura 10cm",
      tipo: "zocalo"
    },
    {
      id: 6,
      nombre: "Zócalo de Madera - Modelo F",
      imagen: "https://picsum.photos/300/200?random=6",
      precio: "$600/unidad",
      ubicacion: "Altura 15cm",
      tipo: "zocalo"
    }
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
    // productos,
    prod
  };
};

export default useAppData;
