<template>
  <div class="equipment-list" style="background-color: #fbfbfb">
    <div class="ty-bar">
      <div class="ty-headline" />
      <span class="ty-span">设备列表</span>
    </div>
    <!-- 功能按钮 -->
    <div class="ty-button" v-for="(button, index) in buttons" :key="index">
      <el-button
        type="primary"
        :disabled="!button.active"
        size="mini"
        @click="buttonOpt(button)"
      >{{button.text}}</el-button>
    </div>
    <div class="table-box">
      <el-table
        :data="tableData.slice((currentPage-1)*pageSize, currentPage*pageSize)"
        stripe
        :highlight-current-row="true"
        width="99%"
        :header-cell-style="{background:'rgba(24,144,255,0.08)',color:'#777e8c',lineHeight:'22px'}"
        style="overflow-y: auto;"
      >
        <el-table-column prop="first_code" label="序号" width="100"></el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="code" label="设备编号"></el-table-column>
        <el-table-column prop="name" label="设备名称" :show-overflow-tooltip="true"></el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="spec" label="规格型号"></el-table-column>
        <el-table-column prop="type" label="设备组"></el-table-column>
        <el-table-column prop="big_type" label="设备大类"></el-table-column>
        <el-table-column prop="userdepart" label="使用部门" :show-overflow-tooltip="true"></el-table-column>
        <el-table-column width="114" prop="userstatus" label="使用状态"></el-table-column>
        <el-table-column prop="factory" label="制造厂家" :show-overflow-tooltip="true"></el-table-column>
        <el-table-column prop="suppname" label="供应商名称"></el-table-column>
      </el-table>
      <div class="pagination-box">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="pageSizes"
          :page-size="pageSize"
          layout="total, prev, pager, next, sizes, jumper"
          :total="tableData.length">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import equipmentApi from "@/api/equipment.js";

export default {
  name: "EquipList",
  computed: {
    ...mapState({
      buttons: state => state.equipment.buttons
    })
  },
  data() {
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
        },
      ],
      currentPage: 1,
      pageSizes: [5, 7, 10],
      pageSize: 5,
    };
  },
  methods: {
    async init() {
      let result = await equipmentApi.getEquipList();
      const equipInfo = result.data;
      // let result = await equipmentApi.getCandN();
      // const equipInfo = result.data;
      console.log(result);
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
    handleSizeChange (val) {
      this.pageSize = val;
      this.currentPage = 1;
    },
    handleCurrentChange (val) {
      this.currentPage = val;
    },
    buttonOpt(button) {
      switch (button.id) {
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
    addEquipData() {
      console.log("addEquip");
    },
    // 更改
    changeEquipData() {
      console.log("changeEquipData");
    },
    // 取消
    cancelOpt() {
      console.log("cancelOpt");
    },
    // 复制
    copyEquipData() {
      console.log("copyEquipData");
    },
    // 删除
    deleteEquipData() {
      console.log("deleteEquipData");
    },
    // 确定
    confirmOpt() {
      console.log("confirmOpt");
    },
    // 放弃
    giveUpOpt() {
      console.log("giveUpOpt");
    },
    // 返回
    backOpt() {
      console.log("backOpt");
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style lang="scss" scoped>
.equipment-list {
  background-color: #fbfbfb;
  box-shadow: 0 0 8px 0 rgba(182, 206, 240, 0.8);
  .ty-bar {
    float: left;
    // width: 960px;
    padding-top: 20px;
    margin-bottom: 10px;
    font-size: 16px;
    .ty-headline {
      margin-left: 16px;
      margin-right: 5px;
      float: left;
      width: 6px;
      height: 22px;
      background-color: rgb(64, 158, 255);
    }
    .ty-span {
      float: left;
      color: #777e8c;
    }
  }
  .ty-button {
    float: right;
    margin-top: 10px;
    margin-right: 20px;
  }
}

button {
  width: 60px;
  height: 32px;
  border-radius: 4px !important;
}

.table-box{
  margin-left: 1em;
}

.pagination-box {
  margin-top: 24px;
  padding-bottom: 24px;
}
</style>
