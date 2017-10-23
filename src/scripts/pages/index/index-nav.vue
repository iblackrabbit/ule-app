<template lang="html">
    <div class="nav_all">
        <div class="nav_pic">
            <div class="nav_bag">
                
            </div>
        </div>
        <div class="nav_list">
            <ul>
                <li>
                    <img src="https://m.360buyimg.com/mobilecms/jfs/t9148/265/2262017522/20130/a16ffd1e/59c8668cN980ed19e.png" alt="">
                    <span>邮乐农品</span>
                </li>
                 <li>
                    <img src="https://m.360buyimg.com/mobilecms/jfs/t9148/265/2262017522/20130/a16ffd1e/59c8668cN980ed19e.png" alt="">
                    <span>话费充值</span>
                </li>
                 <li>
                    <img src="https://m.360buyimg.com/mobilecms/jfs/t9148/265/2262017522/20130/a16ffd1e/59c8668cN980ed19e.png" alt="">
                    <span>领券中心</span>
                </li>
                 <li>
                    <img src="https://m.360buyimg.com/mobilecms/jfs/t9148/265/2262017522/20130/a16ffd1e/59c8668cN980ed19e.png" alt="">
                    <span>邮乐特卖</span>
                </li>
                 <li>
                    <img src="https://m.360buyimg.com/mobilecms/jfs/t9148/265/2262017522/20130/a16ffd1e/59c8668cN980ed19e.png" alt="">
                    <span>团购</span>
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
            navpic:''
        }
    },
    mounted() {
        axios.get('/api//mobilead/recommond/getMobileRecommond.do?sectionKeys=ule_wap_index%2CWAP_INDEX_NAV&isAlone=1&jsonApiCallback=define')
            .then((res)=>{
            const datalist = JSON.parse(res.data.substr(7,res.data.length-8));

            var navpic = datalist.WAP_INDEX_NAV.data;
            console.log(navpic)
        })
    }
    }

</script>

<style lang="scss">

</style>
