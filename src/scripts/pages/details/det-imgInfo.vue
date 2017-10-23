<template lang="html">
	<div class="det-banner">
		<ul class="det-ulImg" ref="ulul">
			<li v-for="(value,index) in imgData">
				<a href="javascript:;">
					<img :src="value.imgUrl" />
				</a>
			</li>
		</ul>
		<p class="mark">{{id}}</p>
	</div>
</template>

<script>
	export default{
		props : ['id'],
		data : function(){
			return {
				imgData : [{imgUrl:"https://pic.ule.com/m/pic/user_800130647/product/prd20170912/09b70c38add795ab_p640x640_xl.jpg"}]
			}
		},
		methods : {  //单击事件等
			calcUlWidth (length){
				this.$refs.ulul.style.width = (length * 100) +"%";
				for(var i=0;i<this.$refs.ulul.children.length;i++){
					this.$refs.ulul.children[i].style.width = (100 / length) +"%"
				}
			}
		},
		computed : {
			
		},
		components : {
			
		},
		mounted(){
			
		},
		updated(){
			this.imgData = this.id.itemInfo[0].image;
			this.calcUlWidth(this.imgData.length);
		}
	}
</script>