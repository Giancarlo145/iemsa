"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Shield, CheckCircle, Target, Users, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ConocenosPage() {
  const history = [
    { year: "2003", title: "Fundación de IEMSA", desc: "Inicio de operaciones en la Ciudad de México enfocado en el tallado y reparación de engranes convencionales para la industria de manufactura local." },
    { year: "2013", title: "Expansión y Tecnología CNC", desc: "Adquisición de los primeros centros de maquinado vertical CNC y tornos automatizados de alta velocidad, ampliando nuestra precisión y volumen." },
    { year: "2018", title: "Certificación ISO 9001", desc: "Estandarización de nuestros procesos clave bajo la norma ISO 9001:2015, garantizando trazabilidad total de materiales y control dimensional riguroso." },
    { year: "2023", title: "20 Años de Liderazgo B2B", desc: "Consolidación como socio estratégico para plantas industriales en todo el país, operando con tecnología CNC Citizen de última generación." }
  ];

  const values = [
    { title: "Calidad Absoluta", desc: "Fabricamos componentes mecánicos bajo estrictos estándares AGMA y especificaciones de tolerancia micrométrica.", icon: Shield },
    { title: "Compromiso", desc: "Entendemos la urgencia industrial. Cumplimos con los plazos pactados para minimizar tiempos muertos en su línea de producción.", icon: CheckCircle },
    { title: "Precisión Técnica", desc: "Metrología de vanguardia y personal altamente capacitado para asegurar que cada pieza coincida perfectamente con sus planos.", icon: Target },
    { title: "Innovación Continua", desc: "Inversión constante en maquinaria CNC avanzada y software CAD/CAM de última generación.", icon: Users }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1E293B] font-sans antialiased overflow-x-clip flex flex-col">
      <Navbar />

      {/* HERO CONÓCENOS */}
      <section className="relative py-24 bg-white border-b border-[#1E293B]/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(5,150,105,0.03)_0%,transparent_70%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D97706]/10 text-[#D97706] text-xs font-semibold uppercase tracking-wider mb-6">
              <Award className="w-3.5 h-3.5" />
              <span>Nuestra Trayectoria</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0F172A] leading-tight mb-6">
              Líderes en Soluciones de Manufactura Industrial desde hace <span className="text-[#059669]">20 años</span>
            </h1>
            
            <p className="text-lg text-[#1E293B]/80 leading-relaxed">
              En **IEMSA** estamos comprometidos con la excelencia, la innovación y la precisión. Nos dedicamos a ser el socio estratégico preferido de la industria de manufactura en México, proveyendo refacciones e ingeniería de alta calidad que impulsan la productividad de su planta.
            </p>
          </div>
        </div>
      </section>

      {/* NUESTRA HISTORIA */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-xs uppercase tracking-widest font-bold text-[#D97706] mb-3">Cronología</h2>
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A]">
              Nuestra Historia
            </h3>
          </div>

          <div className="relative border-l border-[#1E293B]/10 max-w-4xl mx-auto pl-6 sm:pl-10 space-y-12">
            {history.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Indicador de Línea de Tiempo */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#F8F9FA] border-2 border-[#059669] flex items-center justify-center group-hover:bg-[#059669] transition-colors">
                  <div className="w-1.5 h-1.5 bg-[#F8F9FA] rounded-full"></div>
                </div>

                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#1E293B]/5 shadow-sm group-hover:shadow-md transition-shadow">
                  <span className="text-sm font-extrabold text-[#D97706] font-mono">{item.year}</span>
                  <h4 className="text-xl font-bold text-[#0F172A] mt-1 mb-2">{item.title}</h4>
                  <p className="text-sm text-[#1E293B]/70 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* MISIÓN Y VISIÓN */}
      <section className="py-24 bg-white border-y border-[#1E293B]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="p-8 rounded-3xl bg-[#F8F9FA] border border-[#1E293B]/5 relative overflow-hidden">
              <span className="absolute -right-8 -bottom-8 text-9xl font-extrabold text-[#059669]/5 pointer-events-none select-none">M</span>
              <h4 className="text-2xl font-bold text-[#0F172A] mb-4">Nuestra Misión</h4>
              <p className="text-sm sm:text-base text-[#1E293B]/80 leading-relaxed">
                Proveer soluciones de maquinado y fabricación de engranes de alta precisión que superen las expectativas de nuestros clientes industriales, a través del uso de tecnología de punta, estricto control de calidad y un equipo de ingeniería altamente calificado.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8F9FA] border border-[#1E293B]/5 relative overflow-hidden">
              <span className="absolute -right-8 -bottom-8 text-9xl font-extrabold text-[#D97706]/5 pointer-events-none select-none">V</span>
              <h4 className="text-2xl font-bold text-[#0F172A] mb-4">Nuestra Visión</h4>
              <p className="text-sm sm:text-base text-[#1E293B]/80 leading-relaxed">
                Ser reconocidos a nivel nacional como el socio estratégico preferido en maquinados industriales CNC de alta complejidad, distinguiéndonos por nuestra confiabilidad, plazos de entrega óptimos y excelente soporte de ingeniería.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* NUESTROS VALORES */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-xs uppercase tracking-widest font-bold text-[#D97706] mb-3">Principios</h2>
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A]">
              Nuestros Valores Corporativos
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-[#1E293B]/5 shadow-sm text-center flex flex-col items-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#059669]/10 text-[#059669] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-[#0F172A] mb-2">{val.title}</h4>
                  <p className="text-xs text-[#1E293B]/70 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* EQUIPO E INFRAESTRUCTURA */}
      <section className="py-24 bg-white border-t border-[#1E293B]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs uppercase tracking-widest font-bold text-[#D97706] mb-3">Infraestructura</h2>
            <h3 className="text-3xl font-bold tracking-tight text-[#0F172A] mb-4">
              Equipo y Capacidad Instalada
            </h3>
            <p className="text-sm text-[#1E293B]/70">
              Contamos con naves industriales equipadas con grúas viajeras, áreas de maquinado CNC y laboratorios de control dimensional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Tarjeta Planta */}
            <div className="p-6 rounded-2xl bg-[#F8F9FA] border border-[#1E293B]/5 text-center">
              <div className="aspect-video bg-[#0F172A] rounded-xl flex items-center justify-center text-white/20 mb-4 font-mono text-xs">
                [Nave de Maquinado CNC]
              </div>
              <h4 className="font-bold text-[#0F172A] mb-1">Nave de Maquinado CNC</h4>
              <p className="text-xs text-[#1E293B]/70">Área climatizada equipada con tornos automáticos, centros de maquinado vertical y fresadoras CNC.</p>
            </div>

            {/* Tarjeta Ingeniería */}
            <div className="p-6 rounded-2xl bg-[#F8F9FA] border border-[#1E293B]/5 text-center">
              <div className="aspect-video bg-[#0F172A] rounded-xl flex items-center justify-center text-white/20 mb-4 font-mono text-xs">
                [Oficina de Diseño y CAD]
              </div>
              <h4 className="font-bold text-[#0F172A] mb-1">Departamento de Ingeniería</h4>
              <p className="text-xs text-[#1E293B]/70">Modelado CAD en SolidWorks, programación de CAM e ingeniería inversa por escaneo 3D.</p>
            </div>

            {/* Tarjeta Almacén */}
            <div className="p-6 rounded-2xl bg-[#F8F9FA] border border-[#1E293B]/5 text-center">
              <div className="aspect-video bg-[#0F172A] rounded-xl flex items-center justify-center text-white/20 mb-4 font-mono text-xs">
                [Almacén de Aceros Certificados]
              </div>
              <h4 className="font-bold text-[#0F172A] mb-1">Almacén de Materias Primas</h4>
              <p className="text-xs text-[#1E293B]/70">Inventario permanente de barras redondas de aceros especiales (4140, 8620) y bronces.</p>
            </div>

          </div>

          {/* CTA Visita */}
          <div className="mt-20 p-8 sm:p-12 rounded-2xl bg-[#0F172A] text-white flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-2">¿Le gustaría conocer nuestras instalaciones?</h4>
              <p className="text-sm text-white/70 max-w-xl">Agende una visita guiada con nuestro personal de ventas técnicas y descubra nuestra capacidad instalada en Azcapotzalco.</p>
            </div>
            <a
              href="/contacto"
              className="w-full md:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-lg text-sm font-semibold text-white bg-[#059669] hover:bg-[#047857] transition-all shadow-md text-center"
            >
              Agendar Visita de Planta
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
