<template lang="html">
  <div class="m-cart">
    <header>
      <h4>购物车</h4>
      <span>编辑全部</span>
    </header>
    <section>
      <ul class="cart-list">
<<<<<<< HEAD
        <li class="cart-item" v-for="(item,index) in lists">
          <div class="cart-shop">
            <i class="iconfont cart-circle" @click="cartSelect(item)" v-html="circle" :class="{ active: item.isActive }"></i>
=======
        <li class="cart-item">
          <div class="cart-shop">
            <i class="iconfont">&#xe6d7;</i>
>>>>>>> 390559ac863b364701662ba5091b9230e8670aed
            <h4>上海好熊食品有限公司
              <i class="iconfont">&#xe6a3;</i>
            </h4>
            <span class="cart-edit">编辑</span>
          </div>
<<<<<<< HEAD
          <mt-cell-swipe class="cart-cellswipe" :right="[
            {
              content: '删除',
              style: { background: 'red', color: '#fff' },
              handler: () => null
            }
          ]">
            <div class="cart-detail">
              <i class="cart-selected iconfont" @click="cartSelect(item)" v-html="circle" :class="{ active: item.isActive }"></i>
              <dl>
                <dt>
                  <img src="../../assets/images/melon.gif" alt="">
                </dt>
                <dd>
                  <p class="cart-name">天囍坊 爆款双人涤棉印花亲肤四件套2*2.3米被套包邮</p>
                  <p class="cart-info">颜色: 白色 尺码: DX5</p>
                  <p class="cart-price">
                    <span>¥1599.00</span>
                    <span>1件</span>
                    <i class="iconfont">&#xe80b;</i>
                  </p>
                </dd>
              </dl>
              <div class="cart-touch-delete">
                <i class="iconfont">&#xe6a3;</i>
              </div>
            </div>
          </mt-cell-swipe>
