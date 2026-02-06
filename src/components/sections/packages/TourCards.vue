<template>
  <section>
    <div class="grid grid-cols-12 gap-6" data-enter>
      <div
        v-for="(t, idx) in tours"
        :key="t.slug"
        class="col-span-12 md:col-span-6"
        data-enter-child
      >
        <div
          class="kx-block p-6 sm:p-8 h-full flex flex-col"
          :class="cardClass(idx)"
          data-tilt
        >
          <div class="flex items-start justify-between gap-4">
            <div>
              <div
                class="text-[11px] uppercase tracking-[0.22em] font-black opacity-70"
              >
                activity
              </div>
              <h3
                class="mt-2 font-black text-[28px] sm:text-[34px] leading-[1.02] tracking-tight"
              >
                {{ t.title }}
              </h3>
            </div>

            <img
              :src="t.tag === 'coffee' ? beanSrc : bikeSrc"
              alt="icon"
              class="w-[74px] rotate-[10deg] opacity-90"
              data-float
              data-float-amp="8"
              data-float-rot="2"
              data-float-delay="0.25"
              data-obj
            />
          </div>

          <div class="mt-4 text-[13px] leading-[1.7] opacity-85">
            {{ t.short }}
          </div>
          <div class="mt-3 text-[12px] leading-[1.7] opacity-75">
            {{ t.description }}
          </div>

          <div class="mt-5 grid grid-cols-12 gap-3 text-[12px] opacity-85">
            <div
              class="col-span-6 border-2 border-black bg-[color:var(--paper,#f7f4ee)] shadow-[3px_3px_0_#000] px-3 py-2"
            >
              <div class="font-black uppercase tracking-[0.18em]">meet</div>
              <div class="mt-1">{{ t.meet }}</div>
            </div>
            <div
              class="col-span-6 border-2 border-black bg-[color:var(--paper,#f7f4ee)] shadow-[3px_3px_0_#000] px-3 py-2"
            >
              <div class="font-black uppercase tracking-[0.18em]">duration</div>
              <div class="mt-1">{{ t.duration }}</div>
            </div>
          </div>

          <div class="mt-6 flex flex-wrap gap-3 mt-auto">
            <ButtonBrutal variant="paper" @click="$emit('details', t)"
              >Details</ButtonBrutal
            >
            <ButtonBrutal @click="$emit('book', t)">Book</ButtonBrutal>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonBrutal from "@/components/ui/ButtonBrutal.vue";
import bikeDefault from "@/assets/bike.png";
import beanDefault from "@/assets/coffee-bean.png";

export default {
  name: "TourCards",
  components: { ButtonBrutal },
  emits: ["details", "book"],
  props: {
    tours: { type: Array, default: () => [] },
    bikeSrc: { type: String, default: bikeDefault },
    beanSrc: { type: String, default: beanDefault },
  },
  methods: {
    cardClass(idx) {
      const palette = [
        "bg-[color:var(--panel-yellow)]",
        "bg-[color:var(--panel-lime)]",
        "bg-[color:var(--panel-blue)] text-white",
        "bg-[color:var(--panel-pink)]",
      ];
      return palette[idx % palette.length];
    },
  },
};
</script>
