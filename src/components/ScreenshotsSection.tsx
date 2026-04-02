import React, { useState } from 'react';
import { X, ArrowLeft, ArrowRight, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { screenshots } from '../constants';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

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
