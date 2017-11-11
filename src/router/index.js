import Vue from 'vue'
import Router from 'vue-router'

import index from '../pages/index.vue'
import position from '../pages/index/position.vue'
import cart from '../pages/cart/cart.vue'
import dynamic from '../pages/dynamic/dynamic.vue'
// import mine from '../pages/mine.vue'
import userself from '../pages/userself/myUle.vue'
import detail from '../pages/details/det-headerEntry.vue'
import shop from '../pages/details/shop.vue';
import buy from '../pages/details/sure-to-buy.vue';

//search
import search from '../pages/search/input.vue'
import searchlist from '../pages/search/searchList.vue'
//category
import threebuy from '../pages/category/shoplist/threebuy'
import hotlist from '../pages/category/shoplist/hot-list'
import hotlist2 from '../pages/category/shoplist/hot-list2'
import myticket from '../pages/userself/ticketCenter/myticket'
import shopticket from '../pages/userself/ticketCenter/shopticket'
import category from '../pages/category/category.vue'
import login from '../pages/login/login.vue'

Vue.use(Router);

export default new Router({
  linkActiveClass: "active",
  routes: [{
      path: '/',
      component: index,
      redirect: '/position',
      children: [{
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
    },
    {
      path: '/login',
      component: login,
      name: 'login'
    },
    {
      path: '/detail/:id',
      component: detail,
      name: 'detail'
    },
    {
      path: '/search',
      component: search,
      name: 'search'
    },
    {
      path: '/searchlist',
      component: searchlist,
      name: 'searchlist'
    },
    {
      path: '/shop',
      component: shop,
      name: 'shop'
    },
    {
      path: '/threebuy',
      component: threebuy
    },

    {
      path: '/hotlist',
      component: hotlist
    },
    {
      path: '/hotlist2',
      component: hotlist2
    },
    {
      path: '/shopticket',
      component: shopticket
    },
    {
      path: '/category',
      component: category,
    },
    {
      path: '/myticket',
      component: myticket
    },
    {
      path: '/buy',
    	component:buy,
    	name:'buy'
    }
  ]
})
