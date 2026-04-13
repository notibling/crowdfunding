'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

type Opacity = 'subtle' | 'low' | 'medium' | 'high' | 'full';
type FadeDirection = 'all' | 'vertical' | 'horizontal' | 'radial' | 'vignette' | 'none';
type BlendMode =
  | 'normal'
  | 'multiply'
  | 'screen'
  | 'overlay'
  | 'soft-light'
  | 'hard-light'
  | 'luminosity';

export interface SectionBackgroundProps {
  /** URL de la imagen o array de URLs para parallax multi-capa */
  url: string | string[];

  /** Anima la imagen con un suave zoom-in al montar */
  animated?: boolean;

  /** Aplica blur a la imagen */
  blur?: boolean | number;

  /** Desatura la imagen (0 = color, 1 = blanco y negro) */
  desaturate?: boolean | number;

  /** Opacidad de la imagen de fondo */
  opacity?: Opacity;

  /** Dirección del gradiente de overlay */
  fadeDirection?: FadeDirection;

  /**
   * Intensidad del fade en los bordes (0–1).
   * Cuanto mayor, más área queda cubierta.
   * @default 0.15
   */
  fadeStrength?: number;

  /**
   * Cuánto del centro queda "limpio" (0–1).
   * 0 = el gradiente empieza desde el borde mismo
   * 0.6 = el 60% central queda transparente
   * @default 0.6
   */
  clearCenter?: number;

  /** Color del overlay de gradiente (para adaptar a secciones no blancas) */
  overlayColor?: string;
  overlayColorDark?: string;

  /** Parallax: desplaza la imagen al hacer scroll */
  parallax?: boolean;

  /** Intensidad del efecto parallax (px por 100px de scroll) */
  parallaxSpeed?: number;

  /** Modo de mezcla CSS de la imagen */
  blendMode?: BlendMode;

  /** Tinte de color sobre la imagen */
  tint?: string;
  tintOpacity?: number;

  /** Escala el fondo (útil para efectos de zoom inicial) */
  scale?: number;

  /** Posición de la imagen */
  position?: string;

  className?: string;
  children?: React.ReactNode;
}

// ─────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────

const opacityMap: Record<Opacity, string> = {
  subtle: 'opacity-[0.08] dark:opacity-[0.18]',
  low:    'opacity-[0.18] dark:opacity-[0.28]',
  medium: 'opacity-[0.40] dark:opacity-[0.45]',
  high:   'opacity-[0.70] dark:opacity-[0.65]',
  full:   'opacity-100',
};

/**
 * Genera stops intermedios que simulan una curva ease-out cúbica.
 * En vez de pasar abruptamente de opaco→transparente, distribuye
 * 6 stops con opacidades decrecientes (1 → 0.85 → 0.6 → 0.35 → 0.1 → 0).
 * El resultado es una transición orgánica sin bordes duros visibles.
 */
function easeStops(color: string, fromPct: number, toPct: number, invert = false): string {
  // Curva ease-out cúbica: t³ invertida
  const alphas = invert
    ? [0, 0.06, 0.18, 0.42, 0.72, 1]   // transparente → sólido
    : [1, 0.72, 0.42, 0.18, 0.06, 0];  // sólido → transparente

  return alphas
    .map((a, i) => {
      const pct = fromPct + ((toPct - fromPct) * i) / (alphas.length - 1);
      // Extrae rgb de "rgb(r, g, b)" o usa el color directamente
      const rgba = color.startsWith('rgb(')
        ? color.replace('rgb(', 'rgba(').replace(')', `, ${a})`)
        : `color-mix(in srgb, ${color} ${Math.round(a * 100)}%, transparent)`;
      return `${rgba} ${pct.toFixed(1)}%`;
    })
    .join(', ');
}

