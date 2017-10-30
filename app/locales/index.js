
import LocalizedStrings from 'react-native-localization';
import intl from 'intl';

const texts = new LocalizedStrings({
  'en-US': require('../locales/en'),
  en: require('../locales/en'),
  ar: require('../locales/ar'),
});

const customIntl = intl;
const currencyOptions = { currency: 'EGP' };
const priceFormatter = {
  en: new customIntl.NumberFormat('en-US', currencyOptions),
  ar: new customIntl.NumberFormat('ar-EG', currencyOptions),
};
const numberFormatter = {
  en: new customIntl.NumberFormat('en-US'),
  ar: new customIntl.NumberFormat('ar-EG'),
};

class LocalesManager {
  constructor() {
    this.appendLocaleKeys();
  }

  appendLocaleKeys() {
    const self = this;
    Object.keys(texts.en).forEach((key) => {
      Object.defineProperty(self, key, {
        get: () => {
          return texts[this.locale][key];
        },
      });
    });
  }
  get priceFormatter() {
    return priceFormatter[this.locale];
  }

  get numberFormatter() {
    return numberFormatter[this.locale];
  }

  setLocale(locale) {
    this.locale = locale.slice(0, 2);
  }

  getLocale() {
    return this.locale;
  }

  isRTL() {
    return this.locale === 'ar';
  }
  toggleLanguage() {
    if (this.locale === 'en') {
      this.locale = 'ar';
    } else {
      this.locale = 'en';
    }
  }
}

module.exports = LocalesManager;
