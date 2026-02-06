// src/utils/format.js
export function formatMoney(value, currency = "IDR") {
  const n = Number(value);
  if (Number.isNaN(n)) return String(value || "");
  try {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(n);
  } catch {
    return `${n} ${currency}`;
  }
}

export function formatDurationHours(hours) {
  const n = Number(hours);
  if (Number.isNaN(n) || n <= 0) return "";
  if (n < 1) return `${Math.round(n * 60)} min`;
  return `${n} hours`;
}

export function clampText(s, max = 120) {
  const str = String(s || "");
  if (str.length <= max) return str;
  return str.slice(0, max - 1) + "…";
}
