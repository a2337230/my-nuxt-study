<template>
  <div class="course">
    课程
    <nuxt-link to="/course/1?a=1">分类1</nuxt-link>
    <nuxt-link to="/course/2?a=2">分类2</nuxt-link>
    <nuxt-link to="/course/3?a=3">分类3</nuxt-link>
    <nuxt-link to="/course/4?a=4">分类4</nuxt-link>
    <nuxt-link :to="{name: 'course-id', params: {id: 5}, query: {a: 1}}">分类5</nuxt-link>
    <nuxt />
  </div>
</template>