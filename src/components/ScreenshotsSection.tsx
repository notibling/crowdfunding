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
  const [currentBg, setCurrentBg] = useState(screenshots[0].src);

  return (
    <section className="relative bg-white dark:bg-slate-950 px-6 py-28 border-t border-slate-100 dark:border-slate-800 overflow-hidden transition-colors duration-1000">

      {/* Fondo dinámico con crossfade */}
      <div className="absolute inset-0 pointer-events-none">
        <AnimatePresence>
          <motion.div
            key={currentBg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[60px] scale-110"
              style={{ backgroundImage: `url('${currentBg}')` }}
            />
            <div className="absolute inset-0 bg-white/80 dark:bg-slate-950/70" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#F3BA2F] text-xs font-semibold tracking-[0.2em] uppercase mb-4"
          >
            En desarrollo
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-slate-900 dark:text-white text-4xl md:text-5xl font-semibold leading-tight mb-4"
          >
            Así se ve Bling por dentro.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="text-slate-500 dark:text-slate-400 text-base max-w-xl mx-auto"
          >
            Capturas reales del trabajo de más de tres años.<br />Deslizá y hacé click para ampliar.
          </motion.p>
        </div>

        {/* Swiper */}
        <div className="relative px-4 md:px-12">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 80,
              modifier: 1,
              slideShadows: false,
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
            onSlideChange={(swiper) => {
              const activeIndex = swiper.realIndex;
              setCurrentBg(screenshots[activeIndex].src);
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="w-full py-12"
          >
            {screenshots.map((s, i) => (
              <SwiperSlide key={i} className="max-w-[300px] sm:max-w-[500px] md:max-w-[700px]">
                <div
                  onClick={() => setZoomImage(s.src)}
                  className="group relative aspect-[16/10] overflow-hidden border border-slate-200 dark:border-slate-700/50 bg-slate-100 dark:bg-slate-900 cursor-zoom-in"
                >
                  <img
                    src={s.src}
                    alt={s.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />

                  {/* Overlay caption */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-[#F3BA2F] text-[10px] font-semibold tracking-[0.2em] uppercase mb-1">
                          Captura #{i + 1}
                        </p>
                        <h3 className="text-white text-lg font-semibold">{s.caption}</h3>
                      </div>
                      <Maximize2
                        size={18}
                        className="text-[#F3BA2F] opacity-0 group-hover:opacity-100 transition-all duration-300 mb-1"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Botones de navegación */}
          <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 hidden md:flex items-center justify-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 hover:border-[#F3BA2F] hover:text-[#F3BA2F] transition-all duration-200 cursor-pointer">
            <ArrowLeft size={16} />
          </button>
          <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 hidden md:flex items-center justify-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 hover:border-[#F3BA2F] hover:text-[#F3BA2F] transition-all duration-200 cursor-pointer">
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {zoomImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomImage(null)}
            className="fixed inset-0 z-130 flex items-center justify-center bg-white/95 dark:bg-slate-950/95 p-4 md:p-10 cursor-zoom-out"
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute top-6 right-6 text-slate-400 hover:text-[#F3BA2F] transition-colors z-110"
              onClick={() => setZoomImage(null)}
            >
              <X size={24} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.95, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 16 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-7xl h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={zoomImage}
                alt="Zoomed screenshot"
                className="max-w-full max-h-full object-contain border border-slate-200 dark:border-slate-700/50"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .swiper-pagination-bullet {
          background: rgba(100, 100, 100, 0.3);
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #F3BA2F !important;
          width: 20px !important;
          border-radius: 2px !important;
        }
      `}</style>
    </section>
  );
}