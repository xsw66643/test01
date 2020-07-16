<template>
  <!-- <div class="navbar-container" style="height:100%;">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      style="height:100%;"
    >
      <el-submenu index="1">
        <template slot="title">
          
          <span slot="title">设备管理</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">设备维修</span>
      </el-menu-item>
      <el-menu-item index="3" >
        <i class="el-icon-document"></i>
        <span slot="title">设备管理</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">故障维修</span>
      </el-menu-item>
    </el-menu>
  </div>-->
  <div class="navbar-container">
    <!-- 导航 -->
    <div class="menu-box">
      <span class="menu-title">设备台账</span>
      <div class="menu-icon">
        <i class="iconfont icon-xitongcaidan" />
        <i class="iconfont icon-gongnengliebiaochanggui" style="margin-left:10px" />
      </div>
    </div>
    <div class="menu-bottomline" />
    <el-menu :default-openeds="['1']" :router="true" :default-active="'/equipment'">
      <el-submenu index="1">
        <template slot="title">
          <img src="@/pages/equipment/assets/equipment-manage.png" class="aside-icon" />
          设备管理
        </template>
        <el-menu-item index="/equipment">
          <p class="status-point" />设备类别
        </el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <img src="@/pages/equipment/assets/repair.png" class="aside-icon" />
          设备维修
        </template>
        <el-menu-item index="2-1">
          <p class="status-point" />选项1
        </el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <img src="@/pages/equipment/assets/buy.png" class="aside-icon" />
          采购管理
        </template>
        <el-menu-item index="3-1">
          <p class="status-point" />选项1
        </el-menu-item>
        <el-menu-item index="3-2">
          <p class="status-point" />选项2
        </el-menu-item>
        <el-menu-item index="3-3">
          <p class="status-point" />选项3
        </el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <img src="@/pages/equipment/assets/maintain.png" class="aside-icon" />
          故障维护
        </template>
        <el-menu-item index="4-1">
          <p class="status-point" />选项1
        </el-menu-item>
        <el-menu-item index="4-2">
          <p class="status-point" />选项2
        </el-menu-item>
        <el-menu-item index="4-3">
          <p class="status-point" />选项3
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleOpen() {},
    handleClose() {}
  }
};
</script>

<style lang="scss">
.menu-box {
  margin-left: 10px;
  margin-right: 0px;
  margin-top: 20px;
  margin-bottom: 20px;
  .menu-title {
    font-size: 18px;
    font-weight: 400;
    width: 75%;
    margin-right: 0px !important;
  }
  .menu-icon {
    float: right;
    width: 25%;
    height: 23px;
  }
}

.menu-bottomline {
  height: 2px;
  width: 230px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: black;
}

.aside-icon {
  width: 24px;
  margin-right: 8px;
}

.el-menu {
  // width: 256px;
  // padding-right: 12px;
  border: 0px;
  .el-submenu {
    .el-submenu__title {
      font-size: 16px !important;
      .el-submenu__icon-arrow {
        font-size: 14px !important;
      }
    }
    .el-menu--inline {
      .el-menu-item {
        padding-left: 58px !important;
        font-size: 14px !important;
        height: 48px;
        .status-point {
          background-color: white;
        }
      }
      .el-menu-item:hover {
        .status-point {
          background-color: #ecf5ff;
        }
      }
      .el-menu-item.is-active {
        font-family: puhuiti-medium;
        background-color: rgba(129, 179, 228, 0.685);
        color: white;
        .status-point {
          background-color: #409eff;
        }
      }
    }
  }
}
.status-point {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 8px;
}
.el-submenu__title {
  font-size: 16px !important;
  .el-submenu__icon-arrow {
    font-size: 14px !important;
  }
}
</style>
