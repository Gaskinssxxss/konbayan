<template>
  <header class="fixed top-2 inset-x-0 z-[60] pointer-events-none">
    <div class="mx-auto max-w-[1180px] px-4 sm:px-8 pt-10 sm:pt-4">
      <div class="pointer-events-auto flex items-center justify-between gap-3">
        <div class="flex items-center gap-2">
          <RouterLink
            to="/"
            class="px-3 py-2 rounded-full border-2 border-black bg-white shadow-[3px_3px_0_#000] font-black uppercase text-[12px] tracking-[0.2em]"
          >
            {{ brand }}
          </RouterLink>
        </div>

        <nav class="hidden sm:flex items-center gap-2">
          <RouterLink
            v-for="item in nav"
            :key="item.to"
            :to="item.to"
            class="kx-pill-btn"
            data-btn
            :class="isActive(item.to) ? 'bg-[color:var(--panel-yellow)]' : ''"
          >
            {{ item.label }}
          </RouterLink>
        </nav>

        <div class="hidden sm:flex items-center gap-2">
          <RouterLink
            to="/paket"
            class="kx-pill-btn bg-[color:var(--panel-yellow)]"
            data-btn
          >
            Book an activity
          </RouterLink>
        </div>

        <button
          class="kx-pill-btn sm:hidden"
          type="button"
          data-btn
          @click="toggleMenu"
          aria-label="Toggle menu"
          :aria-expanded="mobileOpen ? 'true' : 'false'"
        >
          Menu
        </button>
      </div>

      <div
        v-if="mobileOpen"
        class="fixed inset-0 z-[70] sm:hidden bg-[color:var(--bg-cream)] pointer-events-auto"
      >
        <div class="h-full w-full px-5 pt-6 pb-8 flex flex-col">
          <div class="flex items-center justify-between">
            <div
              class="px-3 py-2 rounded-full border-2 border-black bg-white shadow-[3px_3px_0_#000] font-black uppercase text-[12px] tracking-[0.2em]"
            >
              {{ brand }}
            </div>
            <button
              class="kx-pill-btn"
              type="button"
              @click="mobileOpen = false"
            >
              Close
            </button>
          </div>

          <nav class="mt-6 grid grid-cols-2 gap-0 flex-1">
            <RouterLink
              v-for="item in nav"
              :key="item.to"
              :to="item.to"
              class="border-2 border-black bg-white shadow-[6px_6px_0_#000] rounded-none p-4 font-black uppercase tracking-[0.2em] text-[14px] flex items-center justify-center text-center active:bg-[color:var(--panel-lime)]"
              @click="mobileOpen = false"
              :class="isActive(item.to) ? 'bg-[color:var(--panel-lime)]' : ''"
            >
              {{ item.label }}
            </RouterLink>
            <RouterLink
              to="/paket"
              class="border-2 border-black bg-[color:var(--panel-yellow)] shadow-[6px_6px_0_#000] rounded-none p-4 font-black uppercase tracking-[0.2em] text-[14px] flex items-center justify-center text-center active:bg-[color:var(--panel-lime)]"
              @click="mobileOpen = false"
            >
              Book an activity
            </RouterLink>
            <button
              type="button"
              class="border-2 border-black bg-white shadow-[6px_6px_0_#000] rounded-none p-4 font-black uppercase tracking-[0.2em] text-[14px] flex items-center justify-center text-center active:bg-[color:var(--panel-lime)]"
              @click="mobileOpen = false"
            >
              Back
            </button>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "BrutalNav",
  props: {
    brand: { type: String, default: "konbayan" },
    nav: {
      type: Array,
      default: () => [
        { label: "Home", to: "/" },
        { label: "Activities + FAQ", to: "/paket-faq" },
        { label: "Contact", to: "/contact" },
      ],
    },
  },
  data() {
    return { mobileOpen: false };
  },
  methods: {
    toggleMenu() {
      this.mobileOpen = !this.mobileOpen;
    },
    isActive(to) {
      const p = this.$route?.path || "/";
      if (to === "/") return p === "/";
      return p.startsWith(to);
    },
  },
};
</script>
