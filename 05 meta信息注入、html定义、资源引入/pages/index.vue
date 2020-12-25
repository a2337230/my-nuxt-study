<template>
  <div class="container">
    <p>当前时间:{{time | timeFormat}}</p>
    <p>当前时间:{{time | timeFormat1}}</p>
    <xl-button></xl-button>
  </div> 
</template>

<script>
export default {
  head() {
    return this.$seo(title,des, [{}])
  },
  // middleware: 'auth'
  middleware() {
    console.log("页面层级")
  },
  validate({params, query}) {
    // console.log('vaildate', params, query)
    if (query.id) {
      return false
    } else {
      return true
    }
  },
  mounted() {
    this.$show()
  },
  data() {
    return {
      a: 1,
      time: new Date()
    }
  },
  asyncData(context) {
    console.log('asyncData')
    return {
      b: 2
    }
  },

  fetch({store}) {
    console.log('fetch', store)
  }
}
</script>

<style>

</style>
