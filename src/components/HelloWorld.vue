<template>
  <div class="appManage">
    <!-- 页眉系统名称 -->
    <el-container>
      <el-header>
        <div class="page-head_title">
          <span class="page-head_title-text">设备管理系统（图标+title）</span>
        </div>
        <div class="page-head_button">可能用到的功能按钮（待添加）</div>
      </el-header>
      <el-container>
        <!-- 左侧导航栏 -->
        <el-aside>
          <!-- 导航 -->
          <div class="menu-box">
            <span class="menu-title">设备台账</span>
            <div class="menu-icon">
              <i class="iconfont icon-xitongcaidan"/>
              <i class="iconfont icon-gongnengliebiaochanggui" style="margin-left:10px"/>
            </div>
          </div>
          <div class="menu-bottomline"/>
          <el-menu :default-openeds="['1']">
            <el-submenu index="1">
              <template slot="title">
                <img src="@/pages/equipment/assets/equipment-manage.png" class="aside-icon"/>
                设备管理
              </template>
              <el-menu-item index="1-1"><p class="status-point"/>设备类别</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <img src="@/pages/equipment/assets/repair.png" class="aside-icon"/>
                设备维修
              </template>
              <el-menu-item index="2-1"><p class="status-point"/>选项1</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <img src="@/pages/equipment/assets/buy.png" class="aside-icon"/>
                采购管理
              </template>
              <el-menu-item index="3-1"><p class="status-point"/>选项1</el-menu-item>
              <el-menu-item index="3-2"><p class="status-point"/>选项2</el-menu-item>
              <el-menu-item index="3-3"><p class="status-point"/>选项3</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <img src="@/pages/equipment/assets/maintain.png" class="aside-icon"/>
                故障维护
              </template>
              <el-menu-item index="4-1"><p class="status-point"/>选项1</el-menu-item>
              <el-menu-item index="4-2"><p class="status-point"/>选项2</el-menu-item>
              <el-menu-item index="4-3"><p class="status-point"/>选项3</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <!-- 右侧面包屑与主体展示部分 -->
        <el-main>
          <div class="breadcrumb-wrapper">
            <!-- 面包屑部分 -->
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item>设备管理系统</el-breadcrumb-item>
              <el-breadcrumb-item>设备管理</el-breadcrumb-item>
              <el-breadcrumb-item>设备类别</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <!-- 主体展示部分 -->
          <!-- 搜索部分 -->
          <div class="search-area">搜索部分</div>
          <!-- 设备列表 -->
          <div class="ty-container">
            <div class="ty-bar">
              <div class="ty-headline"/>
              <span class="ty-span">设备列表</span>
            </div>
            <!-- 功能按钮 -->
            <div class="ty-button" v-for="(button, index) in buttons" :key="index">
              <el-button type="primary" :disabled="!button.active" size="mini" @click="buttonOpt(button)">{{button.text}}</el-button>
            </div>
            <el-table
              :data="tableData"
              stripe
              :highlight-current-row="true"
              class="tableBox"
              height="288"
              :header-cell-style="{background:'rgba(24,144,255,0.08)',color:'#777e8c',lineHeight:'22px',}"
              style="overflow-y: auto;">
              <el-table-column
                prop="first_code"
                label="序号"
                width="100">
              </el-table-column>
              <el-table-column
                :show-overflow-tooltip="true"
                prop="code"
                label="设备编号">
              </el-table-column>
              <el-table-column
                prop="name"
                label="设备名称"
                :show-overflow-tooltip="true">
              </el-table-column>
              <el-table-column
                :show-overflow-tooltip="true"
                prop="spec"
                label="规格型号">
              </el-table-column>
              <el-table-column
                prop="type"
                label="设备组">
              </el-table-column>
              <el-table-column
                prop="big_type"
                label="设备大类">
              </el-table-column>
              <el-table-column
                prop="userdepart"
                label="使用部门"
                :show-overflow-tooltip="true">
              </el-table-column>
              <el-table-column
                width="114"
                prop="userstatus"
                label="使用状态">
              </el-table-column>
              <el-table-column
                prop="factory"
                label="制造厂家">
              </el-table-column>
              <el-table-column
                prop="suppname"
                label="供应商名称">
              </el-table-column>
            </el-table>
            <p style="line-height:48px; margin:0px">共<span style="display: inline-block;width: 3rem;text-align: center">{{tableData.length}}</span>条</p>
            <!-- 7个标签和标签页相应内容 -->
            <el-row>
              <el-col>
                <el-tabs type="border-card">
                  <el-tab-pane>
                    <span slot="label">
                      <img src="@/pages/equipment/assets/eMainFile.png"
                      style="width:1em; margin-right:0.2em"/>设备主档
                    </span>
                    <MainFile/>
                  </el-tab-pane>
                  <el-tab-pane>
                    <span slot="label">
                      <img src="@/pages/equipment/assets/assets.png"
                      style="width:1em; margin-right:0.2em"/>资产管理
                    </span>
                    <Assets/>
                  </el-tab-pane>
                  <el-tab-pane>
                    <span slot="label">
                      <img src="@/pages/equipment/assets/fittings.png"
                      style="width:1em; margin-right:0.2em"/>部件配件
                    </span>
                    <Fittings/>
                  </el-tab-pane>
                  <el-tab-pane>
                    <span slot="label">
                      <img src="@/pages/equipment/assets/plan.png"
                      style="width:1em; margin-right:0.2em"/>维保计划
                    </span>
                    <MaintainPlan/>
                  </el-tab-pane>
                  <el-tab-pane>
                    <span slot="label">
                      <img src="@/pages/equipment/assets/unnormal.png"
                      style="width:1em; margin-right:0.2em"/>异常情况
                    </span>
                    <UnnormalCondition/>
                  </el-tab-pane>
                  <el-tab-pane>
                    <span slot="label">
                      <img src="@/pages/equipment/assets/record.png"
                      style="width:1em; margin-right:0.2em"/>维修领用记录
                    </span>
                    <MaintainRecord/>
                  </el-tab-pane>
                  <el-tab-pane>
                    <span slot="label">
                      <img src="@/pages/equipment/assets/hazard.png"
                      style="width:1em; margin-right:0.2em"/>危险源标识
                    </span>
                    <HazardIdentify/>
                  </el-tab-pane>
                </el-tabs>
              </el-col>
            </el-row>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import MainFile from '@/pages/equipment/menu-content/main-file.vue';
