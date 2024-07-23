import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';
import { I18nManager, Platform } from 'react-native';

// if Hebrew isn't your default language, move Translations to the appropriate language file.
import en from './en';
import he, { Translations } from './he';
import { CountriesProps } from '@/i18n/interfaces';
import { getStringAsync } from '@/services/storage';

export const i18n = new I18n();

i18n.enableFallback = true;

i18n.translations = { en, 'en-US': en, he };

let isRTLOnLoad: boolean = false;
if (Platform.OS !== 'web')
  getStringAsync('userLanguage').then(val => {
    if (val) {
      const userChosenLanguage: CountriesProps = JSON.parse(val) || {
        languageTag: 'en',
        textDirection: 'ltr',
      };
      i18n.locale = userChosenLanguage.language;
      isRTLOnLoad = userChosenLanguage.textDirection === 'rtl' || false;
      I18nManager.allowRTL(isRTLOnLoad);
      I18nManager.forceRTL(isRTLOnLoad);
    } else {
      const preferredLanguage = Localization.getLocales()[0];
      i18n.locale = preferredLanguage.languageTag;
      isRTLOnLoad = preferredLanguage.textDirection === 'rtl';
      I18nManager.allowRTL(isRTLOnLoad);
      I18nManager.forceRTL(isRTLOnLoad);
    }
  });

export const isRTL = isRTLOnLoad;

/**
 * Builds up valid keypaths for translations.
 */
export type TxKeyPath = RecursiveKeyOf<Translations>;

// via: https://stackoverflow.com/a/65333050
type RecursiveKeyOf<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<TObj[TKey], `${TKey}`>;
}[keyof TObj & (string | number)];

type RecursiveKeyOfInner<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<TObj[TKey], `['${TKey}']` | `.${TKey}`>;
}[keyof TObj & (string | number)];

type RecursiveKeyOfHandleValue<TValue, Text extends string> = TValue extends any[]
  ? Text
  : TValue extends object
    ? Text | `${Text}${RecursiveKeyOfInner<TValue>}`
    : Text;
