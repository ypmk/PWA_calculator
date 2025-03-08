import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { registerSW } from 'virtual:pwa-register'; // ✅ Добавляем импорт
import './index.css';
import App from './App.jsx';

registerSW(); // ✅ Регистрируем PWA Service Worker

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
);
