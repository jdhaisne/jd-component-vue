import { appendFile } from 'fs'
import { createApp } from 'vue'
import App from './App.vue'
import JdCompo from './index'

const app = createApp(App)

app.use(JdCompo)
app.mount('#app')