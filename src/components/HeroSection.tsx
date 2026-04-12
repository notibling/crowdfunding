import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-32 overflow-hidden">

      {/* Imagen de fondo */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: "url('/images/screenshots/BlingNews.avif')",
          filter: 'blur(4px) saturate(0.6)',
        }}
      />

      {/* Gradiente de profundidad */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom,
            #020617 0%,
            rgba(2,6,23,0.15) 30%,
            rgba(15,23,42,0.55) 60%,
            #020617 100%
          )`,
        }}
      />

      {/* Viñeta radial */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(2,6,23,0.7) 100%)',
        }}
      />

      {/* Decoraciones de esquina */}
      <div className="absolute top-12 left-12 w-14 h-14 opacity-15 border-t border-l border-[#FFCC00]" />
      <div className="absolute bottom-20 right-12 w-14 h-14 opacity-15 border-b border-r border-[#FFCC00]" />

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Pill */}
        <motion.div {...fadeUp(0.3)}>
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-[#FFCC00]/8 border border-[#FFCC00]/25 text-[#FFCC00] text-[10px] font-semibold tracking-[0.3em] uppercase mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00] animate-pulse" />
            Crowdfunding BLING · 2026
          </span>
        </motion.div>

        {/* Titular */}
        <motion.h1
          {...fadeUp(0.5)}
          className="font-serif text-shadow-xl text-4xl md:text-6xl text-white leading-[0.95] tracking-tight mb-4"
          style={{ fontSize: '', fontWeight: 900 }}
        >
          La información libre
          <br />
          <em
            className="not-italic text-shadow-xl"
            style={{
              background: 'linear-gradient(90deg, #fff5b7 0%, #ffdc52 35%, #FFCC00 70%, #e6a800 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontStyle: 'italic',
            }}
          >
            no se financia sola.
          </em>
        </motion.h1>

        {/* Separador */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="w-14 h-px mx-auto my-8"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,204,0,0.5), transparent)' }}
        />

        {/* Cuerpo */}
        <motion.p
          {...fadeUp(0.8)}
          className="text-white/70 font-light leading-[1.9] max-w-xl mx-auto mb-0"
          style={{ fontSize: 'clamp(1rem, 2.5vw, 1.15rem)' }}
        >
          Hay periodistas con historias importantes que contar,
          <br />y sin un lugar propio donde contarlas.
          <br />Eso es lo que llevamos tres años tratando de cambiar.
        </motion.p>

        {/* Línea de remate */}
        <motion.p
          {...fadeUp(1.1)}
          className="font-medium mt-6 mb-12"
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            background: 'linear-gradient(90deg, #86efac 0%, #4ade80 50%, #bbf7d0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          → Llegó el momento del primer año.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(1.3)}
          className="flex items-center justify-center gap-8 flex-wrap"
        >
          <a
            href="#colaborar"
            className="inline-flex items-center gap-2.5 bg-[#FFCC00] text-[#020617] font-semibold text-xs tracking-[0.2em] uppercase px-9 py-4 transition-all duration-300 hover:bg-[#ffe033] hover:translate-y-[-1px] group"
            style={{
              clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
            }}
          >
            Quiero colaborar
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#historia"
            className="text-white/40 hover:text-[#FFCC00] font-medium text-[11px] tracking-[0.2em] uppercase transition-colors duration-200 border-b border-white/15 hover:border-[#FFCC00]/40 pb-0.5"
          >
            Nuestra historia
          </a>
        </motion.div>

        {/* Momentum / Social Proof */}
        <motion.div 
          {...fadeUp(1.5)} 
          className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-8"
        >
          <div className="flex flex-col items-center">
            <span className="text-[#FFCC00] text-xl md:text-3xl font-bold tracking-tight mb-1">+3 Años</span>
            <span className="text-[10px] text-slate-300 font-medium uppercase tracking-[0.2em]">Desarrollo</span>
          </div>
          <div className="hidden md:block w-px h-8 bg-white/10" />
          <div className="flex flex-col items-center">
            <span className="text-[#FFCC00] text-xl md:text-3xl font-bold tracking-tight mb-1">+5 Servicios</span>
            <span className="text-[10px] text-slate-300 font-medium uppercase tracking-[0.2em]">Ecosistema</span>
          </div>
          <div className="hidden md:block w-px h-8 bg-white/10" />
          <div className="flex flex-col items-center">
            <span className="text-[#FFCC00] text-xl md:text-3xl font-bold tracking-tight mb-1">2026 Meta</span>
            <span className="text-[10px] text-slate-300 font-medium uppercase tracking-[0.2em]">Lanzamiento</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <div className="w-px h-12 bg-gradient-to-b from-[#FFCC00] to-transparent animate-pulse" />
        <span className="text-[9px] font-medium tracking-[0.25em] uppercase text-[#FFCC00]/40">
          scroll
        </span>
      </motion.div>
    </section>
  );
}