"use client";

import React from "react";
import { Phone, Mail, MapPin, Clock, Shield, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function ContactoPage() {
  const contactInfo = {
    phones: [
      { num: "+52 (55) 5368-8515", label: "Planta Principal" },
      { num: "+52 (55) 5567-9562", label: "Ventas Técnicas" },
      { num: "+52 (55) 1955-1969", label: "Fax / Planta" }
    ],
    emails: [
      { address: "olivia.cuellar@iemsa.com.mx", label: "Dirección Administrativa" },
      { address: "ivan.cruz@iemsa.com.mx", label: "Ventas e Ingeniería" },
      { address: "iemsa@prodigy.net.mx", label: "Contacto Alterno" }
    ],
    address: {
      street: "Moldeadores 318, Col. Pro-Hogar",
      city: "Azcapotzalco, CDMX",
      zip: "C.P. 02600"
    },
    hours: [
      { days: "Lunes a Viernes", time: "8:00 AM a 6:00 PM" },
      { days: "Sábado", time: "8:00 AM a 2:00 PM" }
    ]
  };

  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Moldeadores 318, Pro-Hogar, Azcapotzalco, CDMX, 02600")}`;

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1E293B] font-sans antialiased overflow-x-clip flex flex-col">
      <Navbar />

      {/* HERO CONTACTO */}
      <section className="relative py-16 bg-gradient-to-b from-[#F8F9FA] to-white border-b border-[#1E293B]/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0F172A] leading-tight mb-4">
            Hablemos de su próximo proyecto
          </h1>
          <p className="text-base sm:text-lg text-[#1E293B]/70 max-w-2xl mx-auto">
            Estamos listos para evaluar las especificaciones de su pieza y proporcionarle una propuesta técnica y económica competitiva.
          </p>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL CONTACTO */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Panel de Información de Contacto (5 columnas) */}
            <div className="lg:col-span-5 space-y-10">
              
              {/* Bloque Teléfonos */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#D97706] mb-4 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Teléfonos de Planta
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {contactInfo.phones.map((p, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[#F8F9FA] border border-[#1E293B]/5">
                      <span className="text-[10px] text-[#1E293B]/60 block font-semibold">{p.label}</span>
                      <a href={`tel:${p.num.replace(/[^+\d]/g, "")}`} className="text-sm font-bold text-[#0F172A] hover:text-[#059669] transition-colors">{p.num}</a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bloque Correos */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#D97706] mb-4 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Correos de Ingeniería
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {contactInfo.emails.map((e, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[#F8F9FA] border border-[#1E293B]/5 flex justify-between items-center">
                      <div>
                        <span className="text-[10px] text-[#1E293B]/60 block font-semibold">{e.label}</span>
                        <a href={`mailto:${e.address}`} className="text-sm font-bold text-[#0F172A] hover:text-[#059669] transition-colors">{e.address}</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ubicación y Horarios */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-[#1E293B]/10">
                <div>
                  <h4 className="text-xs font-bold uppercase text-[#0F172A] tracking-wider mb-2 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#D97706]" />
                    Dirección Física
                  </h4>
                  <p className="text-xs text-[#1E293B]/80 leading-relaxed">
                    {contactInfo.address.street}<br/>
                    {contactInfo.address.city}<br/>
                    {contactInfo.address.zip}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase text-[#0F172A] tracking-wider mb-2 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#D97706]" />
                    Horarios de Atención
                  </h4>
                  <ul className="text-xs text-[#1E293B]/80 space-y-1">
                    {contactInfo.hours.map((h, idx) => (
                      <li key={idx}>
                        <span className="font-semibold">{h.days}:</span> {h.time}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Botones Redes Sociales */}
              <div className="flex gap-4 pt-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-xs font-bold text-[#1E293B]/80 transition-all shadow-sm"
                >
                  <svg className="w-4 h-4 text-[#0F172A]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                  </svg>
                  Facebook
                </a>
                <a
                  href={`https://wa.me/525553688515`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#25D366] text-white hover:bg-[#20ba5a] text-xs font-bold transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>

            </div>

            {/* Panel Formulario (7 columnas) */}
            <div className="lg:col-span-7">
              <ContactForm 
                title="¿Tiene un proyecto de precisión? ¡Contáctenos!"
                subtitle="Complete los campos requeridos. Nuestro departamento de ingeniería de planta analizará la factibilidad de su requerimiento."
              />
            </div>

          </div>
        </div>
      </section>

      {/* SECCIÓN DE MAPA */}
      <section className="py-24 bg-[#F8F9FA] border-t border-[#1E293B]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl font-bold tracking-tight text-[#0F172A] mb-2">Ubicación de Planta</h3>
            <p className="text-sm text-[#1E293B]/70">Nuestras oficinas y centro de maquinado están ubicados estratégicamente en la zona industrial de Azcapotzalco, CDMX.</p>
          </div>

          <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-[#1E293B]/5 overflow-hidden shadow-md">
            {/* Simulación del Mapa con Enlace Real de Google Maps */}
            <div className="aspect-[21/9] w-full bg-[#E5E7EB] relative flex flex-col items-center justify-center p-6 text-center">
              {/* Cuadrícula decorativa de mapa */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-40"></div>
              
              {/* Isotipo en el centro */}
              <div className="relative z-10 max-w-md bg-white p-6 rounded-2xl border border-gray-200 shadow-lg">
                <MapPin className="w-10 h-10 text-[#059669] mx-auto mb-3 animate-bounce" />
                <h4 className="font-bold text-[#0F172A] text-base mb-1">Moldeadores 318</h4>
                <p className="text-xs text-[#1E293B]/70 mb-4">Col. Pro-Hogar, Azcapotzalco, Ciudad de México, C.P. 02600</p>
                <a
                  href={mapSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#059669] hover:bg-[#047857] shadow-sm transition-all"
                >
                  Abrir en Google Maps
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
