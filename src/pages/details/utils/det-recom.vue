<template>
<<<<<<< HEAD
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
=======
	<div class="det-recommend" ref="selfshop">
		<p class="self-recom">本店推荐</p>
		<div class="det-warp">
			<div class="det-recom">
				<router-link :to="'/detail/'+value.listId" @click.native="detReturnTop()" v-for="value in simiData">
				<!--<a href="javascript:;" >-->
					<dl>
						<dt><img :src="value.imgUrl"/></dt>
						<dd class="goods-det">{{value.listName}}</dd>
						<dd class="min-price">¥{{value.salePrice}}</dd>
					</dl>
				<!--</a>-->
				</router-link>
>>>>>>> 390559ac863b364701662ba5091b9230e8670aed
			</div>
		</div>
	</div>
</template>

<script>
<<<<<<< HEAD
	// import axiosUtil from '@/utils/axios.utiles.js';
=======
>>>>>>> 390559ac863b364701662ba5091b9230e8670aed
	import Bus from "@/components/Bus.js";
	import axios from 'axios';
	export default {
		props : ["id"],
<<<<<<< HEAD
		data : function(){
			return{
				listid : 0,
=======
		data : function(){			
			return{
>>>>>>> 390559ac863b364701662ba5091b9230e8670aed
				simiData : {}
			}
		},
		methods : {
			ja(res){
				this.simiData = res.listInfo.listInfos;
<<<<<<< HEAD
			}
		},
		mounted(){
			var that = this;
			Bus.$on('storeId',function(msg){
				that.listid = msg;
=======
			},
			detReturnTop(){
				this.$refs.selfshop.parentNode.parentNode.parentNode.scrollTop = 0;
				history.pushState(window.location.hash,null,window.location.hash)
			}
		},
		watch: {
			id: function() {
				var that = this;
>>>>>>> 390559ac863b364701662ba5091b9230e8670aed
				axios({
					url : '/item/searchItems.do',
					method : 'get',
					params : {
						jsonApiCallback : "ja",
<<<<<<< HEAD
						storeId : that.listid,
=======
						storeId : that.id,
>>>>>>> 390559ac863b364701662ba5091b9230e8670aed
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
<<<<<<< HEAD
			});
		},
		updated(){
			
=======
			}
>>>>>>> 390559ac863b364701662ba5091b9230e8670aed
		}
	}
</script>

<style>
</style>