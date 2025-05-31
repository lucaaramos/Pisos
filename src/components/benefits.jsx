import React from "react";

const benefits = [
  {
    icon: "fas fa-percentage",
    title: "Sin Comisiones Ocultas",
    text: "Transparencia total en nuestros precios. Sin sorpresas ni cargos adicionales.",
    bgColor: "bg-orange-100",
    textColor: "text-orange-800",
  },
  {
    icon: "fas fa-shield-alt",
    title: "Garantía Legal",
    text: "Todas nuestras operaciones cuentan con respaldo jurídico y documentación verificada.",
    bgColor: "bg-indigo-100",
    textColor: "text-indigo-700",
  },
  {
    icon: "fas fa-hand-holding-usd",
    title: "Financiación Flexible",
    text: "Trabajamos con múltiples entidades financieras para ofrecerte las mejores condiciones.",
    bgColor: "bg-indigo-100",
    textColor: "text-indigo-700",
  },
  {
    icon: "fas fa-clock",
    title: "Atención 24/7",
    text: "Nuestro equipo está disponible para atenderte en cualquier momento que lo necesites.",
    bgColor: "bg-indigo-100",
    textColor: "text-indigo-700",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-orange-900">
          Nuestros <span className="text-orange-500">Beneficios</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div
                className={`w-16 h-16 ${b.bgColor} rounded-full flex items-center justify-center mb-6 mx-auto`}
              >
                <i className={`${b.icon} ${b.textColor} text-2xl`}></i>
              </div>
              <h3 className={`text-xl font-bold text-center mb-4 ${b.textColor}`}>
                {b.title}
              </h3>
              <p className="text-gray-600 text-center">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
