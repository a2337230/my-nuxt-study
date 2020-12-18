<template>
  <div>
    <Nuxt-link to="/">首页</Nuxt-link>
    <Nuxt-link to="/course/5">课程</Nuxt-link>
    <Nuxt />
  </div>
</template>

<script>
export default {
  // middleware: 'auth'
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
}
</script>
<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
