<template>
  <main class="min-h-screen">
    <section class="pt-28 sm:pt-32">
      <div class="kx-wrap kx-pad">
        <div class="kx-kicker">weekly board admin</div>
        <h1 class="mt-4 kx-title">Manage Weekly Board</h1>
        <p class="mt-4 text-[15px] leading-[1.7] opacity-80 max-w-[62ch]">
          CRUD data for weekly_board (json-server).
        </p>
      </div>
    </section>

    <section v-if="!unlocked" class="kx-wrap kx-pad py-12">
      <div class="kx-block bg-[color:var(--panel-yellow)] p-6 max-w-[520px]">
        <div class="text-[12px] uppercase tracking-[0.22em] opacity-70">
          locked
        </div>
        <div class="mt-2 font-black text-[18px]">Admin only</div>
        <p class="mt-3 text-[13px] leading-[1.7] opacity-80">
          Enter the password to unlock the admin page.
        </p>
        <form class="mt-4 flex gap-3" @submit.prevent="unlock">
          <input
            v-model="passwordInput"
            type="password"
            class="w-full border-2 border-black px-3 py-2 rounded-[10px]"
            placeholder="Password admin"
          />
          <ButtonBrutal type="submit">Unlock</ButtonBrutal>
        </form>
        <div v-if="authError" class="mt-3 text-[12px] text-red-600">
          {{ authError }}
        </div>
      </div>
    </section>

    <section v-else class="kx-wrap kx-pad py-12">
      <div class="kx-block bg-white p-6">
        <div class="text-[12px] uppercase tracking-[0.22em] opacity-70">
          add new
        </div>
        <form class="mt-4 grid grid-cols-12 gap-4" @submit.prevent="createRow">
          <div class="col-span-12 md:col-span-3">
            <label class="block">
              <div class="mb-2 text-[11px] uppercase tracking-[0.22em] font-black opacity-80">
                day
              </div>
              <select
                v-model="form.day"
                class="w-full border-2 border-black px-3 py-2 rounded-[10px] bg-white"
                required
              >
                <option disabled value="">Select day</option>
                <option v-for="d in dayOptions" :key="d" :value="d">
                  {{ d }}
                </option>
              </select>
            </label>
          </div>
          <div class="col-span-12 md:col-span-3">
            <label class="block">
              <div class="mb-2 text-[11px] uppercase tracking-[0.22em] font-black opacity-80">
                date
              </div>
              <input
                v-model="form.date"
                type="date"
                class="w-full border-2 border-black px-3 py-2 rounded-[10px] bg-white"
                required
              />
            </label>
          </div>
          <div class="col-span-12 md:col-span-3">
            <label class="block">
              <div class="mb-2 text-[11px] uppercase tracking-[0.22em] font-black opacity-80">
                route
              </div>
              <select
                v-model="form.route"
                class="w-full border-2 border-black px-3 py-2 rounded-[10px] bg-white"
                required
              >
                <option disabled value="">Select route</option>
                <option v-for="r in routeOptions" :key="r" :value="r">
                  {{ r }}
                </option>
              </select>
            </label>
          </div>
          <div class="col-span-12 md:col-span-2">
            <label class="block">
              <div class="mb-2 text-[11px] uppercase tracking-[0.22em] font-black opacity-80">
                time
              </div>
              <select
                v-model="form.time"
                class="w-full border-2 border-black px-3 py-2 rounded-[10px] bg-white"
                required
              >
                <option disabled value="">Select time</option>
                <option v-for="t in timeOptions" :key="t" :value="t">
                  {{ t }}
                </option>
              </select>
            </label>
          </div>
          <div class="col-span-12 md:col-span-3">
            <label class="block">
              <div class="mb-2 text-[11px] uppercase tracking-[0.22em] font-black opacity-80">
                location
              </div>
              <select
                v-model="form.location"
                class="w-full border-2 border-black px-3 py-2 rounded-[10px] bg-white"
                required
              >
                <option disabled value="">Select location</option>
                <option v-for="l in locationOptions" :key="l" :value="l">
                  {{ l }}
                </option>
              </select>
            </label>
          </div>
          <div class="col-span-12 md:col-span-2">
            <label class="block">
              <div class="mb-2 text-[11px] uppercase tracking-[0.22em] font-black opacity-80">
                quota
              </div>
              <input
                v-model.number="form.quota"
                type="number"
                min="0"
                class="w-full border-2 border-black px-3 py-2 rounded-[10px] bg-white"
                required
              />
            </label>
          </div>
          <div class="col-span-12 md:col-span-2">
            <label class="block">
              <div class="mb-2 text-[11px] uppercase tracking-[0.22em] font-black opacity-80">
                filled
              </div>
              <input
                v-model.number="form.filled"
                type="number"
                min="0"
                class="w-full border-2 border-black px-3 py-2 rounded-[10px] bg-white"
                required
              />
            </label>
          </div>
          <div class="col-span-12 md:col-span-4">
            <label class="block">
              <div class="mb-2 text-[11px] uppercase tracking-[0.22em] font-black opacity-80">
                note
              </div>
              <select
                v-model="form.note"
                class="w-full border-2 border-black px-3 py-2 rounded-[10px] bg-white"
              >
                <option value="">—</option>
                <option v-for="n in noteOptions" :key="n" :value="n">
                  {{ n }}
                </option>
              </select>
            </label>
          </div>
          <div class="col-span-12 flex gap-3">
            <ButtonBrutal type="submit">Add</ButtonBrutal>
            <ButtonBrutal variant="paper" type="button" @click="resetForm"
              >Clear</ButtonBrutal
            >
          </div>
        </form>
      </div>

      <div class="mt-8 kx-block bg-white p-6">
        <div class="flex items-center justify-between gap-4">
          <div class="text-[12px] uppercase tracking-[0.22em] opacity-70">
            list
          </div>
          <ButtonBrutal variant="paper" @click="fetchRows">Refresh</ButtonBrutal>
        </div>

        <div class="mt-4 overflow-x-auto">
          <table class="w-full border-2 border-black text-[13px]">
            <thead class="bg-[color:var(--panel-yellow)]">
              <tr>
                <th class="text-left px-3 py-2 uppercase tracking-[0.2em] text-[11px]">
                  Day
                </th>
                <th class="text-left px-3 py-2 uppercase tracking-[0.2em] text-[11px]">
                  Date
                </th>
                <th class="text-left px-3 py-2 uppercase tracking-[0.2em] text-[11px]">
                  Route
                </th>
                <th class="text-left px-3 py-2 uppercase tracking-[0.2em] text-[11px]">
                  Time
                </th>
                <th class="text-left px-3 py-2 uppercase tracking-[0.2em] text-[11px]">
                  Location
                </th>
                <th class="text-left px-3 py-2 uppercase tracking-[0.2em] text-[11px]">
                  Quota
                </th>
                <th class="text-left px-3 py-2 uppercase tracking-[0.2em] text-[11px]">
                  Filled
                </th>
                <th class="text-left px-3 py-2 uppercase tracking-[0.2em] text-[11px]">
                  Note
                </th>
                <th class="text-left px-3 py-2 uppercase tracking-[0.2em] text-[11px]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="loading">
                <td class="px-3 py-3" colspan="9">Loading…</td>
              </tr>
              <tr v-else-if="error">
                <td class="px-3 py-3 text-red-600" colspan="9">
                  {{ error }}
                </td>
              </tr>
              <tr
                v-for="row in rows"
                :key="row.id"
                class="border-t-2 border-black"
              >
                <td class="px-3 py-3">
                  <input
                    v-model="row.day"
                    class="w-full border-2 border-black px-2 py-1 rounded-[8px]"
                  />
                </td>
                <td class="px-3 py-3">
                  <input
                    v-model="row.date"
                    type="date"
                    class="w-full border-2 border-black px-2 py-1 rounded-[8px]"
                  />
                </td>
                <td class="px-3 py-3">
                  <input
                    v-model="row.route"
                    class="w-full border-2 border-black px-2 py-1 rounded-[8px]"
                  />
                </td>
                <td class="px-3 py-3">
                  <input
                    v-model="row.time"
                    class="w-full border-2 border-black px-2 py-1 rounded-[8px]"
                  />
                </td>
                <td class="px-3 py-3">
                  <input
                    v-model="row.location"
                    class="w-full border-2 border-black px-2 py-1 rounded-[8px]"
                  />
                </td>
                <td class="px-3 py-3">
                  <input
                    v-model.number="row.quota"
                    type="number"
                    min="0"
                    class="w-full border-2 border-black px-2 py-1 rounded-[8px]"
                  />
                </td>
                <td class="px-3 py-3">
                  <input
                    v-model.number="row.filled"
                    type="number"
                    min="0"
                    class="w-full border-2 border-black px-2 py-1 rounded-[8px]"
                  />
                </td>
                <td class="px-3 py-3">
                  <input
                    v-model="row.note"
                    class="w-full border-2 border-black px-2 py-1 rounded-[8px]"
                  />
                </td>
                <td class="px-3 py-3 flex gap-2">
                  <ButtonBrutal size="sm" @click="updateRow(row)"
                    >Save</ButtonBrutal
                  >
                  <ButtonBrutal size="sm" variant="danger" @click="deleteRow(row)"
                    >Delete</ButtonBrutal
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import ButtonBrutal from "@/components/ui/ButtonBrutal.vue";

