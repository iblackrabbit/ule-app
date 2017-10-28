
const state = {
	detImgScrollT : 0,
	popup : false
}

const actions = {
	
}

const mutations = {
	changeVal(state,{heightValue}){
		state.detImgScrollT = heightValue;
	},
	//改变footer中的popup状态
	changeState(state,{stateVal}){
		state.popup = stateVal;
	}
}

export default {
	state,
	actions,
	mutations
}
