"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Cerrar menús al cambiar de ruta
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Conócenos", href: "/conocenos" },
    { name: "Contacto", href: "/contacto" }
  ];

  const services = [
    { name: "Fabricación de Engranes", href: "/servicios/engranes", desc: "Rectos, helicoidales, cónicos y más" },
    { name: "Maquinado CNC y Suizo", href: "/servicios/maquinado-cnc", desc: "Tolerancia de micras, piezas complejas" },
    { name: "Corte Láser de Fibra", href: "/servicios/corte-laser", desc: "Corte de alta velocidad Senfeng" },
    { name: "Doblez de Precisión", href: "/servicios/doblez", desc: "Doblado CNC hidráulico MB8" },
    { name: "Ingeniería Inversa", href: "/servicios/ingenieria-inversa", desc: "Digitalización 3D y planos CAD" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F8F9FA]/90 backdrop-blur-md border-b border-[#1E293B]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logotipo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 bg-[#0F172A] rounded-lg text-[#D97706] shadow-sm transition-transform group-hover:scale-105">
              <Settings className="w-6 h-6 animate-[spin_25s_linear_infinite]" />
              <div className="absolute w-2.5 h-2.5 bg-[#059669] rounded-full"></div>
            </div>
            <span className="text-xl font-bold tracking-tight text-[#0F172A]">
              IEMSA<span className="text-[#059669]">.</span>
            </span>
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex space-x-1 items-center">
            <Link 
              href="/" 
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${pathname === "/" ? "text-[#059669] bg-[#059669]/5" : "text-[#1E293B]/80 hover:text-[#0F172A] hover:bg-[#1E293B]/5"}`}
            >
              Inicio
            </Link>

            {/* Dropdown de Servicios */}
            <div className="relative">
              <button
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`px-3 py-2 rounded-lg text-sm font-medium inline-flex items-center gap-1 transition-colors ${pathname.startsWith("/servicios") ? "text-[#059669] bg-[#059669]/5" : "text-[#1E293B]/80 hover:text-[#0F172A] hover:bg-[#1E293B]/5"}`}
              >
                Servicios
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                    className="absolute left-0 mt-2 w-80 bg-white border border-[#1E293B]/5 rounded-2xl shadow-xl p-2 z-50 grid grid-cols-1 gap-1"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className={`p-3 rounded-xl transition-all flex flex-col hover:bg-[#F8F9FA] group ${pathname === service.href ? "bg-[#059669]/5" : ""}`}
                      >
                        <span className="text-sm font-bold text-[#0F172A] group-hover:text-[#059669] transition-colors">{service.name}</span>
                        <span className="text-xs text-[#1E293B]/60 mt-0.5">{service.desc}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              href="/conocenos" 
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${pathname === "/conocenos" ? "text-[#059669] bg-[#059669]/5" : "text-[#1E293B]/80 hover:text-[#0F172A] hover:bg-[#1E293B]/5"}`}
            >
              Conócenos
            </Link>

            <Link 
              href="/contacto" 
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${pathname === "/contacto" ? "text-[#059669] bg-[#059669]/5" : "text-[#1E293B]/80 hover:text-[#0F172A] hover:bg-[#1E293B]/5"}`}
            >
              Contacto
            </Link>
          </nav>

          {/* Botón de Cotización */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#059669] hover:bg-[#047857] shadow-sm transition-all hover:shadow-md"
            >
              Cotizar Proyecto
            </Link>
          </div>

          {/* Botón Menú Móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0F172A] hover:bg-[#1E293B]/5 rounded-lg transition-colors"
              aria-label="Menú principal"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-[#1E293B]/5 bg-[#F8F9FA] overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 shadow-inner">
              <Link
                href="/"
                className="block px-3 py-2 rounded-lg text-base font-medium text-[#1E293B]/80 hover:bg-[#1E293B]/5 hover:text-[#0F172A] transition-all"
              >
                Inicio
              </Link>
              
              {/* Servicios Móvil */}
              <div className="px-3 py-2 space-y-2 border-l-2 border-[#D97706]/40 ml-1">
                <p className="text-xs font-bold uppercase tracking-wider text-[#1E293B]/40 mb-1">Nuestros Servicios</p>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block py-1 text-sm font-semibold text-[#1E293B]/70 hover:text-[#059669]"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <Link
                href="/conocenos"
                className="block px-3 py-2 rounded-lg text-base font-medium text-[#1E293B]/80 hover:bg-[#1E293B]/5 hover:text-[#0F172A] transition-all"
              >
                Conócenos
              </Link>
              
              <Link
                href="/contacto"
                className="block px-3 py-2 rounded-lg text-base font-medium text-[#1E293B]/80 hover:bg-[#1E293B]/5 hover:text-[#0F172A] transition-all"
              >
                Contacto
              </Link>

              <Link
                href="/contacto"
                className="block text-center w-full px-3 py-3 rounded-lg text-base font-semibold text-white bg-[#059669] hover:bg-[#047857] shadow-sm transition-all"
              >
                Cotizar Proyecto
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
