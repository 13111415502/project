const Service = require("egg").Service;

class VideoService extends Service{
    async videoList(){
        try{
            let videoList  = await this.app.model.Video.findAll(); 
            return videoList;
        }catch(e){
            return null; 
        }
        
    }
    async create(){
        try{
            let content = this.ctx.request.body.content;
            this.app.model.Video.create({title:content.title,name:content.name,img:content.img,url:content.url});
            let createVideo = await this.app.model.Video.findAll(); 
            return createVideo;
        }catch(e){
            return null; 
        }
        
    }
    async destroy(){
        try{
            let id = this.ctx.params.id
            this.app.model.Video.destroy({where:{id:id}});
            let deleteVideo  = await this.app.model.Video.findAll(); 
            return deleteVideo;
        }catch(e){
            return null; 
        }
        
    }
    async update(){
        try{
            let id = this.ctx.params.id
            let content= this.ctx.request.body.content;
            this.app.model.Video.update({title:content.title,name:content.name,img:content.img,url:content.url},{where:{id:id}});
            let updateVideo  = await this.app.model.Video.findAll(); 
            return updateVideo;
        }catch(e){
            return null; 
        }
        
    }
   


}


module.exports = VideoService; 