import React from 'react';
import { PayPalIcon } from './PayPalIcon';

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
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#0070BA] text-white font-black text-sm tracking-widest uppercase px-16 py-6 hover:bg-white hover:text-[#0070BA] transition-colors duration-200 gap-4 shadow-[0_0_30px_rgba(0,112,186,0.2)]"
          >
            <PayPalIcon className="w-6 h-6" />
            Colaborar vía PayPal
          </button>
          
          <p className="text-slate-400 text-xs mt-4 font-bold tracking-[0.2em] uppercase">
            Pago Seguro con PayPal
          </p>
        </div>

        {/* Alternative Method Zone */}
        <div className="mt-16 pt-10 border-t border-white/5 max-w-2xl mx-auto">
          <h4 className="text-[#0070BA] font-black text-2xl uppercase tracking-widest mb-6">
            Apoyá la independencia
          </h4>
          <p className="text-slate-300 text-xl leading-relaxed mb-6">
            Elegimos PayPal por su seguridad y facilidad de uso para colaboraciones internacionales. Tu apoyo directo nos ayuda a mantener nuestra infraestructura y seguir creciendo.
          </p>
          <p className="text-slate-400 text-xl leading-relaxed mb-8">
            Si preferís otro método, escribinos a <a href="mailto:hello@bling.uy" className="text-white hover:text-[#0070BA] transition-colors underline underline-offset-4">hello@bling.uy</a> y coordinamos juntos la forma que mejor te quede.
          </p>
          <div className="flex items-center justify-center gap-1 text-emerald-500 text-[10px] font-bold uppercase tracking-widest ">
            <span>Tus datos son confidenciales y están protegidos por la <a href="https://gdpr-info.eu/" className="text-[#0070BA] hover:underline transition-colors">(GDPR) • RGPD</a></span>
            <span>🔒</span>
          </div>
        </div>
      </div>
    </section>
  );
}
