"use client";

import React from "react";

export default function IemsaLogo({ className = "w-10 h-10", dark = false }) {
  const primaryColor = dark ? "#E2E8F0" : "#1E293B";
  const holeColor = dark ? "#0F172A" : "#F8F9FA";
  const hoverHoleColor = dark ? "group-hover:fill-[#1E293B]" : "group-hover:fill-white";

  return (
    <svg 
      viewBox="0 0 120 120" 
      className={`${className} overflow-hidden`}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Máscara para que las espiras del sinfín solo se vean en la sección central de acoplamiento */}
        <clipPath id="sinfin-clip">
          <rect x="35" y="60" width="50" height="28" rx="2" />
        </clipPath>
      </defs>

      {/* 1. ENGRANE SUPERIOR (Dorado / Amarillo Industrial) */}
      <g className="origin-[60px_45px] animate-[spin_16s_linear_infinite]">
        {/* Corona del engrane */}
        <circle cx="60" cy="45" r="20" fill="#D97706" />
        
        {/* Agujero central */}
        <circle cx="60" cy="45" r="8" fill={holeColor} className={`${hoverHoleColor} transition-colors`} />

        {/* 12 Dientes del Engrane distribuidos circularmente */}
        {[...Array(12)].map((_, i) => (
          <rect
            key={i}
            x="56"
            y="18"
            width="8"
            height="12"
            rx="2"
            fill="#D97706"
            transform={`rotate(${i * 30} 60 45)`}
          />
        ))}
      </g>

      {/* 2. SINFÍN INFERIOR (Gris Oscuro o Claro si es dark) */}
      <g>
        {/* Barra base izquierda (eje de soporte) */}
        <rect x="10" y="68" width="30" height="12" rx="3" fill={primaryColor} />
        
        {/* Barra base derecha (eje de soporte) */}
        <rect x="80" y="68" width="30" height="12" rx="3" fill={primaryColor} />

        {/* Espiras de rosca centrales animadas bajo máscara */}
        <g clipPath="url(#sinfin-clip)">
          {/* El contenedor se traslada lateralmente en bucle simulando la rotación de la rosca */}
          <g className="animate-sinfin-scroll">
            {[...Array(8)].map((_, i) => {
              const xStart = 15 + i * 16;
              return (
                <line
                  key={i}
                  x1={xStart}
                  y1="62"
                  x2={xStart + 6}
                  y2="86"
                  stroke={primaryColor}
                  strokeWidth="6.5"
                  strokeLinecap="round"
                />
              );
            })}
          </g>
        </g>
      </g>
    </svg>
  );
}
