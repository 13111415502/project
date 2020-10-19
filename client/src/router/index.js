import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home"
import Login from "../views/Login"
import Logout from "../views/Logout"
import Video from "../views/Video"
import Blog from "../views/Blog"
import Book from "../views/Book"
import Chapter from "../views/Chapter"
import Section from "../views/Section"
import SectionDetail from '../views/SectionDetail'
import EditBlog from "../views/EditBlog"
import AddtoBlog from "../views/AddtoBlog"
import Download from "../views/Download"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


Vue.use(VueRouter)

const routes = [
  {
    path:"/login",
    name:"Login",
    component: Login
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout,
    
    children:[
      {
        path: '/home',
        name: 'home',
        component: Home,
      },
      {
        path: '/download',
        name: 'Download',
        component: Download,
      },
      {
        path: '/video',
        name: 'Video',
        component: Video,
      },
      {
        path: '/blog',
        name: 'Blog',
        component: Blog,
      },
      {
        path:"/editblog/:id",
        name:"Editblog",
        component: EditBlog
      },
      {
        path:"/Addtoblog",
        name:"Addtoblog",
        component: AddtoBlog
      },
      {
        path:"/Book",
        name:"Book",
        component: Book
      },
      {
        path:"/chapter",
        name:"Chapter",
        component: Chapter
      },
      {
        path:"/section",
        name:"Seciton",
        component: Section
      },
      {
        path: '/section/:id',
        name: '',
        component: SectionDetail
      }, {
        path: '/createSection',
        name: '',
        component: SectionDetail
      },

    ]
  }
]

const router = new VueRouter({
  // mode: 'history',   //模式  history hash ，
  base: process.env.BASE_URL, //定义一个基础URL，用的是vue-cli默认的配置项。
  routes  //配置项
})
// 路由守卫 to是目标路径 如果当前页面是登录页 继续访问
// 如果不是进行判断 如果访问的页面有token可以继续访问 如果没有跳转到登录页面
router.beforeEach((to,from,next)=>{
  if(to.path == "/login"){
    next();
  }else{
    if(localStorage.getItem("token")){
      next();
    }else{
      next("/login")
    }
  }
})

export default router
