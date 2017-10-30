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
            <span class="cart-edit" @click="hiddenItem(item)">编辑</span>
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
                <div class="cart-item-info" v-if="!item.show">
                  <p class="cart-name">{{item.goodTitle}}</p>
                  <p class="cart-info">颜色: {{item.color}} 规格: {{item.size}}</p>
                  <p class="cart-price">
                    <span>¥{{item.price}}</span>
                    <span>{{item.count}}件</span>
                  </p>
                </div>
                  <div class="hidden-calc" v-else="item.show">
                    <div class="add-count">
                    <span @click="addCount(item,-1)">-</span> 
                    <input type="text" v-model="item.count"> 
                    <span @click="addCount(item,1)">+</span>
                  </div>
                    <div class="cart-price-2">
                      <span>¥{{item.price}}</span>
                      <span>{{item.count}}件</span>
                    </div>
                  </div>
                  
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
            <div class="checkall" @click="selectall" :class="{colorchange:this.saActive}">
              <i class="iconfont" :class="{colorchange_2:this.saActive}">&#xe645;</i>
              <span :class="{colorchange_2:this.saActive}">全选</span>
            </div>
          </li>
          <li class="cart-total">
            <p>立省：
              <span class="money">¥0.00</span>
            </p>
            <p>
              总计：
              <span class="money">¥{{sumPrice}}</span>
            </p>
          </li>
          <li class="cart-pay">去付款</li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
import { CellSwipe } from "mint-ui";
import Vue from "vue";
Vue.component(CellSwipe.name, CellSwipe);
import { getCartInfo } from "vuex";
export default {
  data() {
    return {
      isActive: false,
      circle: "&#xe656;",
      carts: {},
      i: -1,
      cartitems: [],
      isActiveAll: false,
      sumPrice: 0,
      saActive: false,
      show: false
    };
  },
  methods: {
    //单击事件等
    cartSelect(item, index) {
      if (item.isActive == void 0) {
        this.$set(item, "isActive", true);
        this.circle = "&#xe656";
        this.calcSum();
      } else {
        item.isActive = !item.isActive;
        this.calcSum();
      }
    },
    calcSum(state) {
      this.sumPrice = 0;
      this.cartitems.forEach(function(item) {
        if (item.isActive) {
          this.sumPrice += item.price * parseInt(item.count);
        }
        if (this.sumPrice == 0) {
          this.sumPrice = "0.00";
        }
      }, this);
    },
    selectall() {
      if (!this.isActiveAll) {
        this.cartitems.forEach(function(item) {
          this.$set(item, "isActive", true);
          this.isActiveAll = true;
          this.calcSum();
        }, this);
        this.saActive = true;
      } else {
        this.cartitems.forEach(function(item) {
          this.$set(item, "isActive", false);
          this.isActiveAll = false;
          this.calcSum(this.isActiveAll);
        }, this);
        this.saActive = false;
      }
    },
    cartDelete(index) {
      this.cartitems.splice(index, 1);
      this.sumPrice = 0;
    },
    hiddenItem(item) {
      console.log(item);
      this.$set(item, "show", !item.show);
      // this.show=!this.show;
    },
    addCount(item,val){
        item.count += val;
        this.calcSum();
			}
  },
  mounted() {
    this.cartitems = this.$store.state.cartInfo;
    this.calcSum();
  },
  watch: {
    /* "sumPrice":function(){
      this.cartitems.forEach(function(item){
        console.log(this.isActive);
        if(item.isActive){
          sumPrice += this.price*this.count;
        }
      }, this);
    } */
  },
  components: {
    //			Position : position
  }
};
</script>
<style lang="scss" scoped>

</style>
