const Service = require("egg").Service;

class BlogService extends Service{
    async blogList(){
        try{
            let blogList = await this.app.model.Blog.findAll();
            return blogList;
        }catch(e){
            return null; 
        }
        
    }
    async create(){
        try{
            let content = this.ctx.request.body.content;
            await this.app.model.Blog.create({img:content.img,name:content.name,code:content.code,title:content.title,md_text:content.md_text,md_html:content.html_text});
            let createBlog  = await this.app.model.Blog.findAll(); 
            return createBlog;
        }catch(e){
            return null; 
        }
        
    }
    async destroy(){
        try{
            let id = this.ctx.params.id;
            this.app.model.Blog.destroy({where:{id:id}});
            let deleteBlog  = await this.app.model.Blog.findAll(); 
            return deleteBlog;
        }catch(e){
            return null; 
        }
        
    }
    async update(){
        try{
            let id = this.ctx.params.id;
            let content = this.ctx.request.body.content;
            await this.app.model.Blog.update({img:content.img,name:content.name,code:content.code,title:content.title,md_text:content.md_text,md_html:content.html_text},{where:{id:id}});
            let updateBlog  = await this.app.model.Blog.findAll(); 
            return updateBlog;
        }catch(e){
            return null; 
        }
        
    }
    async show(){
        try{
            let id = this.ctx.params.id;
            let showBlog =  await this.app.model.Blog.findOne({where:{id:id}});
            return showBlog;
        }catch(e){
            return null; 
        }
        
    }
   


}


module.exports = BlogService; 