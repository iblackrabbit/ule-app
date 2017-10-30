<template>
	<div class="hotlist">
		<div class="topshow">
			<a href="javascript:window.history.back();">
				<span class="back"></span>
			</a>
			<div class="searchbar">
				<input type="text" placeholder="搜索店内商品" />
			</div>
			<div class="star">
				<img src="https://i3.ulecdn.com/ulewap/i/store_logo.png" alt="" class="shopicon"/>
				<div class="shopname">
					<h4>
						{{hotlist.brandInfos[0].brandName}}
					</h4>
					<img src="https://i3.ulecdn.com/ulewap/i/store_star_yellow.png" alt="" class="starpic"/>
				</div>
				<div class="store">
					收藏
				</div>
			</div>
			<div class="description">
				<ul>
					<li>描述相符：4.9</li>
					<li>服务态度：5.0</li>
					<li>发货速度：5.0</li>
				</ul>
			</div>
		</div>
		<div class="shoplists">
		<ul>
			<li v-for="item in hotlist.listInfos">
				<img :src="item.imgUrl" alt="" />
				<p class="price">
					<span class="new">¥{{item.salePrice}}</span>
					<span class="old">¥{{item.marketPrice}}</span>
				</p>
				<p class="title">
					{{item.listName}}
				</p>
			</li>
		</ul>
	</div>
	</div>
	
</template>

<script>
	import axios from "axios";
	export default{
		
		data(){
			return{
				hotlist:''
			}
		},
		mounted(){
			axios.get('service/api/item/searchItems.do?jsonApiCallback=jsonp2&storeId=9294&sort=9&start=1&end=10&appkey=4b9f40822ddd5cd5&version_no=apr_2010_build01&_=1509284534366')
			.then((res)=>{	
				var hotList = JSON.parse(res.data.substr(7,res.data.length-8))
				this.hotlist=hotList.listInfo
				console.log(this.hotlist)
				console.log(this.hotlist.brandInfos)
				})
	
}
	}
</script>

