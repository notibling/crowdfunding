import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Shield, Users, Globe, Database } from 'lucide-react';

const impactPoints = [
  {
    icon: <Database className="w-6 h-6" />,
    title: "Infraestructura Propia",
    description: "Cada aporte financia servidores de alta gama, ancho de banda y seguridad de grado bancario para que los medios nunca se caigan.",
    goal: "100% Autogestión"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Expansión Regional",
    description: "Bling nació en Uruguay, pero nuestra meta es ser el hogar de todo el periodismo independiente de habla hispana.",
    goal: "10+ Países"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Comunidad Blindada",
    description: "Protección legal y técnica para periodistas que enfrentan censura o ataques digitales por decir la verdad.",
    goal: "Protección Total"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Innovación Constante",
    description: "Desarrollo de nuevas herramientas de publicación, monetización y análisis de datos exclusivas para nuestros usuarios.",
    goal: "Nuevas Tools"
  }
];

export function MissionImpactSection() {
  return (
    <section className="relative px-6 py-32 bg-[#0D0F14] overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F3BA2F]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl text-left">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#F3BA2F] text-xs font-black tracking-[0.4em] uppercase mb-6"
            >
              Nuestra Misión
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white text-4xl md:text-6xl font-black leading-tight"
            >
              Tu aporte es el motor del <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-white/80 to-white/40">futuro de la información.</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:flex flex-col items-center gap-2 p-6 rounded-2xl border border-white/5 bg-white/2 backdrop-blur-sm"
          >
            <Target className="w-8 h-8 text-[#F3BA2F] animate-pulse" />
            <span className="text-white font-black text-2xl">Meta 2026</span>
            <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Infraestructura 100% Libre</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl border border-white/5 bg-white/2 hover:bg-white/5 hover:border-[#F3BA2F]/30 transition-all duration-500 relative overflow-hidden"
            >
              {/* Brillo al hover */}
              <div className="absolute inset-0 bg-radial-gradient(circle_at_top_right,rgba(243,186,47,0.1),transparent_70%) opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#F3BA2F]/10 border border-[#F3BA2F]/20 flex items-center justify-center text-[#F3BA2F] mb-6 group-hover:scale-110 transition-transform duration-500">
                  {point.icon}
                </div>
                <h3 className="text-white text-xl font-black mb-4 tracking-tight group-hover:text-[#F3BA2F] transition-colors">
                  {point.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                  {point.description}
                </p>
                <div className="pt-6 border-t border-white/5">
                  <span className="text-[#F3BA2F] text-[10px] font-black uppercase tracking-[0.2em]">
                    Meta: {point.goal}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 p-10 rounded-3xl bg-linear-to-br from-[#F3BA2F]/10 via-transparent to-transparent border border-[#F3BA2F]/10 flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div className="max-w-xl">
            <h4 className="text-white text-2xl font-black mb-4">¿Por qué ahora?</h4>
            <p className="text-slate-300 text-lg leading-relaxed font-medium">
              Estamos en una etapa crítica. El 100% de lo recaudado en este crowdfunding va directo a los costos técnicos de este primer año. Sin inversores, sin deudas, solo vos y nosotros.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <span className="text-[#F3BA2F] text-5xl font-black mb-2">100%</span>
            <span className="text-white text-sm font-bold uppercase tracking-widest opacity-60">Para el Proyecto</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
