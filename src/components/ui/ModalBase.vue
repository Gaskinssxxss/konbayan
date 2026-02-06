<template>
  <Teleport to="body">
    <Transition name="kx-fade">
      <div
        v-if="modelValue"
        class="fixed inset-0 z-[100] flex items-center justify-center p-4"
        aria-modal="true"
        role="dialog"
        @keydown.esc="close"
      >
        <div
          class="absolute inset-0 bg-black/60"
          @click="closeOnBackdrop ? close() : null"
        ></div>

        <div
          ref="panel"
          class="relative w-full border-2 border-black bg-white shadow-[6px_6px_0_#000] max-h-[86vh] overflow-auto rounded-[24px]"
          :class="maxWidthClass"
          tabindex="-1"
        >
          <div
            class="px-5 py-4 border-b-2 border-black flex items-start justify-between gap-4"
          >
            <div>
              <div class="text-[11px] uppercase tracking-[0.22em] opacity-70">
                {{ kicker }}
              </div>
              <h3
                class="mt-1 font-black text-[18px] sm:text-[20px] leading-[1.1]"
              >
                {{ title }}
              </h3>
            </div>

            <button class="kx-pill-btn" @click="close" type="button">
              close
            </button>
          </div>

          <div class="px-5 py-5">
            <slot />
          </div>

          <div v-if="$slots.footer" class="px-5 py-4 border-t-2 border-black">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script>
export default {
  name: "ModalBase",
  emits: ["update:modelValue", "open", "close"],
  props: {
    modelValue: { type: Boolean, default: false },
    title: { type: String, default: "Modal" },
    kicker: { type: String, default: "konbayan" },
    closeOnBackdrop: { type: Boolean, default: true },
    maxWidth: { type: String, default: "md" }, // sm | md | lg
  },
  computed: {
    maxWidthClass() {
      if (this.maxWidth === "sm") return "max-w-[520px]";
      if (this.maxWidth === "lg") return "max-w-[980px]";
      return "max-w-[720px]";
    },
  },
  watch: {
    modelValue: {
      immediate: true,
      handler(v) {
        if (v) {
          this.$emit("open");
          this.lockScroll(true);
          this.$nextTick(() => {
            this.$refs.panel?.focus?.();
          });
        } else {
          this.$emit("close");
          this.lockScroll(false);
        }
      },
    },
  },
  methods: {
    lockScroll(lock) {
      const body = document.body;
      if (!body) return;

      if (lock) {
        body.dataset._kxOverflow = body.style.overflow || "";
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = body.dataset._kxOverflow || "";
        delete body.dataset._kxOverflow;
      }
    },
    close() {
      this.$emit("update:modelValue", false);
    },
  },
  beforeUnmount() {
    this.lockScroll(false);
  },
};
</script>

<style scoped>
.kx-fade-enter-active,
.kx-fade-leave-active {
  transition: opacity 180ms ease;
}
.kx-fade-enter-from,
.kx-fade-leave-to {
  opacity: 0;
}
</style>
