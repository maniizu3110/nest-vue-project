import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL =
  process.env.NODE_ENV === "prod"
    ? "https://crame.link/api/ambassador"
    : "http://localhost:8000/api/ambassador/";
axios.defaults.withCredentials = true;

createApp(App).use(store).use(router).mount('#app')
