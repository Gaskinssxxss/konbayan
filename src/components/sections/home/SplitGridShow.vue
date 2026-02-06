<template>
  <section class="mt-10 sm:mt-14">
    <div class="mx-auto max-w-[1180px] px-4 sm:px-8">
      <div class="grid grid-cols-12 gap-6 items-stretch" data-enter>
        <!-- square panel -->
        <ShapePanel
          tone="yellow"
          radius="none"
          class="col-span-12 md:col-span-6"
        >
          <div
            class="font-black text-[11px] uppercase tracking-[0.22em] opacity-80"
          >
            square section
          </div>
          <h2
            class="mt-3 font-black text-[28px] sm:text-[36px] leading-[1] tracking-tight"
          >
            <span data-reveal>FIND</span> <span data-reveal>YOUR</span>
            <span data-reveal>ROUTE</span>
          </h2>
          <p
            class="mt-4 text-[14px] leading-[1.7] opacity-90 max-w-[52ch]"
            data-enter-child
          >
            Brutalist layout, no fluff. Quick decisions. Quick wins.
          </p>

          <div class="mt-6 flex flex-wrap gap-3" data-enter-child>
            <ButtonBrutal @click="$emit('goPackages')"
              >Explore Activities</ButtonBrutal
            >
            <ButtonBrutal variant="paper" @click="$emit('openModal')"
              >Open Modal</ButtonBrutal
            >
          </div>
        </ShapePanel>

        <!-- half-round panel -->
        <ShapePanel tone="blue" radius="lg" class="col-span-12 md:col-span-6">
          <div
            class="font-black text-[11px] uppercase tracking-[0.22em] opacity-80"
          >
            half-round vibe
          </div>
          <h3
            class="mt-3 font-black text-[22px] sm:text-[28px] leading-[1.05] tracking-tight"
          >
            “Coffee break” built-in.
          </h3>

          <div class="mt-6 grid grid-cols-12 gap-4" data-enter-child>
            <div class="col-span-7">
              <ul class="text-[13px] leading-[1.7] space-y-2 opacity-90">
                <li>• stop points that actually reset your brain</li>
                <li>• minimal planning, maximum doing</li>
                <li>• brutal grid + playful shapes</li>
              </ul>
            </div>
            <div class="col-span-5 relative">
              <img
                :src="beanSrc"
                alt="bean"
                class="w-[120px] mx-auto rotate-[12deg] opacity-90"
                data-float
                data-float-amp="10"
                data-float-rot="2"
                data-float-delay="0.2"
                data-obj
              />
            </div>
          </div>
        </ShapePanel>
      </div>
    </div>
  </section>
</template>

<script>
import ShapePanel from "@/components/shapes/ShapePanel.vue";
import ButtonBrutal from "@/components/ui/ButtonBrutal.vue";
import beanDefault from "@/assets/coffee-bean.png";

export default {
  name: "SplitGridShow",
  components: { ShapePanel, ButtonBrutal },
  emits: ["goPackages", "openModal"],
  props: {
    beanSrc: { type: String, default: beanDefault },
  },
};
</script>
