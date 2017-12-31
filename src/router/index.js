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
          path: 'toolbox',
          component: resolve => require(['../components/toolbox/toolbox.vue'], resolve)
        },
        {
          path: 'demo3',
          component: resolve => require(['../components/toolbox/demo3.vue'], resolve)
        }
      ]
    },
    {
      path: '/Looks',
      component: resolve => require(['../components/pages/Looks.vue'], resolve)
    }
  ]
})