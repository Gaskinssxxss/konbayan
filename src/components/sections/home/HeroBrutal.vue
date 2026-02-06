<template>
  <section class="pt-28 sm:pt-32">
    <div class="mx-auto max-w-[1180px] px-4 sm:px-8">
      <div class="grid grid-cols-12 gap-6 items-start" data-enter>
        <div class="col-span-12 md:col-span-7" data-enter-child>
          <div
            class="inline-flex items-center gap-2 border-2 border-black bg-white shadow-[4px_4px_0_#000] px-3 py-2 text-[11px] uppercase tracking-[0.22em] font-black"
          >
            meet konbayan
            <span class="opacity-60">/</span>
            daily activity
          </div>

          <h1
            class="mt-6 font-black leading-[0.88] tracking-tight text-[44px] sm:text-[66px] md:text-[84px]"
          >
            <span data-reveal>YOUR</span>
            <span class="block" data-reveal>BRUTAL</span>
            <span class="block" data-reveal>POCKET GUIDE</span>
          </h1>

          <p
            class="mt-5 text-[14px] sm:text-[15px] leading-[1.7] opacity-85 max-w-[46ch]"
            data-enter-child
          >
            Two daily activities. Pick a vibe, follow the route, feel lighter.
          </p>

          <div class="mt-7 flex flex-wrap gap-3" data-enter-child>
            <ButtonBrutal @click="$emit('primary')">See Activities</ButtonBrutal>
            <ButtonBrutal variant="paper" @click="$emit('secondary')"
              >Request</ButtonBrutal
            >
          </div>
        </div>

        <div class="col-span-12 md:col-span-5" data-enter-child>
          <div
            class="border-2 border-black bg-[color:var(--paper,#f7f4ee)] shadow-[10px_10px_0_#000] p-5"
          >
            <div class="font-black uppercase tracking-[0.22em] text-[12px]">
              today’s cheat-sheet
            </div>

            <ul class="mt-4 space-y-3 text-[13px] leading-[1.6]">
              <li class="flex gap-3">
                <span class="font-black">01</span>
                <span>Choose Cycling Tour or Coffee Tour</span>
              </li>
              <li class="flex gap-3">
                <span class="font-black">02</span>
                <span>Show up. Follow route. No planning spiral.</span>
              </li>
              <li class="flex gap-3">
                <span class="font-black">03</span>
                <span>Collect memories — not tabs.</span>
              </li>
            </ul>

            <div
              class="mt-5 border-t-2 border-black pt-4 flex items-center justify-between"
            >
              <div class="text-[11px] uppercase tracking-[0.22em] opacity-70">
                scroll for chaos →
              </div>
              <div
                class="border-2 border-black bg-white shadow-[3px_3px_0_#000] px-3 py-2 text-[11px] font-black uppercase tracking-[0.22em]"
              >
                OK
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- hero decor -->
      <div class="relative mt-10 sm:mt-12" data-enter>
        <img
          :src="bikeSrc"
          alt="bike"
          class="w-full max-w-[1200px] mx-auto rotate-[-2deg] drop-shadow-[0_18px_0_rgba(0,0,0,0.08)]"
          data-parallax="18"
          data-obj
        />
        <img
          :src="beanSrc"
          alt="bean"
          class="absolute left-[6%] top-[8%] w-[72px] rotate-[18deg] opacity-80"
          data-float
          data-float-amp="10"
          data-float-rot="2"
          data-float-delay="0.1"
          data-obj
        />
        <img
          :src="beanSrc"
          alt="bean"
          class="absolute right-[10%] top-[18%] w-[58px] rotate-[-14deg] opacity-70"
          data-float
          data-float-amp="8"
          data-float-rot="-2"
          data-float-delay="0.45"
          data-obj
        />
      </div>
    </div>
  </section>
</template>

<script>
import ButtonBrutal from "@/components/ui/ButtonBrutal.vue";
import bikeDefault from "@/assets/bike.png";
import beanDefault from "@/assets/coffee-bean.png";

export default {
  name: "HeroBrutal",
  components: { ButtonBrutal },
  emits: ["primary", "secondary"],
  props: {
    bikeSrc: { type: String, default: bikeDefault },
    beanSrc: { type: String, default: beanDefault },
  },
};
</script>
