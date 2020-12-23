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

