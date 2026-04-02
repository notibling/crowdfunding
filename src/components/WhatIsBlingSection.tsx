import React from 'react';
import { motion } from 'framer-motion';

export function WhatIsBlingSection() {
  const features = [
    {
      icon: "✦",
      title: "Tu espacio, tu marca",
      description:
        "Los medios tienen su propio sitio, personalizable con su identidad. Sin logos ajenos. Sin marcas de agua. Sin condiciones editoriales.",
    },
    {
      icon: "✦",
      title: "Publicación sin barreras",
      description:
        "Un creador de contenido diseñado para periodistas, no para ingenieros. Rápido, limpio y sin fricción.",
    },
    {
      icon: "✦",
      title: "Libertad editorial total",
      description:
        "No nos interesa tu ideología política ni tu religión. Nos interesa que puedas expresarte. Eso es todo.",
    },
    {
      icon: "✦",
      title: "Publicidad justa",
      description:
        "Las empresas pueden anunciarse en BlingNews y llegar a miles de lectores con herramientas publicitarias reales y los medios monetizan sin depender de terceros.",
    },
  ];

  return (
    <section className="relative bg-[#111318] px-6 py-28 overflow-hidden">
      {/* Imagen de fondo con opacidad baja */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url('/images/Ads.avif')" }}
      />
      {/* Gradientes para fundir el fondo */}
      <div className="absolute inset-0 bg-linear-to-b from-[#111318] via-[#111318]/60 to-[#111318] pointer-events-none" />
      <div className="absolute inset-0 bg-linear-to-r from-[#111318] via-transparent to-[#111318] pointer-events-none opacity-40" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <p className="text-[#FFCC00] text-xs font-semibold tracking-[0.3em] uppercase mb-4 text-center">
          La plataforma
        </p>
        <h2 className="text-white text-4xl md:text-5xl font-black text-center leading-tight mb-4">
          Bling no es solo una herramienta.
        </h2>
        <p className="text-slate-400 text-center text-lg mb-16 max-w-xl mx-auto font-medium">
          Es la infraestructura que los medios independientes necesitaban desde siempre.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="border border-white/10 bg-[#0D0F14]/80 backdrop-blur-md p-8 hover:border-[#FFCC00]/40 transition-all duration-300"
            >
              <span className="text-[#FFCC00] text-2xl block mb-4">{f.icon}</span>
              <h3 className="text-white font-bold text-xl mb-3">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed font-medium">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
