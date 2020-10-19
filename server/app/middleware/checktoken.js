function chektoken(){
    return async function(ctx,next){
        let token = ctx.request.header.token;
        if(token){
            try{
                ctx.app.jwt.verify(token,ctx.app.config.jwt.secret)
                await next();
            }catch(err){
                ctx.body = "没权限"
            }
        }else{
            ctx.body = "无权访问"
        }
    }
}
//前台登录页发送token 后台接收这个token并验证 
    //如果这个token通过验证 响应数据 如果没有通过验证响应另一个数据
    //这里用一个try方法 如果tokken不能通过验证则执行下面的代码 

module.exports = chektoken;