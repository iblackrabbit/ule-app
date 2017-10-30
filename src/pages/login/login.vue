<template lang="html">
    <div class="login_all">
        <h3 class="login_title">
            <router-link<a href="javascript:history.go(-1);" ></a>登录
        </h3>
        <div class="login_content">               
            <div class="row">
                <div class="username">
                    <i class="yo-ico">&#xe736;</i>
                    <input type="text" placeholder="请输入您的手机号" name="username" id="username" v-model="username">
                </div>
                <div class="userpwd">
                    <i class="yo-ico">&#xe6c0;</i>
                    <input type="password" placeholder="请输入密码" name="pwd" id="userpwd" v-model="userpwd">
                </div>
            </div>
            <p class="error">{{errorMessage}}</p>
            <div class="login_bar" @click="logintest(username,userpwd)" :class="{changecolor:isActive}">
                <span>登录</span>
            </div>
            <div class="signin">
                <span>手机快速注册</span>
                <b>忘记密码？</b>
            </div>
        </div>

        <div class="union_login">
            <div class="title">
                <h3>一键登录</h3>
            </div>
            <div class="union_pic">
                <a href="javascript:;" class="qq_login">
                    <img src="https://i0.ulecdn.com/ulewap/i/qq_icon.png"/>
                    <span>QQ</span>
                </a>   
                <a href="" class="sina_login">
                    <img src="https://i0.ulecdn.com/ulewap/i/sina_icon.png"/>
                    <span>新浪微博</span>
                </a>                    
            </div>                
        </div>             
    </div>
</template>

<script>

export default{
    data(){
        return {
          errorMessage:"",
          username:"",
          userpwd:"",         
          change:"",
          usernamelength:false,
          userpwdlengrh:false,
          isActive:false
        }
    },
    methods:{
        logintest(name,pwd){                    
		 	if(/^1(3|5|8|7|4)\d{9}$/.test(name)&&/^[a-zA-Z_!@#][0-9a-zA-Z]{5,11}/.test(pwd)){           
                 this.errorMessage = "登录成功";
                 this.$store.commit({
					type : "getUsername",
					userName : this.username
                 });
                 this.$router.push({path:'/userself'})                   
            }else{
                this.errorMessage = "用户名或密码不正确"
            }
               
        },
        changing(){
            if( this.usernamelength&&this.userpwdlength){
                this.isActive = true;
            }else{
                 this.isActive = false;
            }
        }
    },
    computed:{

    },  
    watch:{
        username(){
           if(this.username.length>0){
               this.usernamelength = true;
           }else{
                this.usernamelength = false;
           }
           this.changing();        
        },
        userpwd(){
            if(this.userpwd.length>0){
               this.userpwdlength = true;
           }else{
                this.userpwdlength = false;
                this.errorMessage = "";
           } 
           this.changing();   
        }
    }
   
}

</script>

<style lang="scss">
    .changecolor{
       background: rgba(228,34,34,1)!important;
    }
</style>