import { createApp } from "vue";
import "./assets/main.css";
import App from "./App.vue";
import Bookinfo from "./componentes/Bookinfo.vue";

const app = createApp(App);

app.component("book-info", Bookinfo);

app.mount("#app");