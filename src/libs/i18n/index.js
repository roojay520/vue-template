
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import ElementLocale from 'element-ui/lib/locale';
import messages from './lang';
import dateTimeFormats from './dateTimeFormats';

Vue.use(VueI18n);

const i18n = new VueI18n({
  // 语言标识, 通过切换 locale 的值来实现语言切换, this.$i18n.locale
  locale: 'zh-CN',
  // 时间格式化
  dateTimeFormats,
  messages,
});

ElementLocale.i18n((key, value) => i18n.t(key, value));

export default i18n;
