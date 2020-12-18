export default ({app, redirect}) => {
  console.log('插件', app, redirect)
  // app Vue实例
  // redirect 跳转函数
  app.router.beforeEach((to, from, next) => {
    // 跳转逻辑
    next()
  })
  app.router.afterEach((to, from) => {
    console.log('插件后置路由')
    next()
  })
}