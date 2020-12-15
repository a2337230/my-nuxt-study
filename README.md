# 第一天
## 生命周期
### nuxtServerInit
> 初始化时就会执行
### middleware 中间件
> 可以运行在nuxt.config.js中，也可以运行在layouts中，也可以运行在page中  执行顺序 配置层（nuxt.config.js）---》 布局层(layouts) ---》 页面层级(pages)
### validate 
> 只能用于页面级别，主要功能用于页面校验，可控制页面是否显示
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

