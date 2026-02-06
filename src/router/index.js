// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/pages/HomePage.vue";
import PackagesFaqPage from "@/pages/PackagesFaqPage.vue";
import ContactPage from "@/pages/ContactPage.vue";
import BookTripPage from "@/pages/BookTripPage.vue";
import WeeklyBoardAdminPage from "@/pages/WeeklyBoardAdminPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    meta: { title: "Konbayan — Home" },
  },
  {
    path: "/paket-faq",
    name: "paket",
    component: PackagesFaqPage,
    meta: { title: "Konbayan — Paket + FAQ" },
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactPage,
    meta: { title: "Konbayan — Contact" },
  },
  {
    path: "/paket",
    name: "book",
    component: BookTripPage,
    meta: { title: "Konbayan — Paket" },
  },
  {
    path: "/weekly-board-admin",
    name: "weekly-board-admin",
    component: WeeklyBoardAdminPage,
    meta: { title: "Konbayan — Weekly Board Admin" },
  },

  // fallback
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // selalu start dari atas saat pindah halaman
    if (savedPosition) return savedPosition;
    return { top: 0, left: 0 };
  },
});

// set title dari meta
router.afterEach((to) => {
  if (typeof document !== "undefined") {
    document.title = to.meta?.title || "Konbayan";
  }
});

export default router;
