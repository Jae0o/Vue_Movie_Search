import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./routes";
import "./scss/_main.scss";

createApp(App).use(createPinia()).use(router).mount("#app");
