<template>
  <main ref="root" class="min-h-screen text-[color:var(--ink)] kx-home">
    <!-- HERO -->
    <section
      class="-mt-10 sm:-mt-0 pt-0 sm:pt-6 min-h-[100svh] flex items-center"
    >
      <div class="kx-wrap kx-pad text-center w-full" data-enter>
        <div class="kx-kicker">a better way to plan the day</div>
        <div class="mt-2 text-[14px] sm:text-[18px] opacity-80">
          Balance your itinerary: plan, ride, pause, breathe.
        </div>

        <h1
          class="mt-8 sm:mt-10 kx-wordmark scale-[0.92] sm:scale-100 origin-center"
          aria-label="Konbayan Daily Activity"
        >
          <div>
            <span style="--rot: -3deg">K</span>
            <span style="--rot: 2deg">O</span>
            <span style="--rot: -1deg">N</span>
            <span style="--rot: 2deg">B</span>
            <span style="--rot: -2deg">A</span>
            <span style="--rot: 1deg">Y</span>
            <span style="--rot: -1deg">A</span>
            <span style="--rot: 2deg">N</span>
          </div>
          <div class="mt-2 text-[0.34em] leading-none">
            <span style="--rot: -2deg">D</span>
            <span style="--rot: 2deg">A</span>
            <span style="--rot: -1deg">I</span>
            <span style="--rot: 2deg">L</span>
            <span style="--rot: -2deg">Y</span>
            <span class="mx-3"></span>
            <span style="--rot: 1deg">A</span>
            <span style="--rot: -1deg">C</span>
            <span style="--rot: 2deg">T</span>
            <span style="--rot: -2deg">I</span>
            <span style="--rot: 1deg">V</span>
            <span style="--rot: -1deg">I</span>
            <span style="--rot: 2deg">T</span>
            <span style="--rot: -2deg">Y</span>
          </div>
        </h1>

        <div
          class="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3 text-[10px] sm:text-[12px] uppercase tracking-[0.22em]"
          data-enter-child
        >
          <div class="kx-pill-btn bg-[color:var(--panel-yellow)]">
            two daily activities
          </div>
          <div class="kx-pill-btn bg-[color:var(--panel-lime)]">
            zero overthinking
          </div>
          <div class="kx-pill-btn bg-white">built for parents</div>
        </div>

        <div class="mt-8 flex flex-wrap justify-center gap-3" data-enter-child>
          <ButtonBrutal @click="goPackages">See Activities</ButtonBrutal>
          <ButtonBrutal variant="paper" @click="openRequest"
            >Request</ButtonBrutal
          >
          <ButtonBrutal variant="ghost" @click="openFaq"
            >Quick FAQ</ButtonBrutal
          >
        </div>

        <div
          class="mt-8 sm:mt-10 flex justify-center gap-3 sm:gap-4"
          data-enter-child
        >
          <div
            class="hidden sm:block h-12 w-12 sm:h-14 sm:w-14 rounded-full border-2 border-black bg-[color:var(--panel-yellow)] shadow-[3px_3px_0_#000]"
            data-float
            data-float-amp="6"
            data-float-rot="2"
          ></div>
          <div
            class="hidden sm:block h-10 w-10 sm:h-12 sm:w-12 border-2 border-black bg-[color:var(--panel-blue)] shadow-[3px_3px_0_#000] [clip-path:polygon(50%_0,100%_100%,0_100%)]"
            data-float
            data-float-amp="8"
            data-float-rot="-2"
            data-float-delay="0.2"
          ></div>
          <div
            class="hidden sm:block h-12 w-12 sm:h-14 sm:w-14 rounded-[12px] border-2 border-black bg-[color:var(--panel-pink)] shadow-[3px_3px_0_#000]"
            data-float
            data-float-amp="7"
            data-float-rot="1"
            data-float-delay="0.35"
          ></div>
          <div
            class="hidden sm:block h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-black bg-[color:var(--panel-beige)] shadow-[3px_3px_0_#000]"
            data-float
            data-float-amp="6"
            data-float-rot="-1"
            data-float-delay="0.5"
          ></div>
        </div>
      </div>
    </section>

    <!-- SHOWCASE GRID -->
    <section class="bg-[color:var(--panel-beige)]">
      <div class="kx-wrap kx-pad py-10 sm:py-16">
        <div class="kx-title text-center" data-enter>
          Find activities in
          <span class="text-[1.5em]" style="--rot: 0deg">LOMBOK</span>
        </div>
        <div class="mt-10 grid grid-cols-12 gap-3 sm:gap-6" data-enter>
          <div class="col-span-7 md:col-span-8 kx-block bg-white p-4 sm:p-6">
            <div class="text-[12px] uppercase tracking-[0.22em] opacity-70">
              weekly board
            </div>
            <div class="mt-4 overflow-x-auto">
              <table
                class="w-full border-2 border-black text-[12px] sm:text-[13px]"
              >
                <thead class="bg-[color:var(--panel-yellow)]">
                  <tr>
                    <th
                      class="text-left px-3 py-2 uppercase tracking-[0.2em] text-[11px]"
                    >
                      Day
                    </th>
                    <th
                      class="text-left px-3 py-2 uppercase tracking-[0.2em] text-[11px]"
                    >
                      Date
                    </th>
                    <th
                      class="text-left px-3 py-2 uppercase tracking-[0.2em] text-[11px]"
                    >
                      Activity
                    </th>
                    <th
                      class="text-left px-3 py-2 uppercase tracking-[0.2em] text-[11px]"
                    >
                      Time
                    </th>
                    <th
                      class="text-left px-3 py-2 uppercase tracking-[0.2em] text-[11px]"
                    >
                      Location
                    </th>
                    <th
                      class="text-left px-3 py-2 uppercase tracking-[0.2em] text-[11px]"
                    >
                      Quota
                    </th>
                    <th
                      class="text-left px-3 py-2 uppercase tracking-[0.2em] text-[11px]"
                    >
                      Filled
                    </th>
                    <th
                      class="text-left px-3 py-2 uppercase tracking-[0.2em] text-[11px]"
                    >
                      Note
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="weeklyLoading">
                    <td class="px-3 py-3" colspan="8">Loading…</td>
                  </tr>
                  <tr v-else-if="weeklyError">
                    <td class="px-3 py-3 text-red-600" colspan="8">
                      {{ weeklyError }}
                    </td>
                  </tr>
                  <tr
                    v-for="row in weeklyBoard"
                    :key="row.id"
                    class="border-t-2 border-black"
                  >
                    <td class="px-3 py-3 font-black">{{ row.day }}</td>
                    <td class="px-3 py-3">{{ row.date }}</td>
                    <td class="px-3 py-3">{{ row.route }}</td>
                    <td class="px-3 py-3">{{ row.time }}</td>
                    <td class="px-3 py-3">{{ row.location }}</td>
                    <td class="px-3 py-3">{{ row.quota }}</td>
                    <td class="px-3 py-3">{{ row.filled }}</td>
                    <td class="px-3 py-3">{{ row.note }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="col-span-5 md:col-span-4 space-y-4">
            <div
              class="kx-block bg-[color:var(--panel-yellow)] p-4 sm:p-5"
              data-tilt
            >
              <div class="font-black text-[18px]">Cycling Route</div>
              <div class="mt-2 text-[13px] opacity-80">
                Short loop with farm stop + coffee.
              </div>
            </div>
            <div
              class="kx-block bg-[color:var(--panel-lime)] p-4 sm:p-5"
              data-tilt
            >
              <div class="font-black text-[18px]">Coffee Route</div>
              <div class="mt-2 text-[13px] opacity-80">
                Easy walk + kid-friendly spots.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PARALLAX VIDEO -->
    <section class="bg-[color:var(--bg-cream)]" ref="watchSection">
      <div class="kx-wrap kx-pad py-10 sm:py-16">
        <div class="kx-title text-center" data-enter>Watch the vibe</div>
        <div class="mt-8 kx-block bg-white p-3 sm:p-4" data-enter>
          <div
            class="relative overflow-hidden rounded-[18px] aspect-[16/9] bg-black/5"
            data-parallax="28"
          >
            <div class="absolute inset-0">
              <video
                v-for="(v, idx) in watchVideos"
                :key="v"
                ref="watchVideoEls"
                class="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
                :class="idx === currentVideo ? 'opacity-100' : 'opacity-0'"
                :src="videoReady ? v : ''"
                :poster="photoSawah"
                muted
                loop
                playsinline
                autoplay
                preload="none"
              ></video>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PHOTO COLLECTION -->
    <section class="bg-[color:var(--panel-beige)]">
      <div class="kx-wrap kx-pad py-10 sm:py-16">
        <div class="kx-title text-center" data-enter>Photo collection</div>
        <div
          class="mt-10 grid grid-cols-12 gap-2 sm:gap-4 items-start"
          data-enter
        >
          <div
            v-for="p in photoItems"
            :key="p.src"
            class="col-span-6"
            :class="p.col"
            data-enter-child
          >
            <a
              class="kx-lightbox kx-block kx-photo bg-white p-3 block"
              :class="p.tone"
              :href="p.src"
              :data-gallery="'konbayan-photos'"
              data-tilt
            >
              <div
                class="relative overflow-hidden rounded-[14px]"
                :class="p.ratio"
              >
                <img
                  :src="p.optimized || p.src"
                  :alt="p.alt"
                  class="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- MARQUEE -->
    <MarqueeCuts text="NO STRESS • DAILY ACTIVITIES • COFFEE BREAKS •" />

    <!-- DARK STORY STRIP (moved lower, richer layout) -->
    <section class="mt-10 bg-[color:var(--panel-dark)] text-white">
      <div class="kx-wrap kx-pad py-10 sm:py-16 relative" data-enter>
        <div class="grid grid-cols-12 gap-6 items-center">
          <div
            class="col-span-7 md:col-span-7 text-[16px] leading-[1.7]"
            data-enter-child
          >
            A simple way to plan a full day: pick an activity, follow the
            rhythm, and leave space to breathe. We call that lighter parenting.
          </div>
          <div class="col-span-5 md:col-span-5" data-enter-child>
            <div class="kx-block bg-white/10 border-2 border-white/20 p-5">
              <div class="text-[12px] uppercase tracking-[0.22em] opacity-80">
                productive wellbeing
              </div>
              <div class="mt-2 font-black text-[20px]">
                Plan less, live more.
              </div>
            </div>
          </div>
        </div>
        <div
          class="absolute right-6 top-6 h-10 w-10 rounded-full bg-[color:var(--panel-yellow)]"
          data-parallax="24"
        ></div>
        <div
          class="absolute right-24 bottom-8 h-12 w-12 bg-[color:var(--panel-pink)] [clip-path:polygon(0_0,100%_0,100%_100%,0_70%)]"
          data-parallax="-18"
        ></div>
      </div>
    </section>

    <!-- BLOG STYLE GRID -->
    <section class="bg-[color:var(--bg-cream)]">
      <div class="kx-wrap kx-pad py-10 sm:py-16">
        <div class="kx-title text-center" data-enter>
          Tips, tools, and tiny wins
        </div>
        <div class="mt-10 grid grid-cols-12 gap-3 sm:gap-6" data-enter>
          <div class="col-span-6 md:col-span-3" data-enter-child>
            <div
              class="kx-block kx-card-hover bg-[color:var(--panel-lime)] p-4"
              data-tilt
            >
              <div
                class="relative aspect-square overflow-hidden rounded-[12px] bg-black/10"
              >
                <img
                  :src="kopi1"
                  alt="Kopi 1"
                  class="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div class="mt-4 font-black text-[14px]">
                The creative day reset
              </div>
              <div class="mt-1 text-[12px] opacity-80">Konbayan Team</div>
            </div>
          </div>
          <div class="col-span-6 md:col-span-3" data-enter-child>
            <div
              class="kx-block kx-card-hover bg-[color:var(--panel-yellow)] p-4"
              data-tilt
            >
              <div
                class="relative aspect-square overflow-hidden rounded-[12px] bg-black/10"
              >
                <img
                  :src="kopi6"
                  alt="Kopi 6"
                  class="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div class="mt-4 font-black text-[14px]">
                Coffee breaks that work
              </div>
              <div class="mt-1 text-[12px] opacity-80">Rin, Activity Lead</div>
            </div>
          </div>
          <div class="col-span-6 md:col-span-3" data-enter-child>
            <div
              class="kx-block kx-card-hover bg-[color:var(--panel-blue)] p-4 text-white"
              data-tilt
            >
              <div
                class="relative aspect-square overflow-hidden rounded-[12px] bg-white/15"
              >
                <img
                  :src="sepeda1"
                  alt="Sepeda 1"
                  class="absolute inset-0 h-full w-full object-cover opacity-90"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div class="mt-4 font-black text-[14px]">
                Small adventures, big calm
              </div>
              <div class="mt-1 text-[12px] opacity-80">Ari, Parent</div>
            </div>
          </div>
          <div class="col-span-6 md:col-span-3" data-enter-child>
            <div
              class="kx-block kx-card-hover bg-[color:var(--panel-beige)] p-4"
              data-tilt
            >
              <div
                class="relative aspect-square overflow-hidden rounded-[12px] bg-black/10"
              >
                <img
                  :src="sepeda2"
                  alt="Sepeda 2"
                  class="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div class="mt-4 font-black text-[14px]">
                The no‑overthink checklist
              </div>
              <div class="mt-1 text-[12px] opacity-80">Konbayan</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="bg-[color:var(--bg-cream)]">
      <div class="kx-wrap kx-pad py-10 sm:py-16">
        <div class="kx-title text-center" data-enter>
          Parents said this felt easy
        </div>
        <div class="mt-10 space-y-6">
          <div
            class="kx-block bg-[color:var(--panel-yellow)] p-6 md:w-[70%]"
            data-enter
          >
            “We swapped six random plans for one activity and never looked back.
            Everything flows better, and the kids actually enjoy it.”
            <div class="mt-3 text-[12px] uppercase tracking-[0.22em]">
              Jonathan Horne
            </div>
          </div>
          <div
            class="kx-block bg-[color:var(--panel-lime)] p-6 md:w-[70%] md:ml-auto"
            data-enter
          >
            “As new parents, Konbayan was a no-brainer. No fluff, just a great
            day.”
            <div class="mt-3 text-[12px] uppercase tracking-[0.22em]">
              Kevin McCaul
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CUSTOMER REVIEWS -->
    <section class="bg-[color:var(--panel-beige)]">
      <div class="kx-wrap kx-pad py-10 sm:py-16">
        <div class="kx-title text-center" data-enter>Customer reviews</div>
        <div class="mt-10 grid grid-cols-12 gap-3 sm:gap-6" data-enter>
          <div
            class="col-span-6 md:col-span-4 kx-block bg-[color:var(--panel-yellow)] p-5 sm:p-6"
            data-tilt
          >
            <div class="font-black">“No overthinking.”</div>
            <div class="mt-2 text-[13px] opacity-80">
              Clear plan, happy kids, relaxed parents.
            </div>
            <div class="mt-4 text-[12px] uppercase tracking-[0.2em]">Mila</div>
          </div>
          <div
            class="col-span-6 md:col-span-4 kx-block bg-[color:var(--panel-lime)] p-5 sm:p-6"
            data-tilt
          >
            <div class="font-black">“The pacing felt right.”</div>
            <div class="mt-2 text-[13px] opacity-80">
              Enough breaks, plenty of stories, real moments.
            </div>
            <div class="mt-4 text-[12px] uppercase tracking-[0.2em]">Dito</div>
          </div>
          <div
            class="col-span-6 md:col-span-4 kx-block bg-[color:var(--panel-blue)] p-5 sm:p-6 text-white"
            data-tilt
          >
            <div class="font-black">“Worth it.”</div>
            <div class="mt-2 text-[13px] opacity-80">
              No planning fatigue, just go.
            </div>
            <div class="mt-4 text-[12px] uppercase tracking-[0.2em]">Nara</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA STRIP -->
    <section class="bg-[color:var(--panel-pink)]">
      <div
        class="kx-wrap kx-pad py-10 sm:py-12 flex flex-wrap items-center justify-between gap-6 text-center sm:text-left"
      >
        <div class="font-black text-[24px] sm:text-[36px] leading-[1]">
          Ready to feel lighter?
        </div>
        <ButtonBrutal variant="ghost" @click="openBooking"
          >Book now</ButtonBrutal
        >
      </div>
    </section>

    <!-- MODALS -->
    <ModalBase v-model="previewOn" title="Preview" kicker="konbayan ui">
      <div class="text-[13px] leading-[1.7] opacity-90">
        Preview modal. Replace with your real content.
      </div>
      <div class="mt-6 flex flex-wrap gap-3">
        <ButtonBrutal @click="previewOn = false">OK</ButtonBrutal>
        <ButtonBrutal variant="paper" @click="goPackages"
          >See activities</ButtonBrutal
        >
      </div>
    </ModalBase>

    <ModalBase v-model="bookingOn" title="Booking" kicker="konbayan">
      <div class="text-[13px] leading-[1.7] opacity-90">
        Booking flow will open WhatsApp for confirmation.
      </div>
      <div class="mt-6 flex flex-wrap gap-3">
        <ButtonBrutal @click="bookingOn = false">Close</ButtonBrutal>
      </div>
    </ModalBase>

    <ModalBase v-model="requestOn" title="Quick Request" kicker="konbayan">
      <div class="mb-4 flex items-center gap-2">
        <button
          type="button"
          class="kx-pill-btn"
          :class="
            reqLang === 'en' ? 'bg-[color:var(--panel-yellow)]' : 'bg-white'
          "
          @click="reqLang = 'en'"
        >
          EN
        </button>
        <button
          type="button"
          class="kx-pill-btn"
          :class="
            reqLang === 'id' ? 'bg-[color:var(--panel-yellow)]' : 'bg-white'
          "
          @click="reqLang = 'id'"
        >
          ID
        </button>
      </div>
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-6 md:col-span-6">
          <InputField v-model="req.name" label="Name" />
        </div>
        <div class="col-span-6 md:col-span-6">
          <label class="block">
            <div
              class="mb-2 text-[11px] uppercase tracking-[0.22em] font-black opacity-80"
            >
              Activity
            </div>
            <select
              v-model="req.route"
              class="w-full border-2 border-black px-3 py-2 rounded-[10px] bg-white"
            >
              <option disabled value="">Select activity</option>
              <option v-for="r in routeOptions" :key="r" :value="r">
                {{ r }}
              </option>
            </select>
          </label>
        </div>
        <div class="col-span-4 md:col-span-4">
          <InputField v-model="req.date" label="Date" type="date" />
        </div>
        <div class="col-span-4 md:col-span-4">
          <InputField v-model="req.time" label="Time" type="time" />
        </div>
        <div class="col-span-4 md:col-span-4">
          <label class="block">
            <div
              class="mb-2 text-[11px] uppercase tracking-[0.22em] font-black opacity-80"
            >
              Location
            </div>
            <select
              v-model="req.location"
              class="w-full border-2 border-black px-3 py-2 rounded-[10px] bg-white"
            >
              <option value="">Select location</option>
              <option>Bayan</option>
              <option>Senaru</option>
            </select>
          </label>
        </div>
        <div class="col-span-4 md:col-span-4">
          <InputField v-model="req.pax" label="Guests" placeholder="2" />
        </div>
        <div class="col-span-4 md:col-span-4">
          <label class="block">
            <div
              class="mb-2 text-[11px] uppercase tracking-[0.22em] font-black opacity-80"
            >
              Meeting point
            </div>
            <select
              v-model="req.meetingPoint"
              class="w-full border-2 border-black px-3 py-2 rounded-[10px] bg-white"
            >
              <option value="Konbayan Espresso &amp; Farm">
                Konbayan Espresso &amp; Farm
              </option>
              <option>Hotel pickup (Senaru / Bayan area)</option>
            </select>
          </label>
        </div>
        <div class="col-span-4 md:col-span-4">
          <InputField v-model="req.budget" label="Budget" readonly />
        </div>
        <div class="col-span-4 md:col-span-4">
          <label class="block">
            <div
              class="mb-2 text-[11px] uppercase tracking-[0.22em] font-black opacity-80"
            >
              Currency
            </div>
            <select
              v-model="req.currency"
              class="w-full border-2 border-black px-3 py-2 rounded-[10px] bg-white"
            >
              <option value="IDR">IDR</option>
              <option value="USD">USD</option>
            </select>
          </label>
        </div>
        <div class="col-span-12">
          <InputField v-model="req.note" label="Note" textarea :rows="4" />
        </div>
      </div>
      <div class="mt-6 flex flex-wrap gap-3">
        <ButtonBrutal @click="sendQuickRequest">Open WhatsApp</ButtonBrutal>
        <ButtonBrutal variant="paper" @click="requestOn = false"
          >Close</ButtonBrutal
        >
      </div>
    </ModalBase>

    <ModalBase v-model="faqOn" title="Quick FAQ" kicker="konbayan">
      <div class="space-y-3 text-[13px] leading-[1.7]">
        <div class="kx-block bg-[color:var(--panel-yellow)] p-4">
          <div class="font-black">How long?</div>
          <div class="opacity-80">Around 3–4 hours, including breaks.</div>
        </div>
        <div class="kx-block bg-[color:var(--panel-lime)] p-4">
          <div class="font-black">What to bring?</div>
          <div class="opacity-80">Water, a hat, and a relaxed mood.</div>
        </div>
        <div class="kx-block bg-[color:var(--panel-beige)] p-4">
          <div class="font-black">Can I customize?</div>
          <div class="opacity-80">Yes, just tell us your request.</div>
        </div>
      </div>
      <div class="mt-6 flex flex-wrap gap-3">
        <ButtonBrutal @click="faqOn = false">OK</ButtonBrutal>
      </div>
    </ModalBase>

    <ToastMini v-model="toastOn" :message="toastMsg" :kind="toastKind" />
  </main>
</template>

<script>
import { initHomePageAnimations } from "@/anim/pages/home";
import ModalBase from "@/components/ui/ModalBase.vue";
import ButtonBrutal from "@/components/ui/ButtonBrutal.vue";
import InputField from "@/components/ui/InputField.vue";
import ToastMini from "@/components/ui/ToastMini.vue";
import MarqueeCuts from "@/components/sections/home/MarqueeCuts.vue";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";
import imageCompression from "browser-image-compression";
import { buildWhatsAppLink } from "@/utils/contact";
import { getBudgetByRoute, routeOptions } from "@/utils/tours";
import photoBike from "@/assets/bike.png";
import photoBean from "@/assets/coffee-bean.png";
import photoSawah from "@/assets/sawah2.png";
import photoFrame from "@/assets/semak-frame.png";
import kopi1 from "@/assets/konbayan/foto_kopi/IMG_4989.JPG.jpeg";
import kopi2 from "@/assets/konbayan/foto_kopi/IMG_5267.JPG.jpeg";
import kopi3 from "@/assets/konbayan/foto_kopi/IMG_5281.JPG.jpeg";
import kopi4 from "@/assets/konbayan/foto_kopi/IMG_5291.JPG.jpeg";
import kopi5 from "@/assets/konbayan/foto_kopi/IMG_5944.JPG.jpeg";
import kopi6 from "@/assets/konbayan/foto_kopi/IMG_6009.JPG.jpeg";
import kopi7 from "@/assets/konbayan/foto_kopi/IMG_6352.JPG.jpeg";
import kopi8 from "@/assets/konbayan/foto_kopi/IMG_6676.JPG.jpeg";
import sepeda1 from "@/assets/konbayan/foto_sepeda/IMG_0989.JPG.jpeg";
import sepeda2 from "@/assets/konbayan/foto_sepeda/IMG_0991.JPG.jpeg";
import sepeda3 from "@/assets/konbayan/foto_sepeda/IMG_1453.JPG.jpeg";
import sepeda4 from "@/assets/konbayan/foto_sepeda/IMG_1547.JPG.jpeg";

export default {
  name: "HomePage",
  components: { ModalBase, ButtonBrutal, InputField, ToastMini, MarqueeCuts },
  data() {
    return {
      cleanup: null,
      lightbox: null,
      previewOn: false,
      bookingOn: false,
      requestOn: false,
      faqOn: false,
      toastOn: false,
      toastMsg: "",
      toastKind: "info",
      req: {
        name: "",
        route: "",
        date: "",
        time: "",
        location: "",
        pax: "",
        meetingPoint: "Konbayan Espresso & Farm",
        budget: "",
        currency: "IDR",
        note: "",
      },
      reqLang: "en",
      weeklyBoard: [],
      weeklyLoading: false,
      weeklyError: "",
      watchVideos: [
        "/konbayan/video/IMG_9730.mp4",
        "/konbayan/video/IMG_9731.mp4",
      ],
      videoReady: false,
      currentVideo: 0,
      videoTimer: null,
      videoObserver: null,
      photoBike,
      photoBean,
      photoSawah,
      photoFrame,
      kopi1,
      kopi2,
      kopi6,
      sepeda1,
      sepeda2,
      photoItems: [
        {
          src: sepeda1,
          optimized: "",
          alt: "Sepeda 1",
          col: "md:col-span-6",
          ratio: "aspect-[16/10]",
          tone: "bg-white",
        },
        {
          src: kopi1,
          optimized: "",
          alt: "Kopi 1",
          col: "md:col-span-3 md:translate-y-6",
          ratio: "aspect-[3/4]",
          tone: "bg-[color:var(--panel-yellow)]",
        },
        {
          src: kopi2,
          optimized: "",
          alt: "Kopi 2",
          col: "md:col-span-3",
          ratio: "aspect-[1/1]",
          tone: "bg-[color:var(--panel-lime)]",
        },
        {
          src: sepeda2,
          optimized: "",
          alt: "Sepeda 2",
          col: "md:col-span-4",
          ratio: "aspect-[4/5]",
          tone: "bg-[color:var(--panel-blue)] text-white",
        },
        {
          src: kopi3,
          optimized: "",
          alt: "Kopi 3",
          col: "md:col-span-8 md:-translate-y-6",
          ratio: "aspect-[21/9]",
          tone: "bg-white",
        },
        {
          src: kopi4,
          optimized: "",
          alt: "Kopi 4",
          col: "md:col-span-4",
          ratio: "aspect-[4/3]",
          tone: "bg-[color:var(--panel-yellow)]",
        },
        {
          src: sepeda3,
          optimized: "",
          alt: "Sepeda 3",
          col: "md:col-span-4 md:translate-y-4",
          ratio: "aspect-[1/1]",
          tone: "bg-[color:var(--panel-beige)]",
        },
        {
          src: kopi5,
          optimized: "",
          alt: "Kopi 5",
          col: "md:col-span-4",
          ratio: "aspect-[3/4]",
          tone: "bg-[color:var(--panel-lime)]",
        },
        {
          src: kopi6,
          optimized: "",
          alt: "Kopi 6",
          col: "md:col-span-4",
          ratio: "aspect-[4/3]",
          tone: "bg-white",
        },
        {
          src: sepeda4,
          optimized: "",
          alt: "Sepeda 4",
          col: "md:col-span-5",
          ratio: "aspect-[5/4]",
          tone: "bg-[color:var(--panel-blue)] text-white",
        },
        {
          src: kopi7,
          optimized: "",
          alt: "Kopi 7",
          col: "md:col-span-3 md:-translate-y-4",
          ratio: "aspect-[4/5]",
          tone: "bg-[color:var(--panel-yellow)]",
        },
        {
          src: kopi8,
          optimized: "",
          alt: "Kopi 8",
          col: "md:col-span-4",
          ratio: "aspect-[1/1]",
          tone: "bg-white",
        },
      ],
    };
  },
  methods: {
    playActiveVideo() {
      const els = this.$refs.watchVideoEls || [];
      const list = Array.isArray(els) ? els : [els];
      const active = list[this.currentVideo];
      if (!active) return;
      try {
        active.muted = true;
        active.playsInline = true;
        active.autoplay = true;
        active.loop = true;
        const p = active.play();
        if (p && typeof p.catch === "function") {
          p.catch(() => {});
        }
      } catch {
        // ignore autoplay errors
      }
    },
    showToast(kind, message) {
      this.toastKind = kind || "info";
      this.toastMsg = message || "";
      this.toastOn = true;
    },
    observeVideo() {
      const target = this.$refs.watchSection;
      if (!target || typeof IntersectionObserver === "undefined") {
        this.videoReady = true;
        this.$nextTick(() => this.playActiveVideo());
        return;
      }
      this.videoObserver = new IntersectionObserver(
        (entries) => {
          const hit = entries.some((e) => e.isIntersecting);
          if (!hit) return;
          this.videoReady = true;
          this.$nextTick(() => this.playActiveVideo());
          if (this.videoObserver) this.videoObserver.disconnect();
          this.videoObserver = null;
        },
        { rootMargin: "200px 0px" },
      );
      this.videoObserver.observe(target);
    },
    goPackages() {
      this.$router.push("/paket-faq");
    },
    goContact() {
      this.$router.push("/contact");
    },
    openPreview() {
      this.previewOn = true;
    },
    openBooking() {
      this.bookingOn = true;
    },
    openRequest() {
      this.requestOn = true;
    },
    openFaq() {
      this.faqOn = true;
    },
    async sendQuickRequest() {
      const payload = {
        name: this.req.name,
        route: this.req.route,
        date: this.req.date,
        time: this.req.time,
        location: this.req.location,
        pax: this.req.pax,
        meeting_point: this.req.meetingPoint,
        budget: this.req.budget,
        currency: this.req.currency,
        note: this.req.note,
        source: "Home Quick Request",
      };
      try {
        const url = buildWhatsAppLink(payload, this.reqLang);
        const win = window.open(url, "_blank");
        if (!win) {
          this.showToast("error", "Please allow popups to open WhatsApp.");
          return;
        }
        this.requestOn = false;
        this.showToast("success", "Opening WhatsApp...");
      } catch {
        this.showToast("error", "Failed to open WhatsApp.");
      }
    },
    async fetchWeeklyBoard() {
      this.weeklyLoading = true;
      this.weeklyError = "";
      try {
        const res = await fetch("http://localhost:3001/weekly_board");
        if (!res.ok) throw new Error("Failed to load weekly board");
        this.weeklyBoard = await res.json();
      } catch (err) {
        this.weeklyError = err?.message || "Failed to load weekly board";
      } finally {
        this.weeklyLoading = false;
      }
    },
    async optimizePhotos() {
      const opts = {
        maxWidthOrHeight: 1400,
        initialQuality: 0.72,
        useWebWorker: true,
      };

      const tasks = this.photoItems.map(async (p) => {
        try {
          const res = await fetch(p.src);
          const blob = await res.blob();
          const compressed = await imageCompression(blob, opts);
          const url = URL.createObjectURL(compressed);
          p.optimized = url;
        } catch {
          // keep original
        }
      });

      await Promise.all(tasks);
    },
  },
  watch: {
    "req.route"(v) {
      this.req.budget = getBudgetByRoute(v, this.req.currency);
    },
    "req.currency"(v) {
      this.req.budget = getBudgetByRoute(this.req.route, v);
    },
  },
  computed: {
    routeOptions() {
      return routeOptions;
    },
  },
  mounted() {
    this.cleanup = initHomePageAnimations(this.$refs.root);
    this.lightbox = GLightbox({
      selector: ".kx-lightbox",
      loop: true,
      zoomable: true,
      touchNavigation: true,
    });
    const conn =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;
    const saveData = !!conn?.saveData;
    const slowNet = /2g/.test(conn?.effectiveType || "");
    const isMobile = window.matchMedia?.("(max-width: 640px)")?.matches;
    if (!saveData && !slowNet && !isMobile) {
      this.optimizePhotos();
    }
    this.fetchWeeklyBoard();
    this.videoTimer = setInterval(() => {
      this.currentVideo = (this.currentVideo + 1) % this.watchVideos.length;
      this.$nextTick(() => this.playActiveVideo());
    }, 6000);
    this.observeVideo();
    document.addEventListener("touchstart", this.playActiveVideo, {
      once: true,
    });
  },
  beforeUnmount() {
    this.cleanup?.();
    try {
      this.lightbox?.destroy?.();
    } catch {
      //
    }
    if (this.videoTimer) clearInterval(this.videoTimer);
    if (this.videoObserver) this.videoObserver.disconnect();
    document.removeEventListener("touchstart", this.playActiveVideo);
    this.photoItems.forEach((p) => {
      if (p.optimized?.startsWith?.("blob:")) {
        try {
          URL.revokeObjectURL(p.optimized);
        } catch {
          //
        }
      }
    });
  },
};
</script>
