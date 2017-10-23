<template lang="html">
    <div class="index_footer">
        <ul>
            <router-link to="/position" tag="li">
                <i class="yo-ico">&#xe6bb;</i>  
                <b>首页</b>
            </router-link>
            <router-link to="/category" tag="li">
                <i class="yo-ico">&#xe806;</i>
                <b>分类</b>
            </router-link>
            <router-link to="/dynamic" tag="li">
                <i class="yo-ico">&#xe7d9;</i> 
                <b>动态</b>
            </router-link>
            <router-link to="/cart" tag="li">
                <i class="yo-ico">&#xe6af;</i>
                <b>购物车</b>
            </router-link>
            <router-link to="/mine" tag="li">
                <i class="yo-ico">&#xe78b;</i>
                <b>我的邮乐</b>
            </router-link>
        </ul>
    </div> 
</template>

<script>
import VueRouter from 'vue-router';
import '../../../media/iconfont/iconfont.ttf'
import '../../../media/iconfont/iconfont.woff'


</script>

<style lang="scss">
@charset "UTF-8";
@import "../../../styles/modules/common.scss";
@import "../../../styles/app.scss";
.index_footer {
    height: .5rem;
    background:#F4F4F4;
    ul {
      height: 100%;
      @include border(1px 0 0 0);
      @include flexbox();
      li {
        @include flex();
        @include flexbox();
        @include flex-direction(column);
        @include justify-content(center);
        @include align-items(center);
        i {
          font-size: .22rem;
          color: #70706F;
        }
        b{
          font-weight: 100;
          font-size: .12rem;
          color: #70706F; 
        }
        &.active b,
        &.active i {
          color: red;
        }
      }
    }
}
</style>

