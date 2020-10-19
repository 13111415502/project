const chapter = require("../model/chapter");

const Service = require("egg").Service;

class ChapterService extends Service{
        //通过书的ID获取此书籍的章节
        async getChapterList(chapter_id) {
            try {
                const sectionList = await this.app.model.Section.findAll({
                    include: [{
                        model: this.app.model.Chapter,
                        as: 'chapter'
                    }],
                    where: {
                        chapter_id: chapter_id
                    }
                });
                return sectionList
            } catch (error) {
                console.log(error);
                return false
            }
        }
        async showSection(id) {
            try {
                const section = await this.app.model.Section.findOne({
                    where: {
                        id
                    }
                });
                return section
            } catch (error) {
                return false
            }
        }


    async create(){
        try{
            let title = this.ctx.request.body.title;
            let chapter_id = this.ctx.request.body.chapter_id;
            let md_text = this.ctx.request.body.md_text;
            let html_text = this.ctx.request.body.html_text;
            this.app.model.Section.create({title:title,chapter_id:chapter_id,md_text:md_text,html_text:html_text});
            let createSeciton = await this.app.model.Chapter.findAll(); 
            return createSeciton;
        }catch(e){
            return null; 
        }
        
    }
    async destroy(){
        try{
            let id = this.ctx.params.id
            this.app.model.Section.destroy({where:{id:id}});
            let deleteSeciton  = await this.app.model.Chapter.findAll(); 
            return deleteSeciton;
        }catch(e){
            return null; 
        }
        
    }
    async update(){
        try{
            let id = this.ctx.params.id;
            let title = this.ctx.request.body.title;
            let chapter_id = this.ctx.request.body.chapter_id;
            let md_text = this.ctx.request.body.md_text;
            let html_text = this.ctx.request.body.html_text;
            this.app.model.Section.update({title:title,chapter_id:chapter_id,md_text:md_text,html_text:html_text},{where:{id:id}});
            let updateSeciton  = await this.app.model.Section.findAll(); 
            return updateSeciton;
        }catch(e){
            return null; 
        }
        
    }
   


}


module.exports = ChapterService; 