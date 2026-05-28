"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, ShieldCheck, FileText, ChevronDown } from "lucide-react";

export default function ContactForm({ 
  title = "Solicitud de Cotización Técnica", 
  subtitle = "Por favor, rellene el formulario a continuación. Todos los datos están protegidos bajo estricto acuerdo de confidencialidad industrial.",
  defaultService = "Maquinado CNC",
  submitButtonText = "Enviar Cotización de Ingeniería"
}) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    correo: "",
    telefono: "",
    servicio: defaultService,
    descripcion: "",
    planos: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, planos: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({
        nombre: "",
        empresa: "",
        correo: "",
        telefono: "",
        servicio: defaultService,
        descripcion: "",
        planos: null
      });
    }, 1500);
  };

  return (
    <div className="bg-white rounded-3xl border border-[#1E293B]/5 shadow-xl p-8 sm:p-12">
      <h3 className="text-2xl font-bold text-[#0F172A] mb-2">{title}</h3>
      <p className="text-sm text-[#1E293B]/70 mb-8">{subtitle}</p>
      
      <AnimatePresence mode="wait">
        {!formSubmitted ? (
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nombre" className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2">Nombre completo *</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#1E293B]/10 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none text-sm transition-all"
                  placeholder="Ing. Carlos Pérez"
                />
              </div>
              
              <div>
                <label htmlFor="empresa" className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2">Empresa / Planta *</label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  required
                  value={formData.empresa}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#1E293B]/10 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none text-sm transition-all"
                  placeholder="Aceros de México S.A."
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="correo" className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2">Correo Corporativo *</label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  required
                  value={formData.correo}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#1E293B]/10 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none text-sm transition-all"
                  placeholder="carlos.perez@empresa.com"
                />
              </div>
              
              <div>
                <label htmlFor="telefono" className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2">Teléfono de Contacto *</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  required
                  value={formData.telefono}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#1E293B]/10 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none text-sm transition-all"
                  placeholder="55 1234 5678"
                />
              </div>
            </div>

            <div>
              <label htmlFor="servicio" className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2">Servicio Requerido *</label>
              <div className="relative">
                <select
                  id="servicio"
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#1E293B]/10 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none text-sm transition-all appearance-none bg-white cursor-pointer"
                >
                  <option value="Fabricación de Engranes">Fabricación de Engranes Especiales</option>
                  <option value="Maquinado CNC">Torno y Centro de Maquinado CNC</option>
                  <option value="Corte Laser">Corte Láser de Fibra</option>
                  <option value="Doblez">Doblez de Precisión CNC</option>
                  <option value="Reparación de Transmisiones">Reparación de Transmisiones</option>
                  <option value="Ingeniería Inversa">Ingeniería Inversa y Diseño</option>
                  <option value="Otro">Otro requerimiento técnico</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="descripcion" className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2">Descripción del Proyecto / Especificaciones *</label>
              <textarea
                id="descripcion"
                name="descripcion"
                required
                rows="4"
                value={formData.descripcion}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-[#1E293B]/10 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none text-sm transition-all resize-none"
                placeholder="Describa dimensiones, tolerancias, cantidad de piezas y tipo de material requerido (ej. Acero 4140 con tratamiento térmico)..."
              ></textarea>
            </div>

            {/* Adjuntar Plano Técnico */}
            <div className="border-2 border-dashed border-[#1E293B]/10 rounded-xl p-4 hover:border-[#059669]/40 transition-colors bg-gray-50/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white border border-[#1E293B]/5 flex items-center justify-center text-[#D97706]">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-[#0F172A]">Adjuntar planos de ingeniería (Opcional)</p>
                  <p className="text-[10px] text-[#1E293B]/60">Formatos permitidos: PDF, STEP, DXF, IGS (Máx. 15MB)</p>
                </div>
                <label className="cursor-pointer inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-xs font-semibold bg-white text-gray-700 hover:bg-gray-50 shadow-sm transition-all">
                  Subir
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.dxf,.step,.igs,.stp"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
              {formData.planos && (
                <p className="text-[11px] text-[#059669] font-semibold mt-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" /> Archivo cargado: {formData.planos.name}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center px-6 py-4 border border-transparent rounded-lg text-base font-semibold text-white bg-[#059669] hover:bg-[#047857] disabled:bg-[#059669]/60 shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Procesando Solicitud...
                </>
              ) : (
                <>
                  {submitButtonText}
                  <Send className="ml-2 w-4 h-4" />
                </>
              )}
            </button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12 px-4"
          >
            <div className="w-16 h-16 rounded-full bg-[#059669]/10 text-[#059669] flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold text-[#0F172A] mb-3">¡Solicitud Recibida!</h4>
            <p className="text-sm text-[#1E293B]/70 max-w-md mx-auto mb-8">
              Su requerimiento técnico ha sido enviado directamente a nuestro equipo de ingeniería de planta. Evaluaremos la viabilidad de manufactura y le responderemos con una cotización formal en menos de 24 horas.
            </p>
            <button
              onClick={() => setFormSubmitted(false)}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg text-sm font-semibold text-[#0F172A] bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              Enviar otra cotización
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
