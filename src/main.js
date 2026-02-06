// src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// ✅ Tailwind entry (required when using utility classes)
import "@/tailwind.css";

// tokens + brutal overrides (if brutal.css conflicts, see the note below)
import "@/styles/tokens.css";
// import "@/styles/brutal.css"; // ⛔ temporarily disabled to avoid overriding body/background

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

window.scrollTo(0, 0);
document.documentElement.scrollTop = 0;
document.body.scrollTop = 0;

window.addEventListener("pageshow", () => {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
});

const app = createApp(App);
app.use(router);
app.mount("#app");
