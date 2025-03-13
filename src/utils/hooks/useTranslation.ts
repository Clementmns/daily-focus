import { useCallback } from '@lynx-js/react';
import { t as translate } from '../../locales/i18n.ts';
import { useLanguage } from '../../components/lang/LanguageProvider.tsx';

export const useTranslation = () => {
	const { language } = useLanguage();

	const t = useCallback(
		(key: string, options?: any) => {
			return translate(key, options);
		},
		[language],
	);

	return { t };
};
