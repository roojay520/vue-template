import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      meta: {
        auth: true,
        hide: false,
      },
      component: () => import('@/views/HelloWorld'),
    },
  ],
});
