import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router'
import { createPinia } from 'pinia'
import { createHead } from '@unhead/vue/client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const pinia = createPinia()
const app = createApp(App)
const head = createHead()

app.use(router)
app.use(pinia)
app.use(head)
app.mount('#app')
