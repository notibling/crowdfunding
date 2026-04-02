import React from 'react';
import { BinanceIcon } from './BinanceIcon';
import { binanceId } from '../constants';

export function CTASection({ onOpenPayment }: { onOpenPayment: () => void }) {
  return (
    <section
      id="colaborar"
      className="relative bg-[#0D0F14] px-6 py-32 text-center overflow-hidden"
    >
      {/* Fondo de imagen con gradiente */}
       <div 
         className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ backgroundImage: "url('/images/Bling_Periodista.avif')" }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#0D0F14] via-[#0D0F14]/60 to-[#0D0F14] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0D0F14_100%)] opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-white text-5xl md:text-6xl font-black leading-tight mb-6">
          Dale voz a quienes<br />tienen algo que decir.
        </h2>
        <p className="text-slate-300 text-xl font-medium mb-10 max-w-xl mx-auto leading-relaxed">
          Tu colaboración, del monto que vos decidas, hace posible que medios independientes tengan un espacio propio, libre y profesional.
        </p>
        
        <div className="flex flex-col items-center justify-center gap-4">
          <button
            onClick={onOpenPayment}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#F3BA2F] text-[#0D0F14] font-black text-sm tracking-widest uppercase px-16 py-6 hover:bg-white transition-colors duration-200 gap-4 shadow-[0_0_30px_rgba(243,186,47,0.2)]"
          >
            <BinanceIcon className="w-6 h-6" />
            Colaborar vía Binance Pay
          </button>
          
          <p className="text-slate-400 text-xs mt-4 font-bold tracking-[0.2em] uppercase">
            Binance ID: {binanceId}
          </p>
        </div>

        <p className="text-slate-500 text-sm mt-12 font-medium">
          ¿Dudas sobre el proceso? <a href="mailto:hello@bling.uy" className="text-[#F3BA2F] hover:underline transition-colors">hello@bling.uy</a>
        </p>
      </div>
    </section>
  );
}
