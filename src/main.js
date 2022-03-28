import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const app = createApp(App)
// component
import Menu from './components/menu.vue'
app.component('Menu', Menu)
app.use(router).mount('#app')
