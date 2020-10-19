'use strict';

const Controller = require('egg').Controller;


class ChapterController extends Controller {
    //查看所有章
    async index() {
        try {
            let book_id = this.ctx.params.id;
            const chapterList = await this.ctx.service.chapter.getChapterList(book_id);
            this.ctx.body = {
                code: 20000,
                message: true,
                data: chapterList
            }
        } catch (error) {
            this.ctx.body = {
                code: 30000,
                message: false,
                data: '失败'
            }
        }

    }
      async create() {
        let createChapter = await this.ctx.service.chapter.create();
        if(createChapter){
          this.ctx.body = {
            code:20000,
            data:createChapter
          }
        }else{
          this.ctx.body = {
            code:50000,
            msg:"服务器异常"
          }
        }
      }
      async destroy() {
        let deleteChapter = await this.ctx.service.chapter.destroy();
        if(deleteChapter){
          this.ctx.body = {
            code:20000,
            data:deleteChapter
          }
        }else{
          this.ctx.body = {
            code:50000,
            msg:"服务器异常"
          }
        }
      }
      async update() {
        let updateChapter = await this.ctx.service.chapter.update();
        if(updateChapter){
          this.ctx.body = {
            code:20000,
            data:updateChapter
          }
        }else{
          this.ctx.body = {
            code:50000,
            msg:"服务器异常"
          }
        }
      }
  
}

module.exports = ChapterController;