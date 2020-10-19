<template>
    <div>
        <el-upload
            :action="getUploadUrl()"
            list-type="picture-card"
            :limit="1"
            :on-exceed="handleExceed"
            :on-success="success"
            :file-list="fileList"
        >
        <i class="el-icon-plus"></i>
        </el-upload>
        <input type="text" v-model="content.name" placeholder="添加标题">
        <input type="text" v-model="content.code" placeholder="添加时间">
        <input type="text" v-model="content.title" placeholder="添加简介">
        <mavon-editor @change="changeText" v-model="content.md_text"/>
        <button @click="addto">添加</button>

    </div>
</template>
<script>
import request from "../utils/request"
export default {
    data(){
        return{
            fileList: [
             
            ],
            content:{
                md_text:"",
                html_text:"",
                name:"",
                code:"",
                title:"",
                img:""
                
            },
        }
    },
    methods:{
         getUploadUrl() {
            return process.env.VUE_APP_BASE_URL+"/picture";
        },
        handleExceed(files, fileList) {
            this.$message.warning("只能上传一张图片！");
        },
        success(res){
            this.content.img = res.data.file;
        },
        addto(){
            request.post("/blog",{content:this.content}).then((res)=>{
                this.$router.push("/blog")
            })
        },
        changeText(value,render){
            this.content.md_text = value;
            this.content.html_text = render;
        }
    }
}
</script>