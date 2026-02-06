<template>
  <main ref="root" class="min-h-screen">
    <section class="pt-24 sm:pt-32">
      <div class="kx-wrap kx-pad text-center" data-enter>
        <div class="kx-kicker">contact</div>
        <h1 class="mt-4 kx-title">
          <span data-reveal>BOOK.</span>
          <span class="block" data-reveal>ASK.</span>
          <span class="block" data-reveal>REQUEST.</span>
        </h1>
        <p
          class="mt-4 text-[15px] leading-[1.7] opacity-80 max-w-[62ch] mx-auto"
        >
          We only use WhatsApp for communication. Use the form to compose your
          message, then send it via WhatsApp.
        </p>
      </div>
    </section>

    <section class="mt-10 bg-[color:var(--panel-beige)]">
      <div class="kx-wrap kx-pad py-12">
        <ContactCards
          :whatsapp="site.contact.whatsapp"
          :meetPoint="site.contact.meetPoint"
        />
        <div class="mt-6 flex justify-center">
          <a
            class="kx-pill-btn w-full sm:w-auto justify-center"
            :href="waLink"
            target="_blank"
            rel="noreferrer"
          >
            Direct WhatsApp
          </a>
        </div>
      </div>
    </section>

    <section class="bg-[color:var(--panel-yellow)]">
      <div class="kx-wrap kx-pad py-12 relative">
        <div class="kx-title" data-enter>Fast lanes</div>
        <div
          class="mt-6 flex flex-col sm:flex-row flex-wrap gap-3"
          data-enter-child
        >
          <ButtonBrutal class="w-full sm:w-auto" @click="mapOn = true"
            >Meeting point</ButtonBrutal
          >
          <ButtonBrutal
            class="w-full sm:w-auto"
            variant="paper"
            @click="timesOn = true"
            >Available times</ButtonBrutal
          >
          <ButtonBrutal
            class="w-full sm:w-auto"
            variant="ghost"
            @click="goPackages"
            >See activities</ButtonBrutal
          >
        </div>

        <div
          class="absolute right-10 top-10 h-12 w-12 rounded-full border-2 border-black bg-[color:var(--panel-pink)] shadow-[3px_3px_0_#000]"
          data-float
          data-float-amp="7"
        ></div>
        <div
          class="absolute right-28 bottom-8 h-10 w-10 border-2 border-black bg-[color:var(--panel-blue)] shadow-[3px_3px_0_#000] [clip-path:polygon(50%_0,100%_100%,0_100%)]"
          data-float
          data-float-amp="9"
          data-float-delay="0.3"
        ></div>
      </div>
    </section>

    <section class="kx-wrap kx-pad py-12">
      <ContactForm @submit="onSubmit" />
    </section>

    <ModalBase v-model="mapOn" title="Meet Point" kicker="konbayan">
      <div class="text-[13px] leading-[1.7] opacity-80">
        Placeholder map + meeting info. Replace with a Google Map embed.
      </div>
      <div
        class="mt-4 aspect-[16/9] bg-black/10 rounded-[16px] border-2 border-black"
      ></div>
      <div class="mt-5 flex flex-col sm:flex-row gap-3">
        <ButtonBrutal class="w-full sm:w-auto" @click="mapOn = false"
          >OK</ButtonBrutal
        >
      </div>
    </ModalBase>

    <ModalBase v-model="timesOn" title="Available Times" kicker="konbayan">
      <div class="space-y-3 text-[13px] leading-[1.7]">
        <div class="kx-block bg-[color:var(--panel-lime)] p-4">
          <div class="font-black">Morning</div>
          <div class="opacity-80">09:00 – 12:00</div>
        </div>
        <div class="kx-block bg-[color:var(--panel-beige)] p-4">
          <div class="font-black">Afternoon</div>
          <div class="opacity-80">14:00 – 17:00</div>
        </div>
      </div>
      <div class="mt-5 flex flex-col sm:flex-row gap-3">
        <ButtonBrutal class="w-full sm:w-auto" @click="timesOn = false"
          >Close</ButtonBrutal
        >
      </div>
    </ModalBase>
  </main>
</template>

<script>
import { initContactPageAnimations } from "@/anim/pages/contact";
import { site } from "@/data/site";

import ContactCards from "@/components/sections/contact/ContactCards.vue";
import ContactForm from "@/components/sections/contact/ContactForm.vue";
import ModalBase from "@/components/ui/ModalBase.vue";
import ButtonBrutal from "@/components/ui/ButtonBrutal.vue";
import { getWhatsAppLink } from "@/utils/contact";

export default {
  name: "ContactPage",
  components: { ContactCards, ContactForm, ModalBase, ButtonBrutal },
  data() {
    return {
      site,
      cleanup: null,
      lastPayload: null, // keep a payload reference to avoid unused warnings
      mapOn: false,
      timesOn: false,
      waLink: getWhatsAppLink("Hi Konbayan, I have a question."),
    };
  },
  methods: {
    goPackages() {
      this.$router.push("/paket-faq");
    },
    onSubmit(payload) {
      // keep payload so it is not flagged as unused
      this.lastPayload = payload;

      // can be connected to WhatsApp deep link / API later
      // example (optional):
      // const msg = encodeURIComponent(`Hi, I'm ${payload.name}. ${payload.message}`);
      // window.open(`https://wa.me/62xxxx?text=${msg}`, "_blank");
    },
  },
  mounted() {
    this.cleanup = initContactPageAnimations(this.$refs.root);
  },
  beforeUnmount() {
    if (this.cleanup) this.cleanup();
  },
};
</script>
