// src/anim/gsap.js
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Default feel: brutal but still smooth (not “floaty”)
 */
gsap.defaults({
  duration: 0.9,
  ease: "power3.out",
});

/**
 * ScrollTrigger tuning:
 * - fastScrollEnd: scrub catches up to scroll end (more responsive)
 * - ignoreMobileResize: stable on mobile (avoids refresh spam)
 */
ScrollTrigger.config({
  ignoreMobileResize: true,
  autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize",
});

ScrollTrigger.defaults({
  anticipatePin: 1,
  fastScrollEnd: true,
});

export { gsap, ScrollTrigger };
