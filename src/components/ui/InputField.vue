<template>
  <label class="block">
    <div
      v-if="label"
      class="mb-2 text-[11px] uppercase tracking-[0.22em] font-black opacity-80"
    >
      {{ label }}
    </div>

    <textarea
      v-if="textarea"
      :name="name"
      :rows="rows"
      :placeholder="placeholder"
      :required="required"
      :readonly="readonly"
      class="w-full border-2 border-black bg-white shadow-[3px_3px_0_#000] px-4 py-3 text-[14px] outline-none rounded-[18px] focus:-translate-y-[1px] transition focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--paper)]"
      :value="modelValue"
      @input="onInput"
    />

    <input
      v-else
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      :readonly="readonly"
      class="w-full border-2 border-black bg-white shadow-[3px_3px_0_#000] px-4 py-3 text-[14px] outline-none rounded-[18px] focus:-translate-y-[1px] transition focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--paper)]"
      :value="modelValue"
      @input="onInput"
    />
  </label>
</template>

<script>
export default {
  name: "InputField",
  emits: ["update:modelValue"],
  props: {
    modelValue: { type: [String, Number], default: "" },
    label: { type: String, default: "" },
    name: { type: String, default: "" },
    type: { type: String, default: "text" },
    placeholder: { type: String, default: "" },
    required: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    textarea: { type: Boolean, default: false },
    rows: { type: Number, default: 4 },
  },
  methods: {
    onInput(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>
