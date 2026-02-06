<template>
  <component
    :is="as"
    :type="as === 'button' ? type : undefined"
    :disabled="disabled"
    data-btn
    class="inline-flex items-center justify-center gap-2 select-none border-2 border-black font-black uppercase tracking-[0.18em] transition active:translate-x-[1px] active:translate-y-[1px] disabled:opacity-50 disabled:pointer-events-none rounded-full shadow-[3px_3px_0_#000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--paper)]"
    :class="[sizeClass, variantClass]"
    @click="handleClick"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: "ButtonBrutal",
  emits: ["click"],
  props: {
    as: { type: String, default: "button" },
    type: { type: String, default: "button" },
    disabled: { type: Boolean, default: false },
    variant: { type: String, default: "primary" }, // primary | paper | ghost | danger
    size: { type: String, default: "md" }, // sm | md | lg
  },
  computed: {
    sizeClass() {
      if (this.size === "sm") return "px-3 py-2 text-[11px]";
      if (this.size === "lg") return "px-6 py-3 text-[12px]";
      return "px-4 py-2.5 text-[11px]";
    },
    variantClass() {
      if (this.variant === "ghost")
        return "bg-white shadow-[0_0_0_#000]";
      if (this.variant === "paper")
        return "bg-[color:var(--paper,#f7f4ee)]";
      if (this.variant === "danger") return "bg-[#ff5a5a]";
      return "bg-[color:var(--panel-yellow,#ffe600)]";
    },
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>
