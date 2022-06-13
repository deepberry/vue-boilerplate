// 1.Create APP
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// 2.Components
import { createHead } from '@vueuse/head'
const head = createHead()
app.use(head)

import router from './router/index';
app.use(router)

import store from './store/index';
app.use(store)

// 3.Mount DOM
app.mount('#app')