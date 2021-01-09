import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('../views/signin.vue'),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/register.vue'),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/question',
    name: 'question',
    component: () => import('../views/question.vue'),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/dashboard.vue'),
    meta: {
      requiresGuest: true
    },
    children: [{
      path: '/dashuser',
      name: 'Dashboard User',
      component: () => import('../views/session/dashuser.vue')
    },
    {
      path: '/dashtime',
      name: 'Dashboard Time',
      component: () => import('../views/session/dashtime.vue')
    }]
  },
  {
    path: '/chat',
    name: 'managechat',
    component: () => import('../views/chat.vue'),
    meta: {
      requiresGuest: true
    },

    children: [
      {
        path: '/trainbot',
        name: 'Trainbot',
        component: () => import('../views/session/chattrain.vue'),
        meta: {
          requiresGuest: true
        }
      },
      {
        path: '/responses',
        name: 'Responses',
        component: () => import('../views/session/chatres.vue'),
        meta: {
          requiresGuest: true
        }
      }
    ]
  },
  {
    path: '/transport',
    name: 'transport',
    component: () => import('../views/transport.vue'),
    meta: {
      requiresGuest: true
    },
    children: [{
      path: '/transvan',
      name: 'Trans van',
      component: () => import('../views/session/transvan.vue')
    },
    {
      path: '/transminibus',
      name: 'Trans minibus',
      component: () => import('../views/session//transmnbus.vue')
    }]
  },
  {
    path: '/locations',
    name: 'locations',
    component: () => import('../views/locations.vue'),
    meta: {
      requiresGuest: true
    },
    children: [{
      path: '/station',
      name: 'station',
      component: () => import('../views/session/locationstation.vue')
    },
    {
      path: '/locationmark',
      name: 'location mark',
      component: () => import('../views/session/locationmark.vue')
    }]
  },
  {
    path: '/design',
    name: 'design',
    component: () => import('../views/design.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router