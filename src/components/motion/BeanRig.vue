<template>
  <div
    class="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden sm:block"
    data-bean-rig
  >
    <img
      v-for="b in beans"
      :key="b.id"
      :src="srcResolved"
      alt="bean"
      class="absolute select-none drop-shadow-[0_10px_12px_rgba(0,0,0,0.25)]"
      :class="b.cls"
      data-float
      :data-float-amp="b.amp"
      :data-float-rot="b.rot"
      :data-float-delay="b.delay"
      :data-parallax="b.parallax"
      :data-spin="b.spin"
      data-obj
    />
  </div>
</template>

<script>
import beanDefault from "@/assets/coffee-bean.png";

export default {
  name: "BeanRig",
  props: { src: { type: String, default: "" } },
  computed: {
    srcResolved() {
      return this.src || beanDefault;
    },
  },
  data() {
    return {
      beans: [
        {
          id: "r1",
          cls: "right-[8%] top-[22%] w-[92px] rotate-[18deg] opacity-75",
          amp: 10,
          rot: 2,
          delay: 0.0,
          parallax: 12,
          spin: 20,
        },
        {
          id: "r2",
          cls: "right-[16%] top-[48%] w-[66px] rotate-[-12deg] opacity-65",
          amp: 8,
          rot: -2,
          delay: 0.4,
          parallax: -10,
          spin: -16,
        },
        {
          id: "r3",
          cls: "right-[3%] top-[38%] w-[52px] rotate-[22deg] opacity-70",
          amp: 7,
          rot: 2,
          delay: 0.8,
          parallax: 14,
          spin: 24,
        },
        {
          id: "l1",
          cls: "left-[7%] top-[30%] w-[64px] rotate-[14deg] opacity-70 hidden sm:block",
          amp: 8,
          rot: 2,
          delay: 0.2,
          parallax: -12,
          spin: -18,
        },
        {
          id: "l2",
          cls: "left-[12%] top-[58%] w-[46px] rotate-[-10deg] opacity-60 hidden sm:block",
          amp: 6,
          rot: -2,
          delay: 0.9,
          parallax: 10,
          spin: 14,
        },
        {
          id: "c1",
          cls: "left-1/2 -translate-x-1/2 top-[10%] w-[56px] rotate-[6deg] opacity-65",
          amp: 7,
          rot: 1,
          delay: 0.55,
          parallax: -8,
          spin: -12,
        },
      ],
    };
  },
};
</script>
