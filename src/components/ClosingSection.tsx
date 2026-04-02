import React from 'react';
import { Youtube, Twitter, Facebook, Instagram, Mail } from 'lucide-react';

export function ClosingSection() {
  return (
  <section className=" px-6 py-28 text-center">
  <div className="max-w-2xl mx-auto">
    <div className="w-10 h-px bg-[#FFCC00]/40 mx-auto mb-10" />
    <p className="text-[#ffcc00] font-bold text-xl leading-relaxed mb-8">
      Llegaste hasta acá. Eso, en sí mismo, ya significa mucho.
    </p>
    <p className="text-white text-xl leading-relaxed font-medium mb-8">
      Hayas decidido colaborar o no, gracias por leer. Por tomarte el tiempo de entender qué estamos construyendo y por qué lo estamos haciendo así. Proyectos como Bling solo tienen sentido si hay personas que crean que la información libre importa &#8278; y vos sos una de ellas.
    </p>
    <p className="text-slate-500 text-lg font-medium italic">
      — El equipo de Bling.
    </p>

    {/* RRSS */}
    <div className="mt-20 flex flex-col items-center">
      <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.3em] mb-8">Seguinos en el camino</p>
      <div className="flex gap-8">
        {[
          { icon: Youtube, href: "https://youtube.com/@blingnews" },
          { icon: Twitter, href: "https://x.com/blingnews" },
          { icon: Facebook, href: "https://facebook.com/blingnews" },
          { icon: Instagram, href: "https://instagram.com/blingnews" },
          { icon: Mail, href: "mailto:hello@bling.uy" }
        ].map((social, i) => (
          <a
            key={i}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-[#FFCC00] transition-colors duration-300"
          >
            <social.icon size={20} />
          </a>
        ))}
      </div>
    </div>

    {/* Zócalo */}
    <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
      
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
</section>
  );
}
