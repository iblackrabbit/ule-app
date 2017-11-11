<template lang="html">
    <div class="youlike_all">
        <div class="youlike_title">
             <p>
                <span class="line"></span>
                <span class="youlike_top">猜你喜欢</span>
            </p>
        </div>
        <div class="youlike_list">               
                <mt-loadmore  :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
                    <ul>
                         <!--<li v-for="list in likelist" v-on:click="sendMsg(list.listingId)" >-->   
                        <router-link :to="'/detail/'+list.listingId" v-for="list in likelist" v-on:click="sendMsg(list.listingId)" tag="li" :key="1">
                            <div class="youlike_content" >
                                <a href="javascript:;"><img :src="'http://localhost:3000/uploadimg/'+list.imgUrl" alt=""></a>
                                <p>{{list.listingName}}</p>
                                <div>
                                    <span>
                                        <i>￥{{list.maxPrice}}</i>
                                        <br>
                                        <strong>￥{{list.minPrice}}</strong>
                                    </span>
                                    <em>{{parseInt(list.minPrice*100/list.maxPrice)/10}}折</em>
                                </div>
                            </div>
                        </router-link>
                         <!--</li>-->              
                    </ul>
                </mt-loadmore>
                  
          
        </div>
    </div>
</template>

<script>
import Vue from "vue";

import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);

import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);

import axios from 'axios';


import Bus from '@/components/bus';

export default{
    data() {
        return {
            likelist:[], 
            allLoaded: false, 
            bottomStatus: '',
            addpage:14 
        }
    },
    methods:{     
        sendMsg(num){
//      	this.$router.push({name:'detail',query : {id : num}});
//          Bus.$emit("listID", num.listingId);        
        },
        loadBottom() {
            this.$refs.loadmore.onBottomLoaded();
            this.addpage += 10;
            axios.get('/mainhtml/mobilead/recommond/indexListingCommentGet',{
                params:{
                    sectionKeys:"ule_android_index_prodlist",
                    startIndex:0,
                    pageSize:this.addpage,
                    type:1,
                    jsonApiCallback:"define"
                }
            })
            .then((res)=>{
                var youlikelist = JSON.parse(res.data.substr(7,res.data.length-8));
                this.likelist = youlikelist.result;
            })
            // if(this.likelist = undefined){
            //   this.allLoaded = true;// 若数据已全部获取完毕
            // }
        }       
    },
    mounted() {
        axios.get('/api/goods/getList',{
            params:{
              startIndex:0,
              pageSize:15
            }
        })
        .then((res)=>{
            this.likelist = res.data.result;
        })
    }

}
</script>

<style lang="scss">

</style>
