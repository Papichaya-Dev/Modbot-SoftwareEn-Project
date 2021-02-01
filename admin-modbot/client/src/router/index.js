import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/Home.vue'
import store from '../store/index';
// import JwPagination from 'jw-vue-pagination';
// Vue.component('jw-pagination', JwPagination);

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
        path: 'trainbot',
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
        component: () => import('../views/session/startTrain.vue'),
        meta: {
          requiresAuth: true          
        }
      },
      {
        path: 'startRes',
        name: 'startRes',
        component: () => import('../views/session/startRes.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'editTrain/:id',
        name: 'editTrain',
        component: () => import('../views/session/editword.vue'),
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
      path: 'van',
      name: 'Van',
      component: () => import('../views/session/transvan.vue'),
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
      path: 'locationmark',
      name: 'location mark',
      component: () => import('../views/session/locationmark.vue'),
      meta: {
        requiresAuth: true
      }
    }]
  },
  {
    path: '/design',
    name: 'design',
    component: () => import('../views/main/design.vue')
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
// // paged items route
// app.get('/chat/trainbot', (req, res, next) => {
//   // example array of 150 items to be paged
//   const items = [...Array(150).keys()].map(i => ({ id: (i + 1), name: 'Item ' + (i + 1) }));

//   // get page from query params or default to first page
//   const page = parseInt(req.query.page) || 1;

//   // get pager object for specified page
//   const pageSize = 5;
//   const pager = paginate(items.length, page, pageSize);

//   // get page of items from items array
//   const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

//   // return pager object and current page of items
//   return res.json({ pager, pageOfItems });
//   console.log(error);
// });


export default router