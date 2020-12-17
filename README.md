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



# 第二天

### 约定式路由

​	展示区： <nuxt />

​	name: 目录-目录-文件名...

​	子路由：目录下的同级文件为该目录下的一级路由，_开头的为当前路由参数，开头为index时为主入口

#### 一级路由
```
  <div>
      <Nuxt-link to="/">首页</Nuxt-link>
      <Nuxt-link to="/course">课程</Nuxt-link>
      <Nuxt />
  </div>
```

#### 二级路由

##### 在course下创建携带参数

![1608174045418](https://github.com/a2337230/my-nuxt-study/blob/main/nuxt-md-img/1608174045418.png)

##### course下的代码

```html
<div class="course">
    课程
    <nuxt-link to="/course/1?a=1">分类1</nuxt-link>
    <nuxt-link to="/course/2?a=2">分类2</nuxt-link>
    <nuxt-link to="/course/3?a=3">分类3</nuxt-link>
    <nuxt-link to="/course/4?a=4">分类4</nuxt-link>
    <nuxt-link :to="{name: 'course-id', params: {id: 5}, query: {a: 1}}">分类5</nuxt-link>
    <nuxt />
  </div>
```

##### course/_id下的代码

```
<div class="detail">
    <h3>分类</h3>
</div>
```

##### 实际效果

![1608174257817](https://github.com/a2337230/my-nuxt-study/blob/main/nuxt-md-img/1608174257817.png)

------

##### 多级路由

![20201217153456](https://github.com/a2337230/my-nuxt-study/blob/main/nuxt-md-img/20201217153456.png)