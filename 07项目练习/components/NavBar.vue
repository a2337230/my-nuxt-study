<template>
  <div class="nav-bar">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item :index="item.id" v-for="item in nav" :key="item.id">
        <Nuxt-link :to="item.path">{{item.title}}</Nuxt-link>
      </el-menu-item>
    </el-menu>
    <div class="line"></div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        nav: [
          {
            id: '1',
            title: '首页',
            path: '/'
          },
          {
            id: '2',
            title: '精品专题',
            path: '/boutique'
          },
          {
            id: '3',
            title: '技能提升',
            path: '/skill'
          },
          {
            id: '4',
            title: '疾病用药',
            path: '/disease'
          },
          {
            id: '5',
            title: '名师讲堂',
            path: '/teacher'
          },
          {
            id: '6',
            title: '企业解决方案',
            path: '/enterprise'
          },
          {
            id: '7',
            title: '企业大学',
            path: '/college'
          },
          {
            id: '8',
            title: '杏林智库',
            path: '/warehouse'
          }
        ]
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style lang="scss" scoped>
.nav-bar {
  width: 1100px;
  margin: 0 auto;
}
</style>