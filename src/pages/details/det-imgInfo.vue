<template lang="html">
	<div class="det-banner">
		<!--<div class="swipe-wrapper">
	        <mt-swipe :auto="0" ref="swipeWrapper">
	            <mt-swipe-item class="swip-item-1 item">1</mt-swipe-item>
	            <mt-swipe-item class="swip-item-2 item">2</mt-swipe-item>
	            <mt-swipe-item class="swip-item-3 item">3</mt-swipe-item>
	        </mt-swipe>
	    </div>
	    <div class="button-wrapper">
	        <button class="prev-button flex-item" >prev</button>
	        <button class="next-button flex-item" >next</button>
	    </div>-->
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
	import Vue from 'vue';
	import MintUi from "mint-ui";
	
	Vue.use(MintUi);
	
	export default{
		props : ['id'],
		data : function(){
			return {
				imgData : this.id
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
			console.log(123);  //执行两次？？
		}
	}
</script>