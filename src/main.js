import { createApp } from 'vue'
import App from './App.vue'
import router from '@/routes/routes.js'
import VueAnime from 'vue-animejs'




const app = createApp(App)
app.use(router)
app.mount('#app')

VueAnime.use(VueAnime)