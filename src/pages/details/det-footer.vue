<template lang="html">
	<div class="footer-addCart">
		<ul class="footer-info">
			<li>
				<i class="iconfont">&#xe73f;</i>
				<span>客服</span>
			</li>
			<li @click="changeText()" :class="{likeactive:isActive}">
				<i class="iconfont" v-html="likeText"></i>
				<span>{{collect}}</span>
			</li>
			<li>
				<i class="iconfont">&#xe6af;</i>
				<span>购物车</span>
			</li>
		</ul>
		<span class="addCart">加入购物车</span>
		<span class="gotoBuy">立即购买</span>
	</div>
</template>

<script>
	export default{
		data : function(){
			return {
				isActive : false,
				likeText : '&#xe669;',
				collect : '收藏'
			}
		},
		methods : {  //单击事件等
			changeText(){
				this.isActive = !this.isActive;
				if(this.isActive){
					this.likeText = '&#xe668;';
					this.collect = '已收藏';
				}else{
					this.likeText = '&#xe669;';
					this.collect = '收藏';
				}
			}
		},
		computed : {
		},
		components : {
//			Position : position
		}
	}
</script>