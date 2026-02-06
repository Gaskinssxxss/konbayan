import { gsap, ScrollTrigger } from "@/anim/gsap";
import { prefersReducedMotion, DUR, EASE } from "@/anim/presets";

export function initTiltIn(rootEl, selector = "[data-tilt]") {
  if (!rootEl) return () => {};
  if (prefersReducedMotion()) return () => {};

  const els = Array.from(rootEl.querySelectorAll(selector));
  if (!els.length) return () => {};

  const kills = els.map((el) => {
    gsap.set(el, { transformOrigin: "50% 60%", willChange: "transform" });
    gsap.set(el, { rotate: -4, scale: 0.98, y: 10, opacity: 0 });

    const tl = gsap.timeline({ paused: true });
    tl.to(el, {
      rotate: 0,
      scale: 1,
      y: 0,
      opacity: 1,
      duration: DUR.mid,
      ease: EASE.out,
      overwrite: "auto",
    });

    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      end: "bottom 10%",
      toggleActions: "play none none none",
      onEnter: () => tl.play(),
      onEnterBack: () => tl.play(),
    });

    return () => {
      st.kill();
      tl.kill();
    };
  });

  return () => kills.forEach((k) => k());
}
