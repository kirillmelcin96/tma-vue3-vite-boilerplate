import './assets/sass/main.scss'

import { createApp } from 'vue'
import { i18n } from './i18n'
import App from './App.vue'

import router from './router.js'

const app = createApp(App);

app.use(router);
app.use(i18n);

app.mount('#app');
