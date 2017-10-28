<template lang="html">
    <div class="youlike_all">
        <div class="youlike_title">
             <p>
                <span class="line"></span>
                <span class="youlike_top">猜你喜欢</span>
            </p>
        </div>
        <div class="youlike_list">               
                 <mt-loadmore  :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" 
                              @translate-change="translateChange" 
                              @bottom-status-change="handleBottomChange" ref="loadmore">
                    <ul>
<<<<<<< HEAD
                        <!-- <li v-for="list in likelist" v-on:click="sendMsg(list)" > -->
                        <router-link to="/detail/1" v-for="list in likelist" v-on:click="sendMsg(list)" tag="li">
=======
                         <!--<li v-for="list in likelist" v-on:click="sendMsg(list.listingId)" >-->   
                        <router-link :to="'/detail/'+list.listingId" v-for="list in likelist" v-on:click="sendMsg(list.listingId)" tag="li" :key="1">
>>>>>>> 390559ac863b364701662ba5091b9230e8670aed
                            <div class="youlike_content" >
                                <a href="javascript:;"><img :src="list.imgUrl" alt=""></a>
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
<<<<<<< HEAD
                        <!-- </li>              -->
=======
                         <!--</li>-->              
>>>>>>> 390559ac863b364701662ba5091b9230e8670aed
                    </ul>

                    <div slot="bottom" class="mint-loadmore-bottom">
                        <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
                        <span v-show="bottomStatus === 'loading'">
                            <mt-spinner type="snake"></mt-spinner>
                        </span>
                    </div>
                </mt-loadmore>
          
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import { Loadmore,Spinner } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);
Vue.component(Spinner.name,Spinner);
import axios from 'axios';


import Bus from '@/components/bus';

export default{
    data() {
        return {
            likelist:[], 
            pagetype:0,
            allLoaded: false, 
            bottomStatus: '' ,
            wrapperHeight: 0, 
            translate: 0,
            moveTranslate: 0
        }
    },
    methods:{
        loadBottom() {     
            this.allLoaded = true;// 若数据已全部获取完毕
            this.$refs.loadmore.onBottomLoaded();
        },
         handleBottomChange(status) {
             this.bottomStatus = status;
        },
        translateChange(translate) {
            const translateNum = +translate;
            this.translate = translateNum.toFixed(2);
            this.moveTranslate = (1 + translateNum / 70).toFixed(2);
        },
        sendMsg(num){
<<<<<<< HEAD
            Bus.$emit("listID", num.listingId);        
        }
       
=======
//      	this.$router.push({name:'detail',query : {id : num}});
//          Bus.$emit("listID", num.listingId);        
        }       
>>>>>>> 390559ac863b364701662ba5091b9230e8670aed
    },
    mounted() {
        axios.get('/mainhtml/mobilead/recommond/indexListingCommentGet',{
            params:{
              sectionKeys:"ule_android_index_prodlist",
              startIndex:0,
              pageSize:15,
              type:++this.pagetype,
              jsonApiCallback:"define"
            }
        })
        .then((res)=>{
            var youlikelist = JSON.parse(res.data.substr(7,res.data.length-8));
            this.likelist = youlikelist.result;
        })
    }

}
</script>

<style lang="css">


.page-loadmore .mint-spinner {
    display: inline-block;
    vertical-align: middle
}

.page-loadmore-desc {
    text-align: center;
    color: #666;
    padding-bottom: 5px
}

.page-loadmore-desc:last-of-type,
.page-loadmore-listitem {
    border-bottom: 1px solid #eee
}

.page-loadmore-listitem {
    height: 50px;
    line-height: 50px;
    text-align: center
}

.page-loadmore-listitem:first-child {
    border-top: 1px solid #eee
}

.page-loadmore-wrapper {
    overflow: scroll
}

.mint-loadmore-bottom span {
    display: inline-block;
    -webkit-transition: .2s linear;
    transition: .2s linear;
    vertical-align: middle
}

.mint-loadmore-bottom span.is-rotate {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
}
</style>
