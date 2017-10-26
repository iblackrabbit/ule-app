import Vue from 'vue'
import Router from 'vue-router'

import index from '../pages/index.vue'
import position from '../pages/index/position.vue'
import cart from '../pages/cart/cart.vue'
import dynamic from '../pages/dynamic/dynamic.vue'
// import mine from '../pages/mine.vue'
import userself from '../pages/userself/myUle.vue'
import category from '../pages/category.vue'
import detail from '../pages/details/det-headerEntry.vue'

Vue.use(Router);

export default new Router({
  linkActiveClass:"active",
  routes: [
    {
      path: '/',
      component: index,
      redirect: '/position',
      children: [
        {
          path: '/position',
          component: position
        },
        {
          path: '/cart',
          component: cart
        },
        {
          path: '/dynamic',
          component: dynamic
        },
        {
          path: '/userself',
          component: userself
        },
        {
          path: '/category',
          component: category
        }
      ]
    }
     ,
    {
      path: '/detail/:id',
      component: detail,
      name: 'detail'
    }
  ]
})
