import 'normalize.css';
import '@/assets/icons';
import '@/assets/scss/element';
import Vue from 'vue';
import { Form, FormItem, Button } from 'element-ui';
import App from './App';
import router from './router';
import store from './store';

Vue.use(Form);
Vue.use(FormItem);
Vue.use(Button);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
