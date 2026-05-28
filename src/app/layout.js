import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "IEMSA | Ingeniería de Precisión en Engranes y Maquinados Industriales",
  description: "Fabricación de engranes especiales, maquinado CNC de alta precisión y reparación de transmisiones. Tolerancia micrométrica y entregas récord para la industria pesada.",
  keywords: "maquinados industriales, engranes especiales, maquinado CNC, ingeniería inversa, transmisiones industriales, Citizen Cincom I-05, maquinado de precisión México",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#F8F9FA] text-[#1E293B] font-sans selection:bg-[#059669]/20 selection:text-[#059669]">
        {children}
      </body>
    </html>
  );
}
