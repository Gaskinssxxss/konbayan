<template>
  <main ref="root" class="min-h-screen">
    <section class="pt-24 sm:pt-32">
      <div class="kx-wrap kx-pad text-center" data-enter>
        <div class="kx-kicker">activities + faq</div>
        <h1 class="mt-4 kx-title">
          <span data-reveal>TWO TOURS.</span>
          <span class="block" data-reveal>ONE EASY DAY.</span>
        </h1>
        <p class="mt-4 text-[15px] leading-[1.7] opacity-80 max-w-[62ch] mx-auto">
          Choose Cycling or Coffee. Click details to see the itinerary &
          includes. Click book to continue.
        </p>
      </div>
    </section>

    <section class="mt-10 bg-[color:var(--panel-beige)]">
      <div class="kx-wrap kx-pad py-12">
        <TourCards :tours="tours" @details="openDetail" @book="openBook" />
      </div>
    </section>

    <section class="bg-[color:var(--panel-dark)] text-white">
      <div
        class="kx-wrap kx-pad py-10 sm:py-12 flex flex-col sm:flex-row items-center gap-6 relative text-center sm:text-left"
      >
        <div class="font-black text-[24px] sm:text-[34px] leading-[1]">
          Ready to work well?
        </div>
        <ButtonBrutal
          class="w-full sm:w-auto"
          variant="ghost"
          @click="compareOn = true"
          >Compare Activities</ButtonBrutal
        >
        <div
          class="absolute right-10 top-6 h-10 w-10 rounded-full bg-[color:var(--panel-yellow)]"
          data-float
          data-float-amp="8"
        ></div>
        <div
          class="absolute right-24 bottom-6 h-10 w-10 bg-[color:var(--panel-pink)] [clip-path:polygon(0_0,100%_0,100%_100%,0_70%)]"
          data-float
          data-float-amp="10"
          data-float-delay="0.3"
        ></div>
      </div>
    </section>

    <section class="kx-wrap kx-pad py-12">
      <FAQBlock :faqs="faqs" />
    </section>

    <TourModal v-model="detailOn" :tour="selected" @book="openBook" />

    <ModalBase v-model="bookOn" title="Book Activity" kicker="konbayan booking">
      <div class="text-[13px] leading-[1.7] opacity-90">
        You selected:
        <span class="font-black">{{ selected?.title || "—" }}</span>
      </div>

      <div class="mt-4 flex items-center gap-2">
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

      <div class="mt-4 grid grid-cols-12 gap-4">
        <div class="col-span-12 md:col-span-6">
          <InputField v-model="book.name" label="Name" />
        </div>
        <div class="col-span-12 md:col-span-6">
          <InputField v-model="book.date" label="Date" type="date" />
        </div>
        <div class="col-span-12 md:col-span-4">
          <InputField v-model="book.time" label="Time" type="time" />
        </div>
        <div class="col-span-12 md:col-span-4">
          <label class="block">
            <div class="mb-2 text-[11px] uppercase tracking-[0.22em] font-black opacity-80">
              Location
            </div>
            <select
              v-model="book.location"
              class="w-full border-2 border-black px-3 py-2 rounded-[10px] bg-white"
            >
              <option value="">Select location</option>
              <option>Bayan</option>
              <option>Senaru</option>
            </select>
          </label>
        </div>
        <div class="col-span-12 md:col-span-4">
          <InputField v-model="book.pax" label="Guests" placeholder="2" />
        </div>
        <div class="col-span-12 md:col-span-6">
          <label class="block">
            <div class="mb-2 text-[11px] uppercase tracking-[0.22em] font-black opacity-80">
              Meeting point
            </div>
            <select
              v-model="book.meetingPoint"
              class="w-full border-2 border-black px-3 py-2 rounded-[10px] bg-white"
            >
              <option value="Konbayan Espresso &amp; Farm">
                Konbayan Espresso &amp; Farm
              </option>
              <option>Hotel pickup (Senaru / Bayan area)</option>
            </select>
          </label>
        </div>
        <div class="col-span-12 md:col-span-3">
          <InputField v-model="book.budget" label="Budget" readonly />
        </div>
        <div class="col-span-12 md:col-span-3">
          <label class="block">
            <div class="mb-2 text-[11px] uppercase tracking-[0.22em] font-black opacity-80">
              Currency
            </div>
            <select
              v-model="book.currency"
              class="w-full border-2 border-black px-3 py-2 rounded-[10px] bg-white"
            >
              <option value="IDR">IDR</option>
              <option value="USD">USD</option>
            </select>
          </label>
        </div>
        <div class="col-span-12">
          <InputField v-model="book.note" label="Note" textarea :rows="4" />
        </div>
      </div>

      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <ButtonBrutal class="w-full sm:w-auto" @click="sendPackageBooking"
          >Open WhatsApp</ButtonBrutal
        >
        <ButtonBrutal
          class="w-full sm:w-auto"
          variant="paper"
          @click="bookOn = false"
          >Close</ButtonBrutal
        >
      </div>
    </ModalBase>

    <ModalBase v-model="compareOn" title="Compare Activities" kicker="konbayan">
      <div class="grid grid-cols-12 gap-4 text-[13px] leading-[1.7]">
        <div class="col-span-12 md:col-span-6 kx-block bg-[color:var(--panel-yellow)] p-4">
          <div class="font-black">Cycling Activity</div>
          <div class="mt-2 opacity-80">
            Short loop, fresh air, quick stops.
          </div>
        </div>
        <div class="col-span-12 md:col-span-6 kx-block bg-[color:var(--panel-lime)] p-4">
          <div class="font-black">Coffee Activity</div>
          <div class="mt-2 opacity-80">
            Easy walk, kid-friendly breaks.
          </div>
        </div>
      </div>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <ButtonBrutal class="w-full sm:w-auto" @click="compareOn = false"
          >OK</ButtonBrutal
        >
      </div>
    </ModalBase>

    <ToastMini v-model="toastOn" :message="toastMsg" :kind="toastKind" />
  </main>
