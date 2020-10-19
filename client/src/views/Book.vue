<template>
    <div class="resource">
        <el-button type="btn" @click="createResource">添加书籍</el-button>
        <el-table :data="contents" border>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column label="封面">
                <template slot-scope="scope">
                    <img class="pic" :src="scope.row.img" alt="">
                </template>
            </el-table-column>
            <el-table-column prop="title" label="简介"></el-table-column>
            <el-table-column label="操作" width="200">
                <template slot-scope="scope">
                    <el-button
                        @click="updateResource(scope.row.id,scope.row)"
                        type="text"
                        size="small"
                    >编辑</el-button>
                    <el-button @click="deleteRosource(scope.row.id)" type="text" size="small">删除</el-button>
                    <el-button @click="updateChapter(scope.row.id)" type="text" size="small">查看章</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog title="添加" :visible.sync="dialogVisible" width="30%">
            <el-form>
                <el-form-item label="书籍名称"> 
                    <el-input v-model="content.name"></el-input>
                </el-form-item>
                <el-form-item label="简介">
                    <el-input v-model="content.title"></el-input>
                </el-form-item>
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
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="save">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import request from "../utils/request"
export default {
    data(){
        return{
            fileList: [
                // {
                    // name: "name",
                    // url:this.title.img,
                // }
            ],
            updateId: 0,
            contents:[],
            dialogVisible: false,
            isEdit: false,
            content:{
            url:"",
            name:"",
            img:"", 
            title: "",
            }

        }
    },
      created(){
        this.getList()
    },
    methods: {
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
            request.get("/book").then((res)=>{
                this.contents = res.data.data
            })
        },
        deleteRosource(id) {
            this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
            })
                .then(() => {
                    request.delete(`/book/${id}`).then(() => {
                        this.$message({
                            type: "success",
                            message: "删除成功!",
                        });
                        this.getList();
                    });
                })
                .catch(() => {
                    this.$message({
                        type: "info",
                        message: "已取消删除",
                    });
                });
        },
        createResource() {
            this.dialogVisible = true;
            this.title = "";
            this.isEdit = false;
        },
        save() {
            if (this.isEdit) {
                request
                    .put(`/book/${this.updateId}`, {content:this.content})
                    .then(() => {
                        this.getList();
                        this.dialogVisible = false;
                        location.reload();
                    });
            } else {
                request
                    .post(`/book`, {content:this.content})
                    .then(() => {
                        this.getList();
                        this.dialogVisible = false;
                        
                    });
            }
        },
        updateResource(id,row){
            this.updateId = id;
            this.dialogVisible = true;
            this.content.title = row.title;
            this.content.name = row.name;
            this.content.img = row.img;
            this.isEdit = true;
            this.fileList = [{ url:this.content.img}];
            
        },
        updateChapter(id){
            this.$router.push(`/chapter?book_id=${id}`);
        }
        
    }

 };
</script>

<style scoped>
.resource .pic {
    width: 50px;
    height: 50px;
}
</style>

