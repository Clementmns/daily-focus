import { useEffect } from '@lynx-js/react';

import './App.css';
import { t } from './locales/i18n.ts';
import { LocaleSelector } from './components/LocaleSelector.tsx';

export function App() {
	useEffect(() => {
		console.info('Hello, ReactLynx');
	}, []);

	return (
		<view className='App'>
			<text className='button'>Hello, {t('world')}</text>

			<LocaleSelector />
		</view>
	);
}
