import index from './pages/index.vue'
import position from './pages/position.vue'
import cart from './pages/cart/cart.vue'
import dynamic from './pages/dynamic/dynamic.vue'
import mine from './pages/mine.vue'
import category from './pages/category.vue'

export default [
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
]
