import axios from "axios"
//create可以创建一个axios的新对象同时可以配置这个新对象把重复路径写在这个新方法里
const request = axios.create({
    baseURL:process.env.VUE_APP_BASE_URL,
})
//请求拦截器 use方法后面加一个函数 rep请求的对象 每次发送请求的时候
//判断是否有token token在请求头里 请求头要带着数据访问后台进行验证 赋值给请求头
request.interceptors.request.use((req)=>{
    if(localStorage.getItem("token")){
        let token = localStorage.getItem("token");
        req.headers.token = token;
    }
    return req;
    
})  
export default request