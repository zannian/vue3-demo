import './assets/main.css'
import 'element-plus/es/components/message/style/css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
const app = createApp(App)
app.use(ElementPlus, {
    locale: zhCn,
})
app.use(createPinia())
app.use(router)
app.mount('#app')
