export const WA_NUMBER = "6281952610278";

export function getWhatsAppLink(text = "") {
  const q = text ? `?text=${encodeURIComponent(text)}` : "";
  return `https://wa.me/${WA_NUMBER}${q}`;
}

const LABELS = {
  en: {
    title: "Konbayan Request",
    name: "Name",
    subject: "Subject",
    message: "Message",
    activity: "Activity",
    date: "Date",
    time: "Time",
    location: "Location",
    guests: "Guests",
    whatsapp: "WhatsApp",
    meetingPoint: "Meeting point",
    budget: "Budget",
    note: "Note",
    source: "Source",
  },
  id: {
    title: "Permintaan Konbayan",
    name: "Nama",
    subject: "Subjek",
    message: "Pesan",
    activity: "Aktivitas",
    date: "Tanggal",
    time: "Jam",
    location: "Lokasi",
    guests: "Jumlah orang",
    whatsapp: "WhatsApp",
    meetingPoint: "Titik temu",
    budget: "Budget",
    note: "Catatan",
    source: "Sumber",
  },
};

function pickLabel(locale) {
  return LABELS[locale] || LABELS.en;
}

export function formatWhatsAppMessage(payload = {}, locale = "en") {
  const l = pickLabel(locale);
  const lines = [l.title, "—"];
  const add = (label, value, prefix = "- ") => {
    if (value == null || value === "") return;
    lines.push(`${prefix}${label}: ${value}`);
  };

  const hasAny = (keys) => keys.some((k) => payload[k]);

  if (hasAny(["name", "subject", "message", "note"])) {
    lines.push(locale === "id" ? "Kontak" : "Contact");
    add(l.name, payload.name);
    add(l.subject, payload.subject);
    add(l.message, payload.message || payload.note);
  }

  if (hasAny(["route", "activity", "date", "time"])) {
    lines.push(locale === "id" ? "Rencana" : "Plan");
    add(l.activity, payload.route || payload.activity);
    add(l.date, payload.date);
    add(l.time, payload.time);
  }

  if (hasAny(["location", "pax", "meeting_point", "meetingPoint", "budget"])) {
    lines.push(locale === "id" ? "Detail" : "Details");
    add(l.location, payload.location);
    add(l.guests, payload.pax || payload.guests);
    add(l.meetingPoint, payload.meeting_point || payload.meetingPoint);
    if (payload.budget) {
      const budgetText = payload.currency
        ? `${payload.budget} (${payload.currency})`
        : payload.budget;
      add(l.budget, budgetText);
    }
  }

  if (payload.note) {
    lines.push(locale === "id" ? "Catatan" : "Notes");
    add(l.note, payload.note);
  }

  if (payload.source) {
    lines.push(locale === "id" ? "Sumber" : "Source");
    add(l.source, payload.source);
  }

  return lines.join("\n");
}

export function buildWhatsAppLink(payload = {}, locale = "en") {
  return getWhatsAppLink(formatWhatsAppMessage(payload, locale));
}
