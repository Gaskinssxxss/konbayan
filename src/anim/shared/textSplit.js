// src/anim/shared/textSplit.js
import { gsap, ScrollTrigger } from "@/anim/gsap";
import { DUR, EASE, prefersReducedMotion } from "@/anim/presets";

/**
 * Split text -> spans per word (for brutal reveal).
 * Cached to avoid re-splitting.
 * Includes revert for clean cleanup.
 */
const splitCache = new WeakMap();

function ensureRaw(el) {
  if (!el) return;
  if (!el.dataset) return;
  if (el.dataset.kxRawText != null) return;
  el.dataset.kxRawText = el.textContent || "";
}

export function revertSplit(el) {
  if (!el) return;
  const raw = el.dataset?.kxRawText;
  if (raw != null) el.textContent = raw;
  splitCache.delete(el);
}

/**
 * Split by words (inline spans)
 */
export function splitWords(el) {
  if (!el) return [];
  if (splitCache.has(el)) return splitCache.get(el);

  ensureRaw(el);

  const raw = (el.textContent || "").trim();
  if (!raw) {
    splitCache.set(el, []);
    return [];
  }

  const words = raw.split(/\s+/);
  el.textContent = "";

  const spans = words.map((w, i) => {
    const s = document.createElement("span");
    s.className = "inline-block will-change-transform";
    s.textContent = w + (i === words.length - 1 ? "" : " ");
    el.appendChild(s);
    return s;
  });

  splitCache.set(el, spans);
  return spans;
}

/**
 * Reveal words (manual)
 */
export function revealWords(el, opts = {}) {
  if (!el) return null;
  if (prefersReducedMotion()) return null;

  const spans = splitWords(el);
  if (!spans.length) return null;

  gsap.set(spans, { yPercent: opts.fromYPercent ?? 120, opacity: 0 });

  return gsap.to(spans, {
    yPercent: 0,
    opacity: 1,
    duration: opts.duration ?? DUR.base,
    ease: opts.ease ?? EASE.out,
    stagger: opts.stagger ?? 0.045,
    overwrite: "auto",
    ...opts.to,
  });
}

/**
 * Reveal words on scroll (enter & reverse)
 * return cleanup function.
 */
export function scrollRevealWords(el, opts = {}) {
  if (!el) return () => {};
  if (prefersReducedMotion()) return () => {};

  const spans = splitWords(el);
  if (!spans.length) return () => {};

  gsap.set(spans, { yPercent: opts.fromYPercent ?? 120, opacity: 0 });

  const tween = gsap.to(spans, {
    yPercent: 0,
    opacity: 1,
    duration: opts.duration ?? 0.85,
    ease: opts.ease ?? EASE.out,
    stagger: opts.stagger ?? 0.04,
    paused: true,
    overwrite: "auto",
  });

  const st = ScrollTrigger.create({
    trigger: opts.trigger ?? el,
    start: opts.start ?? "top 88%",
    end: opts.end ?? "bottom 10%",
    toggleActions: "play reverse play reverse",
    onEnter: () => tween.play(),
    onEnterBack: () => tween.play(),
    onLeave: () => tween.reverse(),
    onLeaveBack: () => tween.reverse(),
    ...opts.scroll,
  });

  return () => {
    try {
      st.kill();
      tween.kill();
    } catch {
      // noop
    }
  };
}
