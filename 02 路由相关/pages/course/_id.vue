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