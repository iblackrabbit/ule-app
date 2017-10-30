<template>
	<div class="threebuy">
		<div class="title">
			<a href="javascript:window.history.back();">
				<span class="back"></span>
			</a>
			3人成团
		</div>
		<div class="big-banner">
			<img src="https://i0.ulecdn.com/i/event/2017/0216/group/rl-banner_01.jpg" alt="" />
			<img src="https://i0.ulecdn.com/i/event/2017/0216/group/rl-banner_2.jpg" alt="" />
			<img src="https://i0.ulecdn.com/i/event/2017/0216/group/rl-banner_03.jpg" alt="" />
			<img src="https://i0.ulecdn.com/i/event/2017/0216/group/rl-banner_04.jpg" alt="" />
			<img src="https://i0.ulecdn.com/i/event/2017/0216/group/rl-banner_05.jpg" alt="" />
		</div>
		<div class="showlist">
			<ul>
		<li v-for="list in imglist">
			<img :src="list" alt="" />
		</li>
		</ul>
	</div>
	</div>
	
	
</template>

<script>
	import axios from "axios"
	export default{ 
		data(){
			return{
				buylist:'',
				imglist:[
				'https://pic1.ulecdn.com/item/user_0102/desc20171024/be242588a67d6686_-1x-1.png',
				'https://pic4.ulecdn.com/item/user_0102/desc20171024/b1816b14257ab946_-1x-1.png',
				'https://pic3.ulecdn.com/item/user_0102/desc20171024/3f948e128942dab5_-1x-1.png',
				'https://pic3.ulecdn.com/item/user_0102/desc20171024/90fba7af85d748e5_-1x-1.png',
				'https://pic3.ulecdn.com/item/user_0102/desc20171024/0ae1a8f20ca26f30_-1x-1.png',
				'https://pic4.ulecdn.com/item/user_0102/desc20171024/a7a95be25734340b_-1x-1.png',
				'https://pic2.ulecdn.com/item/user_0102/desc20171024/29e234ca2a7ff241_-1x-1.png',
				'https://pic1.ulecdn.com/item/user_0102/desc20171024/7d7a43a2aa22b6a1_-1x-1.png',
				'https://pic2.ulecdn.com/item/user_0102/desc20171024/b5b94c3355d7d732_-1x-1.png',
				'https://pic2.ulecdn.com/item/user_0102/desc20171024/18eb63b48094b841_-1x-1.png',
				'https://pic3.ulecdn.com/item/user_0102/desc20171019/51489a807f62d2b8_-1x-1.png',
				'https://pic4.ulecdn.com/item/user_0102/desc20171019/7f88f51da712be6d_-1x-1.png'
				]
			}
		},
		mounted(){
			axios.get('search/api/recommend?restype=2002&jsoncallback=Zepto1509086534941&sectionKeys=event_group_bqtg&_=1509086534975')
			.then((res)=>{
		
				console.log(res)
				var buyList = JSON.parse(res.data.substr(19,res.data.length-20))
				this.buylist=buyList.event_group_bqtg;
				console.log(this.buylist)
				
			})
			
		}
	}
</script>

