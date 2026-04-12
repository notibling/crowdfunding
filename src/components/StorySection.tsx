import React from 'react';
import { motion } from 'framer-motion';
export function StorySection() {
  return (
    <section id="historia" className="bg-[#08090d] relative px-6 py-28 overflow-hidden">
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.25 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm pointer-events-none"
        style={{ backgroundImage: "url('/images/Bling_Forge.avif')" }}
      />
      
      {/* Overlay para asegurar legibilidad */}
      <div className="absolute inset-0 bg-linear-to-b from-[#08090d] via-transparent to-[#08090d] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <p className="text-[#FFCC00] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
          Tres años de trabajo
        </p>
        <h2 className="text-white text-4xl md:text-5xl font-black leading-tight mb-10">
          Todo empezó con una pregunta incómoda.
        </h2>
        <div className="space-y-6 text-slate-300 text-lg leading-relaxed font-medium">
          <p>
            ¿Por qué los mejores periodistas de nuestra región terminan trabajando para plataformas que no les pertenecen, bajo algoritmos que no entienden y con una libertad que tiene fecha de vencimiento?
          </p>
          <p>
            Empezamos a construir una respuesta. Sin inversión externa, sin créditos, sin fondos públicos. Solo tiempo, convicción y trabajo.
          </p>
          <p className="text-white font-semibold text-xl border-l-2 border-[#FFCC00] pl-5">
            Más de tres años después, <span className="text-[#FFCC00]">Bling está casi listo.</span> Y llegamos hasta aquí sin que nadie nos deba nada &#8278; ni nosotros a nadie.
          </p>
          <p>
            Eso no fue un accidente. Fue una decisión. Creemos que la plataforma que le dará voz a los medios libres no puede nacer endeudada. No puede trasladarle sus costos de desarrollo a los mismos usuarios que viene a liberar.
          </p>
        </div>
      </div>
    </section>
  );
}
