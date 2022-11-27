import { createApp } from "vue";
import router from "./router";
import { createPinia } from "pinia";
// vue-lottie
import Vue3Lottie from "vue3-lottie";
import "vue3-lottie/dist/style.css";
// aos
import AOS from "aos";
import "aos/dist/aos.css";
// style
import "@/assets/main.scss";

import App from "./App.vue";

const app = createApp(App);

const aos = new AOS.init();
const pinia = createPinia();
app.use(router).use(pinia).use(Vue3Lottie).use(aos).mount("#app");
