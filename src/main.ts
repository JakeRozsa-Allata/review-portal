// src/main.ts
import { createApp } from 'vue';
import { router } from '././processing/router';
import App from './App.vue';

const app = createApp(App);

// Provide the router to the app
app.provide('router', router);

app.mount('#app');