=======
          <div class="cart-detail">
            <i class="cart-selected iconfont">&#xe6d7;</i>
            <dl>
              <dt>
                <img src="../../assets/images/melon.gif" alt="">
              </dt>
              <dd>
                <p class="cart-name">天囍坊 爆款双人涤棉印花亲肤四件套2*2.3米被套包邮</p>
                <p class="cart-info">颜色: 白色 尺码: DX5</p>
                <p class="cart-price">
                  <span>¥1599.00</span>
                  <span>1件</span>
                  <i class="iconfont">&#xe80b;</i>
                </p>
              </dd>
            </dl>
            <div class="cart-touch-delete">
              <i class="iconfont">&#xe6a3;</i>
            </div>
          </div>
        </li>
        <li class="cart-item">
          <div class="cart-shop">
            <i class="iconfont">&#xe6d7;</i>
            <h4>上海好熊食品有限公司
              <i class="iconfont">&#xe6a3;</i>
            </h4>
            <span class="cart-edit">编辑</span>
          </div>
          <div class="cart-detail">
            <i class="cart-selected iconfont">&#xe6d7;</i>
            <dl>
              <dt>
                <img src="../../assets/images/melon.gif" alt="">
              </dt>
              <dd>
                <p class="cart-name">天囍坊 爆款双人涤棉印花亲肤四件套2*2.3米被套包邮</p>
                <p class="cart-info">颜色: 白色 尺码: DX5</p>
                <p class="cart-price">
                  <span>¥1599.00</span>
                  <span>1件</span>
                  <i class="iconfont">&#xe80b;</i>
                </p>
              </dd>
            </dl>
            <div class="cart-touch-delete">
              <i class="iconfont">&#xe6a3;</i>
            </div>
          </div>
        </li>
        <li class="cart-item">
          <div class="cart-shop">
            <i class="iconfont">&#xe6d7;</i>
            <h4>上海好熊食品有限公司
              <i class="iconfont">&#xe6a3;</i>
            </h4>
            <span class="cart-edit">编辑</span>
          </div>
          <div class="cart-detail">
            <i class="cart-selected iconfont">&#xe6d7;</i>
            <dl>
              <dt>
                <img src="../../assets/images/melon.gif" alt="">
              </dt>
              <dd>
                <p class="cart-name">天囍坊 爆款双人涤棉印花亲肤四件套2*2.3米被套包邮</p>
                <p class="cart-info">颜色: 白色 尺码: DX5</p>
                <p class="cart-price">
                  <span>¥1599.00</span>
                  <span>1件</span>
                  <i class="iconfont">&#xe80b;</i>
                </p>
              </dd>
            </dl>
            <div class="cart-touch-delete">
              <i class="iconfont">&#xe6a3;</i>
            </div>
          </div>
        </li>
        <li class="cart-item">
          <div class="cart-shop">
            <i class="iconfont">&#xe6d7;</i>
            <h4>上海好熊食品有限公司
              <i class="iconfont">&#xe6a3;</i>
            </h4>
            <span class="cart-edit">编辑</span>
          </div>
          <div class="cart-detail">
            <i class="cart-selected iconfont">&#xe6d7;</i>
            <dl>
              <dt>
                <img src="../../assets/images/melon.gif" alt="">
              </dt>
              <dd>
                <p class="cart-name">天囍坊 爆款双人涤棉印花亲肤四件套2*2.3米被套包邮</p>
                <p class="cart-info">颜色: 白色 尺码: DX5</p>
                <p class="cart-price">
                  <span>¥1599.00</span>
                  <span>1件</span>
                  <i class="iconfont">&#xe80b;</i>
                </p>
              </dd>
            </dl>
            <div class="cart-touch-delete">
              <i class="iconfont">&#xe6a3;</i>
            </div>
          </div>
        </li>
        <li class="cart-item">
          <div class="cart-shop">
            <i class="iconfont">&#xe6d7;</i>
            <h4>上海好熊食品有限公司
              <i class="iconfont">&#xe6a3;</i>
            </h4>
            <span class="cart-edit">编辑</span>
          </div>
          <div class="cart-detail">
            <i class="cart-selected iconfont">&#xe6d7;</i>
            <dl>
              <dt>
                <img src="../../assets/images/melon.gif" alt="">
              </dt>
              <dd>
                <p class="cart-name">天囍坊 爆款双人涤棉印花亲肤四件套2*2.3米被套包邮</p>
                <p class="cart-info">颜色: 白色 尺码: DX5</p>
                <p class="cart-price">
                  <span>¥1599.00</span>
                  <span>1件</span>
                  <i class="iconfont">&#xe80b;</i>
                </p>
              </dd>
            </dl>
            <div class="cart-touch-delete">
              <i class="iconfont">&#xe6a3;</i>
            </div>
          </div>
>>>>>>> 390559ac863b364701662ba5091b9230e8670aed
        </li>
      </ul>
      <div class="footer">
        <ul>
          <li class="cart-selectall">
            <div class="checkall">
              <i class="iconfont">&#xe645;</i>
              <span>全选</span>
            </div>
          </li>
          <li class="cart-total">
            <p>立省：
              <span class="money">¥0.00</span>
            </p>
            <p>
              总计：
              <span class="money">¥0.00</span>
            </p>
          </li>
          <li class="cart-pay">去付款</li>
          <!-- <li class="cart-delete"></li> -->
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
<<<<<<< HEAD
  import {
    CellSwipe
  } from "mint-ui";
  import Vue from 'vue';
  Vue.component(CellSwipe.name, CellSwipe);
  export default {
    data() {
      return {
        // isActive: false,
        circle: "&#xe6d7",
        lists: [{},{},{}],
        i: -1
      }
    },
    methods: { //单击事件等
      cartSelect(item,index) {
        if (item.isActive == void 0) {
          this.$set(item, "isActive", true)
          this.circle = "&#xe656";
        } else {
          item.isActive = !item.isActive;
          // this.circle = "&#xe6d7";
        }
       /*  if (index == this.isActive) {
          this.circle = "&#xe656";
          this.isActive = true;
        } else {
          this.circle = "&#xe6d7";
          this.isActive = false;
        } */
      }
    },
    components: {
      //			Position : position
    }

  }

</script>
<style lang="scss" scoped>


</style>
=======


</script>
>>>>>>> 390559ac863b364701662ba5091b9230e8670aed
