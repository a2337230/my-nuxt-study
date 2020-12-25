## 前言 github 图片不显示解决方法

```
修改hosts

C:\Windows\System32\drivers\etc\hosts

在文件末尾添加：

# GitHub Start 
192.30.253.112    Build software better, together 
192.30.253.119    gist.github.com
151.101.184.133    assets-cdn.github.com
151.101.184.133    raw.githubusercontent.com
151.101.184.133    gist.githubusercontent.com
151.101.184.133    cloud.githubusercontent.com
151.101.184.133    camo.githubusercontent.com
151.101.184.133    avatars0.githubusercontent.com
151.101.184.133    avatars1.githubusercontent.com
151.101.184.133    avatars2.githubusercontent.com
151.101.184.133    avatars3.githubusercontent.com
151.101.184.133    avatars4.githubusercontent.com
151.101.184.133    avatars5.githubusercontent.com
151.101.184.133    avatars6.githubusercontent.com
151.101.184.133    avatars7.githubusercontent.com
151.101.184.133    avatars8.githubusercontent.com

 # GitHub End
```

# 第一天

## 创建项目

```
npx create-nuxt-app nuxtDemo
```



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

## 第三天

#### 数据交互

> ​	需要用到的依赖 @nuxtjs/axios、@nuxt/proxy
>
>  	npm i @nuxtjs/axios @nuxtjs/proxy --save

###### 在nuxt.config.js中引入

```
  modules: [
    '@nuxtjs/axios'
  ],
```

###### 配置跨域

```
axios: {
    proxy: true
  },
  proxy: {
    '/api/': {
      target: "http://xxxxx.com",
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }
  },
```

##### axios拦截器配置

​	在plugins中创建axios.js

```
export default function({$axios, router, redirect}) {
  // 基本配置
  // 超时时间
  $axios.defaults.timeout = 1000
  // 请求拦截
  $axios.onRequest(config => {
    console.log('请求拦截', config)
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
```

###### 配置系统默认loading

​	在nuxt.js加入以下代码

```
// 定义系统默认loading
  loading: {
    color: '#f20',
    height: '3px'
  },
```

###### 配置自定义loading

```
loading: '~/components/loading.vue',
```

###### loading文件代码格式如下

```
<template>
  <div v-if="loading">
    <!-- loading页布局 -->
    loading
  </div>
</template>
<script>
export default {
  name: 'loading',
  data() {
    return {
      loading: false
    }
  },
  methods: {
    // 加载开始
    start() {
      this.loading = true
    },
    // 加载结束
    finish() {
      this.loading = false
    }
  }
}
</script>
```

## 第四天

在plugins中新建一个文件，例如叫做mixins.js

假如 内部写入一个方法

```
// 定义全局方法
import Vue from 'vue'

let isShow = () => console.log('这是一个全局方法')

Vue.prototype.$show = isShow; // 在服务器钩子内部不可以使用，this不会指向Vue实例
```

之后就可以在组件内部调用

```
mounted() {
    this.$show()
  },
```

#### 定义全局过滤器

在真实项目中可能过滤器会非常多，这里我们创建一个JS文件区分各种过滤器

例如时间过滤器

```
import moment from 'moment'
export function timeFormat(val) {
  return moment(val).format('YYYY-MM-DD HH:mm:ss')
}
export function timeFormat1(val) {
  return moment(val).format('YYYY-MM-DD HH:mm')
}
```

在mixins中引入全局过滤器

```
// 定义全局方法
import Vue from 'vue'

let isShow = () => console.log('这是一个全局方法')

Vue.prototype.$show = isShow; // 在服务器钩子内部不可以使用，this不会指向Vue实例

// 全局过滤器
import * as filters from '../assets/js/TimeFilters'

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));
```

在组件中使用

```
<div class="container">
  <p>当前时间:{{time | timeFormat}}</p>
  <p>当前时间:{{time | timeFormat1}}</p>
</div>
```

#### 公共组件

与Vue用法相同

首先创建一个公共组件，例如

```
<template>
  <div>
    <button>一个公共组件按钮</button>
  </div>
</template>
```

全局引入

```
// 全局组件
import XlButton from './../components/xlButton.vue'
Vue.use(XlButton)
```

页面中使用

```
<template>
  <div class="container">
    <p>当前时间:{{time | timeFormat}}</p>
    <p>当前时间:{{time | timeFormat1}}</p>
    <xl-button></xl-button>
  </div> 
</template>
```

#### 第五天meta混入

可以再nuxt.config.js中全局使用

```
head: {
    title: 'my-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
```

```
// 混入meta

Vue.mixin({
  methods: {
    $seo(title, content, payload = []) {
      return {
        title,
        meta: [{
          hid: 'description',
          name: 'keywords',
          content
        }].concat(payload)
      }
    }
  }
})
```

组件内使用

```
head() {
  return this.$seo(title,des, [{}])
},
```

自定义html

```
<!DOCTYPE html>
<html {{HTML_ATTRS}}>
<head {{HEAD_ATTRS}}>
  {{HEAD}}
  <!-- 此处可加入个性内容 -->
</head>
<body {{BODY_ATTRS}}>
  {{APP}}
</body>
</html>
```

资源引入