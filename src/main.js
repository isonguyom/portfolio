// Add the necessary CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import 'jquery';
import 'popper.js';
import 'bootstrap';
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {createBootstrap} from 'bootstrap-vue-next'
import App from './App.vue'

const app = createApp(App)


app.use(createBootstrap())
app.use(createPinia())

app.mount('#app')
