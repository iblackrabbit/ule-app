<template lang="html">
    <div class="slideshow">
        <mt-swipe :auto="4000">
            <mt-swipe-item>
                <div class="slideshow_1"></div>
            </mt-swipe-item>
            <mt-swipe-item>
                <div class="slideshow_2"></div>
            </mt-swipe-item>
            <mt-swipe-item>
                <div class="slideshow_3"></div>
            </mt-swipe-item>
             <mt-swipe-item>
                <div class="slideshow_4"></div>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
import Vue from "vue/dist/vue.js";
import { Swipe, SwipeItem } from "mint-ui";

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
</script>

<style lang="scss">

</style>
