import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueApexCharts from 'vue-apexcharts'

Vue.component('apexchart', VueApexCharts)
window.Apex.chart = { fontFamily: "Cairo" };


import vuetify from "@/plugins/vuetify";

import vUploader from 'v-uploader';


Vue.config.productionTip = false



Vue.use(vUploader);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
