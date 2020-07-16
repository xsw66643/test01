<template>
<!--  部件配件-->
  <div style="background-color: #fbfbfb;border: 1px solid #dddfe6">
    <el-table
      :data="tableData"
      border
      stripe
      :highlight-current-row="true"
      class="tableBox"
      height="288"
      :header-cell-style="{background:'#f6f6f6',color:'#777e8c',lineHeight:'22px',}"
      style="overflow-y: auto;">
      <el-table-column
        prop="first_code"
        label="行号"
        widt="72">
      </el-table-column>
      <el-table-column
        prop="code"
        label="零部件编号">
      </el-table-column>
      <el-table-column
        prop="name"
        label="零部件名称"
        :show-overflow-tooltip="true">
      </el-table-column>
      <el-table-column
        prop="spec"
        label="规格型号">
      </el-table-column>
      <el-table-column
        prop="type"
        label="数量">
      </el-table-column>
      <el-table-column
        prop="big_type"
        label="最近领用时间">
      </el-table-column>
      <el-table-column
        prop="userdepart"
        label="平均寿命（小时）"
        :show-overflow-tooltip="true">
      </el-table-column>
      <el-table-column
        prop="state"
        label="使用时间（小时）">
      </el-table-column>
      <el-table-column
        prop="factory"
        label="备注">
      </el-table-column>
      <el-table-column
        prop="suppname"
        label="登记人">
      </el-table-column>
      <el-table-column
        prop="suppname"
        label="登记时间">
      </el-table-column>
    </el-table>
    <div style="margin-top: 24px">
      <el-button type="primary" size="mini">增加</el-button>
      <el-button type="primary" size="mini">删除</el-button>
      <el-button type="primary" size="mini" style="padding: 5px">增加备件</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        opts: [
          {text: '增加', active: false},
          {text: '删除', active: false},
          {text: '增加备件', active: false},
        ],
        title: [],
        tableData: [],
      };
    },
  };

</script>
<style scoped>
  .wrapper {
    /*max-width: calc(100% - 250px);*/
    width: 100%;
    overflow: hidden;
    padding: 0 3px 3px 3px;
    border: 1px solid #ccc;
    font-size: 13px;
    line-height: 24px;
  }

  .mainPanel {
    float: left;
    width: 100%;
    border-right: 1px solid #ccc;
    text-align: left;
  }

</style>
