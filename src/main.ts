import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import i18n from './plugins/i18n/i18n'
import { registerBaseComponents } from '@/utils/registerBaseComponents'

const app = createApp(App)

registerBaseComponents(app)

app
  .use(router)
  .use(store)
  .use(VueAxios, axios)
  .use(i18n)

app.mount('#app')
