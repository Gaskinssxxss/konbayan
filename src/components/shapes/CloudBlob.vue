<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 800 420"
    fill="none"
    class="pointer-events-none"
    aria-hidden="true"
  >
    <path
      d="M170 310C110 302 70 262 70 216C70 168 108 130 156 130C169 92 208 62 258 62C292 62 322 76 342 99C360 74 390 56 425 56C478 56 522 94 532 144C544 140 558 138 572 138C632 138 680 184 680 244C680 305 632 352 572 352H206C192 352 181 350 170 348C170 335 170 323 170 310Z"
      :fill="fill"
      :opacity="opacity"
    />
  </svg>
</template>

<script>
export default {
  name: "CloudBlob",
  props: {
    width: { type: [String, Number], default: 520 },
    height: { type: [String, Number], default: 280 },
    fill: { type: String, default: "rgba(0,0,0,0.12)" },
    opacity: { type: Number, default: 1 },
  },
};
</script>
