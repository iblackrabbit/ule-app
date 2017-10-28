<template>
	<div class="good-lists">
		<div class="header">
			<shop></shop>
		</div>
		<div class="cont-list">
			<mt-loadmore :bottom-method="loadBottom">
				<ul>
					<router-link :to="'/detail/'+item.listId" v-for="item in storeData" :key=1 tag="li">
						<img :src="item.imgUrl"/>
						<p class="title" v-html="item.listName"></p>
						<p class="free-send">包邮</p>
						<p class="price">￥{{item.salePrice}}</p>
					</router-link>
				</ul>
			</mt-loadmore>
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
				storeData : {}
			}
		},
		methods : {
			loadBottom(){
				
			}
		},
		mounted(){
			axiosUtil(this,'/api/item/searchItems.do',{
				jsonApiCallback:'j',
				storeId:this.$route.params.store,
				sort:9,
				start:11,
				end:20,
				appkey:'4b9f40822ddd5cd5',
				version_no:'apr_2010_build01',
				_:1509143134007
			},'storeData');
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