import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/Home.vue'
import store from '../store/index';

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue'),
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
    path: '/profile',
    name: 'profile',
    component: () => import('../views/profile.vue'),
    meta: {
      requiresAuth: true
    }
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
  },
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
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      // Redirect to the Login Page
      next('/login');
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (store.getters.isLoggedIn) {
      // Redirect to the Login Page
      next('/login');
    } else {
      next();
    }
  } else {
    next()
  }
});

export default router