<template>
  <section class="mt-10 sm:mt-14">
    <div class="mx-auto max-w-[1180px] px-4 sm:px-8" data-enter>
      <div
        class="border-2 border-black bg-white shadow-[8px_8px_0_#000] overflow-hidden"
        data-enter-child
      >
        <div class="kx-marquee py-3">
          <div class="kx-track">
            <span v-for="i in 18" :key="i" class="kx-chip">
              {{ text }}
            </span>
          </div>
          <div class="kx-track" aria-hidden="true">
            <span v-for="i in 18" :key="'b' + i" class="kx-chip">
              {{ text }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MarqueeCuts",
  props: {
    text: {
      type: String,
      default: "NO STRESS • BRUTAL ROUTES • COFFEE BREAKS •",
    },
  },
};
</script>

<style scoped>
.kx-marquee {
  display: flex;
  gap: 24px;
  white-space: nowrap;
}
.kx-track {
  display: inline-flex;
  gap: 14px;
  animation: kx-mar 18s linear infinite;
}
.kx-chip {
  display: inline-block;
  font-weight: 900;
  font-size: 12px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  border: 2px solid #000;
  padding: 8px 12px;
  background: var(--paper, #f7f4ee);
  box-shadow: 3px 3px 0 #000;
}
@keyframes kx-mar {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>
