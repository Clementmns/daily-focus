import i18next from 'i18next';
import type { i18n } from 'i18next';

const localesContext = import.meta.webpackContext('./locales', {
  recursive: false,
  regExp: /\.json$/,
});

const localI18nInstance: i18n = i18next.createInstance();

localI18nInstance.init({
  lng: 'en',
  compatibilityJSON: 'v3',
  resources: Object.fromEntries(
    localesContext.keys().map((key) => [
      key.match(/\/([^/]+)\.json$/)?.[1] || key,
      {
        translation: localesContext(key) as Record<string, string>,
      },
    ]),
  ),
  fallbackLng: 'en',
});

export { localI18nInstance as i18n };
