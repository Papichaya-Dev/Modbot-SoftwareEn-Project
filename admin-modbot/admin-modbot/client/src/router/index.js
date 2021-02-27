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
    path: '/welcome',
    name: 'welcome',
    component: () => import('../views/main/welcome.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/question',
    name: 'question',
    component: () => import('../views/main/question.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/main/dashboard.vue'),
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: 'user',
        name: 'DashboardUser',
        component: () => import('../views/session/dashuser.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'timing',
        name: 'DashboardTime',
        component: () => import('../views/session/dashtime.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'addBusdata',
        name: 'addBusdata',
        component: () => import('../views/session/add/addBusdata.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'editBusdata/:id',
        name: 'editBusdata',
        component: () => import('../views/session/edit/editBusdata.vue'),
        meta: {
          requiresAuth: true
        }
      }
    ]
  },
  {
    path: '/chat',
    name: 'managechat',
    component: () => import('../views/main/chat.vue'),
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: 'training',
        name: 'Trainbot',
        component: () => import('../views/session/chattrain.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'responses',
        name: 'Responses',
        component: () => import('../views/session/chatres.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'startTrain',
        name: 'startTrain',
        component: () => import('../views/session/add/startTrain.vue'),
        meta: {
          requiresAuth: true          
        }
      },
      {
        path: 'startRes',
        name: 'startRes',
        component: () => import('../views/session/add/startRes.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'editTrain/:id',
        name: 'editTrain',
        component: () => import('../views/session/edit/editword.vue'),
        meta: {
          requiresAuth: true
        }
      }
    ]
  },
  {
    path: '/transport',
    name: 'transport',
    component: () => import('../views/main/transport.vue'),
    meta: {
      requiresAuth: true
    },
    children: [{
      path: 'bus',
      name: 'Bus',
      component: () => import('../views/session/transbus.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: 'addBus',
      name: 'addBus',
      component: () => import('../views/session/add/addBusroute.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: 'editBus/:id',
      name: 'editBus',
      component: () => import('../views/session/edit/editBus.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: 'duplicateBus/:id',
      name: 'duplicateBus',
      component: () => import('../views/session/add/addBusDup.vue'),
      meta: {
        requiresAuth: true
      },
    },
    {
      path: 'van',
      name: 'Van',
      component: () => import('../views/session/transvan.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: 'addVan',
      name: 'addVan',
      component: () => import('../views/session/add/addVanroute.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: 'editVan/:id',
      name: 'editVan',
      component: () => import('../views/session/edit/editVan.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: 'minibus',
      name: 'Minibus',
      component: () => import('../views/session//transmnbus.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: 'addMinibus',
      name: 'addMinibus',
      component: () => import('../views/session/add/addMinibusroute.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: 'editMinibus/:id',
      name: 'editMinibus',
      component: () => import('../views/session/edit/editMinibus.vue'),
      meta: {
        requiresAuth: true
      }
    }]
  },
  {
    path: '/locations',
    name: 'locations',
    component: () => import('../views/main/locations.vue'),
    meta: {
      requiresAuth: true
    },
    children: [{
      path: 'station',
      name: 'station',
      component: () => import('../views/session/locationstation.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: 'addStation',
      name: 'addStation',
      component: () => import('../views/session/add/addStation.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: 'editStation/:id',
      name: 'editStation',
      component: () => import('../views/session/edit/editStation.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: 'locationmark',
      name: 'location mark',
      component: () => import('../views/session/locationmark.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: 'addLandmark',
      name: 'addLandmark',
      component: () => import('../views/session/add/addLandmark.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: 'editLandmark/:id',
      name: 'editLandmark',
      component: () => import('../views/session/edit/editLandmark.vue'),
      meta: {
        requiresAuth: true
      }
    }]
  },
  {
    path: '/design',
    name: 'design',
    component: () => import('../views/main/design.vue'),
    meta: {
      requiresAuth: true
    },
    children: [{
      path: 'routes',
      name: 'routes',
      component: () => import('../views/session/designroute.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: 'addRoute',
      name: 'addRoute',
      component: () => import('../views/session/add/addRoute.vue'),
      meta: {
        requiresAuth: true
      }
    }]
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
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