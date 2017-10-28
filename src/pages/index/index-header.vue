<template lang="html">
     <div class="search">
        <div class="search_left">
            <i class="yo-ico">&#xe819;</i>
            <span>北京</span>
        </div>
        <!--<div class="search_center">-->
        <router-link to="search" class="search_center">
             <i class="yo-ico">&#xe65c;</i>
             <input type="text" placeholder="搜索商品" />
    	</router-link>
        <!--</div>-->
        <div class="search_right">
            <i class="yo-ico">&#xe689;</i>
            <span>扫一扫</span>
        </div>
     </div>
</template>

<script>
export default{
	data(){
		return{
			
		}
	}
}

</script>

