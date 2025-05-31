import React, { useState } from "react";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    horario: "mañana",
    tipoPropiedad: "apartamento",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("¡Gracias por contactarnos! Te responderemos a la brevedad.");
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      horario: "mañana",
      tipoPropiedad: "apartamento",
    });
  };

  return (
    <section id="contacto" className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Lado izquierdo con información */}
            <div className="p-10 bg-orange-800 text-white">
              <h2 className="text-3xl font-bold mb-6">Agenda una visita con nosotros</h2>
              <p className="mb-8">
                Completa el formulario y uno de nuestros asesores se pondrá en contacto contigo para ayudarte a encontrar tu propiedad ideal.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h3 className="font-bold">Dirección</h3>
                    <p className="text-indigo-200">Av. Principal 123, Madrid, España</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h3 className="font-bold">Teléfono</h3>
                    <p className="text-indigo-200">+34 91 123 45 67</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-indigo-200">info@pisosya.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lado derecho con formulario */}
            <div className="p-10">
              <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                  <label htmlFor="nombre" className="block text-gray-700 font-medium mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="telefono" className="block text-gray-700 font-medium mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label htmlFor="horario" className="block text-gray-700 font-medium mb-2">
                      Horario preferido
                    </label>
                    <select
                      id="horario"
                      name="horario"
                      value={formData.horario}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="mañana">Mañana (9-13h)</option>
                      <option value="tarde">Tarde (16-20h)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="tipoPropiedad" className="block text-gray-700 font-medium mb-2">
                      Tipo de propiedad
                    </label>
                    <select
                      id="tipoPropiedad"
                      name="tipoPropiedad"
                      value={formData.tipoPropiedad}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="apartamento">Apartamento</option>
                      <option value="casa">Casa</option>
                      <option value="oficina">Oficina</option>
                      <option value="local">Local comercial</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-800 hover:bg-orange-900 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 cursor-pointer"
                >
                  Solicitar información
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
