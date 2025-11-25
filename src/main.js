import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/routes.js'
import { createI18n } from 'vue-i18n'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

import fr from './locales/fr.json'
import en from './locales/en.json'
import kr from './locales/kr.json'
const i18n = createI18n({
  legacy: false,
  locale: 'fr',
  fallbackLocale: 'fr',
  messages: { fr, en, kr },
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
