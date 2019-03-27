const ctx = require.context('.', false, /\.vue$/);
export default {
  install: (Vue) => {
    ctx.keys().forEach(key => Vue.component(key.slice(2, -4), () => import(`${key}`)));
  },
};
