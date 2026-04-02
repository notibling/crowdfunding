import React, { useState } from 'react';
import { Youtube, Twitter, Facebook, Instagram, Mail } from 'lucide-react';
import { teamMembers } from '../constants';
import { TeamModal } from './TeamModal';
import { motion } from 'framer-motion';

export function ClosingSection() {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

  return (
    <section className="px-6 py-28 text-center relative">
      <div className="max-w-2xl mx-auto">
        <div className="w-10 h-px bg-[#FFCC00]/40 mx-auto mb-10" />
        <p className="text-[#ffcc00] font-bold text-xl leading-relaxed mb-8">
          Llegaste hasta acá. Eso, en sí mismo, ya significa mucho.
        </p>
        <p className="text-white text-xl leading-relaxed font-medium mb-8">
          Hayas decidido colaborar o no, gracias por leer. Por tomarte el tiempo de entender qué estamos construyendo y por qué lo estamos haciendo así. Proyectos como Bling solo tienen sentido si hay personas que crean que la información libre importa &#8278; y vos sos una de ellas.
        </p>
        <p className="text-slate-400 text-lg leading-relaxed font-medium">
          Si algún día usás la plataforma, si compartís esto con alguien, o si simplemente seguís de cerca lo que estamos haciendo, ya sos parte de esto.
        </p>
        <div className="w-10 h-px bg-[#FFCC00]/40 mx-auto mt-10 mb-8" />
        
        {/* Team Section */}
        <div className="mb-16">
          <p className="font-black text-3xl tracking-tight flex flex-row items-center justify-center gap-1 mb-10">
            <span className="text-[#FFCC00]">&#8278;</span>
            <span className="text-[#FFFFFF]">TEAMBLING</span>
            <span className="text-[#FFCC00] scale-x-[-1]">&#8278;</span>
          </p>

          <div className="flex justify-center items-center gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full p-1 bg-linear-to-tr from-[#FFCC00]/20 to-transparent group-hover:from-[#FFCC00] transition-all duration-500 overflow-hidden">
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-110"
                  />
                  {/* Name Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
                    <span className="text-white text-[10px] md:text-xs font-black uppercase tracking-widest text-center px-2">
                      {member.name}
                    </span>
                  </div>
                </div>
                {/* Decorative Pulse */}
                <div className="absolute inset-0 rounded-full bg-[#FFCC00]/20 scale-100 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl -z-10" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center gap-6 mb-8">
      <a href="https://www.youtube.com/@notibling" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#FFCC00] transition-colors duration-200" aria-label="YouTube">
        <Youtube size={24} />
      </a>
      <a href="https://x.com/notibling" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#FFCC00] transition-colors duration-200" aria-label="X (Twitter)">
        <Twitter size={24} />
      </a>
      <a href="https://www.facebook.com/blingnews" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#FFCC00] transition-colors duration-200" aria-label="Facebook">
        <Facebook size={24} />
      </a>
      <a href="https://instagram.com/noti.bling" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#FFCC00] transition-colors duration-200" aria-label="Instagram">
        <Instagram size={24} />
      </a>
      <a href="mailto:hello@bling.uy" className="text-slate-500 hover:text-[#FFCC00] transition-colors duration-200" aria-label="Email">
        <Mail size={24} />
      </a>
    </div>
  </div>

  {/* Zócalo */}
  <div className="border-t border-slate-800 mt-16 pt-8 max-w-4xl mx-auto">
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

      {/* Izquierda — copyright */}
      <div>
        <p className="text-slate-400 text-sm font-semibold tracking-widest uppercase mb-1">
          BlingCompany&reg;
        </p>
        <p className="text-slate-600 text-xs font-medium">
          Todos los derechos reservados &copy; {new Date().getFullYear()}
        </p>
      </div>

      {/* Centro — mantenimiento */}
      <div className="flex items-center gap-2">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FFCC00] animate-pulse" />
        <p className="text-slate-500 text-xs font-medium">
          Sitio principal en mantenimiento pre-lanzamiento
        </p>
      </div>

      {/* Derecha — contacto */}
      <div className="md:text-right text-center">
        <p className="text-slate-500 text-xs font-medium mb-1">Consultas · Sugerencias · Reportes</p>
        
         <a href="mailto:hello@bling.uy?subject=Consultas | Sugerencias | Reportes"
          className="text-slate-400 text-xs font-semibold hover:text-[#FFCC00] transition-colors duration-200 tracking-wide"
        >
          hello@bling.uy
        </a>
      </div>
</div>
    </div>
    
    {/* Team Modal */}
    <TeamModal 
      member={selectedMember} 
      onClose={() => setSelectedMember(null)} 
    />
</section>
  );
}
