'use strict';

const Controller = require('egg').Controller;


class SectionController extends Controller {
    //查看所有章
    async index() {
        try {
            let chapter_id = this.ctx.params.id;
            const sectionList = await this.ctx.service.section.getChapterList(chapter_id);
            this.ctx.body = {
                code: 20000,
                message: true,
                data: sectionList
            }
        } catch (error) {
            this.ctx.body = {
                code: 30000,
                message: false,
                data: '失败'
            }
        }

    }
    async show() {
        try {
            let id = this.ctx.params.id;
            const section = await this.ctx.service.section.showSection(id);
            this.ctx.body = {
                code: 20000,
                message: true,
                data: section
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
        let createSeciton = await this.ctx.service.section.create();
        if(createSeciton){
          this.ctx.body = {
            code:20000,
            data:createSeciton
          }
        }else{
          this.ctx.body = {
            code:50000,
            msg:"服务器异常"
          }
        }
      }
      async destroy() {
        let deleteSection = await this.ctx.service.section.destroy();
        if(deleteSection){
          this.ctx.body = {
            code:20000,
            data:deleteSection 
          }
        }else{
          this.ctx.body = {
            code:50000,
            msg:"服务器异常"
          }
        }
      }
      async update() {
          console.log(1)
        let updateSection = await this.ctx.service.section.update();
        if(updateSection){
          this.ctx.body = {
            code:20000,
            data:updateSection
          }
        }else{
          this.ctx.body = {
            code:50000,
            msg:"服务器异常"
          }
        }
      }
  
}

module.exports = SectionController;