<template lang="html">
    <div class="slideshow">
        <mt-swipe :auto="4000">
            <mt-swipe-item>
                <div class="slideshow_1">
                    <img src="../../assets/images/topslide_1.jpg">
                </div>
            </mt-swipe-item>
            <mt-swipe-item>
                <div class="slideshow_2">
                    <img src="../../assets/images/topslide_2.jpg">
                </div>
            </mt-swipe-item>
            <mt-swipe-item>
                <div class="slideshow_3">
                    <img src="../../assets/images/topslide_3.jpg">
                </div>
            </mt-swipe-item>
             <mt-swipe-item>
                <div class="slideshow_4">
                    <img src="../../assets/images/topslide_4.jpg">
                </div>
            </mt-swipe-item>
        </mt-swipe>
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
