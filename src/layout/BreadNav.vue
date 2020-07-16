<template>
  <div class="breadcrumb-wrapper">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>设备管理系统</el-breadcrumb-item>
      <el-breadcrumb-item>设备管理</el-breadcrumb-item>
      <el-breadcrumb-item>设备类别</el-breadcrumb-item>
      <!-- <el-breadcrumb-item>设备主档</el-breadcrumb-item> -->
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "BreadNav",
  data() {
    return {};
  }
};
</script>
    
<style lang="scss" scoped>
.breadcrumb-wrapper {
  height: 40px;
  background-color: rgb(242, 242, 242);
  .el-breadcrumb {
    padding-top: 12px;
    padding-left: 8px;
    font-size: 15px !important;
  }
}
</style>>
