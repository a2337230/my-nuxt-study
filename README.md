# 第一天
## 生命周期
### nuxtServerInit
> 初始化时就会执行

### middleware 中间件
> 可以运行在nuxt.config.js中，也可以运行在layouts中，也可以运行在page中  执行顺序 配置层（nuxt.config.js）---》 布局层(layouts) ---》 页面层级(pages)
```
  // 配置中间件
  router: {
    middleware: 'auth'
  },
```
```
  // middleware: 'auth'
  middleware() {
    console.log("布局层")
  }
```
### validate 
> 只能用于页面级别，主要功能用于页面校验，可控制页面是否显示,校验失败将自动跳转到错误页面
```
  validate({params, query}) {
    console.log('vaildate', params, query)
    if (query.id) {
      return false
    } else {
      return true
    }
  }
```

### asyncData 
> 通常用于异步业务逻辑读取服务端数据，并将数据返回给目标组件

### fetch 
> 通常用于异步业务逻辑读取服务端数据，并将数据返回给vuex

### beforeCreate\create 运行在服务端和客户端

### activated 等在nuxt中不存在

### mounted 等其他VUE钩子只会在客户端运行

### 在服务端可访问上下文对象，客户端可访问window对象

### 服务端this 指向undefind，客户端this指向Vue实例