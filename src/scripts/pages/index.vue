<template lang="html">
  <div class="ule-index">
    <router-view></router-view>
    <indexFooter></indexFooter>
  </div>
</template>

<script>
import VueRouter from "vue-router";
import indexFooter from "./index/index-footer.vue";
import "../../media/iconfont/iconfont.ttf";
import "../../media/iconfont/iconfont.woff";

export default {
  components: {
    indexFooter: indexFooter
  }
};
</script>
<style lang="scss">
@import "../../styles/app.scss";
.ule-index {
  @include flexbox();
  @include flex-direction(column);
  height: 100%;
}
</style>

                                             