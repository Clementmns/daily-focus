import { useEffect } from '@lynx-js/react';

import './App.css';
import { i18n } from './locales/i18n.ts';

export function App() {
  useEffect(() => {
    console.info('Hello, ReactLynx');
  }, []);

  return (
    <view className="App">
      <text className="button">Hello, {i18n.t("world")}</text>
    </view>
  );
}
