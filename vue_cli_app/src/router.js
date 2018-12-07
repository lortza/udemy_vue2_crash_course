import Vue from 'vue'
import Router from 'vue-router'
import Skills from './components/Skills.vue'
import Languages from './components/Languages.vue'
import About from './components/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Skills
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills
    },
    {
      path: '/languages',
      name: 'languages',
      component: Languages
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/about/:name_from_params',
      name: 'about',
      component: About
    },
  ]
})
