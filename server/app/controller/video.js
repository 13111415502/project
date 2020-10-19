'use strict';

const Controller = require('egg').Controller;


class VideoController extends Controller {
    async index() {
        let videoList = await this.ctx.service.video.videoList();
        if(videoList){
          this.ctx.body = {
            code:20000,
            data:videoList
          }
        }else{
          this.ctx.body = {
            code:50000,
            msg:"服务器异常"
          }
        }
      }
      async create() {
        let createVideo = await this.ctx.service.video.create();
        if(createVideo){
          this.ctx.body = {
            code:20000,
            data:createVideo
          }
        }else{
          this.ctx.body = {
            code:50000,
            msg:"服务器异常"
          }
        }
      }
      async destroy() {
        let deleteVideo = await this.ctx.service.video.destroy();
        if(deleteVideo){
          this.ctx.body = {
            code:20000,
            data:deleteVideo
          }
        }else{
          this.ctx.body = {
            code:50000,
            msg:"服务器异常"
          }
        }
      }
      async update() {
        let updateVideo = await this.ctx.service.video.update();
        if(updateVideo){
          this.ctx.body = {
            code:20000,
            data:updateVideo
          }
        }else{
          this.ctx.body = {
            code:50000,
            msg:"服务器异常"
          }
        }
      }
  
}

module.exports = VideoController;