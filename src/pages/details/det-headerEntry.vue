<template lang="html">
	<div class="details">
		<header>
			<span class="back"><i class="iconfont">&#xe7ed;</i></span>
			<h4 class="active">商品</h4>
			<h4>详情</h4>
			<span class="share"><i class="iconfont">&#xe7ee;</i></span>
		</header>
		<section>
			<div class="detail-img">
				<detail-img :id="dataList" />
				<detail-info :id="dataList"></detail-info>
			</div>
		</section>
		<footer>
			<detail-footer />
		</footer>
	</div>
</template>

<script>
	import Footer from "./det-footer.vue";
	import detImg from "./det-imgInfo.vue";
	import detInfo from "./det-keyInfo.vue";
	import axios from 'axios';

	export default{
		data : function(){
			return {
				dataList : []
			}
		},
		methods : {  //单击事件等
			j(res){
				this.dataList = res;
			}
		},
		components : {
			detailFooter : Footer,
			detailImg : detImg,
			detailInfo : detInfo
		},
		mounted(){
			axios({
				url : 'item/searchItemsByListId.do',
				method : 'get',
				params : {
					jsonApiCallback : "j",
//					listId : "3006843",  //黄桃
					listId : "912051",  
					appkey : "4b9f40822ddd5cd5",
					version_no : "apr_2010_build01",
					_ : "1506153953037"
				}
				
			}).then((res)=>{
				//this.dataList = JSON.parse(res.data.substr(2,res.data.length-3));
				eval('this.' + res.data);
			})
		}
	}
</script>