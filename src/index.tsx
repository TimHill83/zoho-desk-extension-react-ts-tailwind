import './tailwind.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import AppWithContext from './components/AppWithContext';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <AppWithContext />
  </StrictMode>
);
