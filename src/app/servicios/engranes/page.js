"use client";

import React from "react";
import { motion } from "framer-motion";
import { Settings, ShieldCheck, Award, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function EngranesPage() {
  const typesOfGears = [
    { name: "Cilíndricos Rectos", desc: "Transmisión de potencia en ejes paralelos con dientes tallados con precisión absoluta." },
    { name: "Cónicos", desc: "Transmisión de movimiento en ejes que se cruzan, maquinados con perfiles cónicos normalizados." },
    { name: "Cilíndricos Helicoidales", desc: "Funcionamiento suave y silencioso para altas velocidades y cargas pesadas." },
    { name: "Sinfín y Corona", desc: "Alta reducción de velocidad en espacios compactos con alta resistencia al desgaste." },
    { name: "Dientes Interiores", desc: "Engranes con dentado interno para transmisiones planetarias y coples especiales." }
  ];

  const materials = [
    { name: "Bronce Fosforado", desc: "Ideal para coronas de sinfín por su excelente coeficiente de fricción." },
    { name: "Acero de Aleación (SAE 4140, 8620)", desc: "Tratados térmicamente (temple y revenido) para máxima dureza superficial." },
    { name: "Nylon / Delrin / Nylamid", desc: "Plásticos de ingeniería para aplicaciones de bajo ruido o libres de lubricación." },
    { name: "Acero Inoxidable (T-304, T-316)", desc: "Para la industria alimentaria, química y ambientes altamente corrosivos." }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1E293B] font-sans antialiased overflow-x-clip flex flex-col">
      <Navbar />

      {/* HERO SUBPÁGINA */}
      <section className="relative py-20 lg:py-28 bg-[#F8F9FA] border-b border-[#1E293B]/5 overflow-hidden">
        {/* Cuadrícula de ingeniería de fondo */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-35 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Columna Izquierda: Textos y Botones */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#059669]/10 text-[#059669] text-xs font-semibold uppercase tracking-wider mb-6 w-fit">
                <span>Capacidades de Manufactura</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0F172A] leading-tight mb-6">
                Fabricación y Generado de <span className="text-[#059669]">Engranes de Alta Precisión</span>
              </h1>
              
              <p className="text-lg text-[#1E293B]/80 leading-relaxed mb-8">
                Somos especialistas en la manufactura de engranes industriales de todo tipo, bajo normas de calidad AGMA y tolerancias micrométricas estrechas. Fabricamos a partir de muestras físicas (ingeniería inversa) o planos de diseño.
              </p>

              <div>
                <a
                  href="#cotizar-engrane"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-[#059669] hover:bg-[#047857] shadow-md hover:shadow-lg transition-all"
                >
                  Cotizar Engranes a Medida
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Columna Derecha: Imagen del Engrane */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] xl:aspect-square"
            >
              <img 
                src="/imagenes/engranes.jpg" 
                alt="Engranes industriales IEMSA de precisión" 
                className="w-full h-full object-cover rounded-2xl shadow-lg border border-[#1E293B]/10"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* TIPOS DE ENGRANES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <h2 className="text-xs uppercase tracking-widest font-bold text-[#D97706] mb-3">Nuestra Gama</h2>
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A]">
              Tipos de Engranes que Fabricamos
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {typesOfGears.map((gear, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F8F9FA] border border-[#1E293B]/5 hover:border-[#D97706]/20 transition-all group"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#D97706]/10 text-[#D97706] mb-4 group-hover:scale-105 transition-transform">
                  <Settings className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-[#0F172A] mb-2">{gear.name}</h4>
                <p className="text-sm text-[#1E293B]/70 leading-relaxed">{gear.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* GALERÍA DE PRODUCTOS DESTACADOS */}
      <section className="py-24 bg-[#F8F9FA] border-y border-[#1E293B]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs uppercase tracking-widest font-bold text-[#D97706] mb-3">Galería Técnica</h2>
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] mb-4">
              Componentes Fabricados en Planta
            </h3>
            <p className="text-sm text-[#1E293B]/70">
              Visualice la calidad de acabado superficial y la precisión geométrica de nuestras piezas terminadas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Pieza 1 */}
            <div className="bg-white rounded-3xl border border-[#1E293B]/5 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video bg-[#0F172A] relative flex items-center justify-center overflow-hidden p-6">
                {/* Vector Engrane Recto Representativo */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.15)_0%,transparent_70%)]"></div>
                <Settings className="w-32 h-32 text-[#D97706]/20 animate-[spin_50s_linear_infinite]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/40 font-mono text-xs border border-white/10 px-3 py-1.5 rounded-md bg-[#0F172A]/80 backdrop-blur-sm">
                    Engrane Recto de Bronce
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold text-[#0F172A] mb-2">Engrane Recto de Bronce Fosforado</h4>
                <p className="text-sm text-[#1E293B]/70 leading-relaxed">
                  Fabricado para cajas reductoras de alta carga de fricción. Maquinado de corona con perfil de diente involuta rectificado para asegurar un acoplamiento perfecto.
                </p>
              </div>
            </div>

            {/* Pieza 2 */}
            <div className="bg-white rounded-3xl border border-[#1E293B]/5 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video bg-[#0F172A] relative flex items-center justify-center overflow-hidden p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(5,150,105,0.15)_0%,transparent_70%)]"></div>
                <Settings className="w-32 h-32 text-[#059669]/20 animate-[spin_40s_linear_infinite]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/40 font-mono text-xs border border-white/10 px-3 py-1.5 rounded-md bg-[#0F172A]/80 backdrop-blur-sm">
                    Engrane Helicoidal de Acero
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold text-[#0F172A] mb-2">Engrane Helicoidal de Acero SAE 8620</h4>
                <p className="text-sm text-[#1E293B]/70 leading-relaxed">
                  Tallado en fresadora especial y tratado térmicamente mediante cementación para lograr dureza superficial óptima de hasta 60 HRC, con núcleo tenaz para soportar impactos.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* MATERIALES CERTIFICADOS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs uppercase tracking-widest font-bold text-[#D97706] mb-3">Trazabilidad</h2>
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] mb-4">
              Materiales Industriales con Certificado de Fábrica
            </h3>
            <p className="text-sm text-[#1E293B]/70">
              Garantizamos la durabilidad mecánica utilizando solo aleaciones certificadas y tratamientos térmicos controlados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {materials.map((mat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F8F9FA] border border-[#1E293B]/5 hover:shadow-md transition-shadow"
              >
                <div className="w-8 h-8 rounded-full bg-[#059669]/10 text-[#059669] flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#0F172A] mb-1.5">{mat.name}</h4>
                <p className="text-xs text-[#1E293B]/70 leading-relaxed">{mat.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FORMULARIO DE COTIZACIÓN */}
      <section id="cotizar-engrane" className="py-24 bg-[#F8F9FA] border-t border-[#1E293B]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ContactForm 
              title="Cotizar Fabricación de Engranes"
              subtitle="Envíenos los planos de su engrane (PDF, STEP, DXF) o las especificaciones dimensionales (módulo, número de dientes, diámetro exterior) para generar su cotización."
              defaultService="Fabricación de Engranes"
              submitButtonText="Solicitar Cotización de Engrane"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