function buildOverlayGradients(
  fadeDirection: FadeDirection,
  clearCenter: number,
  fadeStrength: number,
  lightColor: string,
  darkColor: string,
): React.ReactNode {
  // edgePct  = zona 100% sólida en el borde
  // fadeZone = cuánto dura la transición suavizada (más grande = más difuminado)
  const edgePct  = Math.round(fadeStrength * 100);
  const fadeZone = Math.round(clearCenter  * 40 + 8); // 8–48% de zona de transición
  const clearFrom = edgePct + fadeZone;
  const clearTo   = 100 - clearFrom;

  // Zona sólida → transición ease → transparente → transparente → transición ease → sólido
  const buildLinear = (color: string, dir: string) => `
    linear-gradient(${dir},
      ${color} 0%,
      ${color} ${edgePct}%,
      ${easeStops(color, edgePct, clearFrom)},
      transparent ${clearFrom}%,
      transparent ${clearTo}%,
      ${easeStops(color, clearTo, 100 - edgePct, true)},
      ${color} ${100 - edgePct}%,
      ${color} 100%
    )
  `.trim();

  const vertStyle:     React.CSSProperties = { background: buildLinear(lightColor, 'to bottom') };
  const vertStyleDark: React.CSSProperties = { background: buildLinear(darkColor,  'to bottom') };
  const horzStyle:     React.CSSProperties = { background: buildLinear(lightColor, 'to right')  };
  const horzStyleDark: React.CSSProperties = { background: buildLinear(darkColor,  'to right')  };

  const base = 'absolute inset-0 pointer-events-none';

  switch (fadeDirection) {
    case 'all':
      return (
        <>
          {/* Vertical */}
          <div className={`${base} dark:hidden`} style={vertStyle} />
          <div className={`${base} hidden dark:block`} style={vertStyleDark} />
          {/* Horizontal (complementario) */}
          <div className={`${base} dark:hidden`} style={{ ...horzStyle, opacity: 0.85 }} />
          <div className={`${base} hidden dark:block`} style={{ ...horzStyleDark, opacity: 0.45 }} />
        </>
      );

    case 'vertical':
      return (
        <>
          <div className={`${base} dark:hidden`} style={vertStyle} />
          <div className={`${base} hidden dark:block`} style={vertStyleDark} />
        </>
      );

    case 'horizontal':
      return (
        <>
          <div className={`${base} dark:hidden`} style={horzStyle} />
          <div className={`${base} hidden dark:block`} style={horzStyleDark} />
        </>
      );

    case 'radial': {
      const clearPct  = Math.round(clearCenter * 85);
      const fadeZoneR = Math.round(clearCenter * 30 + 10);
      const solidPct  = Math.min(clearPct + fadeZoneR, 98);
      // Stops ease-out del centro hacia afuera: transparente → sólido
      const radialStops = (color: string) =>
        [0, 0.06, 0.18, 0.42, 0.72, 1]
          .map((a, i, arr) => {
            const pct = clearPct + ((solidPct - clearPct) * i) / (arr.length - 1);
            const rgba = color.startsWith('rgb(')
              ? color.replace('rgb(', 'rgba(').replace(')', `, ${a})`)
              : `color-mix(in srgb, ${color} ${Math.round(a * 100)}%, transparent)`;
            return `${rgba} ${pct.toFixed(1)}%`;
          })
          .join(', ');
      const radialL = `radial-gradient(ellipse 110% 100% at 50% 50%, transparent ${clearPct}%, ${radialStops(lightColor)}, ${lightColor} 100%)`;
      const radialD = `radial-gradient(ellipse 110% 100% at 50% 50%, transparent ${clearPct}%, ${radialStops(darkColor)}, ${darkColor} 100%)`;
      return (
        <>
          <div className={`${base} dark:hidden`} style={{ background: radialL }} />
          <div className={`${base} hidden dark:block`} style={{ background: radialD }} />
        </>
      );
    }

    case 'vignette': {
      // Vignette suave: oscurece bordes sin taparlos de blanco
      return (
        <div
          className={base}
          style={{
            background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(0,0,0,0.55) 100%)',
          }}
        />
      );
    }

    case 'none':
    default:
      return null;
  }
}

// ─────────────────────────────────────────────
// Parallax hook
// ─────────────────────────────────────────────

