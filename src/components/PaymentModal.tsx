import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Copy, CheckCircle2 } from 'lucide-react';
import { BinanceIcon } from './BinanceIcon';
import { binanceId } from '../constants';

export function PaymentModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(binanceId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-[#111318] border border-white/10 w-full max-w-md rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-[#F3BA2F] p-6 text-[#0D0F14] flex justify-between items-center">
              <div className="flex items-center gap-3">
                <BinanceIcon className="w-8 h-8" />
                <div>
                  <h3 className="font-black text-xl tracking-tight uppercase leading-none">Binance Pay</h3>
                  <p className="text-[10px] font-bold opacity-70 tracking-widest uppercase mt-1">Colaboración Directa</p>
                </div>
              </div>
              <button onClick={onClose} className="hover:scale-110 transition-transform">
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="text-center mb-8">
                <p className="text-slate-400 text-sm font-medium mb-6">
                  Podés colaborar directamente enviando USDT, BUSD o cualquier cripto vía <strong>Binance Pay</strong> utilizando el siguiente ID:
                </p>
                
                <div 
                  onClick={handleCopy}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 cursor-pointer hover:border-[#F3BA2F]/50 transition-all group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                    {copied ? <CheckCircle2 size={16} className="text-[#F3BA2F]" /> : <Copy size={16} />}
                  </div>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Binance ID</p>
                  <p className="text-white text-3xl font-black tracking-wider group-active:scale-95 transition-transform">
                    {binanceId}
                  </p>
                  {copied && (
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-[#F3BA2F] text-[10px] font-bold mt-2 uppercase tracking-widest"
                    >
                      ¡Copiado al portapapeles!
                    </motion.p>
                  )}
                </div>
              </div>

              {/* Instructions */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#F3BA2F]/10 border border-[#F3BA2F]/20 flex items-center justify-center text-[#F3BA2F] text-[10px] font-bold mt-0.5">1</div>
                  <p className="text-slate-400 text-xs leading-relaxed">Abrí tu App de <strong>Binance</strong> y andá a <strong>Pay</strong>.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#F3BA2F]/10 border border-[#F3BA2F]/20 flex items-center justify-center text-[#F3BA2F] text-[10px] font-bold mt-0.5">2</div>
                  <p className="text-slate-400 text-xs leading-relaxed">Seleccioná <strong>Enviar</strong> y elegí la opción <strong>ID de Binance</strong>.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#F3BA2F]/10 border border-[#F3BA2F]/20 flex items-center justify-center text-[#F3BA2F] text-[10px] font-bold mt-0.5">3</div>
                  <p className="text-slate-400 text-xs leading-relaxed">Ingresá el ID <span className="text-white font-bold">{binanceId}</span> y el monto a colaborar.</p>
                </div>
              </div>

              {/* Security Info */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/5 text-center mb-8">
                <div className="flex items-center justify-center gap-4 opacity-50 mb-3">
                  <BinanceIcon className="w-6 h-6" />
                  <span className="text-white font-black text-xs tracking-tighter">BINANCE PAY</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-slate-500">
                  <ShieldCheck size={14} className="text-[#F3BA2F]" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Transferencia Segura P2P</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
