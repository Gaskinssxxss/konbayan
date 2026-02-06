import { tours } from "@/data/tours";

export const routeOptions = [
  ...tours.map((t) => t.title),
  "Family Mix",
  "Custom Day",
];

export function getBudgetByRoute(route, currency = "IDR") {
  if (!route) return "";
  if (route === "Custom Day" || route === "Family Mix") return "Ask";
  const t = tours.find((x) => x.title === route);
  if (!t) return "";
  return currency === "USD" ? t.priceUsd || t.price : t.priceIdr || t.price;
}

export function getDescriptionByRoute(route) {
  const t = tours.find((x) => x.title === route);
  return t?.description || "";
}
