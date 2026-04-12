import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

export function FloatingDonateBar({ onOpenPayment }: { onOpenPayment: () => void }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Aparece después de 400px de scroll
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-110 w-[90%] max-w-lg"
        >
          <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 pl-2">
              <div className="w-8 h-8 rounded-full bg-[#FFCC00]/10 flex items-center justify-center text-[#FFCC00]">
                <Heart size={16} fill="currentColor" />
              </div>
              <div className="hidden sm:block">
                <p className="text-white text-[10px] font-black uppercase tracking-widest leading-none mb-1">
                  Apoyá a Bling
                </p>
                <p className="text-slate-400 text-[9px] font-bold uppercase tracking-tighter leading-none">
                  Infraestructura Independiente
                </p>
              </div>
            </div>

            <button
              onClick={onOpenPayment}
              className="bg-gradient-to-tr from-emerald-800 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 duration-150 ease-in-out transition-all text-white font-black text-[10px] tracking-widest uppercase px-6 py-3 rounded-xl  hover:scale-[1.02] shadow-lg hover:shadow-emerald-500/30"
            >
              Colaborar ahora
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
