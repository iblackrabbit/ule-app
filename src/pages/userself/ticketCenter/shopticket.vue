<template>
	<div class="shopticket">
		<div class="topbar">
			<a href="javascript:window.history.back();"></a>
			领券中心
		</div>
		<div class="categorylist">
			<ul class="list1">
				<li v-for="(item,i) in listInfo">
					<span :class="{active:cindex==i}" @click="handle(i)">{{item}}</span>
				</li>
				<span>
					<ul class="list2"><li v-for="item in listInfo"
						style="display: none;">
					{{item}}
				</li>
					</ul>
				</span>
			</ul>
		</div>
		<div class="items">
			<ul>
				
				<li v-for="item in ticketlist">
					<div class="left">
						<p class="shopname">{{item.storeName}}</p>
						<p class="condition">
							<i>¥</i>
							<span class="price">{{item.amount}}</span>
							<span class="use">满{{item.fullCutAmount}}可用</span>
						</p>
					</div>
					<div class="right">
						<i></i>
						<p class="shop-ticket">店铺券</p>
						<p class="getnow">立即领取</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import { InfiniteScroll } from 'mint-ui';
	import Vue from 'vue';

Vue.use(InfiniteScroll);
	export default{
		data(){
			return{
				categoryType:10,
				jsonp:3,
				page:1,
				ticketlist2:'',
				cindex:0,
				ticketlist:'',
				listInfo:["特色美食","家用电器","家具生活","箱包鞋靴","美妆/洗护","运动/户外/机器","母婴/玩具","厨卫清洁","进口食品","魅力男装","女装/饰品/配件","手机/数码","汽车用品","电脑办公","商务礼品","消费卡券/票券"]
			}
		},
		mounted(){
			axios.get('ticket/uleWalletWeb/search/searchAppCoupon?message={"tabType":"1","channel":"All","categoryType":"10","pageSize":"6","userOnlyid":"1012998573","pageIndex":"1","sort":"cw_serial_number_app asc","showType":"J"}&_=1509290496463&callback=jsonp3')
			.then((res)=>{	
				var ticketList = JSON.parse(res.data.substr(7,res.data.length-8))
				this.ticketlist=ticketList.returnMsg.couponList
		})
				this.jsonp=3
				this.page=1
				this.categoryType=10
	},
	methods:{
		getdata(k){
			k=k+3
				axios.get('ticket/uleWalletWeb/search/searchAppCoupon?message={"tabType":"1","channel":"All","categoryType":'+(k+7)+',"pageSize":"6","userOnlyid":"1012998573","pageIndex":3,"sort":"type desc,push_time desc","showType":"A"}&callback=jsonp'+k)
			.then((res)=>{	
				var ticketList = JSON.parse(res.data.substr(7,res.data.length-8))
				this.ticketlist=ticketList.returnMsg.couponList
				this.jsonp=k
				this.page=1
				this.categoryType=k+7
		})
		},
		handle(i){
			this.cindex=i;
			
			this.getdata(i)
		},
//		loadMore(){
//		  this.loading = true;
//		  
//			
//			setTimeout(() => {
//				axios.get('ticket/uleWalletWeb/search/searchAppCoupon?message={"tabType":"1","channel":"All","categoryType":'+this.categoryType+',"pageSize":"6","userOnlyid":"1012998573","pageIndex":'+this.page+',"sort":"type desc,push_time desc","showType":"A"}&callback=jsonp'+this.jsonp)
//			.then((res)=>{	
//				var ticketList2 = JSON.parse(res.data.substr(7,res.data.length-8))
//				this.ticketlist2=ticketList2.returnMsg.couponList
//	  
//		})
//			
//			console.log(this.ticketlist2)
//		   this.ticketlist=Object.assign(this.ticketlist,this.ticketlist2)
//		   
//		    this.loading = false;
//		  }, 2500);
//	}
	}
}
</script>

