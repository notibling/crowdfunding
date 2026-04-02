import React from 'react';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-32 overflow-hidden ">
      {/* Fondo de imagen con gradiente */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bling_light.avif')" }}
      />
      
      {/* Capas de gradiente para profundidad */}
      <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-[#08090d]/20 via-[#0D0F14]/40 via-90% to-[#08090d]" >
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[#FFCC00]/10 border border-[#FFCC00]/20 text-[#FFCC00] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-8">
            Programa de Crowdfunding BLING 2026
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-4xl md:text-7xl text-shadow-2xs font-semibold leading-[0.95] tracking-tighter mb-8"
        >
          LA INFORMACIÓN LIBRE<br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FFCC00] via-[#FFE066] to-[#FFCC00] bg-size-[200%_auto] animate-gradient-x">
            NO SE FINANCIA SOLA.
          </span>
        </motion.h1>

       <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-slate-200 text-lg text-shadow-2xs md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed mb-12"
        >
          <span className=" px-2 py-0.5">
            Hay periodistas con historias importantes que contar
            <br/>y sin un lugar propio donde contarlas.
            <br/>Eso es lo que llevamos tres años tratando de cambiar.
          </span>
          <br/><br/>
          <span className=" px-2  text-transparent bg-clip-text bg-linear-to-r from-[#FFCC00] via-[#ffe53a] to-[#FFCC00] bg-size-[150%_auto] animate-gradient-x    text-2xl text-shadow-2xs md:text-2xl">
            Llegó el momento del primer año.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href="#colaborar"
            className="group relative inline-flex items-center justify-center bg-[#FFCC00] text-[#0D0F14] font-black text-sm tracking-widest uppercase px-12 py-5 overflow-hidden transition-all duration-300 hover:pr-14"
          >
            <span className="relative z-10">Quiero colaborar</span>
          </a>
          
          <a
            href="#historia"
            className="text-white/60 hover:text-[#FFCC00] font-bold text-sm tracking-widest uppercase py-4 transition-colors duration-200"
          >
            Nuestra historia
          </a>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-16 bg-linear-to-b from-[#FFCC00] to-transparent" />
      </motion.div>
    </section>
  );
}
