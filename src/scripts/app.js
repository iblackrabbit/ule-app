import "../styles/app.scss";
import Vue from "vue";
import VueRouter from "vue-router";

import index from "./pages/index.vue";

import routes from './routes'
Vue.use(VueRouter);
const router = new VueRouter({
    routes,
    linkActiveClass: 'active'
})

new Vue({
    router,
    components: {
        index
    }
}).$mount('#root');