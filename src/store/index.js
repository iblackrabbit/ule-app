import Vue from 'vue';

import Vuex from 'vuex';

Vue.use(Vuex);

import scrollTop from './modules/detScrolltop';

const store = new Vuex.Store({
	state : {
		cartInfo : {}
	},
	modules : {
		scrollTop
	},
	actions : {
		
	},
	mutations : {
		getCartInfo(state,{cartIn}){
			this.state.cartInfo = cartIn;
//			console.log(this.state.cartInfo);
		}
	}
})

export default store;
