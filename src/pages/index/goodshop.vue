<template lang="html">
    <div class="goodshop_all">
        <div class="goodshop_title">            
            <p>
                <span class="line"></span>
                <span class="shop_top">今日好店铺</span>
            </p>
        </div>
        <div class="goodshop_list">
            <div class="goodshoplist_pic">
                <mt-swipe :auto="5000">
                    <mt-swipe-item>
                        <div class="slideshow_1">
                            <img src="../../assets/images/goodshop_1.jpg"/>
                        </div>
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <div class="slideshow_2">
                            <img src="../../assets/images/goodshop_2.png"/>
                        </div>
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <div class="slideshow_3">
                            <img src="../../assets/images/goodshop_3.png"/>
                        </div>
                    </mt-swipe-item>
                </mt-swipe>
            </div>   
        </div>       
    </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "mint-ui";

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

</script>

<style lang="scss">

</style>
