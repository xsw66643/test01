<template>
  <div class="equipment-panel-container">
    <el-tabs type="border-card">
      <el-tab-pane>
        <span slot="label">
          <img src="@/pages/equipment/assets/eMainFile.png" style="width:1em; margin-right:0.2em" />设备主档
        </span>
        <MainFile />
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label">
          <img src="@/pages/equipment/assets/assets.png" style="width:1em; margin-right:0.2em" />资产管理
        </span>
        <Assets />
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label">
          <img src="@/pages/equipment/assets/fittings.png" style="width:1em; margin-right:0.2em" />部件配件
        </span>
        <Fittings />
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label">
          <img src="@/pages/equipment/assets/plan.png" style="width:1em; margin-right:0.2em" />维保计划
        </span>
        <MaintainPlan />
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label">
          <img src="@/pages/equipment/assets/unnormal.png" style="width:1em; margin-right:0.2em" />异常情况
        </span>
        <UnnormalCondition />
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label">
          <img src="@/pages/equipment/assets/record.png" style="width:1em; margin-right:0.2em" />维修领用记录
        </span>
        <MaintainRecord />
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label">
          <img src="@/pages/equipment/assets/hazard.png" style="width:1em; margin-right:0.2em" />危险源标识
        </span>
        <HazardIdentify />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import MainFile from "./main-file.vue";
import Assets from "./assets-manage.vue";
import Fittings from "./fittings.vue";
import MaintainPlan from "./maintain-plan.vue";
import UnnormalCondition from "./unnormal-condition.vue";
import MaintainRecord from "./maintain-record.vue";
import HazardIdentify from "./hazard-identify.vue";

export default {
  name: "Panel",
  components: {
    MainFile,
    Assets,
    Fittings,
    MaintainPlan,
    UnnormalCondition,
    MaintainRecord,
    HazardIdentify
  }
};
</script>

<style lang="scss" scoped>
.equipment-panel-container {
  margin-top: 0.5em;
}
</style>>
