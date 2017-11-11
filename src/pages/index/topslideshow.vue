<template lang="html">
    <div class="slideshow">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in bannerData">
                <div class="slideshow_1">
                    <img :src="'http://localhost:3000/uploadimg/'+item.imgUrl">
                </div>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "mint-ui";
import axios from 'axios';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

export default {
    data (){
        return {
            bannerData : []
        }
    },
    mounted (){
        axios.post('/api/index/getBanner')
            .then((res) => {
                this.bannerData = res.data.ule_wap_index;
            })
    }
} 


</script>

<style lang="scss">

</style>
