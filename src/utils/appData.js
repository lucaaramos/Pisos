import { useState } from "react";
import fondo from "../assets/5.png";
import piso from "../assets/pisos-sin-especificaciones/1.png";
import piso1 from "../assets/14.png";
import piso2 from "../assets/20.png";
import piso3 from "../assets/21.png";
import piso4 from "../assets/8.png";

// Pisos vinílicos sistema click
import piso10 from "../assets/valvi/1.JPG";
import piso11 from "../assets/valvi/2.JPG";
import piso12 from "../assets/valvi/3.JPG";
import piso13 from "../assets/valvi/3.JPG";
import piso14 from "../assets/valvi/4.JPG";
import piso15 from "../assets/valvi/5.JPG";

// Pisos autoadhesivo
import piso16 from "../assets/autoadhesivo/15-062.jpg";
import piso17 from "../assets/autoadhesivo/15-063.jpg";
import piso18 from "../assets/autoadhesivo/PG5004-11.jpg";
import piso19 from "../assets/autoadhesivo/PG5016-13.jpg"; 
import piso20 from "../assets/autoadhesivo/YCW8156-40.jpg";
import piso21 from "../assets/autoadhesivo/ZY723.jpg";

// Zócalos
// import zocalo1 from "../assets/zocalos/b-80.jpg";
import zocalo1 from "../assets/zocalos/b-80.png";
import zocalo2 from "../assets/zocalos/b-90.png";
import zocalo3 from "../assets/zocalos/b-95.png";
import zocalo4 from "../assets/zocalos/b-100.png";
import zocalo5 from "../assets/zocalos/b-120.png";
import zocalo6 from "../assets/zocalos/c-120.png"; 
import zocalo7 from "../assets/zocalos/cb.png";


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
    //PISOS AUTOADE
    {
      id: 7,
      nombre: "Piso autoadhesivo 15-062",
      imagen: piso16,
      precio: "$4000/m²",
      tipo: "autoadhesivo"
    },
    {
      id: 8,
      nombre: "Piso autoadhesivo 15.063",
      imagen: piso16,
      precio: "$4200/m²",
      tipo: "autoadhesivo"
    }, 
    {
      id: 9,
      nombre: "Piso autoadhesivo PG5004-11",
      imagen: piso18,
      precio: "$4500/m²",
      tipo: "autoadhesivo"
    },
    {
      id: 10,
      nombre: "Piso autoadhesivo PG5016-13",
      imagen: piso19,
      precio: "$4800/m²",
      tipo: "autoadhesivo"
    },
    {
      id: 11,
      nombre: "Piso autoadhesivo YCW8156-50",
      imagen: piso20,
      precio: "$5000/m²",
      tipo: "autoadhesivo"
    },
    {
      id: 12,
      nombre: "Piso autoadhesivo ZY723",
      imagen: piso21,
      precio: "$5200/m²",
      tipo: "autoadhesivo"
    },
    {
      id: 13,
      nombre: "Piso autoadhesivo ZY723",
      imagen: piso17,
      precio: "$5200/m²",
      tipo: "autoadhesivo"
    },
    // Zócalos
    {
      id: 14,
      nombre: "Zócalo B-80",
      imagen: zocalo1,
      precio: "$200/m",
      tipo: "zocalo"
    },
    {
      id: 15,
      nombre: "Zócalo B-90",
      imagen: zocalo2,
      precio: "$220/m",
      tipo: "zocalo"
    },
    {
      id: 16,
      nombre: "Zócalo B-95",
      imagen: zocalo3,
      precio: "$240/m",
      tipo: "zocalo"
    },
    {
      id: 17,
      nombre: "Zócalo B-100",
      imagen: zocalo4,
      precio: "$260/m",
      tipo: "zocalo"
    },
    {
      id: 18,
      nombre: "Zócalo B-120",
      imagen: zocalo5,
      precio: "$280/m",
      tipo: "zocalo"
    },
    {
      id: 19,
      nombre: "Zócalo C-120",
      imagen: zocalo6,
      precio: "$300/m",
      tipo: "zocalo"
    },
    {
      id: 20,
      nombre: "Zócalo CB",
      imagen: zocalo7,
      precio: "$320/m",
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
