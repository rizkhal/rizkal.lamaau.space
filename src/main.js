import { createApp } from 'vue'
import App from './app.vue'
import stores from '~/stores'
import router from '~/routes'

import './assets/index.css'

const app = createApp(App)
app.config.productionTip = false
app.use(stores)
app.use(router)
app.mount('#app')
