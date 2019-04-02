import zhLocale from 'element-ui/lib/locale/lang/zh-CN';
import enLocale from 'element-ui/lib/locale/lang/en';
import cn from './zh/index';
import en from './en/index';

export default {
  zh: { ...cn, ...zhLocale },
  en: { ...en, ...enLocale },
};
