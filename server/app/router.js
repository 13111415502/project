'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller,middleware } = app;
  // vue 请求路径
  //登录页
  router.post('/login', controller.login.login);
  //下载页
  router.get('/download',middleware.checktoken(), controller.download.index);
  router.post('/download',middleware.checktoken(), controller.download.create);
  router.delete('/download/:id',middleware.checktoken(), controller.download.destroy);
  router.put('/download/:id',middleware.checktoken(), controller.download.update);
  //图片上传
  router.post('/picture', controller.picture.picture);
  //视频页
  router.get('/video',middleware.checktoken(), controller.video.index);
  router.post('/video',middleware.checktoken(), controller.video.create);
  router.delete('/video/:id',middleware.checktoken(), controller.video.destroy);
  router.put('/video/:id', middleware.checktoken(),controller.video.update);
  //博客页
  router.get('/blog',middleware.checktoken(), controller.blog.index);
  router.delete('/blog/:id', middleware.checktoken(),controller.blog.destroy);
  router.post('/blog',middleware.checktoken(), controller.blog.create);
  router.put('/blog/:id',middleware.checktoken(), controller.blog.update);
  router.get('/blogDetails/:id',middleware.checktoken(), controller.blog.show);
  //手册页
  router.get('/book',middleware.checktoken(), controller.book.index);
  router.post('/book',middleware.checktoken(), controller.book.create);
  router.delete('/book/:id',middleware.checktoken(), controller.book.destroy);
  router.put('/book/:id', middleware.checktoken(),controller.book.update);
  //章
  router.get('/chapter/:id', middleware.checktoken(),controller.chapter.index);
  router.post('/chapter',middleware.checktoken(), controller.chapter.create);
  router.delete('/chapter/:id',middleware.checktoken(), controller.chapter.destroy);
  router.put('/chapter/:id', middleware.checktoken(),controller.chapter.update);
  //节
  router.get('/section/:id', middleware.checktoken(),controller.section.index);
  router.delete('/section/:id',middleware.checktoken(), controller.section.destroy);
  router.post('/section',middleware.checktoken(), controller.section.create);
  router.put('/section/:id', middleware.checktoken(),controller.section.update);
  router.get('/sectionDetails/:id',middleware.checktoken(),controller.section.show);


  //nunjucks路径

  //首页
  router.get('/', controller.home.index);
  //下载页
  router.get('/resources', controller.home.download);
  //博客页
  router.get('/blogs', controller.home.blogs);
  router.get('/blogs/details/:id', controller.home.blogshow);
  //视频页
  router.get('/videos', controller.home.video);
  router.get('/video/details/:id', controller.home.videoshow);
  //手册页
  router.get('/books',controller.home.books);
  // 章节页
  router.get('/chapters/:id', controller.home.chapter);
  //节
  router.get('/sections/details/:id', controller.home.sectionshow);
};
