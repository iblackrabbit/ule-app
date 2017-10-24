Vue.config.productionTip = false
import "./styles/app.scss";
import Vue from "vue";
import VueRouter from "vue-router";
import router from './router/'
import index from "./pages/index.vue";



new Vue({
    router
}).$mount('#app');