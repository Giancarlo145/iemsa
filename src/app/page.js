"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Settings,
  Wrench,
  Cpu,
  Layers,
  ShieldCheck,
  Clock,
  Truck,
  ArrowRight,
  ChevronRight,
  Award,
  Zap
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1E293B] font-sans antialiased overflow-x-hidden flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-[#F8F9FA] via-[#FFFFFF] to-[#F8F9FA]">
        
        {/* Engrane rotativo decorativo de fondo */}
        <div className="absolute right-[-10%] top-[10%] w-[500px] h-[500px] text-[#1E293B]/3 pointer-events-none select-none hidden lg:block">
          <Settings className="w-full h-full animate-[spin_60s_linear_infinite]" />
        </div>
        
        {/* Cuadrícula de ingeniería */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D97706]/10 text-[#D97706] text-xs font-semibold uppercase tracking-wider mb-6">
              <Award className="w-3.5 h-3.5" />
              <span>Precisión certificada B2B</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] leading-[1.1] mb-6">
              IEMSA: Ingeniería de Precisión en <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F172A] to-[#059669]">Engranes y Maquinados</span> Industriales
            </h1>
            
            <p className="text-lg sm:text-xl text-[#1E293B]/80 leading-relaxed max-w-2xl mb-10">
              Soluciones de alta calidad a la medida para la industria pesada y de manufactura. Diseñamos, maquinamos y recuperamos componentes con la más estricta tolerancia micrométrica del mercado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-base font-semibold text-white bg-[#059669] hover:bg-[#047857] shadow-lg hover:shadow-xl transition-all"
              >
                Solicitar Cotización
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/conocenos"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-base font-semibold text-[#0F172A] bg-white hover:bg-gray-50 border border-gray-200 shadow-sm transition-all"
              >
                Ver Capacidades Técnicas
              </Link>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-16 mt-16 border-t border-[#1E293B]/10 max-w-2xl">
              <div>
                <p className="text-3xl font-extrabold text-[#0F172A]">0.005mm</p>
                <p className="text-xs uppercase tracking-wider font-semibold text-[#1E293B]/60 mt-1">Tolerancia Máxima</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-[#0F172A]">24/7</p>
                <p className="text-xs uppercase tracking-wider font-semibold text-[#1E293B]/60 mt-1">Soporte Técnico</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-3xl font-extrabold text-[#0F172A]">100%</p>
                <p className="text-xs uppercase tracking-wider font-semibold text-[#1E293B]/60 mt-1">Acero Certificado</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN DE LOGOS INDUSTRIALES (SOCIAL PROOF) */}
      <section className="py-12 bg-white border-b border-[#1E293B]/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-[#1E293B]/55 mb-8">
            Empresas líderes que confían en nuestra precisión técnica
          </p>
          
          <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-white after:to-transparent">
            <div className="w-full inline-flex flex-nowrap overflow-hidden">
              
              {/* Primer bloque de logos */}
              <div className="flex items-center justify-start gap-16 animate-infinite-scroll flex-shrink-0 min-w-full py-2">
                <img src="/empresas/1-1.webp" alt="Empresa aliada" className="h-10 w-auto object-contain flex-shrink-0 max-w-none grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                <img src="/empresas/2.webp" alt="Empresa aliada" className="h-10 w-auto object-contain flex-shrink-0 max-w-none grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                <img src="/empresas/3-1.webp" alt="Empresa aliada" className="h-10 w-auto object-contain flex-shrink-0 max-w-none grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                <img src="/empresas/4-1.webp" alt="Empresa aliada" className="h-10 w-auto object-contain flex-shrink-0 max-w-none grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                <img src="/empresas/5.webp" alt="Empresa aliada" className="h-10 w-auto object-contain flex-shrink-0 max-w-none grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                <img src="/empresas/6.webp" alt="Empresa aliada" className="h-10 w-auto object-contain flex-shrink-0 max-w-none grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                <img src="/empresas/7-1.webp" alt="Empresa aliada" className="h-10 w-auto object-contain flex-shrink-0 max-w-none grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                <img src="/empresas/8-1.webp" alt="Empresa aliada" className="h-10 w-auto object-contain flex-shrink-0 max-w-none grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                <img src="/empresas/9.webp" alt="Empresa aliada" className="h-10 w-auto object-contain flex-shrink-0 max-w-none grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                <img src="/empresas/10.webp" alt="Empresa aliada" className="h-10 w-auto object-contain flex-shrink-0 max-w-none grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                <img src="/empresas/11.webp" alt="Empresa aliada" className="h-10 w-auto object-contain flex-shrink-0 max-w-none grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                <img src="/empresas/12-1.webp" alt="Empresa aliada" className="h-10 w-auto object-contain flex-shrink-0 max-w-none grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                <img src="/empresas/13-1.webp" alt="Empresa aliada" className="h-10 w-auto object-contain flex-shrink-0 max-w-none grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
              </div>

              {/* Segundo bloque de logos (duplicado para scroll continuo) */}
              <div className="flex items-center justify-start gap-16 animate-infinite-scroll flex-shrink-0 min-w-full py-2" aria-hidden="true">
                <img src="/empresas/1-1.webp" alt="Empresa aliada" className="h-10 w-auto object-contain flex-shrink-0 max-w-none grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                <img src="/empresas/2.webp" alt="Empresa aliada" className="h-10 w-auto object-contain flex-shrink-0 max-w-none grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                <img src="/empresas/3-1.webp" alt="Empresa aliada" className="h-10 w-auto object-contain flex-shrink-0 max-w-none grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                <img src="/empresas/4-1.webp" alt="Empresa aliada" className="h-10 w-auto object-contain flex-shrink-0 max-w-none grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                <img src="/empresas/5.webp" alt="Empresa aliada" className="h-10 w-auto object-contain flex-shrink-0 max-w-none grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                <img src="/empresas/6.webp" alt="Empresa aliada" className="h-10 w-auto object-contain flex-shrink-0 max-w-none grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                <img src="/empresas/7-1.webp" alt="Empresa aliada" className="h-10 w-auto object-contain flex-shrink-0 max-w-none grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                <img src="/empresas/8-1.webp" alt="Empresa aliada" className="h-10 w-auto object-contain flex-shrink-0 max-w-none grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                <img src="/empresas/9.webp" alt="Empresa aliada" className="h-10 w-auto object-contain flex-shrink-0 max-w-none grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                <img src="/empresas/10.webp" alt="Empresa aliada" className="h-10 w-auto object-contain flex-shrink-0 max-w-none grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                <img src="/empresas/11.webp" alt="Empresa aliada" className="h-10 w-auto object-contain flex-shrink-0 max-w-none grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                <img src="/empresas/12-1.webp" alt="Empresa aliada" className="h-10 w-auto object-contain flex-shrink-0 max-w-none grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                <img src="/empresas/13-1.webp" alt="Empresa aliada" className="h-10 w-auto object-contain flex-shrink-0 max-w-none grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CAPACIDADES / SERVICIOS TÉCNICOS */}
      <section className="py-24 bg-white border-y border-[#1E293B]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs uppercase tracking-widest font-bold text-[#D97706] mb-3">Qué Hacemos</h2>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A] mb-4">
              Capacidades Técnicas Especializadas
            </h3>
            <p className="text-lg text-[#1E293B]/70">
              Desarrollamos soluciones mecánicas de alta gama que previenen paros no programados en su planta productiva.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Tarjeta 1: Fabricación de Engranes */}
            <motion.div
              variants={fadeIn}
              className="group p-8 rounded-2xl bg-[#F8F9FA] hover:bg-white border border-[#1E293B]/5 hover:border-[#059669]/20 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0F172A]/5 text-[#0F172A] group-hover:bg-[#059669]/10 group-hover:text-[#059669] mb-6 transition-all">
                  <Settings className="w-6 h-6 group-hover:rotate-45 transition-transform duration-500" />
                </div>
                <h4 className="text-xl font-bold text-[#0F172A] mb-3">Fabricación de Engranes</h4>
                <p className="text-sm text-[#1E293B]/70 leading-relaxed mb-6">
                  Engranes cilíndricos de dientes rectos y helicoidales, sinfines, coronas y cónicos. Tallado de precisión bajo normas AGMA.
                </p>
              </div>
              <div>
                <Link href="/servicios/engranes" className="inline-flex items-center text-xs font-bold text-[#059669] group-hover:text-[#047857] gap-1">
                  Ver especificaciones
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Tarjeta 2: Maquinado CNC */}
            <motion.div
              variants={fadeIn}
              className="group p-8 rounded-2xl bg-[#F8F9FA] hover:bg-white border border-[#1E293B]/5 hover:border-[#059669]/20 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0F172A]/5 text-[#0F172A] group-hover:bg-[#059669]/10 group-hover:text-[#059669] mb-6 transition-all">
                  <Cpu className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-[#0F172A] mb-3">Torno y Centro CNC</h4>
                <p className="text-sm text-[#1E293B]/70 leading-relaxed mb-6">
                  Producción en serie e individual de componentes de alta complejidad geométrica con tolerancias estrechas en diversos materiales.
                </p>
              </div>
              <div>
                <Link href="/servicios/maquinado-cnc" className="inline-flex items-center text-xs font-bold text-[#059669] group-hover:text-[#047857] gap-1">
                  Ver maquinaria CNC
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Tarjeta 3: Corte Láser de Fibra */}
            <motion.div
              variants={fadeIn}
              className="group p-8 rounded-2xl bg-[#F8F9FA] hover:bg-white border border-[#1E293B]/5 hover:border-[#059669]/20 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0F172A]/5 text-[#0F172A] group-hover:bg-[#059669]/10 group-hover:text-[#059669] mb-6 transition-all">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-[#0F172A] mb-3">Corte Láser de Fibra</h4>
                <p className="text-sm text-[#1E293B]/70 leading-relaxed mb-6">
                  Corte por láser de metales con tecnología Senfeng de hasta 6kW. Geometrías de alta complejidad con bordes limpios sin rebabas.
                </p>
              </div>
              <div>
                <Link href="/servicios/corte-laser" className="inline-flex items-center text-xs font-bold text-[#059669] group-hover:text-[#047857] gap-1">
                  Ver capacidades de corte
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Tarjeta 4: Doblez de Precisión */}
            <motion.div
              variants={fadeIn}
              className="group p-8 rounded-2xl bg-[#F8F9FA] hover:bg-white border border-[#1E293B]/5 hover:border-[#059669]/20 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0F172A]/5 text-[#0F172A] group-hover:bg-[#059669]/10 group-hover:text-[#059669] mb-6 transition-all">
                  <Layers className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-[#0F172A] mb-3">Doblez de Precisión</h4>
                <p className="text-sm text-[#1E293B]/70 leading-relaxed mb-6">
                  Doblado CNC hidráulico con prensa de 100 Toneladas (MB8). Ángulos consistentes en perfiles metálicos de hasta 3.2 metros.
                </p>
              </div>
              <div>
                <Link href="/servicios/doblez" className="inline-flex items-center text-xs font-bold text-[#059669] group-hover:text-[#047857] gap-1">
                  Ver prensa plegadora
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Tarjeta 5: Reparación de Transmisiones */}
            <motion.div
              variants={fadeIn}
              className="group p-8 rounded-2xl bg-[#F8F9FA] hover:bg-white border border-[#1E293B]/5 hover:border-[#059669]/20 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0F172A]/5 text-[#0F172A] group-hover:bg-[#059669]/10 group-hover:text-[#059669] mb-6 transition-all">
                  <Wrench className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-[#0F172A] mb-3">Reparación Industrial</h4>
                <p className="text-sm text-[#1E293B]/70 leading-relaxed mb-6">
                  Overhaul completo de reductores de velocidad, cajas de engranes y transmisiones de cualquier marca global.
                </p>
              </div>
              <div>
                <Link href="/contacto" className="inline-flex items-center text-xs font-bold text-[#059669] group-hover:text-[#047857] gap-1">
                  Solicitar reparación
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Tarjeta 6: Ingeniería Inversa */}
            <motion.div
              variants={fadeIn}
              className="group p-8 rounded-2xl bg-[#F8F9FA] hover:bg-white border border-[#1E293B]/5 hover:border-[#059669]/20 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0F172A]/5 text-[#0F172A] group-hover:bg-[#059669]/10 group-hover:text-[#059669] mb-6 transition-all">
                  <Layers className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-[#0F172A] mb-3">Ingeniería Inversa</h4>
                <p className="text-sm text-[#1E293B]/70 leading-relaxed mb-6">
                  Reconstrucción exacta de refacciones descontinuadas o importadas mediante modelado CAD y análisis metalúrgico.
                </p>
              </div>
              <div>
                <Link href="/servicios/ingenieria-inversa" className="inline-flex items-center text-xs font-bold text-[#059669] group-hover:text-[#047857] gap-1">
                  Ver proceso de diseño
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* MAQUINARIA Y CONTROL DE CALIDAD */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xs uppercase tracking-widest font-bold text-[#D97706] mb-3">Infraestructura</h2>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A] mb-6">
                Tecnología CNC de Última Generación y Tolerancia Cero
              </h3>
              <p className="text-lg text-[#1E293B]/80 leading-relaxed mb-6">
                En **IEMSA**, la precisión no es negociable. Contamos con tecnología de torneado suizo avanzada y centros de maquinado equipados para tolerancias de micras. Destacamos en planta la operación de nuestro equipo **CNC Citizen Cincom I-05**, óptimo para la producción en serie de componentes ultraprecisos para sectores demandantes como el aeroespacial, médico e industrial.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#059669]/10 text-[#059669] flex items-center justify-center mt-1">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F172A]">Control de Calidad Dimensional</h4>
                    <p className="text-sm text-[#1E293B]/70">Cada pieza se inspecciona con micrómetros calibrados y equipo de medición CMM antes de salir de nuestra planta.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#059669]/10 text-[#059669] flex items-center justify-center mt-1">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F172A]">Trazabilidad de Materiales</h4>
                    <p className="text-sm text-[#1E293B]/70">Entregamos certificados de composición química y tratamiento térmico de la acería de procedencia.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Blueprint interactivo de Citizen Cincom */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 lg:mt-0 relative"
            >
              <div className="relative aspect-video lg:aspect-square bg-[#0F172A] rounded-2xl p-6 sm:p-10 shadow-2xl border border-white/10 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-40"></div>
                
                <div className="relative z-10 w-full h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="text-[10px] font-mono text-[#D97706] uppercase tracking-widest bg-[#D97706]/10 px-2.5 py-1 rounded">
                      Citizen Cincom I-05 Spec Sheet
                    </div>
                    <div className="text-[9px] font-mono text-white/50 text-right">
                      DWG NO: IEMSA-2026-X1<br/>SCALE: 1:1 UNIT: mm
                    </div>
                  </div>
                  
                  <div className="flex-1 flex items-center justify-center my-6">
                    <div className="relative w-48 h-48 flex items-center justify-center">
                      <Settings className="w-full h-full text-white/10 animate-[spin_40s_linear_infinite]" />
                      <div className="absolute w-40 h-40 border border-dashed border-[#059669]/40 rounded-full animate-[spin_25s_linear_infinite]"></div>
                      <div className="absolute w-24 h-24 border border-double border-[#D97706]/50 rounded-full flex items-center justify-center bg-[#0F172A]">
                        <span className="text-[11px] font-mono text-white font-semibold">TOL. ±0.005</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 border-t border-white/10 pt-4">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-white/60">Diámetro Máx. Barra:</span>
                      <span className="text-[#059669] font-bold">20 mm</span>
                    </div>
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-white/60">Precisión de Ejes X/Y/Z:</span>
                      <span className="text-[#059669] font-bold">Micrométrica</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CONFIANZA B2B */}
      <section className="py-24 bg-white border-y border-[#1E293B]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-xs uppercase tracking-widest font-bold text-[#D97706] mb-3">Ventajas Competitivas</h2>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A] mb-4">
              Confiabilidad y Respuesta para la Industria Crítica
            </h3>
            <p className="text-lg text-[#1E293B]/70">
              Entendemos el costo financiero de una línea de producción detenida. Hemos diseñado nuestro servicio para responder con máxima urgencia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#059669]/10 text-[#059669] mb-6">
                <Clock className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[#0F172A] mb-3">Entregas en Tiempo Récord</h4>
              <p className="text-sm text-[#1E293B]/70 leading-relaxed">
                Nuestros procesos de manufactura están optimizados para minimizar plazos de entrega. Ofrecemos servicio de fabricación express para reparaciones de emergencia.
              </p>
            </div>

            <div className="flex flex-col items-center text-center px-4">
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#059669]/10 text-[#059669] mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[#0F172A] mb-3">Materiales Certificados</h4>
              <p className="text-sm text-[#1E293B]/70 leading-relaxed">
                Utilizamos aceros especiales (SAE 4140, 8620, 1045), bronces, inoxidables y plásticos de ingeniería con certificados de calidad de fábrica que garantizan alta durabilidad.
              </p>
            </div>

            <div className="flex flex-col items-center text-center px-4">
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#059669]/10 text-[#059669] mb-6">
                <Truck className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[#0F172A] mb-3">Soporte de Ingeniero a Ingeniero</h4>
              <p className="text-sm text-[#1E293B]/70 leading-relaxed">
                Nuestra comunicación es técnica y directa. Resolvemos dudas complejas de diseño, tolerancias o materiales sin intermediarios, de forma transparente.
              </p>
            </div>

          </div>

          <div className="mt-20 p-8 sm:p-12 rounded-2xl bg-[#0F172A] text-white flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-2">¿Requiere fabricación urgente por paro de planta?</h4>
              <p className="text-sm text-white/70 max-w-xl">Hacemos levantamientos y cotizaciones urgentes el mismo día para asegurar que su producción no se detenga.</p>
            </div>
            <Link
              href="/contacto"
              className="w-full md:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-lg text-sm font-semibold text-white bg-[#059669] hover:bg-[#047857] transition-all shadow-md"
            >
              Contacto de Emergencia
            </Link>
          </div>

        </div>
      </section>

      {/* FORMULARIO DE COTIZACIÓN */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
