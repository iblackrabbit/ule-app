<template>
	<div class="good-lists">
		<!--{{this.$route.params.val}}-->
		<div class="header">
			<div class="top">
				<i class="iconfont sear-back">&#xe679;</i>
				<div class="search-input">
					<i class="iconfont" @click="sendData()">&#xe65c;</i>
					<form action="">
						<input @keyup.enter="sendData()" type="text" v-model="valu" />
					</form>
				</div>
				<i class="iconfont sear-column">&#xe682;</i>
				<!--<i class="iconfont">&#xe67c;</i>-->
			</div>
			<div class="sort">
				<ul class="sort-rule">
					<li :class="{active:0 == nowI}" @click="allSort(0)">综合</li>
					<li :class="{active:1 == nowI}" @click="saleSort(1)">销量</li>
					<li :class="{active:2 == nowI}" @click="priceSort(2)">价格</li>
					<li :class="{active:3 == nowI}" @click="allSort(3)">筛选</li>
				</ul>
			</div>
		</div>
		<div class="cont-list" v-if="dataload">
			<mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
				<ul>
					<router-link :to="'/detail/'+item.listingId" v-for="item in dataList" :key=1 tag="li">
						<a href="javascript:;"><img :src="item.imgUrl"/></a>
						<p class="title" v-html="item.listingName"></p>
						<p class="free-send">包邮</p>
						<p class="price">￥{{item.minPrice}}</p>
					</router-link>
				</ul>
			</mt-loadmore>
			<p class="overload" v-if="overload">~我们是有底线的~</p>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import Vue from 'vue';
	import { Loadmore } from 'mint-ui';

	Vue.component(Loadmore.name, Loadmore);
	
	export default{
		data(){
			return {
				valu : this.$route.params.val,
				dataList : [],
				allLoaded :false,
				autoFill : true,
				priceLtoH : false,
				isActive:true,
				dataload:false,
				nowI : 0,
				pageNum : 1,
				overload : false
			}
		},
		mounted(){
			this.requestData();
		},
		methods : {
			requestData(){
				var that = this;
				axios({
					url : '/cat/ajax.html',
					method : "get",
					params : {
						sort : 1,
						pageIndex : that.pageNum,
						keyword : that.valu,
						appkey : "4b9f40822ddd5cd5",
						version_no : "apr_2010_build01"
					}
				}).then((res)=>{
					that.dataload =true;
					if(!res.data.resultList){
						that.allLoaded = true;
						that.overload = true;
					}else{
						that.dataList = that.dataList.concat(res.data.resultList);
						that.pageNum++;
					}
				})
			},
			sendData(){
				var that = this;
				axios({
					url : '/cat/ajax.html',
					method : "get",
					params : {
						sort : 1,
						pageIndex : 1,
						keyword : that.valu,
						appkey : "4b9f40822ddd5cd5",
						version_no : "apr_2010_build01"
					}
				}).then((res)=>{
					this.dataList = res.data.resultList;
				})
			},
			loadBottom(){
				var that = this;
				this.requestData();
				this.$refs.loadmore.onBottomLoaded();
			},
			changeActive(val){
				this.nowI = val;
			},
			allSort(val){
				this.changeActive(val);
			},
			saleSort(val){
				this.changeActive(val);
			},
			priceSort(val){
				this.changeActive(val);
				this.priceLtoH = !this.priceLtoH;
				var that = this;
				this.dataList.sort(function(a,b){
					if(that.priceLtoH){
						return b.minPrice-a.minPrice;
					}else{
						return a.minPrice-b.minPrice;
					}
				})	
			}			
		}
	}
</script>