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
            <li v-for="list in phonelist">
                <a href=""><img :src="list.imgUrl" alt=""></a>
                <i>{{JSON.parse(list.customAttribute).price}}</i>
                <span>{{list.title}}</span>
            </li>
        </ul>
    </div>
    <div class="phvip_goods">
        <ul>
            <li>
                <img src="//pic2.ulecdn.com/item/user_0102/desc20171020/fc054c4aa7068161_-1x-1.jpg"/>
            </li>
            <li>
                <img src="//pic3.ulecdn.com/item/user_0102/desc20171020/e43d169e1b40c195_-1x-1.jpg"/>
            </li>
            <li>
                <img src="//pic3.ulecdn.com/item/user_0102/desc20171020/86dd849e991832ba_-1x-1.jpg"/>
            </li>
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
import axios from 'axios';

export default{
    data() {
        return {
            phonelist:[]           
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
        })
    }
}

</script>

<style lang="scss">

</style>
