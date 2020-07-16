<template>
  <div class="title-container">
    <div class="page-head_title">
      <span class="page-head_title-text">设备管理系统（图标+title）</span>
    </div>
    <div class="page-head_button">可能用到的功能按钮（待添加）</div>
  </div>
</template>

<script>
export default {
  name: "TitleCustom"
};
</script>

<style lang="scss" scoped>
.title-container {
  // background-color: rgb(175, 214, 251);
  // height: 100%;
}
.page-head_title {
  float: left;
  padding-top: 20px;
  padding-left: 40px;
  .page-head_title-text {
    font-size: 24px;
    font-family: puhuiti-medium;
    color: white;
  }
}
.page-head_button {
  padding-top: 20px;
  float: right;
  font-size: 24px;
  padding-right: 100px;
  color: white;
}
</style>>
