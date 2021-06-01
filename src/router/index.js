import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import( /*webpackChunkName: "Home"*/ '../views/Home.vue')
  },
  {
    path: '/noticia/:id',
    name: 'News',
    props: true,
    component: () => import( /*webpackChunkName: "News"*/ '../views/news-view.vue'),
  },
  {
    path: '/pesquisar/:search',
    name: 'Search',
    props: true,
    component: () => import(/*webpackChunkName: "Search"*/'../views/Search.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    }
  }
})

export default router