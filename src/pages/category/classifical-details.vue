<template>
	<div class="classifical-details">
		<div class="category-list1">
			<ul>
				<li v-for="(item1,index) in allCategory" @click="handleClick(index)" :class="{active:cindex==index}">{{item1}}</li>
			</ul>		
		</div>
		<div class="category-list2">
			<div v-for="(page,index) in allInfo" :class="page.page" v-if="showIndex ==index">
				<mt-swipe :auto="4000" class="swiper-imgs" v-for="(k,i) in page.swiperImg">
            	<mt-swipe-item  v-for="(k,i) in page.swiperImg">
                <div :class="'slideshow_'+i">
                    <router-link tag='img' to="./threebuy" :src="k"></router-link>
                </div>
	            </mt-swipe-item>
       		 </mt-swipe>
       	<div class="hot-brand">
       	<div class="h2-title">
       		<h2>{{page.hotBrand}}</h2><span class="littleIcon"></span>
       	</div>

       		 <ul>
				<router-link v-for="(k,i) in page.hotBrandIcon" class="" tag='li' to='/hotlist'>
					<img :src="page.hotBrandIcon[i]">
				</router-link>       		 
       		 </ul>
			</div>	
			<div :class="more.className" v-for="more in page.more">
					
					<div class="h2-title">
       		<h2>{{more.title}}</h2><span class="littleIcon"></span>
					</div>
			<ul>
				<li v-for="(k,i) in more.infoPic">
					<img :src="k">
				</li>
				<li v-for="(k,i) in more.infoTxt">
					<span>{{k}}</span>
				</li>
			</ul>
       	</div>
       		 
		</div>
	</div>
	</div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from "mint-ui";
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


export default{
	data(){
		return {
			cindex:0,
			showIndex:0,
			allCategory:["热门推荐","邮乐农品","特色美食","美妆/洗护","家居厨卫","家用电器",
			"母婴教育","运动户外","箱包配饰","手机/数码","服饰鞋靴","电脑/汽车","礼品卡券"],
			allInfo:[
			{
				page:'page1',
				class:"hot-brand",
				swiperImg:[
"https://pic.ule.com/item/user_0102/desc20170313/a366dc4a1798c85d_-1x-1.jpg"
								
				],
				storeid:[7868,7948,0,0,10141,16065,6570,9294,0],
				hotBrand:"热门品牌",
				hotBrandIcon:["https://pic.ule.com/item/user_0102/desc20170208/c23046309a37a9fe_-1x-1.jpg","https://pic.ule.com/item/user_0102/desc20170208/a920948162ce4675_-1x-1.jpg","https://pic.ule.com/item/user_0102/desc20170208/f33464eb294629bb_-1x-1.jpg","https://pic.ule.com/item/user_0102/desc20170208/9a675ed71541b8a4_-1x-1.jpg","https://pic.ule.com/item/user_0102/desc20170208/5d7d031dede40808_-1x-1.jpg","https://pic.ule.com/item/user_0102/desc20170208/01461c9dd96c9aba_-1x-1.jpg","https://pic.ule.com/item/user_0102/desc20170208/28b42bda1fdae317_-1x-1.jpg","https://pic.ule.com/item/user_0102/desc20170208/54e8a954a846f834_-1x-1.jpg","https://pic.ule.com/item/user_0102/desc20170208/f864006adecebad5_-1x-1.jpg"],
				more:[
					{
						title:"为您推荐",
						icon:"showicon",
						className:"suggest",
						infoPic:[
				"https://pic.ule.com/item/user_0102/desc20170208/54aa032d4364aa00_-1x-1.jpg",
				"https://pic.ule.com/item/user_0102/desc20170208/fb9e49c74d279d86_-1x-1.jpg",
				"https://pic.ule.com/item/user_0102/desc20170208/2dae9b634184bce3_-1x-1.jpg",
				"https://pic.ule.com/item/user_0102/desc20170208/cd2bad6ce765b742_-1x-1.jpg",
				"https://pic.ule.com/item/user_0102/desc20170208/329e5a1082c90f5f_-1x-1.jpg",
				"https://pic.ule.com/item/user_0102/desc20170208/fee141dd9352fb58_-1x-1.jpg",
				"https://pic.ule.com/item/user_0102/desc20170208/e30804395a6481aa_-1x-1.jpg",
				"https://pic.ule.com/item/user_0102/desc20170208/dd978eb48ac9c690_-1x-1.jpg",
				"https://pic.ule.com/item/user_0102/desc20170208/0923c759e76f45e9_-1x-1.jpg"
				]
					},
			
			]
					
			},
			{
				page:'page2',
				class:"hot-brand",
				swiperImg:[
								
				],
				hotBrand:"热门品牌",
				hotBrandIcon:["https://pic2.ulecdn.com/item/user_0102/desc20160927/f8a84f2a9defe46e_-1x-1.jpg","https://pic1.ulecdn.com/item/user_0102/desc20160927/e931bd8fbe240271_-1x-1.jpg","https://pic0.ulecdn.com/item/user_0102/desc20160927/928f1854344446a6_-1x-1.jpg","https://pic3.ulecdn.com/item/user_0102/desc20160927/9a0d4b7d846f49d4_-1x-1.jpg","https://pic0.ulecdn.com/item/user_0102/desc20160927/e4c61bf8674f6a5f_-1x-1.jpg","https://pic4.ulecdn.com/item/user_0102/desc20160929/f4e90a6d6df4b5c8_-1x-1.jpg","https://pic2.ulecdn.com/item/user_0102/desc20160927/31d5e5c924a1d944_-1x-1.jpg","https://pic2.ulecdn.com/item/user_0102/desc20160927/ef8e9a1678480ca4_-1x-1.jpg","https://pic1.ulecdn.com/item/user_0102/desc20161012/0093c2cba8747588_-1x-1.jpg"],
				more:[
					{
						title:"生鲜服务",
						icon:"showicon",
						className:"common",
						infoTxt:["新鲜蔬果","禽/蛋/蛋制品","冷鲜肉/肉制品","海鲜/水产品/水产制品"
				
				]
					},
					{
						title:"健康粮油",
						icon:"showicon",
						className:"common",
						infoTxt:["食用油","米面","杂粮","挂面","速食米面"
				
				]
					},
					{
						title:"干货",
						icon:"showicon",
						className:"common",
						infoTxt:["枣类","菌菇类","腌腊制品","干菜","粉丝","黑木耳/银耳","腌干水产品","莲子/百合","枸杞/桂圆干/龙眼"
				
				]
					},
					{
						title:"药食同源",
						icon:"showicon",
						className:"common",
						infoTxt:["冬虫夏草","高丽参","海产品/灵芝","燕窝","人参","石斛/枫斗","腌干水产品","莲子/百合","枸杞/桂圆干/龙眼"
				
				]
					}
			]
					
			}
			
		]
		}
			
	},
	methods: {
    handleClick(i) {
      this.cindex = i
      this.showIndex = i
    }
	}
}
</script>

<style>
	.category-list2{
		height: 100px;
	}
</style>