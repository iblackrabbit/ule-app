Vue.config.productionTip = false;
import "./styles/app.scss";
import Vue from "vue";
import VueRouter from "vue-router";
import router from './router/'
import index from "./pages/index.vue";
import "mint-ui/lib/style.css";
// import React, { Component } from 'react';
// import { SwipeMenu } from '$yo-component';
// import SwipeMenu from './styles/yo/usage/component/swipemenu';
// import SwipeMenu from './styles/yo/lib/component/swipemenu';


new Vue({
    router
}).$mount('#app');