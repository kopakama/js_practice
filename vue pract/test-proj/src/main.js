"use strict";

import Vue from "vue";
import VueCompositionApi from "@vue/composition-api";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import BootstrapVue from "bootstrap-vue";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueCompositionApi);

new Vue({
  render: h => h(App)
}).$mount("#app");
