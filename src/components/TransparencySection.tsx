import React from 'react';
import { ShieldCheck, EyeOff, ExternalLink } from 'lucide-react';
import { publicDonations } from '../constants';

export function TransparencySection() {
  return (
    <section className="relative bg-slate-950 px-6 py-28 border-t border-white/5 overflow-hidden">
      {/* Fondo de imagen con gradiente */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: "url('/images/Transparency.avif')" }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-slate-950 via-slate-950/80 to-slate-950 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)] opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#FFCC00] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Transparencia
          </p>
          <h2 className="text-white text-4xl md:text-5xl font-black leading-tight mb-6">
            Tu apoyo construye el futuro.
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Valoramos profundamente cada colaboración. Por eso, mantenemos un registro transparente de quienes hacen posible este proyecto. 
           <br/> <span className="text-white text-xl"> Vos elegís cómo aparecer.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Explicación de Privacidad */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-[#FFCC00] font-bold text-xl mb-4 flex items-center gap-3">
                <ShieldCheck size={24} />
                Privacidad Total
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Todo el que desee su donativo puede ser <strong>totalmente anónimo</strong>. Si preferís que tu apoyo sea público, lo publicaremos en esta sección para agradecerte.
              </p>
              
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-3">¿Querés aparecer?</h4>
              <p className="text-slate-500 text-xs leading-relaxed mb-6">
                Envianos un mail a <a href="mailto:hello@bling.uy" className="text-[#FFCC00] hover:underline">hello@bling.uy</a> especificando:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-slate-400 text-xs italic">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFCC00] mt-1" />
                  Si querés que incluyamos tu logo/foto.
                </li>
                <li className="flex items-start gap-2 text-slate-400 text-xs italic">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFCC00] mt-1" />
                  Tu red social o sitio web.
                </li>
                <li className="flex items-start gap-2 text-slate-400 text-xs italic">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFCC00] mt-1" />
                  Si querés que mostremos el monto donado.
                </li>
              </ul>
            </div>
          </div>

          {/* Tabla de Donativos */}
          <div className="lg:col-span-2">
            <div className="bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-white/5 border-bottom border-white/10">
                      <th className="px-6 py-5 text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">Colaborador</th>
                      <th className="px-6 py-5 text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">Monto</th>
                      <th className="px-6 py-5 text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">Fecha</th>
                      <th className="px-6 py-5 text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] text-right">Info</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {publicDonations.length > 0 ? (
                      publicDonations.map((d, i) => (
                        <tr key={i} className="hover:bg-white/2 transition-colors">
                          <td className="px-6 py-5">
                            <div className="flex items-center gap-3">
                              {d.logo ? (
                                <img src={d.logo} alt={d.donor} className="w-8 h-8 rounded-full object-cover border border-white/10" />
                              ) : (
                                <div className="w-8 h-8 rounded-full bg-[#FFCC00]/10 border border-[#FFCC00]/20 flex items-center justify-center">
                                  {d.isAnonymous ? <EyeOff size={14} className="text-slate-500" /> : <span className="text-[#FFCC00] text-xs font-bold">{d.donor[0]}</span>}
                                </div>
                              )}
                              <span className={`text-sm font-bold ${d.isAnonymous ? "text-slate-500 italic" : "text-white"}`}>
                                {d.donor}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-5">
                            <span className="text-[#FFCC00] text-sm font-black tracking-tight">{d.amount}</span>
                          </td>
                          <td className="px-6 py-5 text-slate-500 text-xs font-medium">
                            {d.date}
                          </td>
                          <td className="px-6 py-5 text-right">
                            {!d.isAnonymous && d.link && (
                              <a href={d.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-slate-400 hover:text-[#FFCC00] text-[10px] font-bold transition-colors">
                                VER <ExternalLink size={12} />
                              </a>
                            )}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={4} className="px-6 py-20 text-center">
                          <p className="text-slate-500 text-sm italic mb-4">Aún no hay donativos públicos registrados.</p>
                          <a href="#colaborar" className="text-[#FFCC00] text-xs font-bold uppercase tracking-widest border-b border-[#FFCC00]/30 hover:border-[#FFCC00] transition-all pb-1">
                            Ser el primero
                          </a>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="mt-6 text-slate-600 text-[10px] text-center font-medium uppercase tracking-widest">
              Actualizado semanalmente · Todas las transacciones son finales
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
