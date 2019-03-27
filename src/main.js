import 'normalize.css';
import 'core-js/stable';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from '@/libs/i18n';
import '@/libs/elementui';
import '@/assets/scss/index.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
