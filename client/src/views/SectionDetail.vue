<template>
    <div>
        <div class="title">
            <el-input v-model="title" placeholder="小节标题"></el-input>
        </div>
        <div id="main">
            <!-- 富文本编辑器 -->
            <mavon-editor
                class="title_titlem"
                ref="md"
                @change="changeData"
                @imgAdd="imgAdd"
                @imgDel="imgDel"
                v-model="md_text"
            />
            <div>
                <!-- 保存 -->
                <el-button type="success" @click="save" class="title_titleb">保存</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import request from "../utils/request";
export default {
    data() {
        return {
            fileList: [],
            md_text: "",
            html_text: "",
            title: "",
            orderby:"",
            headers: {
                token: "",
            },
        };
    },
    methods: {
        save(){
            if(this.id){
                this.updateSection();
            }else{
                this.createSection();
            }
        },
        createSection(){
            request({
                url:"/section",
                method:"post",
                data:{
                    md_text:this.md_text,
                    html_text:this.html_text,
                    title:this.title,
                    chapter_id:this.chapter_id,
                }
            }).then(() => {
                this.$router.push(`/section?chapter_id=${this.chapter_id}`)
            })
        },
        updateSection(){
            request({
                url:`/section/${this.id}`,
                method:"put",
                data:{
                    md_text:this.md_text,
                    html_text:this.html_text,
                    title:this.title,
                    chapter_id:this.chapter_id,
                }
            }).then(() => {
                this.$router.push(`/section?chapter_id=${this.chapter_id}`)
            })
        },
        getUploadUrl() {
            return process.env.VUE_APP_UPLOAD_API;
        },
        changeData(md_text,html_text) {
            this.html_text = html_text;
        },
        imgAdd(pos, $file) {
            // 第一步.将图片上传到服务器.
            var formdata = new FormData();
            formdata.append("image", $file);
            console.log($file, "$file");
            request({
                url: process.env.VUE_APP_UPLOAD_API,
                method: "post",
                data: formdata,
                headers: { "Content-Type": "multipart/form-data" },
            })
                .then((res) => {
                   
                    let url = res.data.data.file;
                    this.$refs.md.$img2Url(pos, url);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        imgDel() {},
        upload() {},
    },
    computed:{
        chapter_id(){
            return this.$route.query.chapter_id
        },
        id(){
            return this.$route.params.id;
        }
    },
    created(){
        if(this.id){
            request({
                url:`/sectionDetails/${this.id}`,
                method:"get",
            }).then((res) => {
                let section = res.data.data;
                this.title = section.title;
                this.fileList = [
                    {url:section.img}
                ]
                this.md_text = section.md_text;
                this.html_text = section.html_text;
                // this.chapter_id = section.chapter_id;
            })
        }
    }
};
</script>