<template lang="html">
    <div class="sec_all">
        <div class="sec_top">
            <p>
                <i class="yo-ico">&#xe708;</i>
                <b>掌上秒杀</b>
            </p>
            <span>距开始</span>
            <div class="seckill-timer" :count="setTime()">
                <div class="seckill-time"><span>{{hours}}</span></div>
                <span class="seckill-time-separator">:</span>
                <div class="seckill-time"><span>{{minutes}}</span></div>
                <span class="seckill-time-separator">:</span>
                <div class="seckill-time"><span>{{seconds}}</span></div>
             </div>
             <strong>周二 9点开抢</strong>
        </div>
        <div class="sec_content">
            <div class="sec_left">
                <div class="sec_left_img">
                    <router-link to="/detail/3037462" tag="a">
                        <img src="//pic3.ulecdn.com/pic/user_0102/product/prd20170915/dab34dbf88001399_p800x800_290x290.jpg"/>
                    </router-link>
                </div>  
                <div class="sec_goods">
                    <p>
                        <i class="yo-ico">&#xe757;</i>
                        <b>秒杀价</b>
                    </p>
                    <span>
                        <strong>￥</strong>
                        <b>19.9</b>
                    </span>
                    <em>赣南红心蜜柚</em>
                </div>
            </div>
             <div class="sec_left">
                <div class="sec_left_img">
                    <router-link tag="a" to="/detail/3034116">
                        <img src="https://pic1.ule.com/m/pic/user_800114393/product/prd20170923/ef65d28898894cf9_p800x800_sl.jpg"/>
                    </router-link>
                </div>  
                <div class="sec_goods">
                    <p>
                        <i class="yo-ico">&#xe757;</i>
                        <b>秒杀价</b>
                    </p>
                    <span>
                        <strong>￥</strong>
                        <b>12.9</b>
                    </span>
                    <em>温泉矿物卸妆水</em>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";


export default{
    data() {
        return {
           days:"", 
           hours:"",
           minutes:"",
           seconds:"" 
        }
    },
    methods:{
        timecount(){          
           var leftTime = new Date(2017,9,31,9,0,0) - new Date();
            this.days = parseInt(leftTime / 1000 / 60 / 60 / 24 , 10); //计算剩余的天数 
            this.hours = parseInt(leftTime / 1000 / 60 / 60 % 24 , 10); //计算剩余的小时 
            this.minutes = parseInt(leftTime / 1000 / 60 % 60, 10);//计算剩余的分钟 
            this.seconds = parseInt(leftTime / 1000 % 60, 10);//计算剩余的秒数 
            this.days = checkTime(this.days); 
            this.hours = checkTime(this.hours); 
            this.minutes = checkTime(this.minutes); 
            this.seconds = checkTime(this.seconds); 
            function checkTime(i){ //将0-9的数字前面加上0，例1变为01 
                if(i<10){
                    i = "0" + i; 
                }              
                 return i; 
             } 
                          
       },
      setTime(){         
           setInterval(this.timecount,1000);
       }   
    },
    mounted() {
       
    },
    updated(){

    }

}

</script>

<style lang="scss">

</style>
