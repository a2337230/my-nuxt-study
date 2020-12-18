<template>
  <div>
    {{error.message}}
  </div>
</template>
<script>
export default {
  name: 'error',
  // 接收的错误信息  err: {statusCode, message}
  props: ['error']
}
</script>