import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { friendVentures } from '../constants';
import { ConfirmationModal } from './ConfirmationModal';

export function PartnersSection() {
  const [selectedPartner, setSelectedPartner] = useState<{ name: string; link: string } | null>(null);

  if (friendVentures.length === 0) return null;

  const handlePartnerClick = (name: string, link: string) => {
    setSelectedPartner({ name, link });
  };

  const handleConfirm = () => {
    if (selectedPartner) {
      window.open(selectedPartner.link, '_blank', 'noopener,noreferrer');
      setSelectedPartner(null);
    }
  };

  return (
    <section className="bg-[#08090D] min-h-[600px] py-16 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Fondo de imagen con gradiente */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
        style={{ backgroundImage: "url('/images/Bling_Expo.avif')" }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-[#08090D] via-[#08090D]/30 to-[#08090D] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#08090D_100%)] opacity-60 pointer-events-none" />

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#0070BA]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F3BA2F]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#ffcc00] text-[10px] font-black uppercase tracking-[0.4em] mb-4"
          >
            Red de Colaboración
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none"
          >
            Emprendimientos Amigos
          </motion.h2>
           <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white text-md py-4 font-light tracking-wider uppercase leading-none"
          >
            EMPRENDEDORES A UN BLING DE DISTANCIA
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-linear-to-r from-slate-500 via-slate-700 to-[#ffcc00] mx-auto mt-2 rounded-full"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 ">
          {friendVentures.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              onClick={() => handlePartnerClick(partner.name, partner.link)}
              className="group cursor-pointer bg-zinc-900/[0.9] border border-white/5 rounded-2xl p-4 flex flex-col items-center justify-center transition-all duration-300 hover:bg-white/[0.1] hover:border-[#0070BA]/30 hover:shadow-[0_0_30px_rgba(0,112,186,0.1)] relative overflow-hidden"
            >
              <div className=" !aspect-video rounded-xl object-contain overflow-hidden  w-full mb-4 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500 opacity-50 group-hover:opacity-100">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="w-full object-contain  filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]"
                />
              </div>
              <div className="text-center">
                <h3 className="text-white font-bold uppercase text-[15px] tracking-[0.2em] mb-1 opacity-50 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {partner.name}
                </h3>
                <p className="text-[#ffcc00] text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75">
                  Visitar sitio
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ConfirmationModal
        isOpen={!!selectedPartner}
        onClose={() => setSelectedPartner(null)}
        onConfirm={handleConfirm}
        partnerName={selectedPartner?.name || ''}
      />
    </section>
  );
}
