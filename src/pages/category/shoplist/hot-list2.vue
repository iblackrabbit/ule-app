<template>
	<div class="hot-list2">
		<div class="searchbar">
			<a href="javascript:window.history.back();">
				<span class="back"></span>
			</a>
		<input type="text" placeholder="VIVO"/>
		</div>
		<div class="categorylist">
			<ul>
				<li v-for="(item,i) in category"  :class="{active:isShow==i}" @click="handle(i)">
				{{item}}
				<span class="focus"></span>
				</li>
				
			</ul>
		</div>
		<div class="itemlist">
			<ul>
				<router-link v-for="(item,i) in shoplist" tag='li' to="/details">
				<img :src="item.img" alt="" />
				<div class="txt">
					<p>{{item.describe}}</p>
					<div class="price">
						<span>¥{{item.price}}</span>
					<i v-if="item.baoyou">{{item.baoyou}}</i>
					</div>
				</div>
			</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				isShow:0,
				category:["综合","销量","价格","筛选"],
				shoplist:[
				{
					img:"https://pic2.ule.com/m/pic/user_800114667/product/prd20161022/1f0c5dc41a8bca37_p800x800_sl.jpg",
					describe:"机伴 X7手机壳x7plus保护套 V3/v3max/X6/X6plus防摔保护套 ",
					price:"25.0",
					baoyou:"包邮"
				},{
					img:"https://pic0.ule.com/m/pic/user_800117414/product/prd20170411/9954acefa47999df_p800x800_sl.jpg",
					describe:"维肯/VIKEN 非全屏钢化玻璃膜钢化膜Vivo  X9plus 超薄0.26MM",
					price:"29.0",
					baoyou:"",
				},
				{
					img:"https://pic1.ule.com/m/pic/user_800117086/product/prd20170523/68a2a8a43638b6ca_p800x800_sl.jpg",
					describe:"【来饰缘】步步高X9碳钎维全屏钢化膜 X7手机软边抗紫蓝光防摔贴膜",
					price:"16.6",
					baoyou:"包邮"
				},
				{
					img:"https://pic1.ule.com/m/pic/user_800117414/product/prd20170330/14c89af24486f0dd_p800x800_sl.jpg",
					describe:"维肯/VIKEN V3蓝牙耳机挂耳式车载耳塞式 通用vivo  X7 X9 Plus",
					price:"12.9",
					baoyou:""
				},
				{
					img:"https://pic0.ule.com/m/pic/user_800116911/product/prd20170427/86400392749d789a_p800x800_sl.jpg",
					describe:"VIVO  原装耳机x9 x6 x7plus xplay5 XE680入耳式线控降噪音乐耳塞",
					price:"33.9",
					baoyou:"包邮"
				},
				{
					img:"https://pic1.ule.com/m/pic/user_800116911/product/prd20170323/3384ced584944bdb_p800x800_sl.jpg",
					describe:"VIVO 原装闪快充手机充电器x6s/x7X9plusy35xplay5v3max充电头",
					price:"59.0",
					baoyou:""
				},
			
				{
					img:"https://pic0.ule.com/m/pic/user_800112907/product/prd20170211/92c8f7eba1460cbe_p800x800_sl.jpg",
					describe:"vivo vivo  Y55 2+16G全网通4G双卡双待",
					price:"23.0",
					baoyou:""
				},
				{
					img:"https://pic0.ule.com/m/pic/user_800106691/product/prd20170225/44e901b53a305689_p800x800_sl.jpg",
					describe:"VIVO Y67 全网通 4GB+32GB  双卡双待 （香槟金）",
					price:"23.9",
					baoyou:"包邮"
				},
				{
					img:"https://pic2.ule.com/m/pic/user_800114667/product/prd20161022/1f0c5dc41a8bca37_p800x800_sl.jpg",
					describe:"机伴 X7手机壳x7plus保护套 V3/v3max/X6/X6plus防摔保护套 ",
					price:"25.0",
					baoyou:"包邮"
				},{
					img:"https://pic0.ule.com/m/pic/user_800117414/product/prd20170411/9954acefa47999df_p800x800_sl.jpg",
					describe:"维肯/VIKEN 非全屏钢化玻璃膜钢化膜Vivo  X9plus 超薄0.26MM",
					price:"29.0",
					baoyou:"",
				},
				{
					img:"https://pic1.ule.com/m/pic/user_800117086/product/prd20170523/68a2a8a43638b6ca_p800x800_sl.jpg",
					describe:"【来饰缘】步步高X9碳钎维全屏钢化膜 X7手机软边抗紫蓝光防摔贴膜",
					price:"16.6",
					baoyou:"包邮"
				},
				]
			}
		},
		methods:{
			handle(i){
				this.isShow=i;
			}
		}
	}
</script>

