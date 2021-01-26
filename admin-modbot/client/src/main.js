// import Vue from 'vue'
import { createApp } from 'vue'

// import { EagleModal } from 'vue-eagle-modal'

import App from './App.vue'
import router from './router'
import store from './store'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import './assets/app.scss'

// Make BootstrapVue available throughout your project
// Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)

// Vue.use(EagleModal);

createApp(App).use(store).use(router).mount('#app')
// import Vue from 'vue'
// import App from './App.vue'
// import VueRouter from 'vue-router'
// import VueSidebarMenu from '../src/assets/index'

// import Installation from '@/views/main/chat.vue'
// import BasicUsage from '@/views/main/dashboard.vue'
// import Props from '@/views/main/locations.vue'
// import Events from '@/views/main/question.vue'
// import Styling from '@/views/main/transport.vue'

// Vue.use(VueRouter)
// Vue.use(VueSidebarMenu)

// const router = new VueRouter({
//   routes: [
//     {
//       path: '/',
//       name: 'Installation',
//       component: Installation
//     },
//     {
//       path: '/basic-usage',
//       name: 'BasicUsage',
//       component: BasicUsage
//     },
//     {
//       path: '/props',
//       name: 'Props',
//       component: Props
//     },
//     {
//       path: '/events',
//       name: 'Events',
//       component: Events
//     },
//     {
//       path: '/styling',
//       name: 'Styling',
//       component: Styling
//     }
//   ]
// })

// new Vue({ // eslint-disable-line no-new
//   el: '#app',
//   router,
//   render: h => h(App)
// })
