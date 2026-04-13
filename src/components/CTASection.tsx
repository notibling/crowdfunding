import React from 'react';
import { PayPalIcon } from './PayPalIcon';
import { SectionBackground } from './SectionBackground';

export function CTASection({ onOpenPayment }: { onOpenPayment: () => void }) {
  return (
    <section
      id="colaborar"
      className="relative bg-white dark:bg-slate-950 px-6 py-32 text-center overflow-hidden"
    >
      <SectionBackground 
        url="/images/Bling_Periodista.avif" 
        animated={false} 
        opacity="medium" 
        blur={true}
        fadeDirection="all" 
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-slate-900 dark:text-white text-5xl md:text-6xl font-black leading-tight mb-6">
          Dale voz a quienes<br />tienen algo que decir.
        </h2>
        <p className="text-slate-900 dark:text-slate-300 text-xl font-medium mb-10 max-w-xl mx-auto leading-relaxed">
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
          
          <p className="text-slate-600 dark:text-slate-400 text-xs mt-4 font-bold tracking-[0.2em] uppercase">
            Pago Seguro con PayPal
          </p>
        </div>

        {/* Alternative Method Zone */}
        <div className="mt-16 pt-10 border-t border-slate-200 dark:border-white/5 max-w-2xl mx-auto">
          <h4 className="text-[#0070BA] font-black text-2xl uppercase tracking-widest mb-6">
            Apoyá la independencia
          </h4>
          <p className="text-slate-900 dark:text-slate-300 text-xl leading-relaxed mb-6">
            Elegimos PayPal por su seguridad y facilidad de uso para colaboraciones internacionales. Tu apoyo directo nos ayuda a mantener nuestra infraestructura y seguir creciendo.
          </p>
          <p className="text-slate-800 dark:text-slate-400 text-xl leading-relaxed mb-8">
            Si preferís otro método, escribinos a <a href="mailto:hello@bling.uy" className="text-slate-900 dark:text-white hover:text-[#0070BA] transition-colors underline underline-offset-4">hello@bling.uy</a> y coordinamos juntos la forma que mejor te quede.
          </p>
          <div className="flex items-center justify-center gap-1 text-emerald-600 dark:text-emerald-500 text-[10px] font-bold uppercase tracking-widest ">
            <span>Tus datos son confidenciales y están protegidos por la <a href="https://gdpr-info.eu/" className="text-[#0070BA] hover:underline transition-colors font-black">(GDPR) • RGPD</a></span>
            <span>🔒</span>
          </div>
        </div>
      </div>
    </section>
  );
}
