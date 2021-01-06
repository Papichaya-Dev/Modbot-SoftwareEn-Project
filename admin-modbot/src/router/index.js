import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('../views/signin.vue'),
    meta: {
      requiresGuest: true,
      title: 'Sign In'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/register.vue'),
    meta: {
      requiresGuest: true,
      title: 'Register'
    }
  },
  {
    path: '/question',
    name: 'question',
    component: () => import('../views/question.vue'),
    meta: {
      requiresGuest: true,
      title: 'Q&A'
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/dashboard.vue'),
    meta: {
      requiresGuest: true,
      title: 'Dashboard'
    }
  },
  {
    path: '/chat',
    name: 'managechat',
    component: () => import('../views/chat.vue'),
    meta: {
      requiresGuest: true,
      title: 'Manage Chat'
    },

    children: [
      {
        path: '/trainbot',
        name: 'Trainbot',
        component: () => import('../views/chattrain.vue'),
        meta: {
          requiresGuest: true,
          title: 'Trainbot'
        }
      },
      {
        path: '/responses',
        name: 'Responses',
        component: () => import('../views/chatres.vue'),
        meta: {
          requiresGuest: true,
          title: 'Responses'
        }
      }
    ]
  },
  {
    path: '/transport',
    name: 'transport',
    component: () => import('../views/transport.vue'),
    meta: {
      requiresGuest: true,
      title: 'Transportation'
    }
  },
  {
    path: '/locations',
    name: 'locations',
    component: () => import('../views/locations.vue'),
    meta: {
      requiresGuest: true,
      title: 'Location Details'
    }
  },
  {
    path: '/design',
    name: 'design',
<<<<<<< HEAD
    component: () => import('../views/design.vue'),
    meta: {
      requiresGuest: true,
      title: 'Design Routes'
    }
=======
    component: () => import('../views/design.vue')
  },
  {
    path: '/transvan',
    name: 'Trans van',
    component: () => import('../views/transvan.vue')
  },
  {
    path: '/transminibus',
    name: 'Trans minibus',
    component: () => import('../views/transmnbus.vue')
  },
  {
    path: '/dashuser',
    name: 'Dashboard User',
    component: () => import('../views/dashuser.vue')
  },
  {
    path: '/dashtime',
    name: 'Dashboard Time',
    component: () => import('../views/dashtime.vue')
  },
  {
    path: '/station',
    name: 'station',
    component: () => import('../views/locationstation.vue')
  },
  {
    path: '/locationmark',
    name: 'location mark',
    component: () => import('../views/locationmark.vue')
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
>>>>>>> 2703a2b890bf9bdfea9c3b5a06de03b6b12888a1
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router