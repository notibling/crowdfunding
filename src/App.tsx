/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Youtube, Twitter, Facebook, Instagram, Mail, ChevronRight, X, ZoomIn, ArrowLeft, ArrowRight, Maximize2, ShieldCheck, Copy, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const binanceId = import.meta.env.VITE_BINANCE_ID || "1231358176";

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
      <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-[#08090d]/20 via-[#0D0F14]/40 via-90% to-[#08090d]" >
     
     
       
        
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
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FFCC00] via-[#FFE066] to-[#FFCC00] bg-size-[200%_auto] animate-gradient-x">
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
  <span className=" px-2  text-transparent bg-clip-text bg-linear-to-r from-[#FFCC00] via-[#ffe53a] to-[#FFCC00] bg-size-[150%_auto] animate-gradient-x    text-2xl text-shadow-2xs md:text-2xl">
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
        <div className="w-px h-16 bg-linear-to-b from-[#FFCC00] to-transparent" />
      </motion.div>
    </section>
  );
}

export function StorySection() {
  return (
    <section className="bg-linear-to-b from-[#08090d] via-[#0D0F14] to-[#08090d] px-6 py-28">
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
      <div className="absolute inset-0 bg-linear-to-b from-[#111318] via-[#111318]/60 to-[#111318] pointer-events-none" />
      <div className="absolute inset-0 bg-linear-to-r from-[#111318] via-transparent to-[#111318] pointer-events-none opacity-40" />

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

const screenshots = [
  {
    src: "/images/screenshots/Login.avif",
    alt: "Ingreso y Registro",
    caption: "Zona de Registro y Autenticación",
  },
  {
    src: "/images/screenshots/BlingNews.avif",
    alt: "BlingNews Landing",
    caption: "Dashboard del medio",
  },
  {
    src: "/images/screenshots/BlingPages.avif",
    alt: "BlingPages Landing",
    caption: "Constructor de sitios web",
  },
  {
    src: "/images/screenshots/Post.avif",
    alt: "Post Individual",
    caption: "Página de Noticia Individual",
  },
  {
    src: "/images/screenshots/CrearAnuncio.avif",
    alt: "Crear Anuncio",
    caption: "Formulario de Creación de Anuncios",
  },
  {
    src: "/images/screenshots/Profile.avif",
    alt: "Perfil",
    caption: "Perfil de Usuario",
  },
];

const collaborators = [
  // { name: "Colaborador 1", photo: "/images/collaborators/1.jpg", link: "https://x.com/colab1" },
];

const partnerCompanies = [
  // { name: "Empresa 1", logo: "/images/partners/1.svg", link: "https://empresa1.com" },
];

export function CollaboratorsSection() {
  return (
    <section className="bg-[#0D0F14] px-6 py-28 border-t border-white/5">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-[#FFCC00] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
          Comunidad
        </p>
        <h2 className="text-white text-3xl md:text-4xl font-black mb-12">
          Quienes hacen posible Bling.
        </h2>

        {collaborators.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-6">
            {collaborators.map((c, i) => (
              <a
                key={i}
                href={c.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-slate-800 group-hover:border-[#FFCC00] transition-all duration-300">
                  <img src={c.photo} alt={c.name} className="w-full h-full object-cover" />
                </div>
                {/* Tooltip con nombre */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-[#FFCC00] text-[#0D0F14] text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-20">
                  {c.name}
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="py-10">
            <p className="text-slate-500 text-lg italic mb-6">Aún no hay colaboradores públicos.</p>
            <a
              href="#colaborar"
              className="text-[#FFCC00] font-bold tracking-widest uppercase text-sm border-b-2 border-[#FFCC00]/30 hover:border-[#FFCC00] transition-all pb-1"
            >
              ¡Sé el primero!
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export function CompaniesSection() {
  if (partnerCompanies.length === 0) return null;

  return (
    <section className="bg-[#111318] py-20 overflow-hidden border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 mb-10 text-center">
        <p className="text-[#FFCC00] text-xs font-semibold tracking-[0.3em] uppercase">
          Empresas Aliadas
        </p>
      </div>
      
      <div className="relative flex overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 px-6">
          {[...partnerCompanies, ...partnerCompanies, ...partnerCompanies].map((company, i) => (
            <a
              key={i}
              href={company.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img src={company.logo} alt={company.name} className="h-10 md:h-12 w-auto object-contain" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ScreenshotsSection() {
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  return (
    <section className="bg-[#111318] px-6 py-28 border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#FFCC00] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            En desarrollo
          </p>
          <h2 className="text-white text-4xl md:text-5xl font-black leading-tight mb-4">
            Así se ve Bling por dentro.
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Capturas reales del trabajo de más de tres años. Deslizá y hacé click para ampliar.
          </p>
        </div>

        <div className="relative px-4 md:px-12">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="w-full py-12"
          >
            {screenshots.map((s, i) => (
              <SwiperSlide key={i} className="max-w-[300px] sm:max-w-[500px] md:max-w-[700px]">
                <div 
                  onClick={() => setZoomImage(s.src)}
                  className="group relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-slate-900 shadow-2xl cursor-zoom-in"
                >
                  <img
                    src={s.src}
                    alt={s.alt}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay con caption al hacer hover */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[#FFCC00] text-xs font-bold tracking-widest uppercase mb-1">Captura #{i + 1}</p>
                        <h3 className="text-white text-xl font-bold">{s.caption}</h3>
                      </div>
                      <Maximize2 className="text-[#FFCC00] opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Botones de navegación personalizados */}
          <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 hidden md:flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#FFCC00] hover:text-[#0D0F14] transition-all duration-300 cursor-pointer">
            <ArrowLeft size={20} />
          </button>
          <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 hidden md:flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#FFCC00] hover:text-[#0D0F14] transition-all duration-300 cursor-pointer">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Lightbox Modal con Framer Motion */}
      <AnimatePresence>
        {zoomImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomImage(null)}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/95 p-4 md:p-10 cursor-zoom-out"
          >
            <motion.button
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute top-6 right-6 text-white/50 hover:text-[#FFCC00] transition-colors z-110"
              onClick={() => setZoomImage(null)}
            >
              <X size={32} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-7xl h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={zoomImage}
                alt="Zoomed screenshot"
                className="max-w-full max-h-full object-contain rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.2);
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #FFCC00 !important;
        }
      `}</style>
    </section>
  );
}

export function BinanceIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.624 13.9202l-4.624 4.624-4.624-4.624 4.624-4.624 4.624 4.624zm3.696-3.696l-3.696 3.696 3.696 3.696 3.68-3.696-3.68-3.696zm-12.016 0l-3.696 3.696 3.696 3.696 3.68-3.696-3.68-3.696zm8.32-8.32l-3.696 3.696 3.696 3.696 3.68-3.696-3.68-3.696zm0 16.64l-3.696 3.696 3.696 3.696 3.68-3.696-3.68-3.696z" />
    </svg>
  );
}

export function PaymentModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(binanceId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-[#111318] border border-white/10 w-full max-w-md rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-[#F3BA2F] p-6 text-[#0D0F14] flex justify-between items-center">
              <div className="flex items-center gap-3">
                <BinanceIcon className="w-8 h-8" />
                <div>
                  <h3 className="font-black text-xl tracking-tight uppercase leading-none">Binance Pay</h3>
                  <p className="text-[10px] font-bold opacity-70 tracking-widest uppercase mt-1">Colaboración Directa</p>
                </div>
              </div>
              <button onClick={onClose} className="hover:scale-110 transition-transform">
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="text-center mb-8">
                <p className="text-slate-400 text-sm font-medium mb-6">
                  Podés colaborar directamente enviando USDT, BUSD o cualquier cripto vía <strong>Binance Pay</strong> utilizando el siguiente ID:
                </p>
                
                <div 
                  onClick={handleCopy}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 cursor-pointer hover:border-[#F3BA2F]/50 transition-all group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                    {copied ? <CheckCircle2 size={16} className="text-[#F3BA2F]" /> : <Copy size={16} />}
                  </div>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Binance ID</p>
                  <p className="text-white text-3xl font-black tracking-wider group-active:scale-95 transition-transform">
                    {binanceId}
                  </p>
                  {copied && (
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-[#F3BA2F] text-[10px] font-bold mt-2 uppercase tracking-widest"
                    >
                      ¡Copiado al portapapeles!
                    </motion.p>
                  )}
                </div>
              </div>

              {/* Instructions */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#F3BA2F]/10 border border-[#F3BA2F]/20 flex items-center justify-center text-[#F3BA2F] text-[10px] font-bold mt-0.5">1</div>
                  <p className="text-slate-400 text-xs leading-relaxed">Abrí tu App de <strong>Binance</strong> y andá a <strong>Pay</strong>.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#F3BA2F]/10 border border-[#F3BA2F]/20 flex items-center justify-center text-[#F3BA2F] text-[10px] font-bold mt-0.5">2</div>
                  <p className="text-slate-400 text-xs leading-relaxed">Seleccioná <strong>Enviar</strong> y elegí la opción <strong>ID de Binance</strong>.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#F3BA2F]/10 border border-[#F3BA2F]/20 flex items-center justify-center text-[#F3BA2F] text-[10px] font-bold mt-0.5">3</div>
                  <p className="text-slate-400 text-xs leading-relaxed">Ingresá el ID <span className="text-white font-bold">{binanceId}</span> y el monto a colaborar.</p>
                </div>
              </div>

              {/* Security Info */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/5 text-center">
                <div className="flex items-center justify-center gap-4 opacity-50 mb-3">
                  <BinanceIcon className="w-6 h-6" />
                  <span className="text-white font-black text-xs tracking-tighter">BINANCE PAY</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-slate-500">
                  <ShieldCheck size={14} className="text-[#F3BA2F]" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Transferencia Segura P2P</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

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
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  return (
    <main className="font-montserrat bg-linear-to-t from-[#08090d] via-[#0D0F14] to-[#08090d]">
      <HeroSection />
      <StorySection />
      <WhatIsBlingSection />
      <ScreenshotsSection />
      <CollaboratorsSection />
      <CompaniesSection />
      <WhyCrowdfundingSection />
      <CTASection onOpenPayment={() => setIsPaymentOpen(true)} />
      <ClosingSection />
      <PaymentModal isOpen={isPaymentOpen} onClose={() => setIsPaymentOpen(false)} />
    </main>
  );
}
