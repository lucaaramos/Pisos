import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    horario: "mañana",
    tipoPropiedad: "apartamento",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // Nuevo estado para controlar el envío exitoso

  // Validación de campos
  const validateForm = () => {
    const newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es obligatorio";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) 
      newErrors.email = "Ingresa un email válido";
    if (!/^[0-9]{10,15}$/.test(formData.telefono)) 
      newErrors.telefono = "Teléfono inválido (solo números, 10-15 dígitos)";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_7ghqh9k",
        "template_cnsioih",
        formData,
        "57Rrz8rKoeO0xekMN"
      );

      toast.success("¡Mensaje enviado! Te contactaremos pronto.", {
        position: "top-center",
        autoClose: 5000,
      });

      // Resetear formulario y marcar como enviado
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        horario: "mañana",
        tipoPropiedad: "apartamento",
      });
      setIsSubmitted(true);
      
      // Ocultar el mensaje de confirmación después de 8 segundos
      setTimeout(() => {
        setIsSubmitted(false);
      }, 8000);

    } catch (error) {
      toast.error("Error al enviar. Inténtalo de nuevo.");
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
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
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h3 className="font-bold">Teléfono</h3>
                    <p className="text-orange-200">+54 9 11 3473-8358</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-orange-200">pisosya2@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lado derecho con formulario */}
            <div className="p-10 relative">
              {isSubmitted ? (
                <div className="text-center py-10">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                    <svg
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">
                    ¡Mensaje enviado con éxito!
                  </h3>
                  <p className="text-sm text-gray-500">
                    Hemos recibido tu información y nos pondremos en contacto contigo pronto.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-800 hover:bg-orange-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
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
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.nombre ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-orange-500"
                      }`}
                      required
                    />
                    {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>}
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
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-orange-500"
                      }`}
                      required
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
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
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.telefono ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-orange-500"
                      }`}
                      required
                    />
                    {errors.telefono && <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>}
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                    disabled={isSubmitting}
                    className={`w-full bg-orange-800 hover:bg-orange-900 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : "cursor-pointer"
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </div>
                    ) : (
                      "Solicitar información"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;