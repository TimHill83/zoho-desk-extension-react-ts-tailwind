import './tailwind.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppWithoutContext from './components/AppWithoutContext';
import App from './components/App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
