<template lang="html">
	<div class="footer-addCart">
		<ul class="footer-info">
			<li>
				<i class="iconfont">&#xe73f;</i>
				<span :title="id">客服</span>
			</li>
			<li @click="changeText()" :class="{likeactive:isActive}">
				<i class="iconfont" v-html="likeText"></i>
				<span>{{collect}}</span>
			</li>
			<li>
				<i class="iconfont">&#xe6af;</i>
				<!--<span>购物车</span>-->
				<router-link to="/cart" tag="span">购物车</router-link>
			</li>
		</ul>
		<span class="addCart" @click="addToCart()">加入购物车</span>
		<span class="gotoBuy">立即购买</span>
		<mt-popup
		  v-model="popupVisible"
		  position="bottom">
			<div class="det-addto-cart">
				<div class="top">
					<div class="pic">
						<img :src="showImg"/>
					</div>
					<div class="right">
						<p class="price">￥{{price}}</p>
						<p class="det-count">请选择颜色 规格 数量</p>
					</div>
				</div>
				<div class="color">
					<p>颜色</p>
					<span v-for="(value,index) in dataList.colors" :class="{cartactive : index==qwe}" @click="judgeIndex(value,index)">
						{{value.colorName}}
					</span>
					<!--<span class="cartactive">中干性</span>-->
				</div>
				<div class="scale">
					<p>规格</p>
					<span class="cartactive">
						{{sizecart}}
					</span>
				</div>
				<div class="count">
					数量
					<div class="add-count">
						<span @click="addCount(-1)">-</span>
						<input type="text" id="" :value="allNum" />
						<span @click="addCount(1)">+</span>
					</div>
				</div>
				<p class="sure" @click="sendToCart()">确定</p>
			</div>
		</mt-popup>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Popup } from 'mint-ui';

	Vue.component(Popup.name, Popup);
	
	export default{
		props : ["id"],
		data : function(){
			return {
				isActive : false,
				likeText : '&#xe669;',
				collect : '收藏',
				popupVisible : false,
				allNum : 1,
				dataList : {},
				sizecart : "",
				qwe : -1,
				sendData : {},
				showImg : "",
				nowGood : {},
				itemInfo : {},
				price : 0
			}
		},
		methods : {  //单击事件等
			changeText(){
				this.isActive = !this.isActive;
				if(this.isActive){
					this.likeText = '&#xe668;';
					this.collect = '已收藏';
				}else{
					this.likeText = '&#xe669;';
					this.collect = '收藏';
				}
			},
			addToCart(){
				/*this.$store.commit({
					type : 'changeState',
					stateVal : true
				});
				this.popupVisible = this.$store.state.scrollTop.popup;
				console.log(this.$store.state.scrollTop.popup)*/
				this.popupVisible = !this.popupVisible;
//				this.popupVisible = this.$store.state.scrollTop.popup;
			},
			sendToCart(){
				this.popupVisible = !this.popupVisible;
				/*收集购物车显示数据 */
				this.sendData = {
					id:this.dataList.listId,
					shopName : this.dataList.storeName,
					img : this.showImg,
					color : this.nowGood.colorName || "",
					size : this.sizecart || "",
					goodTitle : this.dataList.listName,
					price : this.price,
					count : this.allNum,
					id : this.dataList.listId
				}
				this.$store.commit({
					type : "getCartInfo",
					cartIn : this.sendData
				})
//				console.log(this.sendData);
			},
			addCount(val){
				this.allNum += val;
				if(this.allNum < 1){
					this.allNum = 1;
				}
			},
			//加入购物车，当前点击高亮
			judgeIndex(value,index){
				this.qwe = index;
				this.nowGood = value;
				this.showImg = this.dataList.itemInfo[index].image[0].imgUrl;
				this.price = this.itemInfo[index].salePrice;
			}
		},
		computed : {
		},
		components : {
			
		},
		watch : {
			"dataList" : function(){
				this.itemInfo = this.dataList.itemInfo;
				this.showImg = this.itemInfo[0].image[0].imgUrl;
				this.price = this.itemInfo[0].salePrice;
				this.sizecart = this.dataList.colors[0].specifications[0].specificationName;
			}
		},
		mounted (){
//			this.popupVisible = this.$store.state.scrollTop.popup;
		},
		updated(){
			this.dataList = this.id;
		}
	}
</script>