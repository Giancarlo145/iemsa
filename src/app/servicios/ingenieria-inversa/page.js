"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, ShieldCheck, Settings, ArrowRight, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function IngenieriaInversaPage() {
  const steps = [
    {
      title: "Escaneo y Medición",
      desc: "Digitalización física de la pieza dañada o de muestra con escáneres láser 3D ópticos y herramientas de metrología avanzadas."
    },
    {
      title: "Modelado 3D CAD",
      desc: "Reconstrucción paramétrica del componente en SolidWorks a partir de la nube de puntos, corrigiendo desgastes o fracturas de la muestra."
    },
    {
      title: "Plano Técnico",
      desc: "Generación de planos de fabricación normalizados en 2D con tablas de tolerancias geométricas y especificaciones de materiales."
    }
  ];

  const specs = {
    medicion: [
      "Escáneres 3D ópticos de luz azul",
      "Máquinas de Medición por Coordenadas (CMM)",
      "Micrómetros y calibradores digitales Mitutoyo",
      "Durómetros portátiles para análisis de dureza"
    ],
    software: [
      "SolidWorks CAD para modelado paramétrico",
      "Mastercam para generación de código CNC G",
      "AutoCAD para planos 2D normalizados",
      "Análisis de elemento finito (FEA) estructural"
    ]
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1E293B] font-sans antialiased overflow-x-clip flex flex-col">
      <Navbar />

      {/* HERO SUBPÁGINA */}
      <section className="relative py-20 bg-gradient-to-b from-[#F8F9FA] to-white border-b border-[#1E293B]/5 overflow-hidden">
        <div className="absolute right-[-10%] top-[-10%] w-[400px] h-[400px] text-[#059669]/5 pointer-events-none select-none">
          <Settings className="w-full h-full animate-[spin_50s_linear_infinite]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#059669]/10 text-[#059669] text-xs font-semibold uppercase tracking-wider mb-6">
              <span>Ingeniería Avanzada</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0F172A] leading-tight mb-6">
              Ingeniería Inversa y <span className="text-[#059669]">Diseño Mecánico</span>
            </h1>
            
            <p className="text-lg text-[#1E293B]/80 leading-relaxed mb-8">
              Transformamos componentes mecánicos físicos en modelos digitales de alta precisión. Diagnosticamos fallas, rediseñamos piezas desgastadas y fabricamos refacciones sin planos originales.
            </p>

            <a
              href="#cotizar-inversa"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-[#059669] hover:bg-[#047857] shadow-md hover:shadow-lg transition-all"
            >
              Solicitar Análisis de Pieza
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* PROCESO DE DIGITALIZACIÓN */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs uppercase tracking-widest font-bold text-[#D97706] mb-3">Metodología</h2>
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] mb-4">
              Nuestro Proceso de Digitalización
            </h3>
            <p className="text-sm text-[#1E293B]/70">
              Garantizamos la replicabilidad exacta de sus componentes críticos en tres etapas estructuradas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#F8F9FA] border border-[#1E293B]/5 relative hover:shadow-md transition-shadow"
              >
                <span className="absolute top-6 right-8 text-4xl font-extrabold text-[#D97706]/10">0{idx + 1}</span>
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#059669]/10 text-[#059669] mb-6">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-[#0F172A] mb-3">{step.title}</h4>
                <p className="text-sm text-[#1E293B]/70 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CASOS DE ESTUDIO / EJEMPLOS */}
      <section className="py-24 bg-[#F8F9FA] border-y border-[#1E293B]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs uppercase tracking-widest font-bold text-[#D97706] mb-3">Casos de Éxito</h2>
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] mb-4">
              Ejemplos de Ingeniería Inversa
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Ejemplo 1 */}
            <div className="bg-white rounded-3xl border border-[#1E293B]/5 overflow-hidden shadow-sm">
              <div className="aspect-video bg-[#0F172A] relative flex items-center justify-center p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.1)_0%,transparent_70%)]"></div>
                <Settings className="w-24 h-24 text-white/5 animate-[spin_50s_linear_infinite]" />
                <div className="absolute bottom-4 left-6 text-xs text-white/60 font-mono">
                  PART_TYPE: ENGRANE RECTO DE BRONCE
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-lg font-bold text-[#0F172A] mb-2">Reconstrucción de Engrane de Bronce Dañado</h4>
                <p className="text-sm text-[#1E293B]/70 leading-relaxed">
                  A partir de una muestra física con dientes fracturados y desgaste severo, escaneamos tridimensionalmente la pieza para obtener la geometría del módulo original. El modelado CAD corrigió el paso del engrane logrando una precisión final de &plusmn;0.01 mm en manufactura.
                </p>
              </div>
            </div>

            {/* Ejemplo 2 */}
            <div className="bg-white rounded-3xl border border-[#1E293B]/5 overflow-hidden shadow-sm">
              <div className="aspect-video bg-[#0F172A] relative flex items-center justify-center p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(5,150,105,0.1)_0%,transparent_70%)]"></div>
                <Layers className="w-24 h-24 text-white/5" />
                <div className="absolute bottom-4 left-6 text-xs text-white/60 font-mono">
                  PART_TYPE: COMPONENTE COMPLEJO CAD
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-lg font-bold text-[#0F172A] mb-2">Modelado CAD de Componente Crítico de Reductor</h4>
                <p className="text-sm text-[#1E293B]/70 leading-relaxed">
                  Escaneo 3D y análisis metalúrgico de flecha motriz importada para identificar la aleación exacta y el tratamiento térmico. Diseñamos el plano constructivo en SolidWorks para que la planta pudiera fabricarla en México de forma rápida y a menor costo.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ESPECIFICACIONES TÉCNICAS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs uppercase tracking-widest font-bold text-[#D97706] mb-3">Infraestructura de Diseño</h2>
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A]">
              Especificaciones Técnicas y Herramientas
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            
            <div className="p-8 rounded-2xl bg-[#F8F9FA] border border-[#1E293B]/5">
              <h4 className="text-lg font-bold text-[#0F172A] mb-4 pb-2 border-b border-[#1E293B]/10">Herramientas de Medición</h4>
              <ul className="space-y-3 text-sm text-[#1E293B]/80">
                {specs.medicion.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[#D97706]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-[#F8F9FA] border border-[#1E293B]/5">
              <h4 className="text-lg font-bold text-[#0F172A] mb-4 pb-2 border-b border-[#1E293B]/10">Software de Ingeniería</h4>
              <ul className="space-y-3 text-sm text-[#1E293B]/80">
                {specs.software.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[#059669]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* FORMULARIO DE CONTACTO */}
      <section id="cotizar-inversa" className="py-24 bg-[#F8F9FA] border-t border-[#1E293B]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ContactForm 
              title="Solicitar Análisis de Ingeniería Inversa"
              subtitle="Envíenos fotografías de su pieza técnica o de la muestra dañada para iniciar una pre-evaluación y cotización del proceso de modelado CAD."
              defaultService="Ingeniería Inversa"
              submitButtonText="Solicitar Análisis Técnico"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
