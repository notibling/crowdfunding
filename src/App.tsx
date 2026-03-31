/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Youtube, Twitter, Facebook, Instagram, Mail, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-32 overflow-hidden ">
      {/* Fondo de imagen con gradiente */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bling_light.avif')" }}
      />
      
      {/* Capas de gradiente para profundidad */}
      <div className="absolute inset-0  pointer-events-none bg-gradient-to-b from-[#08090d]/20 via-[#0D0F14]/40 via-[#08090d] via-90% to-[#08090d]" >
     
     
       
        
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[#FFCC00]/10 border border-[#FFCC00]/20 text-[#FFCC00] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-8">
            Programa de Crowdfunding BLING 2026
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-4xl md:text-7xl text-shadow-2xs font-semibold leading-[0.95] tracking-tighter mb-8"
        >
          LA INFORMACIÓN LIBRE<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFCC00] via-[#FFE066] to-[#FFCC00] bg-[length:200%_auto] animate-gradient-x">
            NO SE FINANCIA SOLA.
          </span>
        </motion.h1>

       <motion.p 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="text-slate-200 text-lg text-shadow-2xs md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed mb-12"
>
  <span className=" px-2 py-0.5">
    Hay periodistas con historias importantes que contar
    <br/>y sin un lugar propio donde contarlas.
    <br/>Eso es lo que llevamos tres años tratando de cambiar.
  </span>
  <br/><br/>
  <span className=" px-2  text-transparent bg-clip-text bg-gradient-to-r from-[#FFCC00] via-[#ffe53a] to-[#FFCC00] bg-[length:150%_auto] animate-gradient-x    text-2xl text-shadow-2xs md:text-2xl">
    Hoy te invitamos a ser parte del primer año.
  </span>
</motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href="#colaborar"
            className="group relative inline-flex items-center justify-center bg-[#FFCC00] text-[#0D0F14] font-black text-sm tracking-widest uppercase px-12 py-5 overflow-hidden transition-all duration-300 hover:pr-14"
          >
            <span className="relative z-10">Quiero colaborar</span>
            <ChevronRight className="absolute right-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" size={20} />
          </a>
          
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#FFCC00] to-transparent" />
      </motion.div>
    </section>
  );
}

export function StorySection() {
  return (
    <section className=" bg-gradient-to-b from-[#08090d] via-[#0D0F14] via-[#0D0F14] via-[#0D0F14] to-[#08090d] px-6 py-28">
      <div className="max-w-3xl mx-auto">
        <p className="text-[#FFCC00] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
          Tres años de trabajo
        </p>
        <h2 className="text-white text-4xl md:text-5xl font-black leading-tight mb-10">
          Todo empezó con una pregunta incómoda.
        </h2>
        <div className="space-y-6 text-slate-300 text-lg leading-relaxed font-medium">
          <p>
            ¿Por qué un medio independiente tiene que pagar fortunas para existir en internet? ¿Por qué debe cargar con marcas de agua ajenas, plataformas cerradas, y condiciones impuestas por quien controla el servidor?
          </p>
          <p>
            Empezamos a construir una respuesta. Sin inversión externa, sin créditos, sin fondos públicos. Solo tiempo, convicción y trabajo.
          </p>
          <p className="text-white font-semibold text-xl border-l-2 border-[#FFCC00] pl-5">
            Más de tres años después, <span className="text-[#FFCC00]">Bling está casi listo.</span> Y llegamos hasta aquí sin que nadie nos deba nada &#8278; ni nosotros a nadie.
          </p>
          <p>
            Eso no fue un accidente. Fue una decisión. Creemos que la plataforma que le dará voz a los medios libres no puede nacer endeudada. No puede trasladarle sus costos de desarrollo a los mismos usuarios que viene a liberar.
          </p>
        </div>
      </div>
    </section>
  );
}

