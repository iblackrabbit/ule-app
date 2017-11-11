<template lang="html">
    <div class="nav_all">
        <div class="nav_pic">
            <router-link tag="div" to="/threebuy" class="nav_bag">
                <img src="../../assets/images/index_nav_bag.jpg"/>
            </router-link>
        </div>
        <div class="nav_list">
            <ul>
                <li v-for="list in datalist">
                    <img :src="list.imgUrl" alt="">
                    <span>{{list.title}}</span>
                </li>            
            </ul>
        </div> 
    </div>
</template>

<script>
import axios from 'axios';

export default{
    data() {
        return {
           datalist:[] 
        }
    },
    mounted() {
        axios.get('/mainhtml//mobilead/recommond/getMobileRecommond.do?sectionKeys=ule_wap_index%2CWAP_INDEX_NAV&isAlone=1&jsonApiCallback=define')
            .then((res)=>{
            var datalist = JSON.parse(res.data.substr(7,res.data.length-8));
            var navcontent = datalist.WAP_INDEX_NAV.data;   
            this.datalist = navcontent;      
        })        
    },
    methods:{

    }
}

</script>

<style lang="scss">

</style>
