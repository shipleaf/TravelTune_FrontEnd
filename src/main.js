import './assets/main.css'

import { createApp } from 'vue'
import VCalendar from 'v-calendar'
import 'v-calendar/style.css'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(router)
app.use(VCalendar)
app.use(pinia)
app.mount('#app')
