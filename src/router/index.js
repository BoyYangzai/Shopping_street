import Vue from 'vue'
import VueRouter from 'vue-router'
import shouye from '../views/tabbar/shouye.vue'
import category from '../views/tabbar/category.vue'
import shopcar from '../views/tabbar/shopcar.vue'
import profile from '../views/tabbar/profile.vue'
import goodsitem from '../views/goodsitem/goodsitem.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/shouye'
  },
  {
    path: '/shouye',
    component: shouye
  },
  {
    path: '/category',
    component: category
  },
    {
    path: '/shopcar',
      component: shopcar
    },
      {
    path: '/profile',
        component: profile
  },
  {
    path: '/goodsitem/:id',
    component: goodsitem,

      }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
