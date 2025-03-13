import i18next from 'i18next';
import type { i18n } from 'i18next';

const localesContext = import.meta.webpackContext('./', {
	recursive: false,
	regExp: /\.json$/,
});

const localI18nInstance: i18n = i18next.createInstance();

localI18nInstance.init({
	lng: 'fr',
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

export const changeLanguage = async (lang: string) => {
	return localI18nInstance.changeLanguage(lang);
};

export const t = (key: string, options?: any): string => {
	const result = localI18nInstance.t(key, options);
	return typeof result === 'string' ? result : JSON.stringify(result);
};

export const getAvailableLanguages = () => {
	return Object.keys(localI18nInstance.store.data);
};

export { localI18nInstance as i18n };
