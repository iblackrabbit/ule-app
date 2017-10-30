<template>
	<div class="a">
		<top-search-bar></top-search-bar>
		<classifical-detail></classifical-detail>
		
	</div>
</template>

<script>
	import topSearchBar from './top-search-bar.vue';
	import classificalDetail from './classifical-details.vue';
	export default{
		components:{
		topSearchBar,
		classificalDetail
	}
}
	
	
</script>
<style type="scss">
	.a{
			height: 100%;
			width: 100%;
			  @include flexbox();
              @include justify-content(center);
              @include align-items(center);
              @include flex-direction(column);
		.classifical-details{
			@include flex();
		}
	}
</style>
