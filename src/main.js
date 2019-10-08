import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "typeface-quicksand/index.css";
import "typeface-quattrocento/index.css";
import "@/assets/css/style.css";

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount("#app");
