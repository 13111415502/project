const Service = require("egg").Service;
const md5 = require("md5-node")

class LoginService extends Service{
    async login(username,password){
        try{
            let encryption = md5(password);
            console.log(encryption)
            console.log(password)
            let sql = await this.app.model.User.findAll({where:{username:username}})
            if(sql[0]){
                let user = sql[0].dataValues.username;
                let pass = sql[0].dataValues.password;
                if(username == user && encryption == pass){
                    let token = this.app.jwt.sign({username},this.app.config.jwt.secret);
                    return token
                }else{
                    return false
                }
            }else{
                return false
            }
            
            
        }catch(e){
            return false; 
        }
        
    }
    

   


}


module.exports = LoginService; 