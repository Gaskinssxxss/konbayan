<template>
  <section class="relative" :data-sec="sec" :id="id">
    <div
      class="relative mx-auto max-w-[1180px] px-4 sm:px-8"
      :class="outerPadClass"
    >
      <div
        class="relative border-2 border-black shadow-[10px_10px_0_#000] overflow-hidden"
        :class="[toneClass, shapeClass]"
        data-enter
      >
        <div v-if="variant === 'cloud'" class="absolute inset-0 opacity-60">
          <div class="absolute -top-10 -left-10">
            <CloudBlob :width="520" :height="260" />
          </div>
          <div class="absolute -bottom-14 -right-12 rotate-180">
            <CloudBlob :width="560" :height="290" />
          </div>
        </div>

        <div class="relative z-10 px-5 sm:px-10 py-12 sm:py-16">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CloudBlob from "@/components/shapes/CloudBlob.vue";

export default {
  name: "ShapeSection",
  components: { CloudBlob },
  props: {
    id: { type: String, default: "" },
    sec: { type: String, default: "" },
    variant: { type: String, default: "square" }, // square | halfRound | cutCorner | pill | cloud
    tone: { type: String, default: "paper" }, // paper | green | pink | blue | yellow | white
    roomy: { type: Boolean, default: true },
  },
  computed: {
    outerPadClass() {
      return this.roomy ? "py-10 sm:py-14" : "py-6";
    },
    toneClass() {
      if (this.tone === "green") return "bg-[color:var(--bg-green,#6ff0a6)]";
      if (this.tone === "pink") return "bg-[color:var(--panel-pink,#f7b6d4)]";
      if (this.tone === "blue") return "bg-[color:var(--panel-blue,#aeebff)]";
      if (this.tone === "yellow")
        return "bg-[color:var(--panel-yellow,#f6f2a4)]";
      if (this.tone === "white") return "bg-white";
      return "bg-[color:var(--paper,#f7f4ee)]";
    },
    shapeClass() {
      switch (this.variant) {
        case "pill":
          return "rounded-[999px]";
        case "halfRound":
          return "rounded-[44px] sm:rounded-[92px]";
        case "cutCorner":
          return "rounded-none [clip-path:polygon(0_0,96%_0,100%_10%,100%_100%,0_100%)]";
        case "cloud":
          return "rounded-[56px] sm:rounded-[90px]";
        default:
          return "rounded-none";
      }
    },
  },
};
</script>
