import { createContext, useState, useContext, useEffect } from '@lynx-js/react';
import { i18n, changeLanguage } from '../../locales/i18n.ts';

type LanguageContextType = {
	language: string;
	changeLanguage: (lang: string) => Promise<void>;
};

const LanguageContext = createContext<LanguageContextType>({
	language: i18n.language,
	changeLanguage: async () => {},
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
	const [language, setLanguage] = useState(i18n.language);

	const handleChangeLanguage = async (lang: string) => {
		await changeLanguage(lang);
		setLanguage(lang);
	};

	useEffect(() => {
		const onLanguageChanged = (lng: string) => {
			setLanguage(lng);
		};

		i18n.on('languageChanged', onLanguageChanged);
		return () => {
			i18n.off('languageChanged', onLanguageChanged);
		};
	}, []);

	return <LanguageContext.Provider value={{ language, changeLanguage: handleChangeLanguage }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);
