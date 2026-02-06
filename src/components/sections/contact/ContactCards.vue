<template>
  <section>
    <div class="grid grid-cols-12 gap-6" data-enter>
      <div class="col-span-12 md:col-span-6" data-enter-child>
        <div class="kx-block bg-[color:var(--panel-yellow)] p-6" data-tilt>
          <div
            class="font-black uppercase tracking-[0.22em] text-[11px] opacity-70"
          >
            WhatsApp
          </div>
          <div class="mt-2 font-black text-[16px]">{{ whatsapp }}</div>
          <div class="mt-3 text-[13px] opacity-85">
            Fastest reply for quick questions.
          </div>
        </div>
      </div>

      <div class="col-span-12 md:col-span-6" data-enter-child>
        <div class="kx-block bg-[color:var(--panel-lime)] p-6" data-tilt>
          <div
            class="font-black uppercase tracking-[0.22em] text-[11px] opacity-70"
          >
            meeting point
          </div>
          <div class="mt-2 font-black text-[16px]">{{ meetPoint }}</div>
          <div class="mt-3 text-[13px] opacity-85">
            Konbayan Espresso &amp; Farm.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactCards",
  props: {
    whatsapp: { type: String, default: "+62 xxx xxxx xxxx" },
    meetPoint: { type: String, default: "Bayan / Senaru" },
  },
};
</script>
