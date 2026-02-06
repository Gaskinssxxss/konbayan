// src/anim/presets.js
import { gsap } from "@/anim/gsap";

/**
 * Preset durasi & easing biar konsisten antar halaman
 */
export const DUR = {
  fast: 0.35,
  mid: 0.6,
  base: 0.9,
  slow: 1.2,
};

export const EASE = {
  in: "power2.in",
  out: "power3.out",
  io: "power2.inOut",
  brutal: "power4.out",
};

/**
 * Helper: cek prefers-reduced-motion
 */
export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Helper anim “masuk brutal”: sedikit naik + opacity
 */
export function tweenIn(targets, opts = {}) {
  return gsap.fromTo(
    targets,
    { y: opts.fromY ?? 18, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: opts.duration ?? DUR.mid,
      ease: opts.ease ?? EASE.out,
      stagger: opts.stagger ?? 0,
      overwrite: "auto",
      ...opts.to,
    },
  );
}

/**
 * Floating simple (buat bean / sticker / micro decor).
 * Akan return function cleanup.
 */
export function floatXY(el, opts = {}) {
  if (!el) return () => {};
  const amp = opts.amp ?? 10;
  const rot = opts.rot ?? 0;
  const dur = opts.dur ?? 3.0;
  const delay = opts.delay ?? 0;

  gsap.set(el, { willChange: "transform" });

  const t1 = gsap.to(el, {
    y: `+=${amp}`,
    rotation: `+=${rot}`,
    duration: dur,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay,
  });

  const t2 = gsap.to(el, {
    x: `+=${Math.round(amp * 0.55)}`,
    duration: dur + 0.75,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: delay + 0.12,
  });

  return () => {
    try {
      t1.kill();
      t2.kill();
    } catch {
      // noop
    }
  };
}
