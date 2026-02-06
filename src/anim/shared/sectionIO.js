// src/anim/shared/sectionIO.js
import { gsap, ScrollTrigger } from "@/anim/gsap";
import { DUR, EASE, prefersReducedMotion } from "@/anim/presets";

function qa(root, s) {
  return Array.from((root || document).querySelectorAll(s));
}
function inside(el, selector) {
  try {
    return !!el?.closest(selector);
  } catch {
    return false;
  }
}
function hasRevealText(el) {
  try {
    return !!el?.querySelector?.("[data-reveal]");
  } catch {
    return false;
  }
}

/**
 * SECTION IN/OUT (global)
 * - wrapper: [data-enter]
 * - children: [data-enter-child]
 *
 * rule:
 * - if data-reveal exists inside wrap/child, avoid forced transform (prevents split-text conflicts)
 * - skip pinned / special areas: [data-stack-panel] (if you use pinned scenes)
 */
export function initSectionIO(rootEl, opts = {}) {
  if (!rootEl) return () => {};
  if (prefersReducedMotion()) return () => {};

  const wraps = qa(rootEl, opts.wrapSelector ?? "[data-enter]").filter(
    (el) => !inside(el, opts.skipInside ?? "[data-stack-panel]"),
  );

  if (!wraps.length) return () => {};

  const killers = [];

  wraps.forEach((wrap) => {
    let kids = qa(wrap, opts.childSelector ?? "[data-enter-child]").filter(
      (k) => !inside(k, opts.skipInside ?? "[data-stack-panel]"),
    );

    const wrapHasReveal = hasRevealText(wrap);

    // do not animate children that contain data-reveal
    kids = kids.filter((k) => !hasRevealText(k));

    const targets = kids.length ? kids : [wrap];

    // initial state
    const onlyOpacity = wrapHasReveal && kids.length === 0;

    if (onlyOpacity) {
      gsap.set(targets, { opacity: 0 });
    } else {
      gsap.set(targets, {
        y: opts.fromY ?? 18,
        opacity: 0,
        willChange: "transform,opacity",
      });
    }

    const tl = gsap.timeline({ paused: true });

    if (onlyOpacity) {
      tl.to(targets, {
        opacity: 1,
        duration: opts.duration ?? DUR.fast,
        ease: opts.ease ?? EASE.io,
        overwrite: "auto",
      });
    } else {
      tl.to(targets, {
        y: 0,
        opacity: 1,
        duration: opts.duration ?? DUR.mid,
        ease: opts.ease ?? EASE.out,
        stagger: kids.length ? opts.stagger ?? 0.08 : 0,
        overwrite: "auto",
      });
    }

    const st = ScrollTrigger.create({
      trigger: wrap,
      start: opts.start ?? "top 88%",
      end: opts.end ?? "bottom 16%",
      toggleActions: "play none none none",
      onEnter: () => tl.play(),
      onEnterBack: () => tl.play(),
      onRefresh: (self) => {
        // jaga state biar ga “nyangkut”
        if (self.progress <= 0) tl.progress(0).pause();
        else if (self.progress >= 1) tl.progress(1).pause();
      },
    });

    killers.push(() => {
      try {
        st.kill();
        tl.kill();
      } catch {
        // noop
      }
    });
  });

  return () => {
    killers.forEach((k) => {
      try {
        k();
      } catch {
        // noop
      }
    });
  };
}
