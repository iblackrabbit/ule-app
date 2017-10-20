//import '../styles/app.scss';
import Vue from "vue/dist/vue.js";

//vue组件
import detailHeader from "./pages/details/headerEntry.vue";

new Vue({
	el : "#details",
	components : {
		"detailHeader" : detailHeader
	}
})
