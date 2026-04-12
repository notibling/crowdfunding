import React from 'react';
import { motion } from 'framer-motion';

export function WhyCrowdfundingSection() {
  return (
    <section className=" px-6 py-28 relative">
             <motion.div
              initial={{ scale: 1.08, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.2 }}
              transition={{ duration: 2, ease: 'easeOut' }}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none "
              style={{
                backgroundImage: "url('/images/Bling_People.avif')",
               
              }}
            />
                     {/* Overlay para asegurar legibilidad */}
      <div className="absolute inset-0 bg-linear-to-b from-[#020617]  via-transparent to-[#020617] pointer-events-none" />
      {/* Imagen de fondo con opacidad baja */}
      <div className="max-w-3xl mx-auto relative z-10">
        <p className="text-[#FFCC00] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
          Por qué te lo pedimos a vos
        </p>
        <h2 className="text-white text-4xl md:text-5xl font-black leading-tight mb-10">
          Podríamos haber pedido fondos públicos.<br />
          <span className="text-emerald-500">Elegimos no hacerlo.</span>
        </h2>
        <div className="space-y-6 text-slate-300 text-lg leading-relaxed font-medium">
          <p>
            No creemos en el periodismo que depende de la pauta oficial. Tampoco en el que depende de inversores con intereses ajenos a la información. 
          </p>
          <p>
            Queremos que Bling sea propiedad de quienes lo usan. Que su único compromiso sea con la verdad y con la comunidad que lo sostiene. Por eso, este primer año de infraestructura lo financiamos entre todos.
          </p>
          <p className="text-white font-semibold">
            Tu colaboración no es una donación, es una inversión en tu propio derecho a estar informado sin filtros.
          </p>
        </div>
      </div>
    </section>
  );
}
