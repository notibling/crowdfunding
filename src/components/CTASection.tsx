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

        {/* Alternative Method Zone */}
        <div className="mt-16 pt-10 border-t border-white/5 max-w-2xl mx-auto">
          <h4 className="text-[#F3BA2F] font-black text-sm uppercase tracking-widest mb-6">
            ¿No usás Binance?
          </h4>
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            Elegimos Binance para evitar las comisiones abusivas de otras plataformas y los laberintos burocráticos del sistema financiero uruguayo — pero entendemos que no es para todos.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed mb-8">
            Si preferís otro método, escribinos a <a href="mailto:hello@bling.uy" className="text-white hover:text-[#F3BA2F] transition-colors underline underline-offset-4">hello@bling.uy</a> y coordinamos juntos la forma que mejor te quede.
          </p>
          <div className="flex items-center justify-center gap-2 text-slate-500 text-[10px] font-bold uppercase tracking-widest opacity-50">
            <span>Tus datos son confidenciales y están protegidos</span>
            <span>🔒</span>
          </div>
        </div>
      </div>
    </section>
  );
}
