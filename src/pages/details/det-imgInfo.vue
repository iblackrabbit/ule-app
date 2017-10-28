<template lang="html">
	<div class="det-banner">
        <mt-swipe :auto="4000" class="det-ulImg">
            <mt-swipe-item v-for="(value,index) in imgData">
            	<a href="javascript:;">
					<img :src="value.imgUrl" />
				</a>
            </mt-swipe-item>
        </mt-swipe>
		<p class="mark">{{id}}</p>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Swipe,SwipeItem } from "mint-ui";
	
	Vue.component(Swipe.name,Swipe);
	Vue.component(SwipeItem.name,SwipeItem);
	
	export default{
		props : ['id'],
		data : function(){
			return {
				imgData : this.id
			}
		},
		methods : {  //单击事件等
		},
		computed : {
			
		},
		components : {
			
		},
		mounted(){
			
		},
		updated(){
			this.imgData = this.id.itemInfo[0].image;
		}
	}
</script>