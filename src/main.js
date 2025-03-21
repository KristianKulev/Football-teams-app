import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/tailwind.css";
import "@/assets/css/base.scss";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
