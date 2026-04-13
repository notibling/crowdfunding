import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "¿Es seguro donar a través de esta plataforma?",
    answer: "Absolutamente. Utilizamos PayPal, una de las pasarelas de pago más seguras del mundo. Bling no almacena tus datos bancarios ni de tarjetas de crédito. Toda la transacción ocurre en el entorno seguro de PayPal."
  },
  {
    question: "¿En qué se utilizarán exactamente los fondos?",
    answer: "Los fondos se destinan 100% a infraestructura y desarrollo: servidores de alto rendimiento, seguridad digital (WAF, protección anti-DDoS), licencias de software y el equipo de desarrollo que construye las herramientas para los periodistas."
  },
  {
    question: "¿Qué pasa si no se llega a la meta?",
    answer: "Bling ya es una realidad en desarrollo avanzado. Cada aporte ayuda a acelerar el lanzamiento y mejorar la capacidad inicial de los servidores. El proyecto seguirá adelante, pero tu apoyo determina qué tan rápido y qué tan lejos podemos llegar."
  },
  {
    question: "¿Puedo colaborar de forma anónima?",
    answer: "Sí, podés elegir ser anónimo al momento de contactarnos después de tu donación. Respetamos tu privacidad por sobre todas las cosas."
  },
  {
    question: "¿Hay otros métodos de pago además de PayPal?",
    answer: "Por el momento, PayPal es nuestra vía principal por su alcance internacional. Si estás en Uruguay o preferís transferencia bancaria/cripto, escribinos a hello@bling.uy y coordinamos."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative px-6 py-28 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-[#FFCC00] text-xs font-semibold tracking-[0.3em] uppercase mb-4 flex items-center justify-center gap-2">
            <HelpCircle size={16} />
            Despejá tus dudas
          </p>
          <h2 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-tight mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl mx-auto">
            Todo lo que necesitás saber antes de sumarte a la red de Bling.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`rounded-2xl border transition-all duration-300 ${
                openIndex === index 
                  ? 'bg-slate-50 dark:bg-slate-900 border-[#FFCC00]/30' 
                  : 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-white/5 hover:border-slate-300 dark:border-white/10'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left gap-4"
              >
                <span className="text-slate-900 dark:text-white font-bold text-lg leading-tight">{faq.question}</span>
                <ChevronDown 
                  className={`text-[#FFCC00] shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                  size={20} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 pt-2">
                      <div className="h-px bg-slate-100 dark:bg-white/5 mb-6" />
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center p-10 rounded-3xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-900/30 backdrop-blur-sm">
          <p className="text-slate-900 dark:text-white text-xl font-bold mb-4">¿Tenés otra consulta?</p>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
            Estamos para responderte. Escribinos directamente y te contestamos lo antes posible.
          </p>
          <a 
            href="mailto:hello@bling.uy" 
            className="inline-flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-black text-xs tracking-widest uppercase px-10 py-4 rounded-xl hover:bg-[#FFCC00] dark:hover:bg-[#FFCC00] hover:text-slate-900 dark:hover:text-slate-900 transition-all duration-300"
          >
            Contactar al equipo
          </a>
        </div>
      </div>
    </section>
  );
}
