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
			<p class="det-min-price"><span>¥{{itemInfo.salePrice}}</span><strong>已优惠{{reducePri}}元</strong></p>
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
		<p class="det-payfor">
			<!--<span v-for="(value,index) in items">  死循环-->
				<!--<i class="iconfont">&#xe657;</i>{{value}}-->
			<!--</span>-->
		</p>
		
		<!--商品评价-->
		<div class="det-appraise">
			<p class="det-appr-title">
				<span class="fl">商品评价(<i>2053</i>)</span>
				<span class="fr">查看全部评价<i class="iconfont">&#xe6a3;</i></span>
			</p>
			<ul class="det-commit">
				<li>
					<div class="det-star">
						<p class="det-pict fl">
							<img src="//my.ule.com/myid/images/default_48X48.gif"/>
							<span>钱***新</span>
						</p>
						<p class="det-nice-star fr"><i class="iconfont">&#xe64b;&#xe64b;&#xe64b;&#xe64b;&#xe64b;</i></p>
					</div>
					<p class="det-text">性价比高，发货速度快，满意！</p>
				</li>
				<li>
					<div class="det-star">
						<p class="det-pict fl">
							<img src="//my.ule.com/myid/images/default_48X48.gif"/>
							<span>钱***新</span>
						</p>
						<p class="det-nice-star fr"><i class="iconfont">&#xe64b;&#xe64b;&#xe64b;&#xe64b;&#xe64b;</i></p>
					</div>
					<p class="det-text">性价比高，发货速度快，满意！</p>
				</li>
			</ul>
		</div>
		
		<!--店铺信息  组件-->
		<goto-shop></goto-shop>
		
		<!--本店商品推荐-->
		<recommend></recommend>
		
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
	
	export default{
		props : ['id'],
		data : function(){
			return {
				dataList : {},
				isShowFree : true,
				isShowListSubTitle : true,
				itemInfo : {},
				reducePri : 0,
				items : [],
				payments : {
					"99" : "邮乐卡支付",
					"10" : "邮储快捷",
					"12" : "快捷支付"
				}
			}
		},
		methods : {  //单击事件等
			
		},
		components : {
			gotoShop,
			hasChoice,
			sendTo,
			recommend
		},
		updated(){
			this.dataList = this.id;
			//是否包邮
			this.isShowFree = this.dataList.serviceLabels.length == 1 ? true : false;
			//是否显示提示信息
			this.isShowListSubTitle = this.dataList.listingSubTitle == "" ? false : true;
			//显示超市价格，不要试图在VM中直接访问数组里的元素,需要提前存储一下这个数组
			this.itemInfo = this.dataList.itemInfo[0];
			//计算优惠差价
			this.reducePri = (this.itemInfo.marketPrice-this.itemInfo.salePrice).toFixed(1);
			//确定支付方式
			this.items = this.dataList.payments.split(" ");
			console.log(this.items);
			/*for(var i=0;i<items.length;i++){
				console.log(this.payments[items[i]]);
			}*/
		}
	}
</script>