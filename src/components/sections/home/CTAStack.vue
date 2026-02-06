<template>
  <section class="mt-10 sm:mt-14">
    <div class="mx-auto max-w-[1180px] px-4 sm:px-8">
      <div
        class="border-2 border-black bg-[color:var(--bg-green,#6ff0a6)] shadow-[10px_10px_0_#000] p-6 sm:p-10"
        data-enter
      >
        <div class="grid grid-cols-12 gap-6 items-center">
          <div class="col-span-12 md:col-span-8" data-enter-child>
            <div
              class="font-black uppercase tracking-[0.22em] text-[11px] opacity-80"
            >
              ready to move?
            </div>
            <div
              class="mt-3 font-black text-[24px] sm:text-[34px] leading-[1.05] tracking-tight"
            >
              <span data-reveal>Pick an activity.</span>
              <span class="block" data-reveal>We’ll handle the vibe.</span>
            </div>
          </div>

          <div
            class="col-span-12 md:col-span-4 flex flex-wrap gap-3 md:justify-end"
            data-enter-child
          >
            <ButtonBrutal variant="paper" @click="$emit('goPackages')"
              >Activities + FAQ</ButtonBrutal
            >
            <ButtonBrutal @click="$emit('openBooking')">Book Now</ButtonBrutal>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonBrutal from "@/components/ui/ButtonBrutal.vue";

export default {
  name: "CTAStack",
  components: { ButtonBrutal },
  emits: ["goPackages", "openBooking"],
};
</script>