const API = "http://localhost:3001/weekly_board";

export default {
  name: "WeeklyBoardAdminPage",
  components: { ButtonBrutal },
  data() {
    return {
      unlocked: false,
      passwordInput: "",
      authError: "",
      adminPassword: "konbayan123",
      rows: [],
      loading: false,
      error: "",
      form: {
        day: "",
        date: "",
        route: "",
        time: "",
        location: "",
        quota: 0,
        filled: 0,
        note: "",
      },
      dayOptions: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      routeOptions: ["Cycling Route", "Coffee Route", "Family Mix", "Custom Day"],
      timeOptions: ["08:30", "09:00", "10:30", "14:00", "15:30", "17:00"],
      locationOptions: ["Bayan", "Senaru"],
      noteOptions: ["Farm stop", "Chill walk", "Custom pace", "Kid-friendly", "Coffee break"],
    };
  },
  methods: {
    unlock() {
      if (this.passwordInput === this.adminPassword) {
        this.unlocked = true;
        this.authError = "";
        this.passwordInput = "";
      } else {
        this.authError = "Incorrect password.";
      }
    },
    resetForm() {
      this.form = {
        day: "",
        date: "",
        route: "",
        time: "",
        location: "",
        quota: 0,
        filled: 0,
        note: "",
      };
    },
    async fetchRows() {
      this.loading = true;
      this.error = "";
      try {
        const res = await fetch(API);
        if (!res.ok) throw new Error("Failed to fetch");
        this.rows = await res.json();
      } catch (e) {
        this.error = e?.message || "Failed to fetch";
      } finally {
        this.loading = false;
      }
    },
    async createRow() {
      try {
        const res = await fetch(API, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.form),
        });
        if (!res.ok) throw new Error("Failed to create");
        this.resetForm();
        await this.fetchRows();
      } catch (e) {
        this.error = e?.message || "Failed to create";
      }
    },
    async updateRow(row) {
      try {
        const res = await fetch(`${API}/${row.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(row),
        });
        if (!res.ok) throw new Error("Failed to update");
      } catch (e) {
        this.error = e?.message || "Failed to update";
      }
    },
    async deleteRow(row) {
      try {
        const res = await fetch(`${API}/${row.id}`, { method: "DELETE" });
        if (!res.ok) throw new Error("Failed to delete");
        await this.fetchRows();
      } catch (e) {
        this.error = e?.message || "Failed to delete";
      }
    },
  },
  mounted() {
    this.fetchRows();
  },
};
</script>
