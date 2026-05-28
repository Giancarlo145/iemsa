import React from "react";
import Link from "next/link";
import { Settings } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white/60 border-t border-white/5 py-12 sm:py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Marca / Descripción */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-lg text-[#D97706]">
                <Settings className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                IEMSA<span className="text-[#059669]">.</span>
              </span>
            </Link>
            <p className="text-xs text-white/50 leading-relaxed">
              Ingeniería de precisión en engranes y maquinados industriales. Comprometidos con la excelencia técnica nacional y entregas en tiempo récord desde hace 20 años.
            </p>
          </div>

          {/* Enlaces de Navegación */}
          <div>
            <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Navegación</h5>
            <ul className="space-y-2 text-xs">
              <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
              <li><Link href="/conocenos" className="hover:text-white transition-colors">Conócenos</Link></li>
              <li><Link href="/contacto" className="hover:text-white transition-colors">Contacto y Planta</Link></li>
            </ul>
          </div>

          {/* Capacidades Técnicas */}
          <div>
            <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Servicios</h5>
            <ul className="space-y-2 text-xs">
              <li><Link href="/servicios/engranes" className="hover:text-white transition-colors">Fabricación de Engranes</Link></li>
              <li><Link href="/servicios/maquinado-cnc" className="hover:text-white transition-colors">Maquinado CNC y Suizo</Link></li>
              <li><Link href="/servicios/corte-laser" className="hover:text-white transition-colors">Corte Láser de Fibra</Link></li>
              <li><Link href="/servicios/doblez" className="hover:text-white transition-colors">Doblez de Precisión</Link></li>
              <li><Link href="/servicios/ingenieria-inversa" className="hover:text-white transition-colors">Ingeniería Inversa</Link></li>
            </ul>
          </div>

          {/* Contacto Real */}
          <div>
            <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Planta Azcapotzalco</h5>
            <ul className="space-y-2 text-xs text-white/50">
              <li>Tels: +52 (55) 5368-8515 / 5567-9562</li>
              <li>Correo: cotizaciones@iemsa.com.mx</li>
              <li>Dirección: Moldeadores 318, Col. Pro-Hogar, Azcapotzalco, CDMX, C.P. 02600</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-white/40">
          <div>
            &copy; {new Date().getFullYear()} IEMSA. Todos los derechos reservados.
          </div>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Aviso de Privacidad</Link>
            <Link href="#" className="hover:text-white transition-colors">Términos y Condiciones</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
