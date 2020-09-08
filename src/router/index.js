import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Category from '../views/Category'
import Detail from '../views/ArticleDetail'
import About from '../views/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
  ]
})
