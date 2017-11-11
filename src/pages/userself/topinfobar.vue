<template>
	 <div class="top-info-setting">
	<div class="mine-tabbar-top">
    <span>
    	<i></i>
    	<b>设置</b>
    </span>
    <span>
      	<i></i>
      	<b>站内信</b>
    </span>
  </div>
  <div class="user-photo-setting">
		<div class="photo-num">
			<div class="user-photo" @click="gotoLogin">
				<img src="https://my.ule.com/myid/images/default_default_48X48.gif">
			</div>
			<div class="user-phoneNumber">
				12345678900
			</div>
		</div>
		<div class="user-info-detail">
			<span>个人资料</span>
		</div>
  </div>
</div>
</template>

<script>
export default {
	data(){
		return {

		}
	},
	mounted(){

	},
	methods : {
		gotoLogin (){
			this.$router.push('/')
		}
	}
}
</script>

