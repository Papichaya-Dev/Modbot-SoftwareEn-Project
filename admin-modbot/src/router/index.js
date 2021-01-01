import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/Home.vue'

const routes = [
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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  session
})

export default router