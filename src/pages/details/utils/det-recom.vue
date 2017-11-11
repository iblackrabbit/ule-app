<template>
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
			</div>
		</div>
	</div>
</template>

<script>
	import Bus from "@/components/Bus.js";
	import axios from 'axios';
	export default {
		props : ["id"],
		data : function(){			
			return{
				simiData : {}
			}
		},
		methods : {
			ja(res){
				this.simiData = res.listInfo.listInfos;
			},
			detReturnTop(){
				this.$refs.selfshop.parentNode.parentNode.parentNode.scrollTop = 0;
				history.pushState(window.location.hash,null,window.location.hash)
			}
		},
		watch: {
			id: function() {
				var that = this;
				axios({
					url : '/item/searchItems.do',
					method : 'get',
					params : {
						jsonApiCallback : "ja",
						storeId : that.id,
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
			}
		}
	}
</script>

<style>
</style>