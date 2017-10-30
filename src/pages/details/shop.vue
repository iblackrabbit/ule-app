<template>
	<div class="good-lists">
		<div class="shopdetails">
			<div class="det-gotoshop">
				<div class="det-shop-img">
					<img src="http://static.ule.com/mstore/user_800115987/store_9999/images/20161214/5a25757eb85d443e.png"/>
				</div>
				<div class="det-shop-mid">
					<p class="shop-name">
						{{this.$route.query.storename}}
						<span class="goto-shop">收藏</span>
					</p>
					<p class="shop-level"><i class="iconfont">&#xe64b;&#xe64b;&#xe64b;&#xe64b;&#xe64b;</i></p>
				</div>
			</div>
			<p class="score">
				<span>描述相符:5.0</span>
				<span>服务态度:5.0</span>
				<span>发货速度:5.0</span>
			</p>
		</div>
		<div class="cont-list" v-if="isLoad">
			<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
				<ul>
					<router-link :to="'/detail/'+item.listId" v-for="item in storeData" :key=1 tag="li">
						<img :src="item.imgUrl"/>
						<p class="title" v-html="item.listName"></p>
						<p class="free-send">包邮</p>
						<p class="price">￥{{item.salePrice}}</p>
					</router-link>
				</ul>
			</mt-loadmore>
			<p class="overload" v-if="overshow">~我们是有底线的~</p>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import Vue from 'vue';
	import { Loadmore } from 'mint-ui';
	
	import shop from './utils/goto-shop.vue';

	Vue.component(Loadmore.name, Loadmore);
	import axiosUtil from '../../utils/axios.utiles.js';
	export default{
		data(){
			return {
				storeData : {},
				allLoaded : false,
				isLoad : false,
				pageNum : 1,
				overshow : false
			}
		},
		methods : {
			ja (res){
				if(!res.listInfo){
					this.allLoaded = true;
					this.overshow = true;
					this.$refs.loadmore.onBottomLoaded();
				}else{
					this.storeData = this.storeData.concat(res.listInfo.listInfos);
					console.log(this.storeData);
				}
			},
			loadBottom(){
				var that = this;
				that.pageNum++;
				axios({
					url : '/api/item/searchItems.do',
					method : 'get',
					params : {
						jsonApiCallback:'ja',
						storeId:that.$route.query.storeid,
						sort:9,
						start:(that.pageNum-1)*10+1,
						end:that.pageNum*10,
						appkey:'4b9f40822ddd5cd5',
						version_no:'apr_2010_build01',
						_:1509143134007
					}
				}).then((res)=>{
					eval('that.'+res.data);
				})
			},
			loadTop(){
				console.log('top');
				this.$refs.loadmore.onTopLoaded();
			}
		},
		mounted(){
			var that = this;
			axiosUtil(that,'/api/item/searchItems.do',{
				jsonApiCallback:'j',
				storeId:that.$route.query.storeid,
				sort:9,
				start:1,
				end:10,
				appkey:'4b9f40822ddd5cd5',
				version_no:'apr_2010_build01',
				_:1509143134007
			},'storeData',function(){
				that.isLoad = true;
			});
		},
		watch:{
			'storeData' : function(){
				if(this.storeData.listInfo){
					this.storeData = this.storeData.listInfo.listInfos;
				}
			}
		},
		components : {
			shop
		}
	}
</script>

<style>
</style>