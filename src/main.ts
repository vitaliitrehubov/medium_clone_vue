import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)

app
  .use(VueAxios, axios)
  .use(store)
  .use(router)
  .mount('#app')
