<template>
  <div class="space-y-3">
    <div
      v-for="(it, idx) in items"
      :key="idx"
      class="border-2 border-black bg-[color:var(--paper,#f7f4ee)] shadow-[3px_3px_0_#000] rounded-[18px]"
    >
      <button
        class="w-full text-left px-4 py-4 flex items-center justify-between gap-4"
        @click="toggle(idx)"
        type="button"
      >
        <div class="font-black text-[14px] sm:text-[15px] leading-[1.25]">
          {{ it.q }}
        </div>

        <div
          class="shrink-0 border-2 border-black bg-white shadow-[2px_2px_0_#000] h-8 w-8 grid place-items-center font-black rounded-full"
        >
          {{ openIndexSet.has(idx) ? "–" : "+" }}
        </div>
      </button>

      <div
        v-show="openIndexSet.has(idx)"
        class="px-4 pb-4 text-[13px] leading-[1.6] opacity-90"
      >
        <div class="border-t-2 border-black pt-3">
          <slot name="answer" :item="it">
            {{ it.a }}
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccordionFAQ",
  props: {
    items: { type: Array, default: () => [] },
    multiple: { type: Boolean, default: false },
    defaultOpen: { type: Array, default: () => [] },
  },
  data() {
    return { openIndexSet: new Set(this.defaultOpen || []) };
  },
  watch: {
    defaultOpen(v) {
      this.openIndexSet = new Set(v || []);
    },
  },
  methods: {
    toggle(idx) {
      const set = new Set(this.openIndexSet);

      if (!this.multiple) {
        if (set.has(idx)) set.clear();
        else {
          set.clear();
          set.add(idx);
        }
      } else {
        if (set.has(idx)) set.delete(idx);
        else set.add(idx);
      }

      this.openIndexSet = set; // replace -> trigger re-render
    },
  },
};
</script>
