<<<<<<< HEAD:modbot-project/src/router/index.ts
<<<<<<< Updated upstream:modbot-project/src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
=======
import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/Home.vue'

const routes = [
>>>>>>> Stashed changes:admin-modbot/src/router/index.js
=======
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
>>>>>>> c59685e9b5e5b5aa5489a6383bda7660e34af745:line-chatbot/liff-vue/src/router/index.ts
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/question',
    name: 'question',
    component: () => import('../views/question.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/dashboard.vue')
  },
  {
    path: '/chat',
    name: 'managechat',
    component: () => import('../views/chat.vue')
  },
  {
    path: '/transport',
    name: 'transport',
    component: () => import('../views/transport.vue')
  },
  {
    path: '/locations',
    name: 'locations',
    component: () => import('../views/locations.vue')
  },
  {
    path: '/design',
    name: 'design',
    component: () => import('../views/design.vue')
  }
]

const session = [
  {
    path: '/trainbot',
    name: 'Trainbot',
    component: () => import('../views/chattrain.vue')
  },
  {
    path: '/responses',
    name: 'Responses',
    component: () => import('../views/chatres.vue')
  }
]

<<<<<<< HEAD:modbot-project/src/router/index.ts
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
<<<<<<< Updated upstream:modbot-project/src/router/index.ts
=======
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
>>>>>>> c59685e9b5e5b5aa5489a6383bda7660e34af745:line-chatbot/liff-vue/src/router/index.ts
  routes
=======
  routes,
  session
>>>>>>> Stashed changes:admin-modbot/src/router/index.js
})

export default router