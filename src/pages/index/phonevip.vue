<template lang="html">
    <div class="phvip_all">
    <div class="phvip_title">
        <p>
            <i class="yo-ico">&#xe704;</i>
            <b>手机专享</b>
        </p>
        <span>下单立减</span>
    </div>
    <div class="phvip_list">
        <ul>
            <router-link tag="li" :to="list.link.substr(21)" v-for="list in phonelist">
                <a href=""><img v-lazy="list.imgUrl" :src="list.imgUrl" alt=""></a>
                <i>{{JSON.parse(list.customAttribute).price}}</i>
                <span>{{list.title}}</span>
            </router-link>
        </ul>
    </div>
    <div class="phvip_goods">
        <ul>
            <router-link :to="'/detail/'+item.listingId" tag="li" v-for="item in piclist">
                <img v-lazy="item.imgUrl" :src="item.imgUrl"/>
            </router-link>
        </ul>
    </div>
    <div class="markstreet">
        <p>品牌街</p>
        <div class="phvip_goodslist">
             <ul>
                <li>
                
                        <img src="//pic2.ulecdn.com/item/user_0102/desc20171020/73c4b84885330943_-1x-1.jpg" alt="">
                
                </li>
                <li>
                
                        <img src=" //pic3.ulecdn.com/item/user_0102/desc20171020/d69012944c0bba62_-1x-1.jpg" alt="">
                    
                </li>
                <li>
            
                        <img src="//pic2.ulecdn.com/item/user_0102/desc20171020/0f93ea4ddf9de090_-1x-1.jpg" alt="">
                    
                </li>
                <li>
                
                        <img src="//pic4.ulecdn.com/item/user_0102/desc20171013/e8e9c5ada7074f00_-1x-1.jpg" alt="">
                
                </li>
                <li>
                    
                        <img src="//pic3.ulecdn.com/item/user_0102/desc20171020/89e71c67c402b883_-1x-1.jpg" alt="">
                
                </li>
                <li>
                    
                        <img src="//pic3.ulecdn.com/item/user_0102/desc20171020/5b64be6d2774609a_-1x-1.jpg" alt="">
                    
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
import Vue from 'Vue';
import axios from 'axios';
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);

export default{
    data() {
        return {
            phonelist:[],
            piclist:[]           
        }
    },
    methods:{
        
    },
    mounted() {
        axios.get('/mainhtml/mobilead/recommond/dwRecommond.do',{
            params:{
             restype:2002,
             sectionKeys:"wap_onlyphone",
             jsonApiCallback:"jsonApiCallback2"
            }
        })
        .then((res)=>{
              var viplist = JSON.parse(res.data.substr(17,res.data.length-18));
              this.phonelist = viplist.wap_onlyphone
        }),
         axios.get('/mainhtml/mobilead/recommond/indexListingCommentGet',{
            params:{
              sectionKeys:"ule_android_index_prodlist",
              startIndex:4,
              pageSize:3,
              type:1,
              jsonApiCallback:"define"
            }
        })
        .then((res)=>{
            var picturelist = JSON.parse(res.data.substr(7,res.data.length-8));
            this.piclist = picturelist.result;
        })
    }
}

</script>

<style lang="scss">

</style>
