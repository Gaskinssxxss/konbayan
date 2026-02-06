<template>
  <section class="mt-10">
    <div class="kx-block bg-white p-6 sm:p-8" data-enter>
      <div
        class="text-[11px] uppercase tracking-[0.22em] font-black opacity-70"
        data-enter-child
      >
        contact form
      </div>

      <h2
        class="mt-3 font-black text-[28px] sm:text-[36px] leading-[1] tracking-tight"
        data-enter-child
      >
        <span data-reveal>Say hi.</span> <span data-reveal>Book.</span>
        <span data-reveal>Ask.</span>
      </h2>

      <div class="mt-4 flex items-center justify-center gap-2" data-enter-child>
        <button
          type="button"
          class="kx-pill-btn"
          :class="lang === 'en' ? 'bg-[color:var(--panel-yellow)]' : 'bg-white'"
          @click="lang = 'en'"
        >
          EN
        </button>
        <button
          type="button"
          class="kx-pill-btn"
          :class="lang === 'id' ? 'bg-[color:var(--panel-yellow)]' : 'bg-white'"
          @click="lang = 'id'"
        >
          ID
        </button>
      </div>

      <form
        class="mt-6 grid grid-cols-12 gap-4"
        @submit.prevent="submit"
        data-enter-child
      >
        <div class="col-span-12 md:col-span-6">
          <InputField
            v-model="name"
            label="Name"
            placeholder="Your name"
            required
          />
        </div>

        <div class="col-span-12 md:col-span-6">
          <InputField
            v-model="subject"
            label="Subject"
            placeholder="Booking / Request / Question"
            required
          />
        </div>

        <div class="col-span-12">
          <InputField
            v-model="content"
            label="Message"
            placeholder="Write your message…"
            textarea
            :rows="6"
            required
          />
        </div>

        <div class="col-span-12 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          <ButtonBrutal class="w-full sm:w-auto" type="submit"
            >Open WhatsApp</ButtonBrutal
          >
          <ButtonBrutal
            class="w-full sm:w-auto"
            variant="paper"
            type="button"
            @click="clear"
            >Clear</ButtonBrutal
          >

          <div class="text-[12px] opacity-70 leading-[1.5]">
            This will open WhatsApp with your message.
          </div>
        </div>
      </form>
    </div>

    <ToastMini v-model="toastOn" :message="toastMsg" :kind="toastKind" />
  </section>
</template>

<script>
import InputField from "@/components/ui/InputField.vue";
import ButtonBrutal from "@/components/ui/ButtonBrutal.vue";
import ToastMini from "@/components/ui/ToastMini.vue";
import { buildWhatsAppLink } from "@/utils/contact";

export default {
  name: "ContactForm",
  components: { InputField, ButtonBrutal, ToastMini },
  emits: ["submit"],
  data() {
    return {
      name: "",
      subject: "",
      content: "",
      lang: "en",
      toastOn: false,
      toastMsg: "",
      toastKind: "info",
    };
  },
  methods: {
    showToast(kind, message) {
      this.toastKind = kind || "info";
      this.toastMsg = message || "";
      this.toastOn = true;
    },
    clear() {
      this.name = "";
      this.subject = "";
      this.content = "";
    },
    async submit() {
      const payload = {
        name: this.name,
        note: this.content,
        subject: this.subject,
        source: "Contact Page",
      };

      try {
        const url = buildWhatsAppLink(payload, this.lang);
        const win = window.open(url, "_blank");
        if (!win) {
          this.showToast("error", "Please allow popups to open WhatsApp.");
          return;
        }
        this.$emit("submit", payload);
        this.showToast("success", "Opening WhatsApp...");
      } catch {
        this.showToast("error", "Failed to open WhatsApp.");
        return;
      }
      this.clear();
    },
  },
};
</script>
