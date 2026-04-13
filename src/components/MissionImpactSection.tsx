import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Shield, Users, Globe, Database } from 'lucide-react';
import { SectionBackground } from './SectionBackground';

const impactPoints = [
  {
    icon: <Database className="w-5 h-5" />,
    title: "Infraestructura Propia",
    description: "Cada aporte financia servidores de alta gama, ancho de banda y seguridad de grado bancario para que los medios nunca se caigan.",
    goal: "100% Autogestión"
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Expansión Regional",
    description: "Bling nació en Uruguay, pero nuestra meta es ser el hogar de todo el periodismo independiente de habla hispana.",
    goal: "10+ Países"
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Comunidad Blindada",
    description: "Protección legal y técnica para periodistas que enfrentan censura o ataques digitales por decir la verdad.",
    goal: "Protección Total"
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Innovación Constante",
    description: "Desarrollo de nuevas herramientas de publicación, monetización y análisis de datos exclusivas para nuestros usuarios.",
    goal: "Nuevas Tools"
  }
];

export function MissionImpactSection() {
  return (
    <section className="relative px-6 py-32 bg-white dark:bg-slate-950 overflow-hidden">
      <SectionBackground
        url="/images/Flying.avif"
        animated={false}
        opacity="high"
        fadeDirection="radial"
      />

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F3BA2F]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#F3BA2F] text-xs font-semibold tracking-[0.2em] uppercase mb-6"
            >
              Nuestra Misión
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white text-4xl md:text-5xl font-semibold leading-tight"
            >
              Tu aporte es el motor del <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-500">
                futuro de la información.
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:flex flex-col items-center gap-2 p-6 bg-slate-950/80 backdrop-blur-lg border border-slate-700/50 rounded-sm"
          >
            <Target className="w-7 h-7 text-[#F3BA2F]" />
            <span className="text-white font-semibold text-xl">Meta 2026</span>
            <span className="text-emerald-400 text-xs font-medium uppercase tracking-widest">Infraestructura 100% Libre</span>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-700/30">
          {impactPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group p-8 bg-slate-950/80 backdrop-blur-lg hover:bg-slate-900 transition-colors duration-300 flex flex-col gap-5"
            >
              <div className="text-[#F3BA2F]">
                {point.icon}
              </div>

              <div>
                <h3 className="text-white text-base font-semibold mb-3 tracking-tight">
                  {point.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="mt-auto pt-5 border-t border-slate-800">
                <span className="text-[#F3BA2F] text-[10px] font-semibold uppercase tracking-[0.2em]">
                  {point.goal}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex flex-col md:flex-row items-center justify-between gap-10 p-10 bg-slate-950/80 backdrop-blur-lg border-l-4 border-emerald-500"
        >
          <div className="max-w-xl">
            <h4 className="text-white text-2xl font-semibold mb-4">¿Por qué ahora?</h4>
            <p className="text-slate-400 text-base leading-relaxed">
              Estamos en una etapa crítica. El 100% de lo recaudado en este crowdfunding va directo a los costos técnicos de este primer año.{' '}
              <span className="text-emerald-400 font-medium">Sin inversores, sin deudas, solo vos y nosotros.</span>
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end text-center md:text-right shrink-0">
            <span className="text-white font-mono text-5xl font-medium tabular-nums">100%</span>
            <span className="text-slate-500 text-xs font-medium uppercase tracking-widest mt-2 max-w-[200px]">
              El fondo se destinará 100% al proyecto.
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}