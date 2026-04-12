import React from 'react';
import { motion } from 'framer-motion';

type Status = 'completed' | 'in-progress' | 'soon' | 'pending';

const steps = [
  {
    date: '2021 – 2022',
    title: 'La idea y el por qué',
    description: 'Identificación del problema: medios independientes en LATAM sin infraestructura propia, dependientes de plataformas que no los representan. Investigación de mercado, análisis de competencia regional y definición de la propuesta de valor de BlingCompany.',
    tags: ['Investigación de mercado', 'Análisis competitivo', 'Propuesta de valor', 'LATAM'],
    status: 'completed',
  },
  {
    date: '2022 – 2023',
    title: 'Planificación y metodología',
    description: 'Definición de los cinco productos del ecosistema, metodologías de trabajo, roadmap inicial y armado del equipo fundador. Primeras decisiones técnicas, elección del stack y diseño de la arquitectura de datos.',
    tags: ['5 productos definidos', 'Equipo fundador', 'Arquitectura', 'Metodología'],
    status: 'completed',
  },
  {
    date: '2023 – 2024',
    title: 'Fundación del ecosistema',
    description: 'Desarrollo de los primeros prototipos internos, identidad de marca completa, manual de marca BlingNews y registro del dominio bling.uy. Stack tecnológico consolidado: Next.js 14, PostgreSQL, Docker.',
    tags: ['Stack definido', 'Identidad visual', 'bling.uy', 'Prototipos'],
    status: 'completed',
  },
  {
    date: '2025',
    title: 'Infraestructura y primeros productos',
    description: 'Deploy en VPS propio vía Coolify + Cloudflare CDN. Desarrollo avanzado de BlingNews y BlingShop. Investigación regulatoria para BlingPay (BCU, PCI DSS). Campaña de crowdfunding inicial.',
    tags: ['BlingNews', 'BlingShop', 'Coolify + Cloudflare', 'BCU / PCI DSS'],
    status: 'completed',
  },
  {
    date: 'Q1 – Q2 2026',
    title: 'Beta cerrada y primeros aliados',
    description: 'Los primeros medios independientes ya están publicando en BlingNews. Integraciones de pago activas y sistema de onboarding para nuevos colaboradores en marcha.',
    tags: ['BlingNews beta', 'BlingPay', 'Onboarding', 'Primeros medios'],
    status: 'in-progress',
    highlight: true,
  },
  {
    date: 'Q3 2026',
    title: 'BlingAds y monetización para medios',
    description: 'Lanzamiento del sistema publicitario ético: segmentación geográfica, panel para anunciantes y split de ingresos para medios publicadores en la red.',
    tags: ['BlingAds', 'Split de ingresos', 'Geo-targeting'],
    status: 'soon',
  },
  {
    date: 'Q4 2026',
    title: 'Apertura regional',
    description: 'BlingNews, BlingShop y BlingPages disponibles para toda la región. BlingPay con procesamiento propio en evaluación. Apertura del marketplace a vendedores externos.',
    tags: ['BlingPages', 'BlingShop público', 'LATAM'],
    status: 'pending',
  },
  {
    date: '2027',
    title: 'Ecosistema completo e independencia financiera',
    description: 'Los cinco productos operando de forma integrada. BlingPay con PSPC propio. Expansión fuera de Uruguay con modelo de licencias para medios y comercios.',
    tags: ['Ecosistema completo', 'PSPC propio', 'Licencias'],
    status: 'pending',
  },
    {
    date: '----',
    title: 'Vifurcación de proyecto',
    description: 'Durante la planificación del proyecto, se ha decidido expandir en la medida de lo posible, el área de impacto de nuestros servicios con nuevos proyectos de innovación real, basados en tecnologías experimentales en entornos controlados de Bling. ',
    tags: ['Ecosistema', 'Espacio', 'LABS'],
    status: 'pending',
  },
];

const statusConfig: Record<Status, { label: string; dotClass: string; badgeClass: string }> = {
  completed:   { label: 'Completado',  dotClass: 'bg-[#FFCC00]',                                         badgeClass: 'bg-green-950 text-green-400' },
  'in-progress': { label: 'En curso',  dotClass: 'bg-[#FFCC00] ring-4 ring-[#FFCC00]/20',                badgeClass: 'bg-[#FFCC00]/10 text-[#a07c00]' },
  soon:        { label: 'Próximo',     dotClass: 'bg-slate-950 border-2 border-slate-600',               badgeClass: 'bg-slate-800 text-slate-400' },
  pending:     { label: 'Planificado', dotClass: 'bg-slate-900 border border-slate-800',                  badgeClass: 'bg-slate-900 text-slate-600' },
};

const productTags = ['BlingNews', 'BlingShop', 'BlingPay', 'BlingAds', 'BlingPages',
  'BlingNews beta', 'BlingShop público', 'Ecosistema completo'];

export function RoadmapSection() {
  return (
    <section className="relative px-6 py-28 bg-slate-950 overflow-hidden">
         <motion.div
              initial={{ scale: 1.08, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.25 }}
              transition={{ duration: 2, ease: 'easeOut' }}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
              style={{
                backgroundImage: "url('/images/Bling_Road.avif')",
                filter: 'blur(4px) saturate(0.6)',
              }}
            />
               {/* Overlay para asegurar legibilidad */}
      <div className="absolute inset-0 bg-linear-to-b from-[#020617]  via-transparent to-[#020617] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="mb-14">
          <p className="text-[#FFCC00] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            El camino recorrido y el que viene
          </p>
          <h2 className="text-white text-4xl md:text-5xl font-black leading-tight mb-4">
            Hoja de ruta
          </h2>
          <p className="text-slate-400 text-lg max-w-xl font-medium">
            Tres años construyendo sin inversión externa. Esto es lo que hicimos y lo que viene.
          </p>
        </div>

        <div className="flex flex-col">
          {steps.map((step, index) => {
            const cfg = statusConfig[step.status];
            const isLast = index === steps.length - 1;
            const lineDone = step.status === 'completed';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex gap-0"
              >
                {/* Spine */}
                <div className="flex flex-col items-center w-10 flex-shrink-0">
                  <div className={`w-3.5 h-3.5 rounded-full mt-1 flex-shrink-0 relative z-10 ${cfg.dotClass}`} />
                  {!isLast && (
                    <div className={`w-px flex-grow my-1 ${lineDone ? 'bg-[#FFCC00]/30' : 'bg-white/10'}`} />
                  )}
                </div>

                {/* Content */}
                <div className="pl-4 pb-10 flex-1">
                  <span className={`inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full mb-2 ${cfg.badgeClass}`}>
                    {cfg.label}
                  </span>
                  <p className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${step.status === 'pending' || step.status === 'soon' ? 'text-slate-600' : 'text-[#FFCC00]'}`}>
                    {step.date}
                  </p>
                  <h3 className="text-white font-bold text-lg mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[11px] px-2.5 py-0.5 rounded-full border ${
                          productTags.includes(tag)
                            ? 'border-[#FFCC00]/30 text-[#a07c00] bg-[#FFCC00]/08'
                            : 'border-white/10 text-slate-500 bg-slate-900'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}