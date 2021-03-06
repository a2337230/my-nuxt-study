# 第二天

### 约定式路由

> ​	展示区： <nuxt />
>
> ​	name: 目录-目录-文件名...
>
> ​	子路由：目录下的同级文件为该目录下的一级路由，_开头的为当前路由参数，开头为index时为主入口

#### 一级路由
```
  <div>
      <Nuxt-link to="/">首页</Nuxt-link>
      <Nuxt-link to="/course">课程</Nuxt-link>
      <Nuxt />
  </div>
```

#### 二级路由

> ##### 在course下创建携带参数
>

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

##### 扩展路由简单示例

```nuxt
	// 扩展路由
    extendRuters(routes, resolve) {
      routes.push({
        name: 'home',
        path: '/index',
        components: resolve(__dirname, 'pages/index.vue')
      })
    }
```

##### 自定义错误页面

> ​	在layouts下创建error.vue 文件

```
<template>
  <div>
    {{error.message}}
  </div>
</template>
<script>
export default {
  name: 'error',
  // 接收的错误信息  err: {statusCode, message}
  props: ['error']
}
</script>
```

##### 设置全局路由动效

> ​	首先在nuxt.config.js下配置全局css

```
css: [
    'assets/css/transistion.css'
],
```

> ​	在css上写相应的过渡效果

```
/* 路由统一动效 */

/* 动画 */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
/* 入场-出场 */
.page-enter, .page-leave-active {
  opacity: 0;
}
```

##### 单独设置某个路由动效

> ​	在对应路由组件设置 transition 来定义动效指定的类名和动效，动效css也可以写在全局css中

```
<template>
  <div class="detail">
    <h3>分类</h3>
  </div>
</template>
<script>
export default {
  // 动画名称
  transition: 'detail'
}
</script>
<style>
  /* 动画 */
.detail-enter-active, .detail-leave-active {
  transition: transform .3s;
}
/* 入场-出场 */
.detail-enter, .detail-leave-active {
  /* opacity: 0; */
  transform: translateX(-100%);
}
</style>
```

##### 路由守卫

> ​	前置路由 	依赖中间件 middleware,插件
>
> ​								全局守卫： nuxt.config.js 中指向middleware
>
> ​													layouts 中定义中间件
>
> ​								组件独享守卫： middleware
>
> ​								插件全局守卫
>
> ​	后置路由	使用vue的 beforeRouteLeave 钩子
>
> ​								插件全局守卫

##### 前置路由守卫

```
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
```

```
middleware({store, route, redirect, params, query}) {
    console.log("布局层")
    // store 状态树信息
    // route 一条目标路由信息
    // redirect 路由强制跳转
    // 可利用params query 校验参数合法性
    // 举例  假如没有接收到id参数就返回首页
    // if (!params.id) {
    //   redirect('/index') // 此处写路由守卫逻辑
    // }
  }
```

> ##### 插件全局守卫

> 在 plugins下创建一个js，并在nuxt.config.js引入

![20201218161101](https://github.com/a2337230/my-nuxt-study/blob/main/nuxt-md-img/20201218161101.png)

```
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
```

> ##### 页面后置守卫

```
beforeRouteLeave(to, from, next) {
    // 页面后置守卫
  }
```

