<template>
	<div class="det-recommend">
		<p class="self-recom">本店推荐</p>
		<div class="det-warp">
			<div class="det-recom">
				<a href="javascript:;" v-for="value in simiData">
					<dl>
						<dt><img :src="value.imgUrl"/></dt>
						<dd class="goods-det">{{value.listName}}</dd>
						<dd class="min-price">¥{{value.salePrice}}{{listid}}</dd>
					</dl>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	// import axiosUtil from '@/utils/axios.utiles.js';
	import Bus from "@/components/Bus.js";
	import axios from 'axios';
	export default {
		props : ["id"],
		data : function(){
			return{
				listid : 0,
				simiData : {}
			}
		},
		methods : {
			ja(res){
				this.simiData = res.listInfo.listInfos;
			}
		},
		mounted(){
			var that = this;
			Bus.$on('storeId',function(msg){
				that.listid = msg;
				axios({
					url : '/item/searchItems.do',
					method : 'get',
					params : {
						jsonApiCallback : "ja",
						storeId : that.listid,
						sort : "2",
						start : "1",
						end : "6",
						appkey : "4b9f40822ddd5cd5",
						version_no : "apr_2010_build01",
						_ : "1505956667555"
					}
				}).then((res)=>{
					eval("that." + res.data);
				})
			});
		},
		updated(){
			
		}
	}
</script>

<style>
</style>