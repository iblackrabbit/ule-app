<template lang="html">
	<div class="details">
		<header>
			<span class="back" @click="go()"><i class="iconfont">&#xe7ed;</i></span>
			<h4 @click="jumpDetail()" :class="{active : isActive}">商品</h4>
			<h4 @click="jumpDetail()" :class="{active : !isActive}">详情</h4>
			<span class="share"><i class="iconfont">&#xe7ee;</i></span>
		</header>
		<transition name="slide-fade">
			<section ref="detSection">
				<div class="detail-img">
					<detail-img :id="dataList" />
					<detail-info :id="dataList" :listid="listId"></detail-info>
				</div>
			</section>
		</transition>
		<footer>
			<detail-footer :id="dataList" />
		</footer>
	</div>
</template>

<script>
	import Footer from "./det-footer.vue";
	import detImg from "./det-imgInfo.vue";
	import detInfo from "./det-keyInfo.vue";
	import axios from 'axios';
	import axiosUtil from '@/utils/axios.utiles.js';
	import Bus from "@/components/Bus.js";
	import { Indicator } from 'mint-ui';
	

	export default{
		data : function(){
			return {
				dataList : {},
				listId : this.$route.params.id,
				storeId : 0,
				isActive : true
			}
		},
		methods : {
			changePage(){
				var that = this;
				axiosUtil(this,'item/searchItemsByListId.do',{
					jsonApiCallback : "j",
					listId : that.listId,
					appkey : "4b9f40822ddd5cd5",
					version_no : "apr_2010_build01",
					_ : "1506153953037"
				},'dataList');
			},
			jumpDetail(){
				this.isActive = !this.isActive;
				if(this.isActive){
					this.$refs.detSection.scrollTop = 0;
				}else{
					this.$refs.detSection.scrollTop = 130 + this.$store.state.scrollTop.detImgScrollT;
				}
			},
			//返回上一级页面
			go(){
//				this.$route.back(-1);
				history.back();
				window.addEventListener('popstate',function(res){
					console.log('change');
//					console.log(location.href.split('?')[0]);
//					history.pushState(null,document.title,location.href.hash);
				},false)
			}
		},
		components : {
			detailFooter : Footer,
			detailImg : detImg,
			detailInfo : detInfo
		},
		watch : {
			'$route' : function(){
				this.listId = this.$route.params.id;
				this.changePage();
			}
		},
		mounted(){
//			console.log(this.$refs.detSection);
			var that = this;
			this.changePage();
		},
		updated(){
			
		}
	}
</script>