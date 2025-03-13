import { getAvailableLanguages } from '../../locales/i18n.ts';
import { useLanguage } from './LanguageProvider.tsx';
import { useTranslation } from '../../utils/hooks/useTranslation.ts';

export function LocaleSelector() {
	const { language, changeLanguage } = useLanguage();
	const { t } = useTranslation();
	const availableLanguages = getAvailableLanguages();

	return (
		<view
			style={{
				padding: '16px',
				backgroundColor: 'rgba(18, 18, 18, 0.6)',
				borderRadius: '8px',
				marginTop: '10px',
				marginBottom: '10px',
				borderWidth: '1px',
				borderStyle: 'solid',
				borderColor: '#333333',
				boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
			}}
		>
			<text
				style={{
					fontSize: '18px',
					fontWeight: '600',
					marginBottom: '12px',
					color: 'var(--text)',
				}}
			>
				{t('localeSelector.changeLanguage')}
			</text>
			<list
				scroll-orientation='vertical'
				list-type='single'
				span-count={1}
				style={{
					width: '100%',
					height: '250px',
					padding: '12px',
					backgroundColor: 'rgba(19, 0, 45, 0.3)',
					borderRadius: '6px',
				}}
			>
				{availableLanguages.map((lang) => (
					<list-item
						item-key={lang}
						bindtap={() => {
							changeLanguage(lang);
						}}
						key={lang}
					>
						<text
							style={{
								padding: '12px',
								borderRadius: '8px',
								backgroundColor: language === lang ? '#6200ea' : 'rgba(51, 51, 51, 0.5)',
								fontSize: '16px',
								color: 'var(--button-text)',
								textAlign: 'center',
								marginTop: '4px',
								marginBottom: '4px',
								fontWeight: language === lang ? '600' : '400',
								boxShadow: language === lang ? '0px 4px 6px rgba(0, 0, 0, 0.3)' : 'none',
								transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
							}}
						>
							{t(`localeSelector.${lang}`)}
						</text>
					</list-item>
				))}
			</list>
		</view>
	);
}
