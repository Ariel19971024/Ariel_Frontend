import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const app = createApp(App)
//plugin
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//component
import Menu from './components/menu.vue'
app.component('Menu', Menu)
app.use(ElementPlus)
app.use(router).mount('#app')
