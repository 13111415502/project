# 英雄联盟_内容管理系统
## 一、宗旨
方便简单的浏览英雄联盟视频、资讯以及小说
## 二、启动项目
  1. 启动项目之前创建mysql数据库，数据库名称为 users
  2. 在server目录中使用npm install下载依赖，然后执行npm run dev即可启动项目
  3. 在client目录中使用npm install下载依赖，然后执行npm run serve即可启动项目
  4. 打开前段显示页面 http://127.0.0.1:7001/
  5. 打开后台控制页面登录页 http://127.0.0.1:7001/index.html#/login
  6. 登录账户为 admin 密码为aaaaa （已用md5进行加密）
## 三、目录结构
 1. server：项目服务器端（基于node，egg，mysql）
 2. client：项目前端（基于vue）
## 四丶项目功能介绍
1. 可以通过后台控制对展示页面的数据进行增删改查功能
2. 可操作的数据有 首页、书籍、下载链接、图片以及文字
3. 可展示的页面可分为PC/PE
