<template>
  <div class="container">
    首页
  </div>
</template>

<script>
export default {
  // validate ({params, query}) {
  //   return false
  // }
  middleware({store, route, redirect, params, query}) {
    console.log("组件独享路由守卫")
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
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
