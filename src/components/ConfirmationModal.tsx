import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  partnerName: string;
}

export function ConfirmationModal({ isOpen, onClose, onConfirm, partnerName }: ConfirmationModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-130 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-[#0f172a] border border-white/10 w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl p-8 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-2">
              <button onClick={onClose} className="text-slate-500 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="w-16 h-16 bg-[#0070BA]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <ExternalLink className="text-[#0070BA] w-8 h-8" />
            </div>

            <h3 className="text-white text-xl font-black uppercase tracking-tight mb-4">
              ¿Quieres visitar {partnerName}?
            </h3>
            
            <p className="text-slate-400 text-sm font-medium mb-8 leading-relaxed">
              Estás a punto de salir de Bling Crowdfunding para visitar el sitio web de este emprendimiento amigo.
            </p>

            <div className="flex flex-col gap-3">
              <button
                onClick={onConfirm}
                className="w-full bg-[#0070BA] text-white font-black text-xs tracking-widest uppercase py-4 rounded-xl hover:bg-white hover:text-[#0070BA] transition-all duration-200 shadow-lg shadow-[#0070BA]/20"
              >
                Sí, visitar sitio
              </button>
              <button
                onClick={onClose}
                className="w-full bg-white/5 text-slate-400 font-bold text-[10px] tracking-widest uppercase py-4 rounded-xl hover:bg-white/10 hover:text-white transition-all duration-200"
              >
                No, quedarme aquí
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
