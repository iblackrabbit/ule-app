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
	export default {
		props : ["id"],
		data : function(){
			return{
//				listid : this.id,
				listid : 7687,
				simiData : {}
			}
		},
		methods : {
			j(res){
				this.simiData = res.listInfo.listInfos;
				console.log(res);
			}
		},
		mounted(){
			console.log(this.listid);
			var that = this;
			axios({
				url : '/item/searchItems.do',
				method : 'get',
				params : {
					jsonApiCallback : "j",
					storeId : that.listid,
					sort : "2",
					start : "1",
					end : "5",
					appkey : "4b9f40822ddd5cd5",
					version_no : "apr_2010_build01",
					_ : "1505956667555"
					
				}
			}).then((res)=>{
				eval("this." + res.data);
			})
		},
		updated(){
			
		}
	}
</script>

<style>
</style>