</template>

<script>
import { initPackagesPageAnimations } from "@/anim/pages/packages";

import { tours } from "@/data/tours";
import { faqs } from "@/data/faqs";

import TourCards from "@/components/sections/packages/TourCards.vue";
import FAQBlock from "@/components/sections/packages/FAQBlock.vue";
import TourModal from "@/components/sections/packages/TourModal.vue";

import ModalBase from "@/components/ui/ModalBase.vue";
import ButtonBrutal from "@/components/ui/ButtonBrutal.vue";
import InputField from "@/components/ui/InputField.vue";
import ToastMini from "@/components/ui/ToastMini.vue";
import { buildWhatsAppLink } from "@/utils/contact";
import { getBudgetByRoute } from "@/utils/tours";

export default {
  name: "PackagesFaqPage",
  components: {
    TourCards,
    FAQBlock,
    TourModal,
    ModalBase,
    ButtonBrutal,
    InputField,
    ToastMini,
  },
  data() {
    return {
      cleanup: null,
      tours,
      faqs,
      detailOn: false,
      bookOn: false,
      compareOn: false,
      selected: null,
      lang: "en",
      toastOn: false,
      toastMsg: "",
      toastKind: "info",
      book: {
        name: "",
        date: "",
        time: "",
        location: "",
        pax: "",
        meetingPoint: "Konbayan Espresso & Farm",
        budget: "",
        currency: "IDR",
        note: "",
      },
    };
  },
  methods: {
    showToast(kind, message) {
      this.toastKind = kind || "info";
      this.toastMsg = message || "";
      this.toastOn = true;
    },
    openDetail(t) {
      this.selected = t;
      this.detailOn = true;
    },
    openBook(t) {
      this.selected = t;
      this.book.budget = getBudgetByRoute(t?.title, this.book.currency);
      this.bookOn = true;
    },
    goContact() {
      this.$router.push("/contact");
    },
    async sendPackageBooking() {
      const payload = {
        name: this.book.name,
        date: this.book.date,
        route: this.selected?.title || "",
        time: this.book.time,
        location: this.book.location,
        pax: this.book.pax,
        meeting_point: this.book.meetingPoint,
        budget: this.book.budget,
        currency: this.book.currency,
        note: this.book.note,
        source: "Activities Booking Modal",
      };
      try {
        const url = buildWhatsAppLink(payload, this.lang);
        const win = window.open(url, "_blank");
        if (!win) {
          this.showToast("error", "Please allow popups to open WhatsApp.");
          return;
        }
        this.bookOn = false;
        this.showToast("success", "Opening WhatsApp...");
      } catch {
        this.showToast("error", "Failed to open WhatsApp.");
      }
    },
  },
  mounted() {
    this.cleanup = initPackagesPageAnimations(this.$refs.root);
  },
  beforeUnmount() {
    if (this.cleanup) this.cleanup();
  },
  watch: {
    "book.currency"(v) {
      this.book.budget = getBudgetByRoute(this.selected?.title || "", v);
    },
  },
};
</script>
