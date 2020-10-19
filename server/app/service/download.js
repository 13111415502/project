const Service = require("egg").Service;

class DownloadService extends Service{
    async downloadList(){
        try{
            let downloadList = await this.app.model.Resource.findAll();
            return downloadList;
        }catch(e){
            return null; 
        }
        
    }
    async create(){
        try{
            let content = this.ctx.request.body.content;
            await this.app.model.Resource.create({title:content.title,code:content.code,img:content.img,url:content.url});
            let createDownload = await this.app.model.Resource.findAll();
            return createDownload;
        }catch(e){
            return null; 
        }
        
    }
    async destroy(){
        try{
            let id = this.ctx.params.id;
            this.app.model.Resource.destroy({where:{id:id}});
            let deleteDownload  = await this.app.model.Resource.findAll(); 
            return deleteDownload;
        }catch(e){
            return null; 
        }
        
    }
    async update(){
        try{
            let id = this.ctx.params.id
            let content= this.ctx.request.body.content;
            this.app.model.Resource.update({title:content.title,code:content.code,img:content.img,url:content.url},{where:{id:id}});
            let updateDownload  = await this.app.model.Resource.findAll(); 
            return updateDownload;
        }catch(e){
            return null; 
        }
        
    }
   


}


module.exports = DownloadService; 