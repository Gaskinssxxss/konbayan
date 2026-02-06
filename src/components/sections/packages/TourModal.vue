<template>
  <ModalBase
    :model-value="modelValue"
    :title="tour?.title || 'Tour Details'"
    kicker="konbayan tours"
    max-width="lg"
    @update:modelValue="$emit('update:modelValue', $event)"
  >
    <div v-if="!tour" class="text-[13px] opacity-80">No tour selected.</div>

    <div v-else class="grid grid-cols-12 gap-6">
      <div class="col-span-12 md:col-span-7">
        <div class="text-[13px] leading-[1.7] opacity-90">
          {{ tour.description }}
        </div>

        <div class="mt-5 space-y-3 text-[13px] leading-[1.7]">
          <div
            class="border-2 border-black bg-[color:var(--paper,#f7f4ee)] shadow-[4px_4px_0_#000] px-4 py-3"
          >
            <div
              class="font-black uppercase tracking-[0.18em] text-[11px] opacity-75"
            >
              schedule
            </div>
            <div class="mt-1">{{ tour.schedule }}</div>
          </div>

          <div
            class="border-2 border-black bg-[color:var(--paper,#f7f4ee)] shadow-[4px_4px_0_#000] px-4 py-3"
          >
            <div
              class="font-black uppercase tracking-[0.18em] text-[11px] opacity-75"
            >
              price
            </div>
            <div class="mt-1">{{ tour.price }}</div>
          </div>

          <div
            v-if="tour.includes?.length"
            class="border-2 border-black bg-white shadow-[4px_4px_0_#000] px-4 py-3"
          >
            <div
              class="font-black uppercase tracking-[0.18em] text-[11px] opacity-75"
            >
              includes
            </div>
            <ul class="mt-2 list-disc pl-5 space-y-1">
              <li v-for="(x, i) in tour.includes" :key="i">{{ x }}</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col-span-12 md:col-span-5">
        <div
          class="kx-block bg-[color:var(--panel-yellow)] p-5"
        >
          <div
            class="font-black uppercase tracking-[0.22em] text-[11px] opacity-80"
          >
            quick actions
          </div>

          <div class="mt-4 space-y-3">
            <ButtonBrutal class="w-full" @click="$emit('book', tour)"
              >Book now</ButtonBrutal
            >
            <ButtonBrutal
              variant="paper"
              class="w-full"
              @click="copyText(tour.title)"
            >
              Copy tour name
            </ButtonBrutal>
            <ButtonBrutal
              variant="ghost"
              class="w-full"
              @click="$emit('update:modelValue', false)"
            >
              Close
            </ButtonBrutal>
          </div>

          <div class="mt-4 text-[12px] opacity-75 leading-[1.6]">
            Continue on WhatsApp from the Contact page.
          </div>
        </div>
      </div>
    </div>
  </ModalBase>
</template>

<script>
import ModalBase from "@/components/ui/ModalBase.vue";
import ButtonBrutal from "@/components/ui/ButtonBrutal.vue";

export default {
  name: "TourModal",
  components: { ModalBase, ButtonBrutal },
  emits: ["update:modelValue", "book"],
  props: {
    modelValue: { type: Boolean, default: false },
    tour: { type: Object, default: null },
  },
  methods: {
    async copyText(text) {
      try {
        await navigator.clipboard.writeText(text || "");
      } catch {
        // ignore
      }
    },
  },
};
</script>
