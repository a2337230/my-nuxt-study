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