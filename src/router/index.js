import Vue from 'vue'
import Router from 'vue-router'

import index from '../pages/index.vue'
import position from '../pages/index/position.vue'
import cart from '../pages/cart/cart.vue'
import dynamic from '../pages/dynamic/dynamic.vue'
import mine from '../pages/mine.vue'
import category from '../pages/category.vue'
import detail from '../pages/details/det-headerEntry.vue'

Vue.use(Router);

export default new Router({
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
          path: '/mine',
          component: mine
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

