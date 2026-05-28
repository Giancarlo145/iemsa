"use client";

import React from "react";
import { motion } from "framer-motion";
import { Settings, ShieldCheck, Layers, ArrowRight, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function DoblezPage() {
  const specs = [
    { label: "Modelo de la Dobladora", val: "MB8 100x3200 CNC" },
    { label: "Capacidad de Fuerza (Presión)", val: "100 Toneladas" },
    { label: "Longitud Máxima de Doblez", val: "3200 mm (3.20 metros)" },
    { label: "Sistema de Control CNC", val: "Delem Multiejes (X, Y1, Y2, R, V)" },
    { label: "Compensación de Flexión", val: "Mesa con Crowning Hidráulico Automático" }
  ];

  const services = [
    { title: "Perfiles y Canales a Medida", desc: "Doblez de vigas U, perfiles Z, L y formas angulares personalizadas con alta repetibilidad." },
    { title: "Gabinetes y Tolvas", desc: "Doblado de piezas complejas con múltiples dobleces consecutivos para la fabricación de carcasas de maquinaria y tolvas de descarga." },
    { title: "Soportes y Placas Gruesas", desc: "Doblado de soportes y soleras industriales de acero de alta resistencia en calibres de gran espesor." }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1E293B] font-sans antialiased overflow-x-hidden flex flex-col">
      <Navbar />

      {/* HERO DOBLEZ */}
      <section className="relative py-20 bg-gradient-to-b from-[#F8F9FA] to-white border-b border-[#1E293B]/5 overflow-hidden">
        <div className="absolute right-[-10%] top-[-10%] w-[400px] h-[400px] text-[#059669]/5 pointer-events-none select-none">
          <Settings className="w-full h-full animate-[spin_50s_linear_infinite]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#059669]/10 text-[#059669] text-xs font-semibold uppercase tracking-wider mb-6">
              <span>Plegado de Lámina B2B</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0F172A] leading-tight mb-6">
              Doblez de Precisión con <span className="text-[#059669]">Tecnología CNC Hidráulica</span>
            </h1>
            
            <p className="text-lg text-[#1E293B]/80 leading-relaxed mb-8">
              Operamos con la prensa dobladora de precisión **MB8 100x3200 CNC**. Su capacidad de 100 toneladas y control multieje computarizado garantizan la repetibilidad de ángulos perfectos en perfiles largos y piezas estructurales complejas.
            </p>

            <a
              href="#cotizar-doblez"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-[#059669] hover:bg-[#047857] shadow-md hover:shadow-lg transition-all"
            >
              Cotizar Doblez de Lámina
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* DETALLES DE MAQUINARIA MB8 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            
            <div>
              <h2 className="text-xs uppercase tracking-widest font-bold text-[#D97706] mb-3">Infraestructura</h2>
              <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] mb-6">
                Dobladora MB8 100x3200: Fuerza y Repetibilidad
              </h3>
              <p className="text-sm sm:text-base text-[#1E293B]/80 leading-relaxed mb-6">
                El modelo **MB8 100x3200 CNC** es una plegadora industrial diseñada para procesos exigentes de doblado. Su control numérico Delem calcula de forma automática la profundidad de penetración del punzón y la posición de los topes traseros (ejes X, R) para cada ángulo del plano de ingeniería. Además, el sistema de **Crowning Hidráulico** integrado compensa la flexión natural de la máquina al doblar piezas largas, asegurando un ángulo homogéneo e idéntico de extremo a extremo en piezas de hasta 3.2 metros de longitud.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-[#1E293B]/80">
                  <ShieldCheck className="w-4.5 h-4.5 text-[#059669]" />
                  <span>Ángulos consistentes a lo largo de toda la pieza</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#1E293B]/80">
                  <ShieldCheck className="w-4.5 h-4.5 text-[#059669]" />
                  <span>Doblado rápido de lotes serializados</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#1E293B]/80">
                  <ShieldCheck className="w-4.5 h-4.5 text-[#059669]" />
                  <span>Capacidad en lámina negra, galvanizada, inoxidable y aluminio</span>
                </div>
              </div>
            </div>

            {/* Simulación visual de dobladora */}
            <div className="mt-12 lg:mt-0">
              <div className="aspect-video bg-[#0F172A] rounded-2xl p-8 shadow-xl border border-white/10 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-30"></div>
                <div className="flex justify-between items-start relative z-10">
                  <span className="text-[10px] font-mono text-[#D97706] bg-[#D97706]/10 px-2 py-0.5 rounded">PRESS BRAKE SETUP</span>
                  <span className="text-[9px] font-mono text-white/40">FORCE: 100 TON</span>
                </div>

                <div className="flex-1 flex items-center justify-center relative z-10">
                  {/* Animación o esquema vectorial del doblado */}
                  <svg className="w-40 h-24 text-white/20" viewBox="0 0 100 50">
                    {/* Punzón superior */}
                    <path d="M45,5 L55,5 L50,22 Z" fill="#059669" className="animate-bounce" />
                    {/* Dado inferior (Matriz en V) */}
                    <path d="M35,38 L45,28 L55,28 L65,38 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    {/* Lámina doblada */}
                    <path d="M20,25 L45,28 L50,22 L55,28 L80,25" fill="none" stroke="#D97706" strokeWidth="2.5" />
                  </svg>
                </div>

                <div className="border-t border-white/10 pt-4 flex justify-between text-xs font-mono relative z-10">
                  <span className="text-white/60">Longitud de doblado:</span>
                  <span className="text-[#059669] font-bold">3,200 mm</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* APLICACIONES TÍPICAS */}
      <section className="py-24 bg-white border-b border-[#1E293B]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs uppercase tracking-widest font-bold text-[#D97706] mb-3">Aplicaciones</h2>
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] mb-4">
              Soluciones de Doblado B2B
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#F8F9FA] border border-[#1E293B]/5 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#059669]/10 text-[#059669] mb-6">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-[#0F172A] mb-3">{item.title}</h4>
                <p className="text-sm text-[#1E293B]/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FICHA TÉCNICA MB8 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h4 className="text-xl font-bold text-[#0F172A] mb-8 text-center">Ficha Técnica de la Dobladora CNC</h4>
            <div className="bg-[#F8F9FA] rounded-2xl border border-[#1E293B]/5 overflow-hidden">
              {specs.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex justify-between p-4 text-sm ${idx !== specs.length - 1 ? "border-b border-[#1E293B]/5" : ""}`}
                >
                  <span className="font-semibold text-[#1E293B]/70">{item.label}</span>
                  <span className="font-bold text-[#0F172A] text-right">{item.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FORMULARIO DE COTIZACIÓN */}
      <section id="cotizar-doblez" className="py-24 bg-[#F8F9FA] border-t border-[#1E293B]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ContactForm 
              title="Cotizar Doblez CNC"
              subtitle="Envíenos el plano de doblez con la especificación de ángulos, calibres, longitudes y tipo de chapa metálica requerida."
              defaultService="Doblez"
              submitButtonText="Solicitar Cotización de Doblez"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
