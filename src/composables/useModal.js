// src/composables/useModal.js
import { ref, watch } from "vue";
import { useScrollLock } from "@/composables/useScrollLock";

export function useModal(initial = false) {
  const open = ref(!!initial);
  const payload = ref(null);

  const { lock, unlock } = useScrollLock();

  const show = (data = null) => {
    payload.value = data;
    open.value = true;
  };

  const hide = () => {
    open.value = false;
  };

  watch(
    open,
    (v) => {
      if (v) lock();
      else unlock();
    },
    { immediate: true },
  );

  return { open, payload, show, hide };
}
