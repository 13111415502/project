const Service = require("egg").Service;

class ChapterService extends Service{
        //通过书的ID获取此书籍的章节
        async getChapterList(book_id) {
            try {
                const chapterList = await this.app.model.Chapter.findAll({
                    include: [{
                        model: this.app.model.Book,
                        as: 'book'
                    }],
                    where: {
                        book_id: book_id
                    }
                });
                return chapterList
            } catch (error) {
                console.log(error);
                return false
            }
        }
    async create(){
        try{
            let title = this.ctx.request.body.title;
            let book_id = this.ctx.request.body.book_id;
            this.app.model.Chapter.create({title:title,book_id:book_id});
            let createChapter = await this.app.model.Chapter.findAll(); 
            return createChapter;
        }catch(e){
            return null; 
        }
        
    }
    async destroy(){
        try{
            let id = this.ctx.params.id
            this.app.model.Chapter.destroy({where:{id:id}});
            let deleteChapter  = await this.app.model.Chapter.findAll(); 
            return deleteChapter;
        }catch(e){
            return null; 
        }
        
    }
    async update(){
        try{
            let id = this.ctx.params.id;
            let title = this.ctx.request.body.title;
            let book_id = this.ctx.request.body.book_id;
            this.app.model.Chapter.update({title:title,book_id:book_id},{where:{id:id}});
            let updateChapter  = await this.app.model.Chapter.findAll(); 
            return updateChapter;
        }catch(e){
            return null; 
        }
        
    }
   


}


module.exports = ChapterService; 