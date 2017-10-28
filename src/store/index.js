import Vue from 'vue';

import Vuex from 'vuex';

Vue.use(Vuex);

import scrollTop from './modules/detScrolltop';

const store = new Vuex.Store({
	state : {
		cartInfo : []
	},
	modules : {
		scrollTop
	},
	actions : {
		
	},
	mutations : {
		getCartInfo(state,{cartIn}){
			var newArr = this.state.cartInfo.filter(function(value,index){
				return value.id === cartIn.id;
			});
			if(newArr.length){
				newArr[0].count += cartIn.count;
			}else{
				this.state.cartInfo.push(cartIn);
			}
			console.log(this.state.cartInfo)
		}
	}
})

export default store;
