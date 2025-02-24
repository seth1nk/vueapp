import { createApp } from 'vue'; // Импортируем createApp из Vue 3
import App from './App.vue';
import router from './router'; // Импортируем роутер
import './assets/site.css'; // Импортируем стили

// Создаем приложение
const app = createApp(App);

// Используем роутер
app.use(router);

// Монтируем приложение
app.mount('#app');
