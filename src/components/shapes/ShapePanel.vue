<template>
  <div
    class="border-2 border-black shadow-[6px_6px_0_#000] overflow-hidden"
    :class="[toneClass, radiusClass, padClass]"
    data-enter-child
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "ShapePanel",
  props: {
    tone: { type: String, default: "white" }, // white | paper | green | pink | blue | yellow
    radius: { type: String, default: "none" }, // none | md | lg | pill
    pad: { type: String, default: "md" }, // sm | md | lg
  },
  computed: {
    toneClass() {
      if (this.tone === "green") return "bg-[color:var(--bg-green,#6ff0a6)]";
      if (this.tone === "pink") return "bg-[color:var(--panel-pink,#f7b6d4)]";
      if (this.tone === "blue") return "bg-[color:var(--panel-blue,#aeebff)]";
      if (this.tone === "yellow")
        return "bg-[color:var(--panel-yellow,#f6f2a4)]";
      if (this.tone === "paper") return "bg-[color:var(--paper,#f7f4ee)]";
      return "bg-white";
    },
    radiusClass() {
      if (this.radius === "pill") return "rounded-[999px]";
      if (this.radius === "lg") return "rounded-[42px]";
      if (this.radius === "md") return "rounded-[22px]";
      return "rounded-none";
    },
    padClass() {
      if (this.pad === "sm") return "p-4";
      if (this.pad === "lg") return "p-8";
      return "p-6";
    },
  },
};
</script>
