// src/composables/useScrollLock.js
import { ref } from "vue";

const locked = ref(false);

export function useScrollLock() {
  const lock = () => {
    if (locked.value) return;
    locked.value = true;

    const body = document.body;
    const html = document.documentElement;

    const scrollY = window.scrollY || 0;

    body.dataset._kxScrollY = String(scrollY);
    body.dataset._kxOverflow = body.style.overflow || "";
    body.dataset._kxPosition = body.style.position || "";
    body.dataset._kxTop = body.style.top || "";
    body.dataset._kxWidth = body.style.width || "";

    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";

    // avoid layout shift from scrollbar
    html.style.scrollBehavior = "auto";
  };

  const unlock = () => {
    if (!locked.value) return;
    locked.value = false;

    const body = document.body;

    const scrollY = Number(body.dataset._kxScrollY || "0");

    body.style.overflow = body.dataset._kxOverflow || "";
    body.style.position = body.dataset._kxPosition || "";
    body.style.top = body.dataset._kxTop || "";
    body.style.width = body.dataset._kxWidth || "";

    delete body.dataset._kxScrollY;
    delete body.dataset._kxOverflow;
    delete body.dataset._kxPosition;
    delete body.dataset._kxTop;
    delete body.dataset._kxWidth;

    window.scrollTo(0, scrollY);
  };

  return { lock, unlock, locked };
}
