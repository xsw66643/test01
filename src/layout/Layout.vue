<template>
  <div class="app-container">
    <el-container>
      <el-header>
        <title-custom />
      </el-header>
      <el-container>
        <el-aside width="250px">
          <!-- :width="sidebarSpan" -->
          <side-bar />
        </el-aside>
        <el-main :style="{ width: (screenWidth-250) + 'px'}">
          <div class="bread-nav">
            <bread-nav />
          </div>
          <div class="search-box">
            <seach-bar />
          </div>
          <div class="main-view" style="margin-top:1em;">
            <!-- <p>主页面</p> -->
            <router-view />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import SideBar from "./SideBar.vue";
import BreadNav from "./BreadNav.vue";
import TitleCustom from "./TitleCustom.vue";
import SeachBar from "./SearchBar.vue";
import "../styles/component_standard.css";

export default {
  name: "Layout",
  components: {
    SideBar,
    BreadNav,
    TitleCustom,
    SeachBar
  },
  data() {
    return {
      screenWidth: window.screen.width,
    };
  },
  methods: {},
  mounted() {
    this.screenWidth = window.screen.width;
  }
};
</script>
    
<style lang="scss" scoped>
html {
  width: 100%;
}
.app-container {
  background-color: rgb(250, 250, 250);
  height: 100%;
  overflow-x: visible;
}

.el-container {
  overflow: hidden;
}

.el-header {
  background-color: rgb(175, 214, 251);
}

.bread-nav {
  /* background-color: #ffffff; */
}

.el-aside {
  display: block;
  position: absolute;
  top: 72px;
  left: 0;
  bottom: 0;
  // width: 250px !important; 直接在组件属性中赋值
  background-color: white !important;
  color: #333;
  text-align: left;
}

.el-header {
  position: relative;
  height: 72px !important;
  background-color: #1899ff;
  // width: 100%; 默认就是100%
}

.el-main {
  overflow-y: scroll;
  position: absolute;
  top: 72px;
  bottom: 0;
  left: 250px;
  // width: 1664px; 改用动态赋值
  background-color: rgb(242, 242, 242);
  color: #333;
  text-align: center;
  margin-bottom: 0px;
  padding-top: 0px;
  // padding-left: 20px;
  // padding-right: 20px;
}
</style>>
