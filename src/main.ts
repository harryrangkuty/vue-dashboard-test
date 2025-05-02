import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
//iconify
import { Icon } from '@iconify/vue'
// Vuetify
import { vuetify } from './plugins/vuetify'
import 'vuetify/styles'

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.component('Icon', Icon)
app.mount('#app')