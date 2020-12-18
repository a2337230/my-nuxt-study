// 可接受服务端信息
// middleware
export default ({store,route,redirect, params, query, req, res}) => {
  // context 服务器上下文
  // 全局守卫业务
  // store 状态树信息
  // route 一条目标路由信息
  // redirect 路由强制跳转
  // 可利用params query 校验参数合法性
  // 举例  假如没有接收到id参数就返回首页
  // if (!params.id) {
  //   redirect('/index') // 此处写路由守卫逻辑
  // }
  console.log(params, route, !params.id && route.name !== 'index')
}