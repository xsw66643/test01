 <template>
  <div>
    <ul v-for="(item, index) in items" :key="index" >
      <div style="display:flex; align-items:center;">
        <img :src="item.icon" style="width:1em; margin-right:0.2em;line-height:40px;vertical-align: middle"/>
        <span style="">{{item.text}}</span>
      </div>
    </ul>
    <div>
      <MainFile/>
    </div>
  </div>
</template>
<script>
import MainFile from './menu-content/main-file.vue';
import Assets from './menu-content/assets-manage.vue';
import Fittings from './menu-content/fittings.vue';
import MaintainPlan from './menu-content/maintain-plan.vue';
import UnnormalCondition from './menu-content/unnormal-condition.vue';
import MaintainRecord from './menu-content/maintain-record.vue';
import HazardIdentify from './menu-content/hazard-identify.vue';
import eMainFile from './assets/eMainFile.png';
import assetsImg from './assets/assets.png';
import fittingsImg from './assets/fittings.png';
import planImg from './assets/plan.png';
import unNormalImg from './assets/unnormal.png';
import recordImg from './assets/record.png';
import hazardImg from './assets/hazard.png';

export default {
  data () {
    return {
      items: [
        {icon: eMainFile, text:'设备主档'},
        {icon: assetsImg, text:'资产管理'},
        {icon: fittingsImg, text:'部件配件'},
        {icon: planImg, text:'维保计划'},
        {icon: unNormalImg, text:'异常情况'},
        {icon: recordImg, text:'维修领用记录'},
        {icon: hazardImg, text:'危险源标识'}
      ],
    };
  },
  components: {
    MainFile,
    Assets,
    Fittings,
    MaintainPlan,
    UnnormalCondition,
    MaintainRecord,
    HazardIdentify,
  }
};
</script>