function useParallax(enabled: boolean, speed: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (!enabled) return;

    let raf: number;
    const onScroll = () => {
      raf = requestAnimationFrame(() => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const vh   = window.innerHeight;
        // Ratio de qué tan centrado está el elemento (−1 a +1)
        const ratio = (rect.top + rect.height / 2 - vh / 2) / vh;
        setOffset(ratio * speed);
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [enabled, speed]);

  return { ref, offset };
}

// ─────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────

export function SectionBackground({
  url,
  animated       = false,
  blur           = false,
  desaturate     = false,
  opacity        = 'medium',
  fadeDirection  = 'all',
  fadeStrength   = 0.15,
  clearCenter    = 0.60,
  overlayColor     = 'rgb(255, 255, 255)',
  overlayColorDark = 'rgb(2, 6, 23)',
  parallax       = false,
  parallaxSpeed  = 40,
  blendMode      = 'normal',
  tint,
  tintOpacity    = 0.15,
  scale          = 1,
  position       = 'center',
  className      = '',
  children,
}: SectionBackgroundProps) {
  const prefersReduced = useReducedMotion();
  const shouldAnimate  = animated && !prefersReduced;

  const { ref: parallaxRef, offset } = useParallax(parallax, parallaxSpeed);

  // ── Blur
  const blurValue = blur === true ? 4 : blur === false ? 0 : blur;
  const satValue  = desaturate === true
    ? 0
    : desaturate === false
      ? 1
      : 1 - (desaturate as number);

  const filterStr = [
    blurValue ? `blur(${blurValue}px)` : '',
    satValue < 1 ? `saturate(${satValue})` : '',
  ]
    .filter(Boolean)
    .join(' ') || 'none';

  // ── Múltiples URLs (multi-layer)
  const urls   = Array.isArray(url) ? url : [url];
  const isMulti = urls.length > 1;

  // ── Parallax offset (aplicado como translateY)
  const parallaxTransform = parallax
    ? `scale(${scale + 0.1}) translateY(${offset}px)` // escala extra para evitar bordes
    : `scale(${scale})`;

  // ── Imagen base
  const imageStyle = (imgUrl: string, layerIndex = 0): React.CSSProperties => ({
    backgroundImage: `url('${imgUrl}')`,
    backgroundSize:  'cover',
    backgroundPosition: position,
    backgroundRepeat: 'no-repeat',
    filter: filterStr,
    mixBlendMode: blendMode as React.CSSProperties['mixBlendMode'],
    transform: parallaxTransform,
    transformOrigin: 'center',
    willChange: parallax || shouldAnimate ? 'transform' : 'auto',
    // Para capas múltiples, cada capa tiene diferente velocidad de parallax
    ...(isMulti && {
      opacity: layerIndex === 0 ? 1 : 0.5,
    }),
  });

  const imageBaseClass = 'absolute inset-0 pointer-events-none';

  // ── Overlay gradients
  const overlayGradients = fadeDirection !== 'none'
    ? buildOverlayGradients(
        fadeDirection,
        clearCenter,
        fadeStrength,
        overlayColor,
        overlayColorDark,
      )
    : null;

  return (
    <div ref={parallaxRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>

      {/* ── Imagen(es) de fondo */}
      {urls.map((imgUrl, i) => {
        const wrapClass = `${imageBaseClass} ${opacityMap[opacity]}`;

        if (shouldAnimate && i === 0) {
          return (
            <div key={imgUrl} className={`${imageBaseClass} ${opacityMap[opacity]}`}>
              <motion.div
                className={imageBaseClass}
                style={imageStyle(imgUrl, i)}
                initial={{ scale: (scale * 1.06), opacity: 0 }}
                animate={{ scale: scale, opacity: 1 }}
                transition={{ duration: 2.2, ease: [0.25, 0.1, 0.25, 1] }}
              />
            </div>
          );
        }

        return (
          <div
            key={imgUrl}
            className={wrapClass}
            style={imageStyle(imgUrl, i)}
          />
        );
      })}

      {/* ── Tinte de color opcional */}
      {tint && (
        <div
          className={imageBaseClass}
          style={{ backgroundColor: tint, opacity: tintOpacity }}
        />
      )}

      {/* ── Overlay de fade */}
      {overlayGradients}

      {/* ── Children opcionales (ej: ruido, patterns) */}
      {children}
    </div>
  );
}

// ─────────────────────────────────────────────
// Preset compositions — shortcuts para casos comunes
// ─────────────────────────────────────────────

/** Hero con imagen vibrante y fade solo en bordes verticales */
export function HeroBackground(props: Omit<SectionBackgroundProps, 'fadeDirection'>) {
  return (
    <SectionBackground
      fadeDirection="all"
      fadeStrength={0.12}
      clearCenter={0.65}
      animated
      opacity="high"
      {...props}
    />
  );
}

/** Sección de contenido con imagen sutil, casi como textura */
export function SubtleBackground(props: Omit<SectionBackgroundProps, 'opacity'>) {
  return (
    <SectionBackground
      opacity="subtle"
      fadeDirection="all"
      fadeStrength={0.20}
      clearCenter={0.55}
      blur={2}
      desaturate={0.3}
      {...props}
    />
  );
}

/** Parallax con zoom animado para secciones de impacto */
export function ParallaxBackground(props: SectionBackgroundProps) {
  return (
    <SectionBackground
      parallax
      parallaxSpeed={50}
      fadeDirection="radial"
      clearCenter={0.6}
      animated
      opacity="high"
      {...props}
    />
  );
}

/** Overlay oscuro estilo película (no invierte en dark mode) */
export function CinematicBackground({
  url,
  opacity = 'high',
  ...rest
}: Omit<SectionBackgroundProps, 'fadeDirection'>) {
  return (
    <SectionBackground
      url={url}
      opacity={opacity}
      fadeDirection="vignette"
      overlayColor="rgb(0,0,0)"
      overlayColorDark="rgb(0,0,0)"
      {...rest}
    />
  );
}