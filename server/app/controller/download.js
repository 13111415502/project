'use strict';

const Controller = require('egg').Controller;


class DownloadController extends Controller {

    async index(){
        let downloadList = await this.ctx.service.download.downloadList();
        if(downloadList){
          this.ctx.body = {
            code:20000,
            data:downloadList
          }
        }else{
          this.ctx.body = {
            code:50000,
            msg:"服务器异常"
          }
        }
      }
      async create(){
        let createDownload = await this.ctx.service.download.create();
        if(createDownload){
          this.ctx.body = {
            code:20000,
            data:createDownload
          }
        }else{
          this.ctx.body = {
            code:50000,
            msg:"服务器异常"
          }
        }
      }

      async destroy(){
        let deleteDownload = await this.ctx.service.download.destroy();
        if(deleteDownload){
          this.ctx.body = {
            code:20000,
            data:deleteDownload
          }
        }else{
          this.ctx.body = {
            code:50000,
            msg:"服务器异常"
          }
        }
      }
      async update() {
        let updateDownload = await this.ctx.service.download.update();
        if(updateDownload){
          this.ctx.body = {
            code:20000,
            data:updateDownload
          }
        }else{
          this.ctx.body = {
            code:50000,
            msg:"服务器异常"
          }
        }
      }
  
}

module.exports = DownloadController;