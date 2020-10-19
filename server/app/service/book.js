const Service = require("egg").Service;

class VideoService extends Service{
    async bookList(){
        try{
            let bookList  = await this.app.model.Book.findAll(); 
            return bookList;
        }catch(e){
            return null; 
        }
        
    }
    async create(){
        try{
            let content = this.ctx.request.body.content;
            this.app.model.Book.create({title:content.title,name:content.name,img:content.img});
            let createBook = await this.app.model.Book.findAll(); 
            return createBook;
        }catch(e){
            return null; 
        }
        
    }
    async destroy(){
        try{
            let id = this.ctx.params.id
            this.app.model.Book.destroy({where:{id:id}});
            let deleteBook  = await this.app.model.Book.findAll(); 
            return deleteBook;
        }catch(e){
            return null; 
        }
        
    }
    async update(){
        try{
            let id = this.ctx.params.id
            let content= this.ctx.request.body.content;
            this.app.model.Book.update({title:content.title,name:content.name,img:content.img},{where:{id:id}});
            let updateBook  = await this.app.model.Book.findAll(); 
            return updateBook;
        }catch(e){
            return null; 
        }
        
    }
   


}


module.exports = VideoService; 