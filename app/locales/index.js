import LocalizedStrings from 'react-native-localization';
import english from './en';
import arabic from './ar';

const strings = new LocalizedStrings({
  'en-US': english,
  en: english,
  ar: arabic,
});

export default strings;
