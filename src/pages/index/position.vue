<template lang="html">
  <div class="m-index">
      <header>
           <indexheader></indexheader>          
      </header>
      <section>
           <Topslideshow></Topslideshow>
           <indexnav></indexnav>
           <Seckill></Seckill>
           <Phonevip></Phonevip>
           <Farmprd></Farmprd>
           <Goodshop></Goodshop> 
           <Maybeyoulike></Maybeyoulike>
      </section>
      <footer>
        <router-view></router-view>
            <!-- <indexfooter></indexfooter> -->
      </footer>
  </div>
</template>

<script>
import "../../assets/iconfont/iconfont.ttf";
import "../../assets/iconfont/iconfont.woff";

import indexheader from "./index-header.vue";
import Topslideshow from "./topslideshow.vue";
import indexnav from "./index-nav.vue";
import indexfooter from "./index-footer.vue";
import Goodshop from "./goodshop.vue";
import Maybeyoulike from "./maybeyoulike.vue";
import Phonevip from "./phonevip.vue";
import Seckill from "./seckill.vue";
import Farmprd from "./farmprd.vue";

export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    indexheader: indexheader,
    Topslideshow: Topslideshow,
    indexnav: indexnav,
    indexfooter: indexfooter,
    Goodshop: Goodshop,
    Maybeyoulike: Maybeyoulike,
    Phonevip: Phonevip,
    Seckill: Seckill,
    Farmprd: Farmprd
  }
};
</script>

<style lang="scss">

</style>