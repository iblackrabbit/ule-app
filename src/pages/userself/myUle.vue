<template>
<div class="myUle">
	<!--<HelloWorld>
			<router-view></router-view>
	</HelloWorld>-->
	<header>
		<top-info-bar></top-info-bar>
		<orderlist></orderlist>
	</header>
	<center>
		<my-pocket></my-pocket>
		<icon-list></icon-list>
		<div class="fill-blank"></div>
		<div class="footer"></div>
	</center>

</div>
</template>

<script>
	
	import VueRouter from 'vue-router';
	import topInfoBar from './topinfobar.vue';
	import orderlist from './orderlist.vue';
	import myPocket from './my-pocket';
	import iconList from './icon-list';
	export default{
	components:{
		topInfoBar,
		orderlist,
		myPocket,
		iconList
	}
}
	
</script>
