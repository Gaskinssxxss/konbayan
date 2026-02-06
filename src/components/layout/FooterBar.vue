<template>
  <footer class="mt-20 pb-16 w-full">
    <div class="w-full px-4 sm:px-8">
      <div class="kx-block bg-[color:var(--paper)] px-6 py-8">
        <div class="flex flex-wrap gap-6 items-center">
          <div class="flex-1 min-w-[220px]">
            <div class="font-black uppercase tracking-[0.18em] text-[12px]">
              {{ brand }}
            </div>
            <div class="mt-2 text-[13px] opacity-80">
              A lighter way to plan your day — two activities, zero overthinking.
            </div>
          </div>

          <div
            class="flex flex-wrap gap-2 justify-end flex-1 min-w-[220px]"
          >
            <a
              v-for="s in socials"
              :key="s.label"
              :href="s.href"
              target="_blank"
              rel="noreferrer"
              class="kx-pill-btn"
              data-btn
            >
              {{ s.label }}
            </a>
          </div>
        </div>

        <div class="mt-6 border-t-2 border-black pt-4 text-[12px] opacity-70">
          © {{ year }} {{ brand }} — made to feel lighter.
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterBar",
  props: {
    brand: { type: String, default: "konbayan" },
    socials: {
      type: Array,
      default: () => [
        { label: "Instagram", href: "#" },
      ],
    },
  },
  data() {
    return { year: new Date().getFullYear() };
  },
};
</script>
