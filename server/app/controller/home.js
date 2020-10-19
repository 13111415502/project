'use strict';

const Controller = require('egg').Controller;
const section = require('../model/section');
const checkagent = require("../until/checkagent")

class HomeController extends Controller {
  //主页
  async index() {
    const ua = checkagent(this.ctx.request.header["user-agent"])
      let video = await this.app.model.Video.findAll();
      let blog = await this.app.model.Blog.findAll();
    if(ua){
     
      await this.ctx.render("pc/index",{blog:blog,video})
    }else{
      await this.ctx.render("phone/home",{blog:blog,video})
     
    }
  }
  //下载页
  async download() {
    let content = await this.app.model.Resource.findAll();
    const ua = checkagent(this.ctx.request.header["user-agent"])
    if(ua){
      
      await this.ctx.render("pc/resources",{content:content})
 
    }else{

      await this.ctx.render("phone/resource",{content:content})
     
    }
  }
//视频页
  async video() {
    let content = await this.app.model.Video.findAll();
    const ua = checkagent(this.ctx.request.header["user-agent"])
    if(ua){
      await this.ctx.render("pc/video",{content:content})
 
    }else{
      await this.ctx.render("phone/video",{content:content})
     
    }
  }
  //视频详情页
  async videoshow() {
    let id = this.ctx.params.id;
    let content =  await this.app.model.Video.findOne({where:{id:id}}) 
    let contents = await this.app.model.Video.findAll();
    if(content){
    const ua = checkagent(this.ctx.request.header["user-agent"])
    if(ua){
      let contents  = await this.app.model.Video.findAll(); 
      await this.ctx.render("pc/videoDetails",{content:content,contents})
 
    }else{
      await this.ctx.render("phone/video_detail",{content:content,contents})
    } 
      
    }else{
      this.ctx.body = "获取数据失败"
    }
     
  }
  //博客页
  async blogs() {
    let content = await this.app.model.Blog.findAll();
    const ua = checkagent(this.ctx.request.header["user-agent"])
    if(ua){
      
      await this.ctx.render("pc/blogs",{content:content})
 
    }else{
      await this.ctx.render("phone/blog",{content:content})
    }
  }
  //博客详情页
  async blogshow() {
      let id = this.ctx.params.id;
      let content =  await this.app.model.Blog.findOne({where:{id:id}}) 
      let contents = await this.app.model.Blog.findAll();
      const ua = checkagent(this.ctx.request.header["user-agent"])
      if(ua){
      await this.ctx.render("pc/blogDetails",{content:content,contents})
   
 
    }else{
      await this.ctx.render("phone/blog_detail",{content:content,contents})
     
    } 
  }

  //手册页
  async books() {
    let content = await this.app.model.Book.findAll();
    const ua = checkagent(this.ctx.request.header["user-agent"])
    if(ua){
      await this.ctx.render("pc/books",{content:content})
 
    }else{
      await this.ctx.render("phone/book",{content:content})
     
    }
  }
  // 章页
  async chapter() {

    let contents = await this.app.model.Book.findAll();
    let id = this.ctx.params.id;
    let content = await this.app.model.Chapter.findAll(
      {
        include:[
          {
            model:this.app.model.Book,
            as:"book"
          } 
        ],where:{book_id:id}
  }
  
);
  //获取章的ID

    let chapter = await this.app.model.Chapter.findAll(
      {
        include:[
          {
            model:this.app.model.Book,
            as:"book"
          } 
        ],where:{book_id:id}
  }
    );
    let max = chapter;
    
    for(let item of chapter){
        max = item;
        //所有章的id
        let chapter_id = max.dataValues.id
        //根据所有章的id查找所有小结
        let section = await this.app.model.Section.findAll(
          {
              include:[
           {
             model:this.app.model.Chapter,
              as:"chapter"
           } 
         ],where:{chapter_id:chapter_id}

          }
          
        );
        item.sectionList = section;

    }

    const ua = checkagent(this.ctx.request.header["user-agent"])
    if(ua){
    
    await this.ctx.render("pc/chapter",{content:content,contents,chapter})
  }else{
    await this.ctx.render("phone/chapter",{content:content,contents,chapter})
   
  } 
}



 //节详情页
 async sectionshow() {
  let id = this.ctx.params.id;
  let content =  await this.app.model.Section.findOne({where:{id:id}}) 
  let chapters_id =  await this.app.model.Chapter.findOne({where:{id:content.chapter_id}}) 
  let books_id = await this.app.model.Book.findOne({where:{id:chapters_id.book_id}});

  let chapter = await this.app.model.Chapter.findAll(
    {
      include:[
        {
          model:this.app.model.Book,
          as:"book"
        } 
      ],where:{book_id:books_id.id}
}
  );
  let max = chapter;
  
  for(let item of chapter){
      max = item;
      //所有章的id
      let chapter_id = max.dataValues.id
      //根据所有章的id查找所有小结
      let section = await this.app.model.Section.findAll(
        {
            include:[
         {
           model:this.app.model.Chapter,
            as:"chapter"
         } 
       ],where:{chapter_id:chapter_id}

        }
        
      );
      item.sectionList = section;

  }



  const ua = checkagent(this.ctx.request.header["user-agent"])
  if(ua){
  
  await this.ctx.render("pc/sectionShow",{content:content,chapter,books_id})


}else{
  await this.ctx.render("phone/book_detail",{content:content,chapter,books_id})
 
} 
}



}

module.exports = HomeController;
