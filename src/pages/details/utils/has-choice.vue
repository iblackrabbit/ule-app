<template>
	<div class="det-has-choice det-common">
<<<<<<< HEAD
		<span class="det-common-text">送至</span>
		<p class="det-count det-common-cen">
			425g*3 1件
		</p>
		<span class="det-dotted"><i class="iconfont">&#xe684;</i></span>
	</div>
</template>
<script type="text/javascript">
	
=======
		<span class="det-common-text">已选</span>
		<p class="det-count det-common-cen">
			425g*3 1件
		</p>
		<span class="det-dotted" @click="seeNum()"><i class="iconfont">&#xe684;</i></span>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				
			}
		},
		methods : {
			seeNum(){
				this.$store.commit({
					type : 'changeState',
					stateVal : true
				});
//				console.log(this.$store.state.scrollTop.popup);
			}
		}
	}
>>>>>>> 390559ac863b364701662ba5091b9230e8670aed
</script>