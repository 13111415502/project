'use strict';

const Controller = require('egg').Controller;


class BookController extends Controller {
    async index() {
        let bookList = await this.ctx.service.book.bookList();
        if(bookList){
          this.ctx.body = {
            code:20000,
            data:bookList
          }
        }else{
          this.ctx.body = {
            code:50000,
            msg:"服务器异常"
          }
        }
      }
      async create() {
        let createBook = await this.ctx.service.book.create();
        if(createBook){
          this.ctx.body = {
            code:20000,
            data:createBook
          }
        }else{
          this.ctx.body = {
            code:50000,
            msg:"服务器异常"
          }
        }
      }
      async destroy() {
        let deleteBook = await this.ctx.service.book.destroy();
        if(deleteBook){
          this.ctx.body = {
            code:20000,
            data:deleteBook
          }
        }else{
          this.ctx.body = {
            code:50000,
            msg:"服务器异常"
          }
        }
      }
      async update() {
        let updateBook = await this.ctx.service.book.update();
        if(updateBook){
          this.ctx.body = {
            code:20000,
            data:updateBook
          }
        }else{
          this.ctx.body = {
            code:50000,
            msg:"服务器异常"
          }
        }
      }
  
}

module.exports = BookController;