<template lang="html">
  <div class="m-cart">
    <header>
      <h4>购物车</h4>
      <span>编辑全部</span>
    </header>
    <section>
      <ul class="cart-list">
        <li class="cart-item" v-for="(item,index) in cartitems">
          <div class="cart-shop">
            <i class="iconfont cart-circle" @click="cartSelect(item)" v-html="circle" :class="{ active: item.isActive }"></i>
            <h4>{{item.shopName}}
              <i class="iconfont">&#xe6a3;</i>
            </h4>
            <span class="cart-edit">编辑</span>
          </div>
          <mt-cell-swipe class="cart-cellswipe" :right="[
            {
              content: '删除',
              style: { background: 'red', color: '#fff' },
              handler: () => cartDelete(index)
            }
          ]">
            <div class="cart-detail">
              <i class="cart-selected iconfont" @click="cartSelect(item)" v-html="circle" :class="{ active: item.isActive }"></i>
              <dl>
                <dt>
                  <img :src="item.img" alt="">
                </dt>
                <dd>
                  <p class="cart-name">{{item.goodTitle}}</p>
                  <p class="cart-info">颜色: 白色 尺码: DX5</p>
                  <p class="cart-price">
                    <span>¥{{item.price}}</span>
                    <span>{{item.count}}件</span>
                    <i class="iconfont">&#xe80b;</i>
                  </p>
                </dd>
              </dl>
              <div class="cart-touch-delete">
                <i class="iconfont">&#xe6a3;</i>
              </div>
            </div>
          </mt-cell-swipe>
        </li>
      </ul>
      <div class="footer">
        <ul>
          <li class="cart-selectall">
            <div class="checkall" @click="selectall">
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
import { CellSwipe } from "mint-ui";
import Vue from "vue";
Vue.component(CellSwipe.name, CellSwipe);
import {getCartInfo} from "vuex";
export default {
  data() {
    return {
      isActive: false,
      circle: "&#xe6d7",
      carts: {},
      i: -1,
      cartitems:[],
      isActiveAll:false
    };
  },
  methods: {
    //单击事件等
    cartSelect(item, index) {
      if (item.isActive == void 0) {
        this.$set(item, "isActive", true);
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
    },
    selectall(){
      var cartSwitch = true;
      this.cartitems.forEach(function(item) {
        console.log(item.isActive);
        if(!item.isActive){
          cartSwitch = false;
        }
      }, this);
      if(!cartSwitch){
				this.isSelectAll = false;
			} else {
				this.isSelectAll = true;
			}
    },
    cartDelete(index){
      console.log(index);
      this.cartitems.splice(index, 1); 
    }
  },
   mounted() {
        this.cartitems = this.$store.state.cartInfo ;
  },
  components: {
    //			Position : position
  }
};
</script>
<style lang="scss" scoped>

</style>
