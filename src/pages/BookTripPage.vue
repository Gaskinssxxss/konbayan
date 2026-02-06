<template>
  <main ref="root" class="min-h-screen">
    <section class="pt-24 sm:pt-32">
      <div class="kx-wrap kx-pad text-center" data-enter>
        <div class="kx-kicker">book an activity</div>
        <h1 class="mt-4 kx-title">
          <span data-reveal>BOOK.</span>
          <span class="block" data-reveal>BREATH.</span>
          <span class="block" data-reveal>GO.</span>
        </h1>
        <p class="mt-4 text-[15px] leading-[1.7] opacity-80 max-w-[62ch] mx-auto">
          Choose an activity, fill in a few details, and we’ll follow up with the
          best slot.
        </p>
      </div>
    </section>

    <section class="mt-10 bg-[color:var(--panel-beige)]">
      <div class="kx-wrap kx-pad py-12">
        <div class="grid grid-cols-12 gap-6" data-enter>
          <div class="col-span-12 md:col-span-7 kx-block bg-white p-6">
          <div class="text-[12px] uppercase tracking-[0.22em] opacity-70">
            booking form
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
          <form class="mt-6 grid grid-cols-12 gap-4" @submit.prevent="submit">
              <div class="col-span-12 md:col-span-6">
                <InputField v-model="name" label="Name" required />
              </div>
              <div class="col-span-12 md:col-span-6">
                <InputField v-model="date" label="Date" type="date" />
              </div>
              <div class="col-span-12 md:col-span-6">
                <label class="block">
                  <div
                    class="mb-2 text-[11px] uppercase tracking-[0.22em] font-black opacity-80"
                  >
                    Activity
                  </div>
                  <select
                    v-model="route"
                    class="w-full border-2 border-black px-3 py-2 rounded-[10px] bg-white"
                    required
                  >
                    <option disabled value="">Select activity</option>
                    <option v-for="r in routeOptions" :key="r" :value="r">
                      {{ r }}
                    </option>
                  </select>
                </label>
              </div>
              <div class="col-span-12 md:col-span-4">
                <InputField v-model="time" label="Time" type="time" />
              </div>
              <div class="col-span-12 md:col-span-4">
                <label class="block">
                  <div
                    class="mb-2 text-[11px] uppercase tracking-[0.22em] font-black opacity-80"
                  >
                    Location
                  </div>
                  <select
                    v-model="location"
                    class="w-full border-2 border-black px-3 py-2 rounded-[10px] bg-white"
                  >
                    <option value="">Select location</option>
                    <option>Bayan</option>
                    <option>Senaru</option>
                  </select>
                </label>
              </div>
              <div class="col-span-12 md:col-span-4">
                <InputField v-model="pax" label="Guests" placeholder="2" />
              </div>
              <div class="col-span-12 md:col-span-6">
                <label class="block">
                  <div
                    class="mb-2 text-[11px] uppercase tracking-[0.22em] font-black opacity-80"
                  >
                    Meeting point
                  </div>
                  <select
                    v-model="meetingPoint"
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
                <InputField v-model="budget" label="Budget" readonly />
              </div>
              <div class="col-span-12 md:col-span-3">
                <label class="block">
                  <div
                    class="mb-2 text-[11px] uppercase tracking-[0.22em] font-black opacity-80"
                  >
                    Currency
                  </div>
                  <select
                    v-model="currency"
                    class="w-full border-2 border-black px-3 py-2 rounded-[10px] bg-white"
                  >
                    <option value="IDR">IDR</option>
                    <option value="USD">USD</option>
                  </select>
                </label>
              </div>
              <div class="col-span-12">
                <InputField v-model="notes" label="Notes" textarea :rows="4" />
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
                <div class="text-[12px] opacity-70">
                  This will open WhatsApp with your booking details.
                </div>
              </div>
            </form>
          </div>

          <div class="col-span-12 md:col-span-5 space-y-4" data-enter-child>
            <div class="kx-block bg-[color:var(--panel-yellow)] p-5" data-tilt>
              <div class="font-black text-[18px]">Cycling Activity</div>
              <div class="mt-2 text-[13px] opacity-80">
                Short loop + coffee stop. Best in the morning.
              </div>
            </div>
            <div class="kx-block bg-[color:var(--panel-lime)] p-5" data-tilt>
              <div class="font-black text-[18px]">Coffee Activity</div>
              <div class="mt-2 text-[13px] opacity-80">
                Easy walk + kid-friendly spots.
              </div>
            </div>
            <div class="kx-block bg-[color:var(--panel-blue)] p-5 text-white" data-tilt>
              <div class="font-black text-[18px]">Custom Day</div>
              <div class="mt-2 text-[13px] opacity-80">
                Request a mix that fits your mood.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[color:var(--panel-pink)]">
      <div class="kx-wrap kx-pad py-12 flex flex-wrap items-center gap-6">
        <div class="font-black text-[28px] sm:text-[36px] leading-[1]">
          Still unsure?
        </div>
        <ButtonBrutal variant="ghost" @click="goContact"
          >Ask a question</ButtonBrutal
        >
      </div>
    </section>

    <ToastMini v-model="toastOn" :message="toastMsg" :kind="toastKind" />
  </main>
</template>

<script>
import { initContactPageAnimations } from "@/anim/pages/contact";
import InputField from "@/components/ui/InputField.vue";
import ButtonBrutal from "@/components/ui/ButtonBrutal.vue";
import ToastMini from "@/components/ui/ToastMini.vue";
import { buildWhatsAppLink } from "@/utils/contact";
import { getBudgetByRoute, routeOptions } from "@/utils/tours";

export default {
  name: "BookTripPage",
  components: { InputField, ButtonBrutal, ToastMini },
  data() {
    return {
      cleanup: null,
      name: "",
      date: "",
      route: "",
      time: "",
      location: "",
      pax: "",
      meetingPoint: "Konbayan Espresso & Farm",
      budget: "",
      currency: "IDR",
      notes: "",
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
      this.date = "";
      this.route = "";
      this.time = "";
      this.location = "";
      this.pax = "";
      this.meetingPoint = "";
      this.budget = "";
      this.currency = "IDR";
      this.notes = "";
    },
    async submit() {
      const payload = {
        name: this.name,
        date: this.date,
        route: this.route,
        time: this.time,
        location: this.location,
        pax: this.pax,
        meeting_point: this.meetingPoint,
        budget: this.budget,
        currency: this.currency,
        note: this.notes,
        source: "Book Trip Page",
      };

      try {
        const url = buildWhatsAppLink(payload, this.lang);
        const win = window.open(url, "_blank");
        if (!win) {
          this.showToast("error", "Please allow popups to open WhatsApp.");
          return;
        }
        this.showToast("success", "Opening WhatsApp...");
      } catch {
        this.showToast("error", "Failed to open WhatsApp.");
        return;
      }
      this.clear();
    },
    goContact() {
      this.$router.push("/contact");
    },
  },
  watch: {
    route(v) {
      this.budget = getBudgetByRoute(v, this.currency);
    },
    currency(v) {
      this.budget = getBudgetByRoute(this.route, v);
    },
  },
  computed: {
    routeOptions() {
      return routeOptions;
    },
  },
  mounted() {
    this.cleanup = initContactPageAnimations(this.$refs.root);
  },
  beforeUnmount() {
    this.cleanup?.();
  },
};
</script>
