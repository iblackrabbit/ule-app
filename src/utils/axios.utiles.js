import axios from 'axios';

export default function axiosUtil(obj,url,params,data){
	obj.j = function(res){
		obj[data] = res;
	}
	axios({
		url : url,
		method : 'get',
		params : params
	}).then((res)=>{
		eval('obj.' + res.data);
	})	
}
