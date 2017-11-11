<template>
	<div class="det-gotoshop">
		<div class="det-shop-img">
			<img src="http://static.ule.com/mstore/user_800115987/store_9999/images/20161214/5a25757eb85d443e.png"/>
		</div>
		<div class="det-shop-mid">
			<p class="shop-name">{{id}}
				<span class="goto-shop">进入店铺</span>
			</p>
			<p class="shop-level"><i class="iconfont">&#xe64b;&#xe64b;&#xe64b;&#xe64b;&#xe64b;</i></p>
		</div>
	</div>
</template>

<script>
	export default{
		props : ['id'],
		data : function(){
			return {
				
			}
		}
	}
</script>