// src/anim/pages/home.js
import { gsap, ScrollTrigger } from "@/anim/gsap";
import { initSectionIO } from "@/anim/shared/sectionIO";
import { initParallax } from "@/anim/shared/parallax";
import { scrollRevealWords } from "@/anim/shared/textSplit";
import { floatXY, prefersReducedMotion } from "@/anim/presets";
import { initTiltIn } from "@/anim/shared/tiltIn"; // ✅ add
import { initButtonJolt } from "@/anim/shared/buttonJolt";

function qa(root, s) {
  return Array.from((root || document).querySelectorAll(s));
}

export function initHomePageAnimations(rootEl) {
  if (!rootEl) return () => {};

  const ctx = gsap.context((self) => {
    const kills = [];

    kills.push(initSectionIO(rootEl));
    kills.push(initParallax(rootEl));
    kills.push(initTiltIn(rootEl)); // ✅ new
    kills.push(initButtonJolt(rootEl));

    qa(rootEl, "[data-reveal]").forEach((el) => {
      const sec = el.closest("section") || el;
      kills.push(
        scrollRevealWords(el, {
          trigger: sec,
          start: el.getAttribute("data-reveal-start") || "top 90%",
        }),
      );
    });

    if (!prefersReducedMotion()) {
      qa(rootEl, "[data-float]").forEach((el) => {
        const amp = Number(el.getAttribute("data-float-amp") || "10");
        const rot = Number(el.getAttribute("data-float-rot") || "0");
        const dur = Number(el.getAttribute("data-float-dur") || "3.1");
        const delay = Number(el.getAttribute("data-float-delay") || "0");
        kills.push(floatXY(el, { amp, rot, dur, delay }));
      });
    }

    const refresh = () => {
      try {
        ScrollTrigger.refresh();
      } catch {
        //
      }
    };
    const raf = requestAnimationFrame(refresh);
    window.addEventListener("load", refresh, { once: true });
    if (document.fonts?.ready) document.fonts.ready.then(refresh);

    self._killAll = () => {
      try {
        cancelAnimationFrame(raf);
      } catch {
        //
      }
      try {
        window.removeEventListener("load", refresh);
      } catch {
        //
      }
      kills.forEach((k) => {
        try {
          k();
        } catch {
          //
        }
      });
      try {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      } catch {
        //
      }
    };
  }, rootEl);

  return () => {
    try {
      ctx._killAll?.();
    } catch {
      //
    }
    try {
      ctx.revert();
    } catch {
      //
    }
  };
}
