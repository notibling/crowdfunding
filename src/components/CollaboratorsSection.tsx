import React from 'react';
import { motion } from 'framer-motion';
import { collaborators } from '../constants';
import { SectionBackground } from './SectionBackground';

export function CollaboratorsSection() {
  return (
    <section className="bg-white dark:bg-slate-950 min-h-[600px] flex items-center justify-center relative px-6 py-28 border-t border-slate-200 dark:border-white/5">
      <SectionBackground 
        url="/images/Bling_Comunity.avif" 
        animated={true} 
        opacity="medium" 
        fadeDirection="vertical" 
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <p className="text-[#FFCC00] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
          Comunidad
        </p>
        <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black mb-12">
          Quienes hacen posible Bling.
        </h2>

        {collaborators.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-6">
            {collaborators.map((c, i) => (
              <a
                key={i}
                href={c.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-slate-200 dark:border-slate-800 group-hover:border-[#FFCC00] transition-all duration-300">
                  <img src={c.photo} alt={c.name} className="w-full h-full object-cover" />
                </div>
                {/* Tooltip con nombre */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-[#FFCC00] text-slate-950 text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-20">
                  {c.name}
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="py-10">
            <p className="text-slate-500 dark:text-slate-500 text-lg italic mb-6">Aún no hay colaboradores públicos.</p>
            <a
              href="#colaborar"
              className="text-[#FFCC00] font-bold tracking-widest uppercase text-sm border-b-2 border-[#FFCC00]/30 hover:border-[#FFCC00] transition-all pb-1"
            >
              ¡Sé el primero!
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
