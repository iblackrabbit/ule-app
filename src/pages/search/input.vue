<template>
	<div class="search-entry">
		<div class="close">
			<i class="iconfont" @click="returnIndex()">&#xe646;</i>
		</div>
		<div class="search-input">
			<i class="iconfont sear">&#xe65c;</i>
			<form action="">
				<input type="text" v-model="val" id="search-inp" placeholder="因为搜  所以搜" @keyup.enter="jump()"/>
			</form>
			<router-link :to="'/searchlist/'+val" tag="span" class="search-btn">搜索</router-link>
			<!--<router-link :to="{path:'/searchlist',query:{name:val}}" tag="span" class="search-btn">搜索</router-link>-->
			<i class="iconfont close-se" v-if="isClose">&#xe646;</i>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				isClose : false,
				val : ''
			}
		},
		watch : {
			'val' : function(){
//				console.log(this.val);
			}
		},
		methods : {
			//返回上级页面
			returnIndex(){
				history.back();
			},
			jump(){

			}
		}
	}
</script>