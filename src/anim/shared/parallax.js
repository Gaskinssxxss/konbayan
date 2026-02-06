// src/anim/shared/parallax.js
import { gsap } from "@/anim/gsap";
import { prefersReducedMotion } from "@/anim/presets";

function qa(root, s) {
  return Array.from((root || document).querySelectorAll(s));
}

/**
 * Inisialisasi parallax berbasis attribute:
 * - data-parallax="40"   => translateY 40px
 * - data-spin="20"       => rotate 20deg along scroll
 * Optional:
 * - data-parallax-start="top bottom"
 * - data-parallax-end="bottom top"
 * - data-parallax-scrub="0.6"
 */
export function initParallax(rootEl, selector = "[data-parallax]") {
  if (!rootEl) return () => {};
  if (prefersReducedMotion()) return () => {};

  const els = qa(rootEl, selector);
  if (!els.length) return () => {};

  const kills = els.map((el) => {
    const y = Number(el.getAttribute("data-parallax") || "32");
    const spin = Number(el.getAttribute("data-spin") || "0");
    const start = el.getAttribute("data-parallax-start") || "top bottom";
    const end = el.getAttribute("data-parallax-end") || "bottom top";
    const scrubAttr = el.getAttribute("data-parallax-scrub");
    const scrub = scrubAttr == null ? 0.6 : Number(scrubAttr);

    gsap.set(el, { willChange: "transform" });

    const tween = gsap.to(el, {
      y,
      rotation: spin ? `+=${spin}` : undefined,
      ease: "none",
      scrollTrigger: {
        trigger: el.closest("section") || el,
        start,
        end,
        scrub,
        fastScrollEnd: true,
      },
    });

    return () => {
      try {
        tween.kill();
      } catch {
        // noop
      }
    };
  });

  return () => {
    kills.forEach((k) => {
      try {
        k();
      } catch {
        // noop
      }
    });
  };
}
