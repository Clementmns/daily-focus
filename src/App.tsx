import './App.css';
import { LocaleSelector } from './components/lang/LocaleSelector.tsx';
import { LanguageProvider } from './components/lang/LanguageProvider.tsx';

export function App() {
	return (
		<LanguageProvider>
			<AppContent />
		</LanguageProvider>
	);
}

function AppContent() {
	return (
		<view className='App'>
			<LocaleSelector />
		</view>
	);
}
