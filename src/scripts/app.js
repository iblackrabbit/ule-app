
import Vue from "vue/dist/vue.js";

import Index from './pages/index/index.vue';

import "../styles/app.scss";


import 'mint-ui/lib/style.css';

new Vue({
  el: '#root',
  components: {
    Index: Index
  }
})
