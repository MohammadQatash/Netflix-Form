import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import i18n from '../i18n'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
      path: '/',
      redirect: `/${i18n.locale}`
  },
  { 
    path: '/:lang',
    component: {
      render (c) { return c('router-view') }
    },
    children: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
          path: 'user',
          name: 'user',
          component: () => import('../views/User.vue'),
          beforeEnter: (to, from, next) => {
                if (store.getters.authenticated) {
                    next(true);
                } else {
                    next({name: 'home'});
                }
            }
        },
        {
          path: "*",
          name: "*",
          redirect: { name: "home" },
        },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

