'use strict';
const Controller = require('egg').Controller;

class LoginController extends Controller {

  async login(){
    try{
      let username = this.ctx.request.body.username;
      let password = this.ctx.request.body.password;
      const token = await this.ctx.service.login.login(username,password)
      if(token){
        this.ctx.body = {
          code:20000,
          message:true,
          token:token
        }
      }else{
        this.ctx.body = {
          code:40000,
          message:false
        }
      }
    }catch(e){
      this.ctx.body = {
          code:50000,
          message:false 
      }
    }
  }


  
}

module.exports = LoginController;
