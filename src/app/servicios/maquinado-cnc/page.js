"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Settings, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function MaquinadoCncPage() {
  const capabilities = [
    {
      title: "Fresado CNC de 3 y 5 Ejes",
      desc: "Fresado de piezas complejas de geometría tridimensional en un solo montaje, reduciendo tiempos y garantizando alineaciones perfectas."
    },
    {
      title: "Torneado Tipo Suizo (Swiss-Type)",
      desc: "Ideal para producción masiva de piezas esbeltas y de diámetros pequeños con tolerancias extremas e increíble acabado superficial."
    },
    {
      title: "Maquinado de Alta Velocidad",
      desc: "Desbaste rápido de materiales con excelente disipación de calor para mantener la estabilidad dimensional de la pieza."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1E293B] font-sans antialiased overflow-x-hidden flex flex-col">
      <Navbar />

      {/* HERO SUBPÁGINA */}
      <section className="relative py-20 bg-gradient-to-b from-[#F8F9FA] to-white border-b border-[#1E293B]/5 overflow-hidden">
        <div className="absolute right-[-10%] top-[-10%] w-[400px] h-[400px] text-[#059669]/5 pointer-events-none select-none">
          <Settings className="w-full h-full animate-[spin_50s_linear_infinite]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#059669]/10 text-[#059669] text-xs font-semibold uppercase tracking-wider mb-6">
              <span>Capacidades de Maquinaria</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0F172A] leading-tight mb-6">
              Mecanizado CNC de <span className="text-[#059669]">Tolerancia Micrométrica</span>
            </h1>
            
            <p className="text-lg text-[#1E293B]/80 leading-relaxed mb-8">
              Soluciones avanzadas de maquinado en centros verticales y tornos automatizados de control numérico. Fabricamos componentes complejos garantizando tolerancias de hasta 5 micras.
            </p>

            <a
              href="#cotizar-maquinado"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-[#059669] hover:bg-[#047857] shadow-md hover:shadow-lg transition-all"
            >
              Solicitar Cotización de Pieza
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CAPACIDADES DETALLADAS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <h2 className="text-xs uppercase tracking-widest font-bold text-[#D97706] mb-3">Nuestras Máquinas</h2>
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A]">
              Capacidades de Maquinado de Precisión
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#F8F9FA] border border-[#1E293B]/5 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#059669]/10 text-[#059669] mb-6">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-[#0F172A] mb-3">{cap.title}</h4>
                  <p className="text-sm text-[#1E293B]/70 leading-relaxed">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* INFRAESTRUCTURA DESTACADA (CNC Citizen Cincom I-05) */}
      <section id="maquinaria-detalle" className="py-24 bg-[#F8F9FA] border-y border-[#1E293B]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            
            <div>
              <h2 className="text-xs uppercase tracking-widest font-bold text-[#D97706] mb-3">Tecnología Estrella</h2>
              <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] mb-6">
                Citizen Cincom I-05: Torneado Suizo Automatizado
              </h3>
              <p className="text-sm sm:text-base text-[#1E293B]/80 leading-relaxed mb-6">
                Nuestra planta está equipada con el torno automático **Citizen Cincom I-05**, una máquina de cabezal móvil diseñada para la manufactura de componentes cilíndricos largos y delgados que requieren operaciones de fresado y torneado simultáneo en una sola fase. Esto nos permite asegurar tiempos de entrega inigualables y una precisión nanométrica para la industria de conectores, automotriz y médica.
              </p>

              <div className="grid grid-cols-2 gap-4 border-t border-[#1E293B]/10 pt-6">
                <div>
                  <span className="text-[11px] font-mono text-[#D97706] block">Tolerancia de Maquinado</span>
                  <span className="text-lg font-bold text-[#0F172A]">&plusmn; 0.005 mm</span>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#D97706] block">Producción</span>
                  <span className="text-lg font-bold text-[#0F172A]">Serie y Prototipo</span>
                </div>
              </div>
            </div>

            {/* Simulación visual de plano de máquina */}
            <div className="mt-12 lg:mt-0">
              <div className="aspect-video bg-[#0F172A] rounded-2xl p-6 shadow-xl border border-white/10 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-30"></div>
                
                <div className="flex justify-between items-start relative z-10">
                  <span className="text-[10px] font-mono text-[#059669] bg-[#059669]/10 px-2 py-0.5 rounded">AXIS OVERVIEW</span>
                  <span className="text-[9px] font-mono text-white/40">SYS STATUS: ONLINE</span>
                </div>

                <div className="flex-1 flex items-center justify-center relative z-10">
                  {/* Gráfica simplificada de ejes CNC en SVG */}
                  <svg className="w-48 h-24 text-white/20" viewBox="0 0 100 50">
                    <line x1="10" y1="25" x2="90" y2="25" stroke="currentColor" strokeWidth="1" strokeDasharray="2" />
                    <line x1="50" y1="5" x2="50" y2="45" stroke="currentColor" strokeWidth="1" strokeDasharray="2" />
                    <circle cx="50" cy="25" r="15" fill="none" stroke="#D97706" strokeWidth="1.5" />
                    <circle cx="35" cy="25" r="2" fill="#059669" />
                    <circle cx="65" cy="25" r="2" fill="#059669" />
                    <text x="52" y="15" fill="white" fontSize="4" fontFamily="monospace">Eje Z</text>
                    <text x="70" y="23" fill="white" fontSize="4" fontFamily="monospace">Eje X</text>
                  </svg>
                </div>

                <div className="border-t border-white/10 pt-4 flex justify-between text-xs font-mono relative z-10">
                  <span className="text-white/60">Operación continua:</span>
                  <span className="text-[#059669] font-bold">24 Horas / 7 Días</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTROL DE CALIDAD CERTIFICADO */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            
            <div className="order-2 lg:order-1 mt-12 lg:mt-0">
              <div className="aspect-video bg-[#0F172A] rounded-2xl p-6 shadow-xl border border-white/10 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(5,150,105,0.08)_0%,transparent_80%)]"></div>
                <div className="flex justify-between items-start relative z-10">
                  <span className="text-[10px] font-mono text-[#D97706] bg-[#D97706]/10 px-2 py-0.5 rounded">CMM METROLOGY</span>
                  <span className="text-[9px] font-mono text-white/40">DEV: MITUTOYO CMM</span>
                </div>
                
                <div className="flex-1 flex items-center justify-center relative z-10">
                  {/* Dibujo técnico minimalista */}
                  <div className="w-32 h-20 border border-white/10 rounded-md relative flex items-center justify-center bg-white/5">
                    <div className="w-16 h-12 border border-dashed border-[#059669]/40 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-[#D97706]/20 rounded-full"></div>
                    </div>
                    {/* Indicador de coordenadas */}
                    <div className="absolute top-2 left-2 text-[8px] font-mono text-white/50">
                      X: 0.0022<br/>Y: -0.0014<br/>Z: 0.0003
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4 flex justify-between text-xs font-mono relative z-10">
                  <span className="text-white/60">Tasa de aprobación:</span>
                  <span className="text-[#059669] font-bold">99.87%</span>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-xs uppercase tracking-widest font-bold text-[#D97706] mb-3">Aseguramiento</h2>
              <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] mb-6">
                Laboratorio de Metrología y Reportes de Inspección
              </h3>
              <p className="text-sm sm:text-base text-[#1E293B]/80 leading-relaxed mb-6">
                Todas las piezas producidas pasan por nuestro control de calidad dimensional. Contamos con máquinas de medición de coordenadas (CMM) automáticas y calibradores Mitutoyo. A solicitud de su departamento de compras o ingeniería, podemos emitir reportes de inspección dimensional individuales y certificados de composición química del acero.
              </p>

              <ul className="space-y-3 text-sm text-[#1E293B]/80">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4.5 h-4.5 text-[#059669]" />
                  <span>Equipo CMM calibrado bajo normas NIST</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4.5 h-4.5 text-[#059669]" />
                  <span>Certificación ISO 9001:2015 en procesos clave</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4.5 h-4.5 text-[#059669]" />
                  <span>Inspección no destructiva de grietas por partículas magnéticas</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* FORMULARIO DE COTIZACIÓN */}
      <section id="cotizar-maquinado" className="py-24 bg-[#F8F9FA] border-t border-[#1E293B]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ContactForm 
              title="Cotizar Maquinado de Pieza"
              subtitle="Rellene los datos de su pieza técnica para que nuestro departamento de cotizaciones realice el estudio de tiempos e ingeniería de manufactura."
              defaultService="Maquinado CNC"
              submitButtonText="Solicitar Cotización de Maquinado"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
