import Vue from "vue/dist/vue.js";
import VueRouter from 'vue-router';

import "../media/iconfont/iconfont.ttf";
import "../media/iconfont/iconfont.woff";

import 'mint-ui/lib/style.css';

import "../styles/app.scss";

Vue.use(VueRouter);
//vue组件
import detailHeader from "./pages/details/det-headerEntry.vue";

new Vue({
	components : {
		"detailHeader" : detailHeader
	}
}).$mount('#details');
