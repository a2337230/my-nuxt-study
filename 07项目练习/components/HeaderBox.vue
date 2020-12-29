<template>
  <div class="headers">
    <div class="left">
      <img src="https://www3.xlxt.net/IMG/logo_little.png.png" alt="杏林学堂">
    </div>
    <div class="right">
      <div class="search">
        <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="搜课程" value="1"></el-option>
            <el-option label="搜讲师" value="2"></el-option>
            <el-option label="搜文档" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "headers",
  data() {
    return {
      select: "",
      input3: ""
    }
  },
}
</script>
<style lang="scss" scoped>
.headers {
  width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  height: 60px;
  .right {
    width: 500px;
  }
}
</style>