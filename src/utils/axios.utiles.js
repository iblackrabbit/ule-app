import axios from 'axios';

<<<<<<< HEAD
export default function axiosUtil(obj,url,params,data){
=======
export default function axiosUtil(obj,url,params,data,bool){
>>>>>>> 390559ac863b364701662ba5091b9230e8670aed
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
