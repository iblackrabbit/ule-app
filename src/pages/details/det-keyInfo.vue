<template lang="html">
	<div class="det-keyinfo" dataTie = "ab">
		<!--商品标题信息和价格-->
		<div class="det-topinfo">
			<p class="det-title">
				<span class="det-item" v-show="isShowFree">包邮</span>
				{{dataList.listName}}
			</p>
			<p class="det-message" v-show="isShowListSubTitle">{{dataList.listingSubTitle}}</p>
			<p class="det-max-price"><span>¥{{itemInfo.marketPrice}}</span><i class="iconfont">&#xe691;</i></p>
			<p class="det-min-price"><span>¥{{itemInfo.salePrice}}</span><strong>已优惠{{calcReducePri}}元</strong></p>
			<!--商品售后服务信息-->
			<div class="det-serve-info">
				<span class="det-serve">服务</span>
				<p class="det-after-sales">
					由
					<span>{{dataList.merchantName}}</span>
					配送并提供售后服务。商品价格与库存最终以实际下单支付为准。本商品由邮乐网入驻商家提供。
				</p>
			</div>
		</div>
		
		<!--已选择*件  独立组件-->
		<has-choice></has-choice>
		
		<!--配送至地点  独立组件-->
		<send-to></send-to>
		
		<!--支付方式-->
		<p class="det-payfor" :title="surePayFor">
			<span v-for="value in payment">
				<i class="iconfont">&#xe657;</i>{{value}}
			</span>
		</p>
		
		<!--商品评价-->
		<div class="det-appraise" v-if="evaluateData.returnMessage == '操作成功'">
			<p class="det-appr-title">
				<span class="fl">商品评价(<i>{{evaluateData.totalCount}}</i>)</span>
				<span class="fr">查看全部评价<i class="iconfont">&#xe6a3;</i></span>
			</p>
			<ul class="det-commit">
				<li v-for="value in evaluateData.commentInfo">
					<div class="det-star">
						<p class="det-pict fl">
							<img src="//my.ule.com/myid/images/default_48X48.gif"/>
							<span>{{value.usrName}}</span>
						</p>
						<p class="det-nice-star fr"><i class="iconfont" v-for="i in iconNum(value.productQuality)">&#xe64b;</i></p>
					</div>
					<p class="det-text">{{value.commentContent}}</p>
				</li>
			</ul>
		</div>
		
		<!--店铺信息  组件-->
		<goto-shop></goto-shop>
		
		<!--本店商品推荐-->
		<recommend :id="recomData"></recommend>
		
		<!--拖拽查看详情-->
		<div class="det-drag">
			<p>拖动查看图文详情</p>
			<p>......<span>{{id}}</span></p>
		</div>
	</div>
</template>

<script>	
	import gotoShop from './utils/goto-shop.vue';
	import hasChoice from './utils/has-choice.vue';
	import sendTo from './utils/send-to.vue';
	import recommend from './utils/det-recom.vue';
	import axiosUtil from '@/utils/axios.utiles.js';
	
	export default{
		props : ['id',"listid"],
		data : function(){
			return {
				dataList : this.id,  
				listId : this.listid,
				itemInfo : "",
				reducePri : 0,
				items : [],
				payments : {
					"99" : "邮乐卡支付",
					"10" : "邮储快捷",
					"12" : "快捷支付"
				},
				payment : [],
				evaluateData : {},
				evaluaLength : 1,
				recomData : {}
			}
		},
		methods : { 
			//计算评价星星个数
			iconNum(leng){
				return Number(leng);
			}
		},
		components : {
			gotoShop,
			hasChoice,
			sendTo,
			recommend
		},
		computed : {
			//是否包邮
			isShowFree(){
				if(this.dataList.serviceLabels){
					return this.dataList.serviceLabels.length == 1 ? true : false;
				}else{
					return false;
				}
			},
			//是否显示提示信息
			isShowListSubTitle(){
				return this.dataList.listingSubTitle ? true : false;
			},
			//计算优惠差价
			calcReducePri(){
				if(this.itemInfo.salePrice){
					return (this.itemInfo.marketPrice-this.itemInfo.salePrice).toFixed(1);
				}
			},
			//确定支付方式
			surePayFor(){
				if(this.dataList.payments){
					this.items = this.dataList.payments.split(" ");
					this.payment = [];
					for(var i=0;i<this.items.length;i++){
						this.payment.push(this.payments[this.items[i]]);
					}
				}
			}
		},
		mounted(){
			var that = this;
			axiosUtil(this,'/api/mobile/commentQuery.do',{
				jsonApiCallback : "j",
				productId : that.listId,
				start : "1",
				end : "2",
				appkey : "c8574b95e0544ae7",
				version_no : "apr_2010_build01",
				_ : "1505954135364"
				
			},'evaluateData');
		},
		updated(){
			this.dataList = this.id;
			this.dataList.itemInfo && (this.itemInfo = this.dataList.itemInfo[0]);

		}
	}
</script>