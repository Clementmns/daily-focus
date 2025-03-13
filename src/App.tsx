import { useEffect } from '@lynx-js/react';

import './App.css';

export function App() {
  useEffect(() => {
    console.info('Hello, ReactLynx');
  }, []);

  return (
    <view className="flex h-full items-center justify-center">
      <text>Hello, ReactLynx</text>
    </view>
  );
}
