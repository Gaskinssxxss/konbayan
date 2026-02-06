// src/anim/shared/buttonJolt.js
import { gsap } from "@/anim/gsap";
import { prefersReducedMotion } from "@/anim/presets";

function qa(root, s) {
  return Array.from((root || document).querySelectorAll(s));
}

/**
 * Subtle button jolt on hover/press.
 */
export function initButtonJolt(rootEl, selector = "[data-btn]") {
  if (!rootEl) return () => {};
  if (prefersReducedMotion()) return () => {};

  const els = qa(rootEl, selector);
  if (!els.length) return () => {};

  const kills = els.map((el) => {
    gsap.set(el, { willChange: "transform" });

    const onEnter = () =>
      gsap.to(el, { scale: 1.04, rotate: 0.4, duration: 0.16, ease: "power2.out" });
    const onLeave = () =>
      gsap.to(el, { scale: 1, rotate: 0, duration: 0.2, ease: "power2.out" });
    const onDown = () =>
      gsap.to(el, { scale: 0.98, duration: 0.08, ease: "power2.out" });
    const onUp = () =>
      gsap.to(el, { scale: 1.02, duration: 0.1, ease: "power2.out" });

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("mousedown", onDown);
    el.addEventListener("mouseup", onUp);
    el.addEventListener("blur", onLeave);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("mousedown", onDown);
      el.removeEventListener("mouseup", onUp);
      el.removeEventListener("blur", onLeave);
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
