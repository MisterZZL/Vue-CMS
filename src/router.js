import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  // base: 'vuecms',
  routes: [
    { path: '/', redirect: '/home'},
    { path: '/home', name: 'home',component: () => import('./views/Home.vue'),
      children:[{path: 'newslist', name: "newslist", component: () => import('./components/news/NewsList.vue')}]
  },


    // { path: '/home/newslist', name: "newslist", component: () => import('./components/news/NewsList.vue')}, 
    { path: '/home/photolist', name: "photolist", component: () => import('./components/photos/PhotoList.vue')},
    { path: '/home/goodslist', name: "goodslist", component: () => import('./components/goods/GoodsList.vue')},
    { path: '/member', name: 'member', component: () => import('./views/Member.vue')},    
    { path: '/shopcar',name: 'shopcar',component: () => import('./views/Shopcar.vue')},
    { path: '/search',name: 'search',component: () => import('./views/Search.vue')},
    { path: '/*',redirect: '/home'}
  ]
})