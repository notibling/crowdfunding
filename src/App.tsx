/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Youtube, Twitter, Facebook, Instagram, Mail } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-32 overflow-hidden bg-[#0D0F14]">
      {/* Fondo de imagen con gradiente para difuminar hacia abajo */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: "url('/images/bling_light.avif')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F14] via-[#0D0F14]/30 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0D0F14] to-transparent pointer-events-none" />

      {/* Fondo decorativo original */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FFCC00]/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FFCC00]/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto mt-20">
        <p className="text-[#FFCC00] text-xs font-semibold tracking-[0.3em] uppercase mb-6">
          Programa de Crowdfunding
        </p>
        <h1 className="text-white text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6">
          La información libre<br />
          <span className="text-[#FFCC00]">no se financia sola.</span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-10">
          Llevamos más de tres años construyendo la plataforma que los medios independientes necesitan. Hoy te invitamos a ser parte del primer año.
        </p>
        <a
          href="#colaborar"
          className="inline-block bg-[#FFCC00] text-[#0D0F14] font-black text-sm tracking-widest uppercase px-10 py-4 hover:bg-white transition-colors duration-200"
        >
          Quiero colaborar
        </a>
      </div>
    </section>
  );
}

export function StorySection() {
  return (
    <section className="bg-[#0D0F14] px-6 py-28">
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
            Eso no fue un accidente. Fue una decisión. Creemos que la herramienta que le dará voz a los medios libres no puede nacer endeudada. No puede trasladarle sus costos de desarrollo a los mismos usuarios que viene a liberar.
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
        "Las empresas pueden anunciarse en BlingNews y llegar a miles de lectores con herramientas publicitarias reales &#8278; y los medios monetizan sin depender de terceros.",
    },
  ];

  return (
    <section className="bg-[#111318] px-6 py-28">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#FFCC00] text-xs font-semibold tracking-[0.3em] uppercase mb-4 text-center">
          La plataforma
        </p>
        <h2 className="text-white text-4xl md:text-5xl font-black text-center leading-tight mb-4">
          Bling no es solo una herramienta.
        </h2>
        <p className="text-slate-400 text-center text-lg mb-16 max-w-xl mx-auto">
          Es la infraestructura que los medios independientes necesitaban desde siempre.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="border border-slate-800 bg-[#0D0F14] p-8 hover:border-[#FFCC00]/40 transition-colors duration-300"
            >
              <span className="text-[#FFCC00] text-2xl block mb-4">{f.icon}</span>
              <h3 className="text-white font-bold text-xl mb-3">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyCrowdfundingSection() {
  return (
    <section className="bg-[#0D0F14] px-6 py-28">
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
      className="relative bg-[#FFCC00] px-6 py-32 text-center overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-black/10" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-black/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-black/5 rounded-full" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-[#0D0F14] text-5xl md:text-6xl font-black leading-tight mb-6">
          Dale voz a quienes<br />tienen algo que decir.
        </h2>
        <p className="text-[#0D0F14]/70 text-xl font-medium mb-10 max-w-xl mx-auto leading-relaxed">
          Tu colaboración, del monto que vos decidas, hace posible que medios independientes tengan un espacio propio, libre y profesional.
        </p>
        <a
          href="https://paypal.me/notibling"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#0D0F14] text-[#FFCC00] font-black text-sm tracking-widest uppercase px-12 py-5 hover:bg-[#1a1d26] transition-colors duration-200"
        >
          Colaborar ahora →
        </a>
        <p className="text-[#0D0F14]/50 text-sm mt-6 font-medium">
          paypal.me/notibling · Preguntas: hello@bling.uy
        </p>
      </div>
    </section>
  );
}

export function ClosingSection() {
  return (
    <section className="bg-[#0D0F14] px-6 py-28 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="w-10 h-px bg-[#FFCC00]/40 mx-auto mb-10" />
        <p className="text-[#ffcc00] font-bold text-lg leading-relaxed mb-8">
          Llegaste hasta acá. Eso, en sí mismo, ya significa mucho.
        </p>
        <p className="text-white text-xl leading-relaxed font-medium mb-8">
          Hayas decidido colaborar o no, gracias por leer. Por tomarte el tiempo de entender qué estamos construyendo y por qué lo estamos haciendo así. Proyectos como Bling solo tienen sentido si hay personas que crean que la información libre importa &#8278; y vos sos una de ellas.
        </p>
        <p className="text-slate-400 text-lg leading-relaxed font-medium">
          Si algún día usás la plataforma, si compartís esto con alguien, o si simplemente seguís de cerca lo que estamos haciendo, ya sos parte de esto.
        </p>
        <div className="w-10 h-px bg-[#FFCC00]/40 mx-auto mt-10 mb-8" />
        <p className=" font-black text-3xl tracking-tight flex flex-row items-center justify-center gap-1 mb-8">
         <span className="text-[#FFCC00]">&#8278;</span><span className="text-[#FFFFFF]">TEAMBLING</span><span className="text-[#FFCC00] scale-x-[-1]">&#8278;</span>
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

        <p className="text-slate-400 text-sm font-medium tracking-wide mb-2">
          <a href="mailto:hello@bling.uy" className="hover:text-[#FFCC00] transition-colors">hello@bling.uy</a>
        </p>
        <p className="text-slate-600 text-xs font-medium tracking-wide">
          Nuestra web principal está en mantenimiento pre-lanzamiento.
        </p>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main className="font-montserrat">
      <HeroSection />
      <StorySection />
      <WhatIsBlingSection />
      <WhyCrowdfundingSection />
      <CTASection />
      <ClosingSection />
    </main>
  );
}
