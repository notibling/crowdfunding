import React from 'react';
import { motion } from 'framer-motion';
import { Star, Shield, Gem, Hammer } from 'lucide-react';

const tiers = [
  {
    name: 'Colaborador',
    price: '$25',
    description: 'Donás, existís en el proyecto.',
    icon: Star,
    benefits: [
      'Badge digital exclusivo de Colaborador',
      'Tu nombre en la lista de colaboradores de BlingNews',
      'Acceso prioritario al lanzamiento beta',
    ],
    popular: false,
  },
  {
    name: 'Impulsor',
    price: '$150',
    description: 'Un impulso real para la infraestructura de medios libres.',
    icon: Shield,
    benefits: [
      'Todo lo anterior',
      'Mención especial en nuestras redes sociales',
      'Acceso a la Comunidad Bling',

    ],
    popular: false,
  },
  {
    name: 'Pilar',
    price: '$350',
    description: 'Sos parte de la historia.',
    icon: Gem,
    benefits: [
      'Todo lo anterior',
      'Nombre o logo en panel de fundación de BlingNews por 12 meses',
      'Sesión 1-on-1 estratégica con el equipo fundador',
    
            'Invitación al webinar anual con el equipo fundador',
    ],
    popular: true,
  },
  {
    name: 'Constructor',
    price: '$750+',
    description: 'El soporte fundamental del ecosistema.',
    icon: Hammer,
    benefits: [
      'Todo lo anterior',
      'Nombre o logo en panel de fundación de BlingNews por 12 meses',
      'Dos sesiones 1-on-1 con el equipo fundador',
      'Voz directa en la hoja de ruta de nuevas funciones',
        'Acceso anticipado a herramientas de monetización',
    ],
    popular: false,
  },
];

export function CrowdfundingTiersSection({ onOpenPayment }: { onOpenPayment: () => void }) {
  return (
    <section className="relative px-6 py-24 bg-slate-900 overflow-hidden">
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: "url('/images/Bling_Colab.avif')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="text-center mb-12">
          <p className="text-[#FFCC00] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Elegí tu impacto
          </p>
          <h2 className="text-white text-4xl md:text-5xl font-black leading-tight mb-3">
            Niveles de colaboración
          </h2>
          <p className="text-slate-400 text-base max-w-lg mx-auto">
            Cada aporte nos acerca un paso más a un periodismo libre de condiciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {tiers.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`relative flex flex-col p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  tier.popular
                    ? 'bg-slate-800 border-[#FFCC00]'
                    : 'bg-slate-950 border-white/5 hover:border-white/10'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FFCC00] text-slate-950 text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                    Más popular
                  </div>
                )}

                {/* Header */}
                <div className="mb-5">
                  <div className="w-9 h-9 rounded-xl bg-[#FFCC00]/10 flex items-center justify-center mb-4">
                    <Icon className="w-4 h-4 text-[#FFCC00]" />
                  </div>
                  <h3 className="text-white text-lg font-black tracking-tight mb-1">{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-white text-3xl font-black">{tier.price}</span>
                    <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">USD</span>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed">{tier.description}</p>
                </div>

                {/* Benefits */}
                <ul className="space-y-2.5 mb-6 flex-grow">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300 text-xs">
                      <span className="mt-0.5 w-3.5 h-3.5 flex-shrink-0 text-[#FFCC00]">
                        <svg viewBox="0 0 14 14" fill="none">
                          <path d="M2.5 7.5l3 3 6-6" stroke="#FFCC00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={onOpenPayment}
                  className={`w-full py-3 rounded-xl text-xs font-black tracking-widest uppercase transition-all duration-200 ${
                    tier.popular
                      ? 'bg-[#FFCC00] text-slate-950 hover:bg-white'
                      : 'bg-white/5 text-white border border-white/10 hover:bg-white hover:text-slate-950'
                  }`}
                >
                  Colaborar ahora
                </button>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-600 text-sm">
            ¿Querés colaborar con otro monto?{' '}
            <button
              onClick={onOpenPayment}
              className="text-[#FFCC00] hover:underline font-bold"
            >
              Hacé click acá
            </button>
          </p>
        </div>

      </div>
    </section>
  );
}