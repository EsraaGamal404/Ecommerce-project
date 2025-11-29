import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector) 
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: 'Welcome',
          language: 'Language',
          saleBanner:'Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!',
          ShopNow:'ShopNow',
        }
      },
      ar: {
        translation: {
          welcome: 'أهلاً بك',
          language: 'اللغة',
          saleBanner:'تخفيضات الصيف على جميع بدلات السباحة والتوصيل السريع المجاني - خصم 50%!',
          ShopNow:'تسوق الآن',
        }
      }
    },
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;