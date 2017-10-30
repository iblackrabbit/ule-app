import axios from 'axios';

export default function axiosUtil(obj,url,params,data,fn){
	obj.j = function(res){
		obj[data] = res;
	}
	axios({
		url : url,
		method : 'get',
		params : params
	}).then((res)=>{
		eval('obj.' + res.data);
		fn && fn();
	})	
}
