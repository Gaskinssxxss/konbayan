<template>
  <Transition name="kx-pop">
    <div
      v-if="modelValue"
      class="fixed left-1/2 -translate-x-1/2 bottom-6 z-[120] border-2 border-black bg-white shadow-[6px_6px_0_#000] px-4 py-3 max-w-[92vw]"
      :class="kindClass"
      role="status"
      aria-live="polite"
    >
      <div class="flex items-center gap-3">
        <div class="font-black uppercase tracking-[0.2em] text-[11px]">
          {{ kind }}
        </div>
        <div class="text-[13px] leading-[1.4] opacity-90">
          {{ message }}
        </div>
        <button
          class="ml-2 border-2 border-black bg-[color:var(--paper,#f7f4ee)] shadow-[3px_3px_0_#000] px-2 py-1 text-[11px] uppercase tracking-[0.22em] font-black"
          @click="hide"
          type="button"
        >
          OK
        </button>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: "ToastMini",
  emits: ["update:modelValue"],
  props: {
    modelValue: { type: Boolean, default: false },
    message: { type: String, default: "" },
    kind: { type: String, default: "info" }, // info | success | error
    timeout: { type: Number, default: 2400 },
  },
  data() {
    return { t: null };
  },
  computed: {
    kindClass() {
      if (this.kind === "success") return "bg-[color:#d7ffd7]";
      if (this.kind === "error") return "bg-[color:#ffd7d7]";
      return "bg-[color:var(--paper,#f7f4ee)]";
    },
  },
  watch: {
    modelValue(v) {
      if (this.t) clearTimeout(this.t);
      if (v && this.timeout > 0) {
        this.t = setTimeout(() => this.hide(), this.timeout);
      }
    },
  },
  methods: {
    hide() {
      this.$emit("update:modelValue", false);
    },
  },
  beforeUnmount() {
    if (this.t) clearTimeout(this.t);
  },
};
</script>

<style scoped>
.kx-pop-enter-active,
.kx-pop-leave-active {
  transition: transform 160ms ease, opacity 160ms ease;
}
.kx-pop-enter-from,
.kx-pop-leave-to {
  opacity: 0;
  transform: translate(-50%, 10px);
}
</style>
