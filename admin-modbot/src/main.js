import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VuePageTitle from 'vue-page-title'
// import axios from 'axios';

// createApp(App).config.productionTip = false

// // Setting up default vue's http modules for api calls
// createApp(App).prototype.$http = axios;
// // Load the token from the localStorage
// const token = localStorage.getItem("token");

// // Is there is any token then we will simply append default axios authorization headers
// if (token) {
//     createApp(App).prototype.$http.defaults.headers.common['Authorization'] = token;
//   }

createApp(App).use(store).use(router).mount('#app')

createApp(App).use(VuePageTitle, { router })


