"use client";

import React from "react";
import { motion } from "framer-motion";
import { Settings, ShieldCheck, Zap, ArrowRight, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function CorteLaserPage() {
  const specs = [
    { label: "Tecnología de Fuente", val: "Láser de Fibra Óptica (Fiber Laser)" },
    { label: "Marca del Equipo", val: "Senfeng Laser Technology" },
    { label: "Área de Trabajo de Mesa", val: "3000 mm x 1500 mm" },
    { label: "Precisión de Posicionamiento", val: "±0.03 mm" },
    { label: "Potencia del Láser", val: "Hasta 6000W (6 kW)" }
  ];

  const capacities = [
    { material: "Acero al Carbón", thickness: "Hasta 25 mm (1\")", desc: "Corte rápido y limpio con oxígeno o nitrógeno para acabados de alta calidad." },
    { material: "Acero Inoxidable", thickness: "Hasta 16 mm (5/8\")", desc: "Corte por nitrógeno a alta presión que previene la oxidación de los bordes." },
    { material: "Aluminio", thickness: "Hasta 12 mm (1/2\")", desc: "Procesamiento ágil sin distorsiones térmicas para piezas estructurales esbeltas." },
    { material: "Latón y Cobre", thickness: "Hasta 8 mm (5/16\")", desc: "Capacidad de corte de materiales altamente reflectantes mediante tecnología de fibra estable." }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1E293B] font-sans antialiased overflow-x-hidden flex flex-col">
      <Navbar />

      {/* HERO CORTE LÁSER */}
      <section className="relative py-20 bg-gradient-to-b from-[#F8F9FA] to-white border-b border-[#1E293B]/5 overflow-hidden">
        <div className="absolute right-[-10%] top-[-10%] w-[400px] h-[400px] text-[#059669]/5 pointer-events-none select-none">
          <Settings className="w-full h-full animate-[spin_50s_linear_infinite]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#059669]/10 text-[#059669] text-xs font-semibold uppercase tracking-wider mb-6">
              <span>Manufactura de Lámina y Placa</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0F172A] leading-tight mb-6">
              Corte Láser de Fibra de <span className="text-[#059669]">Alta Velocidad y Precisión</span>
            </h1>
            
            <p className="text-lg text-[#1E293B]/80 leading-relaxed mb-8">
              Ofrecemos servicios de corte por láser de fibra utilizando equipos **Senfeng** de última generación. Logramos geometrías complejas con bordes limpios, libres de rebabas y listos para procesos de ensamble o soldadura directa.
            </p>

            <a
              href="#cotizar-laser"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-[#059669] hover:bg-[#047857] shadow-md hover:shadow-lg transition-all"
            >
              Cotizar Corte de Placa
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CAPACIDADES Y ESPESORES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <h2 className="text-xs uppercase tracking-widest font-bold text-[#D97706] mb-3">Materiales</h2>
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] mb-4">
              Espesores de Corte Garantizados
            </h3>
            <p className="text-sm text-[#1E293B]/70">
              Nuestra fuente láser de fibra nos permite procesar una amplia gama de metales ferrosos y no ferrosos con repetibilidad micrométrica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capacities.map((cap, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F8F9FA] border border-[#1E293B]/5 hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-[#D97706] block mb-1 uppercase tracking-wider">{cap.material}</span>
                  <h4 className="text-xl font-black text-[#0F172A] mb-3">{cap.thickness}</h4>
                  <p className="text-xs text-[#1E293B]/70 leading-relaxed">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* DETALLES DE MAQUINARIA SENFENG */}
      <section className="py-24 bg-[#F8F9FA] border-y border-[#1E293B]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            
            <div>
              <h2 className="text-xs uppercase tracking-widest font-bold text-[#D97706] mb-3">Infraestructura</h2>
              <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] mb-6">
                Tecnología de Fibra Jinan Senfeng
              </h3>
              <p className="text-sm sm:text-base text-[#1E293B]/80 leading-relaxed mb-6">
                Operamos con equipos de corte láser de fibra de **Jinan Senfeng Laser Technology**, líderes en automatización industrial. El cabezal de enfoque automático y el sistema de control CNC inteligente permiten realizar anidaciones mecánicas (*nesting*) eficientes que optimizan el rendimiento de la lámina, reduciendo drásticamente el desperdicio de material y disminuyendo los costos de su proyecto.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-[#1E293B]/80">
                  <ShieldCheck className="w-4.5 h-4.5 text-[#059669]" />
                  <span>Corte limpio sin distorsiones por calor</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#1E293B]/80">
                  <ShieldCheck className="w-4.5 h-4.5 text-[#059669]" />
                  <span>Velocidades de corte de hasta 80 m/min</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#1E293B]/80">
                  <ShieldCheck className="w-4.5 h-4.5 text-[#059669]" />
                  <span>Repetibilidad de posicionamiento de &plusmn;0.02 mm</span>
                </div>
              </div>
            </div>

            {/* Simulación visual de cabezal láser */}
            <div className="mt-12 lg:mt-0">
              <div className="aspect-video bg-[#0F172A] rounded-2xl p-8 shadow-xl border border-white/10 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(5,150,105,0.1)_0%,transparent_80%)]"></div>
                <div className="flex justify-between items-start relative z-10">
                  <span className="text-[10px] font-mono text-[#D97706] bg-[#D97706]/10 px-2 py-0.5 rounded">FIBER LASER CORE</span>
                  <span className="text-[9px] font-mono text-white/40">BEAM OUTPUT: OK</span>
                </div>

                <div className="flex-1 flex items-center justify-center relative z-10">
                  {/* Gráfica del chorro láser en SVG */}
                  <svg className="w-40 h-20 text-white/20" viewBox="0 0 100 40">
                    <line x1="50" y1="0" x2="50" y2="35" stroke="#059669" strokeWidth="2" className="animate-pulse" />
                    <line x1="20" y1="35" x2="80" y2="35" stroke="currentColor" strokeWidth="1" />
                    <circle cx="50" cy="35" r="2" fill="#D97706" />
                    <path d="M45,35 L40,30 L60,30 L55,35 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>

                <div className="border-t border-white/10 pt-4 flex justify-between text-xs font-mono relative z-10">
                  <span className="text-white/60">Anidación inteligente:</span>
                  <span className="text-[#059669] font-bold">SigmaNEST Integrado</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ESPECIFICACIONES TÉCNICAS ESCRITAS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h4 className="text-xl font-bold text-[#0F172A] mb-8 text-center">Ficha Técnica del Servicio de Corte</h4>
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
      <section id="cotizar-laser" className="py-24 bg-[#F8F9FA] border-t border-[#1E293B]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ContactForm 
              title="Cotizar Corte Láser de Metales"
              subtitle="Suba sus archivos vectoriales (.DXF, .DWG) o croquis acotados en PDF para realizar el cálculo del perímetro de corte y proporcionarle su propuesta."
              defaultService="Corte Laser"
              submitButtonText="Solicitar Cotización de Corte"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
