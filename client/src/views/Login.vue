<template>
    <div>
        <div class="box">
            <p>用户名：<el-input v-model="username" placeholder="请输入内容"></el-input></p>
            <p>密 码：<el-input v-model="password" placeholder="请输入密码" show-password></el-input></p>
            <el-button type="success" @click="login">登录</el-button>
        </div>
    </div>
</template>
<script>
import request from "../utils/request"
export default {
    data(){
        return{
            username:"",
            password:"",
        }
    },
    methods:{
        login(){
            request.post("/login",{
                username:this.username,
                password:this.password
            }).then((res)=>{
                if(res.data.code === 20000){
                    localStorage.setItem("token",res.data.token)
                    this.$router.push("/home")
                }else{
                    alert("用户名或密码错误")
          }
            })
        }
    }
}
</script>


<style>
.box{
    width: 400px;
    height: 100px;
    margin: 100px auto;
}
</style>