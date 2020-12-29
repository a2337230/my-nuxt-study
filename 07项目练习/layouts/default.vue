<template>
  <div class="wrap">
    <header-box></header-box>
    <nav-bar></nav-bar>
    <div class="content-container">
      <Nuxt />
    </div>
    <footer-box></footer-box>
  </div>
</template>
<script>
import HeaderBox from './../components/HeaderBox'
import FooterBox from './../components/FooterBox'
import NavBar from './../components/NavBar'
export default {
  name: 'layout',
  components: {
    HeaderBox,
    FooterBox,
    NavBar
  }
}
</script>
<style lang="scss" scoped>
.content-container {
  width: 1100px;
  margin: 0 auto;
  min-height: calc(100vh - 260px)
}
</style>
