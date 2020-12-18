<template>
  <div class="course">
    课程
    <nuxt-link to="/course">静态分类4</nuxt-link>
    <nuxt-link :to="{name: 'course-id', params: {id: 5}, query: {a: 1}}">动态分类5</nuxt-link>
    <nuxt-link to="/course/comment">评论(二级路由)</nuxt-link>
    <nuxt-link to="/course/comment/comment1">评论回复(三级路由)</nuxt-link>
    <nuxt />
  </div>
</template>
<script>
export default {
  name: 'course',
  beforeRouteLeave(to, from, next) {
    // 页面后置守卫
  }
}
</script>