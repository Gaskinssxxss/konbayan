<template>
  <div
    class="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    data-bike-rig
  >
    <img
      :src="srcResolved"
      alt="bike"
      class="absolute left-1/2 -translate-x-1/2 bottom-[-40px] w-[1100px] sm:w-[1400px] max-w-[160%] opacity-60 mix-blend-multiply"
      data-parallax="18"
      data-obj
    />
    <img
      :src="srcResolved"
      alt="bike small"
      class="absolute right-[-220px] top-[18%] w-[520px] rotate-[10deg] opacity-20 mix-blend-multiply"
      data-parallax="36"
      data-obj
    />
  </div>
</template>

<script>
import bikeDefault from "@/assets/bike.png";

export default {
  name: "BikeRig",
  props: {
    src: { type: String, default: "" },
  },
  computed: {
    srcResolved() {
      return this.src || bikeDefault;
    },
  },
};
</script>
