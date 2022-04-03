import { createApp } from 'vue'
import App from './app.vue'
import stores from '~/stores'

import './assets/index.css'

const app = createApp(App)
app.config.productionTip = false
app.use(stores)
app.mount('#app')