import Assets from '@/pages/equipment/menu-content/assets-manage.vue';
import Fittings from '@/pages/equipment//menu-content/fittings.vue';
import MaintainPlan from '@/pages/equipment/menu-content/maintain-plan.vue';
import UnnormalCondition from '@/pages/equipment/menu-content/unnormal-condition.vue';
import MaintainRecord from '@/pages/equipment/menu-content/maintain-record.vue';
import HazardIdentify from '@/pages/equipment/menu-content/hazard-identify.vue';
import '../styles/component_standard.css';
import equipmentApi from '@/api/equipment.js';
import {mapState} from 'vuex';
export default {
  name: 'HelloWorld',
  components: {
    MainFile,
    Assets,
    Fittings,
    MaintainPlan,
    UnnormalCondition,
    MaintainRecord,
    HazardIdentify,
  },
  computed: {
    ...mapState({
      buttons: state => state.equipment.buttons
    })
  },
  data () {
    return {
      tableData: [
        {
          first_code: '1',
          code: '01',
          name: '生产设备',
          spec: '',
          type: '生产设备',
          big_type: '',
          userdepart: '生产部',
          userstatus: '在用',
          factory: '',
          suppname: ''
        }
      ],
    };
  },
  methods: {
    async init () {
      let result = await equipmentApi.getEquipList();
      const equipInfo = result.data;
      console.log(result);
      // let result = await equipmentApi.getCandN();
      // const equipInfo = result.data;
      this.tableData = [];
      let cnt = 0;
      equipInfo.forEach(element => {
        let equipElement = {
          first_code: ++cnt,
          code: element.code,
          name: element.name,
          spec: element.spec,
          type: element.type,
          big_type: element.type,
          userdepart: element.userdepart,
          userstatus: element.userstatus,
          factory: element.factory,
          suppname: element.suppname
        };
        this.tableData.push(equipElement);
      });
    },
    buttonOpt (button) {
      switch(button.id) {
        case 0:
          this.addEquipData();
          break;
        case 1:
          this.changeEquipData();
          break;
        case 2:
          this.cancelOpt();
          break;
        case 3:
          this.copyEquipData();
          break;
        case 4:
          this.deleteEquipData();
          break;
        case 5:
          this.confirmOpt();
          break;
        case 6:
          this.giveUpOpt();
          break;
        case 7:
          this.backOpt();
          break;
      }
    },
    // 新增
    addEquipData () {
      console.log('addEquip');
    },
    // 更改
    changeEquipData () {
      console.log('changeEquipData');
    },
    // 取消
    cancelOpt () {
      console.log('cancelOpt');
    },
    // 复制
    copyEquipData () {
      console.log('copyEquipData');
    },
    // 删除
    deleteEquipData () {
      console.log('deleteEquipData');
    },
    // 确定
    confirmOpt () {
      console.log('confirmOpt');
    },
    // 放弃
    giveUpOpt () {
      console.log('giveUpOpt');
    },
    // 返回
    backOpt () {
      console.log('backOpt');
    }
  },
  mounted () {
    this.init();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.appManage {
  height: 100%;
  .el-header {
    position: relative;
    height: 72px !important;
    background-color: #1899ff;
    width: 100%;
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
  }

  .el-aside {
    display: block;
    position: absolute;
    top: 72px;
    left: 0;
    bottom: 0;
    width: 250px !important;
    background-color: white !important;
    color: #333;
    text-align: left;
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
  }

  .el-main {
    overflow-y: scroll;
    position: absolute;
    top: 72px;
    bottom: 0;
    left: 250px;
    width: 1664px;
    background-color: rgb(242,242,242);
    color: #333;
    text-align: center;
    margin-bottom: 0px;
    padding-top: 0px;
    padding-left: 20px;
    padding-right: 20px;
    .breadcrumb-wrapper {
      height: 40px;
      background-color: rgb(242,242,242);
      .el-breadcrumb {
        padding-top: 12px;
        padding-left: 8px;
        font-size: 15px !important;
      }
    }
    .search-area {
      background-color: white;
      color: #333;
      text-align: left;
      padding: 0px;
      margin-bottom: 16px;
      line-height: 40px;
      width: 1614px;
      height: auto !important;
      box-shadow: 0 0 8px 0 rgba(182,206,240,.8);
    }

    .ty-container {
      width: 1614px;
      background-color: #fbfbfb;
      box-shadow: 0 0 8px 0 rgba(182,206,240,.8);
      .ty-bar {
        float: left;
        width: 960px;
        padding-top: 20px;
        margin-bottom: 10px;
        font-size: 16px;
        .ty-headline {
          margin-left: 16px;
          margin-right: 5px;
          float: left;
          width: 6px;
          height: 22px;
          background-color: rgb(64,158,255);
        }
        .ty-span {
          float: left;
          color: #777E8c;
        }
      }
      .ty-button {
        float: left;
        margin-top: 10px;
        margin-right: 20px;
      }
    }
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container.is-vertical {
    background-color: rgb(242,242,242);
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .el-menu {
    // width: 256px;
    // padding-right: 12px;
    border: 0px;
    .el-submenu {
      .el-submenu__title {
        font-size: 16px;
        .el-submenu__icon-arrow {
          font-size: 14px !important;
        }
      }
      .el-menu--inline {
        .el-menu-item {
          padding-left: 58px !important;
          font-size: 14px;
          height: 48px;
          .status-point {
            background-color: white;
          }
        }
        .el-menu-item:hover {
          .status-point {
            background-color: #ECF5FF;
          }
        }
        .el-menu-item.is-active {
          font-family: puhuiti-medium;
          .status-point {
            background-color: #409EFF;
          }
        }
      }
    }
  }

  .aside-icon {
    width: 24px;
    margin-right: 8px;
  }

  .search-input {
    width: 70%;
    height: 30px;
    border: 1px solid lightgray;
    margin-left: 15px;
    padding-left: 0.4em;
    border-top-left-radius: 4%;
    border-bottom-left-radius: 4%;
  }
  .search-button {
    width: 20%;
    background-color: #fff;
    height: 28px;
    border: 1px solid #eee;
  }

  .tableBox {
    width: 1592px;
    overflow: auto;
    margin-left: 16px;
    th {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
      padding-left: 18px;
      padding-right: 18px;
      height: 48px;
      line-height: 48px;
      background-color: #dfe7f1;
    }
    td {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
      padding-left: 18px;
      padding-right: 18px;
      height: 48px;
      line-height: 48px;
    }
  }

  button {
    width: 60px;
    height: 32px;
    border-radius: 4px !important;
  }
}
.status-point {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 8px;
}
</style>
