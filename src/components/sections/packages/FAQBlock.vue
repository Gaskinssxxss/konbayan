<template>
  <section class="mt-10">
    <div class="kx-block bg-white p-6 sm:p-8" data-enter>
      <div
        class="text-[11px] uppercase tracking-[0.22em] font-black opacity-70"
        data-enter-child
      >
        faq
      </div>
      <h2
        class="mt-3 font-black text-[28px] sm:text-[36px] leading-[1] tracking-tight"
        data-enter-child
      >
        <span data-reveal>Questions?</span> <span data-reveal>Good.</span>
      </h2>

      <div class="mt-6" data-enter-child>
        <AccordionFAQ :items="faqs" />
      </div>
    </div>
  </section>
</template>

<script>
import AccordionFAQ from "@/components/ui/AccordionFAQ.vue";

export default {
  name: "FAQBlock",
  components: { AccordionFAQ },
  props: {
    faqs: { type: Array, default: () => [] },
  },
};
</script>
