import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from '@/i18n'
import vuetify from './plugins/vuetify'
import '@/assets/styles/main.css'
import "@/vee-validate";
import { ValidationProvider, ValidationObserver } from "vee-validate";

import { genericMixins } from "./utilities/mixin";

Vue.mixin({
    ...genericMixins,
});

Vue.config.productionTip = false

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app')
