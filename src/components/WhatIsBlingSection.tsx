import React from 'react';
import { motion } from 'framer-motion';
import { SectionBackground } from './SectionBackground';

export function WhatIsBlingSection() {
  const features = [
    {
      index: "01",
      title: "Tu espacio, tu marca",
      description:
        "Los medios tienen su propio sitio, personalizable con su identidad. Sin logos ajenos. Sin marcas de agua. Sin condiciones editoriales.",
    },
    {
      index: "02",
      title: "Publicación sin barreras",
      description:
        "Un creador de contenido diseñado para periodistas, no para ingenieros. Rápido, limpio y sin fricción.",
    },
    {
      index: "03",
      title: "Libertad editorial total",
      description:
        "No nos interesa tu ideología política ni tu religión. Nos interesa que puedas expresarte. Eso es todo.",
    },
    {
      index: "04",
      title: "Publicidad justa",
      description:
        "Las empresas pueden anunciarse en BlingNews y llegar a miles de lectores con herramientas publicitarias reales y los medios monetizan sin depender de terceros.",
    },
  ];

  return (
    <section className="relative bg-white dark:bg-slate-950 px-6 py-28 overflow-hidden">
      <SectionBackground url="/images/Ads.avif" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#F3BA2F] text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-center"
        >
          La plataforma
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="text-slate-900 dark:text-white text-4xl md:text-5xl font-semibold text-center leading-tight mb-4"
        >
          Bling no es solo una herramienta.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.14 }}
          className="text-slate-500 dark:text-slate-400 text-center text-base mb-16 max-w-xl mx-auto"
        >
          Es la infraestructura que los medios independientes necesitaban desde siempre.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-100 dark:bg-slate-800/40">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-white dark:bg-slate-950 hover:bg-slate-50 dark:hover:bg-slate-900 p-8 transition-colors duration-300 flex flex-col gap-4"
            >
              <span className="text-[#F3BA2F] text-[10px] font-semibold tracking-[0.2em] uppercase">
                {f.index}
              </span>
              <h3 className="text-slate-900 dark:text-white font-semibold text-lg leading-snug">
                {f.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {f.description}
              </p>
              <div className="mt-auto pt-5 border-t border-slate-100 dark:border-slate-800">
                <div className="w-4 h-px bg-[#F3BA2F] group-hover:w-8 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}