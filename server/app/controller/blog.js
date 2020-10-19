'use strict';

const Controller = require('egg').Controller;


class BlogController extends Controller {

    async index() {
        let blogList = await this.ctx.service.blog.blogList();
        if(blogList){
          this.ctx.body = {
            code:20000,
            data:blogList
          }
        }else{
          this.ctx.body = {
            code:50000,
            msg:"服务器异常"
          }
        }
      }
    
      async show(){
        let showBlog = await this.ctx.service.blog.show();
        if(showBlog){
          this.ctx.body = {
            code:20000,
            data:showBlog
          }
        }else{
          this.ctx.body = {
            code:50000,
            msg:"服务器异常"
          }
        }
    
      }
      async update(){
        let updateBlog = await this.ctx.service.blog.update();
        if(updateBlog){
          this.ctx.body = {
            code:20000,
            data:updateBlog
          }
        }else{
          this.ctx.body = {
            code:50000,
            msg:"服务器异常"
          }
        }
    
      }
      async create(){
        let createBlog = await this.ctx.service.blog.create();
        if(createBlog){
          this.ctx.body = {
            code:20000,
            data:createBlog
          }
        }else{
          this.ctx.body = {
            code:50000,
            msg:"服务器异常"
          }
        }
      }
      async destroy(){
        let deleteBlog = await this.ctx.service.blog.destroy();
        if(deleteBlog){
          this.ctx.body = {
            code:20000,
            data:deleteBlog
          }
        }else{
          this.ctx.body = {
            code:50000,
            msg:"服务器异常"
          }
        }
      
    
      }

  
}

module.exports = BlogController;