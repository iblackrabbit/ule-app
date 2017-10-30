<template>
	 <div class="top-info-setting">
	<div class="mine-tabbar-top">
    <span>
    	<img src="../../assets/images/1_03.png" alt="" />
    	<b>设置</b>
    </span>
    <span>
      	<img src="../../assets/images/1_05.png" alt="" />
      	<b>站内信</b>
    </span>
  </div>
  <div class="user-photo-setting">
		<div class="photo-num">
			<div class="user-photo">
				<img src="https://my.ule.com/myid/images/default_default_48X48.gif">
			</div>
			<div class="user-phoneNumber">
				{{username}}
			</div>
		</div>
		<div class="user-info-detail">
			<span>个人资料</span>
		</div>
  </div>
</div>
</template>

<script>
	export default{
		data(){
			return{
				username:'请登录'
			}
		},
		mounted(){
			this.username=this.$store.state.usernameInfo
		}
	}
</script>

