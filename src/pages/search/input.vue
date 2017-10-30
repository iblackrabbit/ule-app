<template>
	<div class="search-entry">
		<div class="close">
			<i class="iconfont" @click="returnIndex()">&#xe646;</i>
		</div>
		<div class="search-input">
			<i class="iconfont sear">&#xe65c;</i>
			<form action="">
				<input autofocus="autofocus" type="text" @keyup.enter="toList()" v-model="val" id="search-inp" placeholder="因为搜  所以搜"/>
			</form>
			<!--<router-link :to="'/searchlist/'+val" tag="span" class="search-btn">搜索</router-link>-->
			<router-link :to="{path:'/searchlist',query:{name:val}}" tag="span" class="search-btn">搜索</router-link>
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
		},
		methods : {
			//返回上级页面
			returnIndex(){
				this.$router.go(-2);
			},
			toList(){
				console.log(12344);
				this.$router.push({path:'/searchlist/',query:{name : this.val}});
			}
		}
	}
</script>