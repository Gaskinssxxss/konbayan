// src/data/tours.js
/**
 * Two main activities. If you later pull from CMS/JSON, update here.
 */
export const tours = [
  {
    slug: "cycling-tour",
    tag: "bike",
    title: "Cycling Tour (22km Route)",
    short:
      "Sunrise ride + village vibes. A 22km route for a clear‑headed daily activity.",
    meet: "05:30 @ Konbayan Espresso & Farm",
    duration: "± 3–4 hours",
    schedule: "Start 05:30 — 22km route — finish back at Konbayan",
    price: "15 USD / person (cash)",
    priceUsd: "15 USD / person",
    priceIdr: "250k IDR / person",
    description:
      "Morning cycling tour with a guide. Relaxed pace with a real sense of adventure: fresh air, village roads, and short stops for photos and breathing.",
    includes: ["Guide", "Bicycle", "Mineral water", "Hot cappuccino"],
    highlights: ["Sunrise ride", "22km route", "Coffee stop"],
  },
  {
    slug: "coffee-tour",
    tag: "coffee",
    title: "Coffee Tour (Farm to Brew)",
    short:
      "From plantation → processing → roasting → manual brew. The full coffee journey.",
    meet: "09:00 @ Konbayan Espresso & Farm (pickup optional)",
    duration: "± 4 hours",
    schedule:
      "Plantation walk → coffee processing → traditional coffee → roasting → manual brew",
    price: "350k IDR / person (cash) • 25 USD / person (PayPal)",
    priceUsd: "25 USD / person",
    priceIdr: "350k IDR / person",
    description:
      "A coffee experience from farm to cup. See the process, taste traditional coffee, learn roasting, and finish with a manual brew.",
    includes: ["Guide", "Coffee tasting", "Roasting session", "Manual brew"],
    highlights: ["Processing demo", "Roast & brew", "Tasting"],
  },
];
