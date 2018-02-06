import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: resolve => require(['../components/pages/Home.vue'], resolve)
    },
    {
      path: '/Home',
      component: resolve => require(['../components/pages/Home.vue'], resolve)
    },
    {
      path: '/Demos',
      component: resolve => require(['../components/pages/Demos'], resolve),
      children: [
        {
          path: 'vuetodo',
          component: resolve => require(['../components/todolist/vuetodo.vue'], resolve)
        },
        {
          path: 'lifeclock',
          component: resolve => require(['../components/lifeclock/lifeclock.vue'], resolve)
        },
        {
          path: 'calculator',
          component: resolve => require(['../components/calculator/calculator.vue'], resolve)
        }
      ]
    },
    {
      path: '/Looks',
      component: resolve => require(['../components/pages/Looks.vue'], resolve)
    }
  ]
})
