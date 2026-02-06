<template>
  <div class="min-h-screen">
    <BrutalNav :brand="site.brand" :nav="site.nav" />

    <BikeRig />
    <BeanRig />

    <main class="pt-20 relative z-10">
      <slot />
      <FooterBar :brand="site.brand" :socials="site.socials" />
    </main>
  </div>
</template>

<script>
import { site } from "@/data/site";

import BrutalNav from "@/components/layout/BrutalNav.vue";
import FooterBar from "@/components/layout/FooterBar.vue";
import BikeRig from "@/components/motion/BikeRig.vue";
import BeanRig from "@/components/motion/BeanRig.vue";

export default {
  name: "DefaultLayout",
  components: { BrutalNav, FooterBar, BikeRig, BeanRig },
  data() {
    return { site };
  },
};
</script>
