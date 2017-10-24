<template lang="html">
     <div class="search">
        <div class="search_left">
            <i class="yo-ico">&#xe819;</i>
            <span>北京</span>
        </div>
        <div class="search_center">
             <i class="yo-ico">&#xe65c;</i>
             <input type="text" placeholder="搜索商品">
        </div>
        <div class="search_right">
            <i class="yo-ico">&#xe689;</i>
            <span>扫一扫</span>
        </div>
    </div>
</template>

<script>


</script>

<style lang="scss">
@charset "UTF-8";
@import "../../styles/modules/common.scss";
@import "../../styles/app.scss";

.search{
    width:100%;
    height:100%;
    @include flexbox();
    @include justify-content(center);
    @include align-items(center);  
    .search_left{
        width:.6rem;
        height:100%;
        text-align: center;
        i{
            display: block;
            font-size:.22rem;
        }
        span{
             font-size:.14rem;
             font-weight: 100;
        }
    }
    .search_center{
        @include flex();
        background: #fff;
        wwidth:100%;
        height: 0.36rem;
        position: relative;
        @include border-radius(.18rem);
        i{
            width:.2rem;
            height:.2rem;
            font-size:.18rem;
            line-height: .2rem;
            display: block;
            position: absolute;
            color:$base-color;
            top:.07rem;
            left:.7rem;
        }
        input{
             width:1.2rem;
             height:.18rem;
             border: none;
             position: absolute;
             display: inline-block;
             top:.09rem;
             left:.93rem;
             &::-webkit-input-placeholder{
                color:$base-color;
                opacity:1;
             }    
        }  
          
       }
    .search_right{
        width:.6rem;
        height:100%;
        text-align: center;
        i{
            display: block;
            font-size:.22rem;
        }
        span{
             font-size:.14rem;
             font-weight: 100;
        }
    }
}
</style>