export function WhatIsBlingSection() {
  const features = [
    {
      icon: "✦",
      title: "Tu espacio, tu marca",
      description:
        "Los medios tienen su propio sitio, personalizable con su identidad. Sin logos ajenos. Sin marcas de agua. Sin condiciones editoriales.",
    },
    {
      icon: "✦",
      title: "Publicación sin barreras",
      description:
        "Un creador de contenido diseñado para periodistas, no para ingenieros. Rápido, limpio y sin fricción.",
    },
    {
      icon: "✦",
      title: "Libertad editorial total",
      description:
        "No nos interesa tu ideología política ni tu religión. Nos interesa que puedas expresarte. Eso es todo.",
    },
    {
      icon: "✦",
      title: "Publicidad justa",
      description:
        "Las empresas pueden anunciarse en BlingNews y llegar a miles de lectores con herramientas publicitarias reales y los medios monetizan sin depender de terceros.",
    },
  ];

  return (
    <section className="relative bg-[#111318] px-6 py-28 overflow-hidden">
      {/* Imagen de fondo con opacidad baja */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: "url('/images/Ads.avif')" }}
      />
      {/* Gradientes para fundir el fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111318] via-[#111318]/60 to-[#111318] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#111318] via-transparent to-[#111318] pointer-events-none opacity-40" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <p className="text-[#FFCC00] text-xs font-semibold tracking-[0.3em] uppercase mb-4 text-center">
          La plataforma
        </p>
        <h2 className="text-white text-4xl md:text-5xl font-black text-center leading-tight mb-4">
          Bling no es solo una herramienta.
        </h2>
        <p className="text-slate-400 text-center text-lg mb-16 max-w-xl mx-auto font-medium">
          Es la infraestructura que los medios independientes necesitaban desde siempre.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="border border-white/10 bg-[#0D0F14]/80 backdrop-blur-md p-8 hover:border-[#FFCC00]/40 transition-all duration-300"
            >
              <span className="text-[#FFCC00] text-2xl block mb-4">{f.icon}</span>
              <h3 className="text-white font-bold text-xl mb-3">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed font-medium">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyCrowdfundingSection() {
  return (
    <section className=" px-6 py-28">
      <div className="max-w-3xl mx-auto">
        <p className="text-[#FFCC00] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
          Por qué te lo pedimos a vos
        </p>
        <h2 className="text-white text-4xl md:text-5xl font-black leading-tight mb-10">
          Podríamos haber pedido fondos públicos.<br />
          <span className="text-slate-500">Elegimos no hacerlo.</span>
        </h2>
        <div className="space-y-6 text-slate-300 text-lg leading-relaxed font-medium">
          <p>
            Creemos en un principio simple: no es justo financiar ideas privadas con dinero de todos los contribuyentes. Si Bling vale la pena, tiene que sostenerse con quienes libremente decidan que vale la pena.
          </p>
          <p>
            Por eso creamos este programa de crowdfunding. No buscamos inversores que exijan retorno. No buscamos subsidios que condicionen. Buscamos personas que entiendan lo que está en juego cuando un medio independiente no puede existir.
          </p>
          <div className="bg-[#111318] border border-[#FFCC00]/20 p-6 my-8">
            <p className="text-white font-bold text-xl mb-2">
              ¿Qué hacemos con tu colaboración?
            </p>
            <p className="text-slate-400">
              Garantizar el primer año de operación de la plataforma: servidores, dominio, seguridad, soporte y mejoras continuas. Nada más. Sin sueldos inflados. Sin gastos de representación. Sin cenas de lanzamiento ni catering. Solo y exclusivamente lo escencial para el lanzamiento.
            </p>
          </div>
          <p>
            Todo lo que construimos en estos tres años llegó a cero costo. Lo que viene ahora tiene un costo real &#8278; y preferimos que lo elija quien crea en esto, no quien tenga que cobrar algo a cambio.
          </p>
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
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
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0F14] via-[#0D0F14]/60 to-[#0D0F14] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0D0F14_100%)] opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-white text-5xl md:text-6xl font-black leading-tight mb-6">
          Dale voz a quienes<br />tienen algo que decir.
        </h2>
        <p className="text-slate-300 text-xl font-medium mb-10 max-w-xl mx-auto leading-relaxed">
          Tu colaboración, del monto que vos decidas, hace posible que medios independientes tengan un espacio propio, libre y profesional.
        </p>
        <a
          href="https://paypal.me/notibling"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#FFCC00] text-[#0D0F14] font-black text-sm tracking-widest uppercase px-12 py-5 hover:bg-white transition-colors duration-200"
        >
          Colaborar ahora →
        </a>
        <p className="text-slate-300 text-xl mt-6 font-medium">
          <a href="https://paypal.me/notibling" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFCC00] transition-colors">paypal.me/notibling</a> · ¿Preguntas? <a href="mailto:hello@bling.uy" className="hover:text-[#FFCC00] transition-colors">hello@bling.uy</a>
        </p>
      </div>
    </section>
  );
}

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
    <p className="text-slate-400 text-lg leading-relaxed font-medium">
      Si algún día usás la plataforma, si compartís esto con alguien, o si simplemente seguís de cerca lo que estamos haciendo, ya sos parte de esto.
    </p>
    <div className="w-10 h-px bg-[#FFCC00]/40 mx-auto mt-10 mb-8" />
    <p className="font-black text-3xl tracking-tight flex flex-row items-center justify-center gap-1 mb-8">
      <span className="text-[#FFCC00]">&#8278;</span>
      <span className="text-[#FFFFFF]">TEAMBLING</span>
      <span className="text-[#FFCC00] scale-x-[-1]">&#8278;</span>
    </p>

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
</section>
  );
}

export default function App() {
  return (
    <main className="font-montserrat bg-gradient-to-t from-[#08090d] via-[#0D0F14] via-[#0D0F14] via-[#0D0F14] to-[#08090d]">
      <HeroSection />
      <StorySection />
      <WhatIsBlingSection />
      <WhyCrowdfundingSection />
      <CTASection />
      <ClosingSection />
    </main>
  );
}
