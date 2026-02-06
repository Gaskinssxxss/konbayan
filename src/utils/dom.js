// src/utils/dom.js
export function q(root, selector) {
  const base = root || document;
  return base.querySelector(selector);
}

export function qa(root, selector) {
  const base = root || document;
  return Array.from(base.querySelectorAll(selector));
}

export function safeClosest(el, selector) {
  try {
    return el?.closest?.(selector) || null;
  } catch {
    return null;
  }
}
