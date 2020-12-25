export default function({$axios, router, redirect}) {
  // 基本配置
  // 超时时间
  $axios.defaults.timeout = 1000
  // 请求拦截
  $axios.onRequest(config => {
    // console.log('请求拦截', config)
    // 添加header
    config.headers.token = 'xxxxx'
    return config
  })
  // 响应拦截
  $axios.onResponse(res => {
    // 返回过程中判断逻辑
    // 例如没有登录
    if (res.data.code === 401 && router.fullPath !== '/login') {
      redirect('/login')
    }
    return res
  })
  // 异常处理
  $axios.onError(err => {
    // 返回错误信息
    return err
  })
}