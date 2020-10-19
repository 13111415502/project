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
        <button @click="edit(items)">确认修改</button>
    </div>
</template>
<script>
import request from "../utils/request"
export default {
    data(){
        return{
            iframe_url: "",
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
            contents:{
                md_text:"",
                html_text:"",
                name:"",
                code:"",
                title:"",
                img:""
            },
            items:this.$route.params.id
            
        }
    },
    created(){
        this.getList();
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
        getList(){
            request.get(`/blogDetails/${this.items}`).then((res)=>{
                this.contents = res.data.data;
                this.content.name = this.contents.name;
                this.content.code = this.contents.code;
                this.content.img = this.contents.img;
                this.content.title = this.contents.title;
                this.items = this.contents.id;

                this.content.md_text = this.contents.md_text;
                this.fileList = [{ url:this.contents.img}];
            })
        },
        edit(items){
            request.put(`/blog/${items}`,{content:this.content}).then((res)=>{
                console.log(this.content)
                this.getList();
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