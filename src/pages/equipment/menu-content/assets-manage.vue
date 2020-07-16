<template>
<!--  资产管理-->
  <div class="wrapper">
    <div class='mainPanel' style="margin-top: 20px">

      <el-row :gutter="2" class="row">
        <el-col :span="6">
          <span>
            <span class='col_title'>*自编号</span>
            <label>
              <el-input v-model="code" class='input_box' type='text' placeholder="" readonly style='max-width: 70%'/>
            </label>
          </span>
        </el-col>
        <el-col :span="12">
          <span>
              <span class='col_title'>*设备名称</span>
              <label>
                <el-input v-model="name" class='input_box' placeholder="" readonly type='text' style='width:85%;'/>
              </label>
            </span>
        </el-col>
        <el-col :span="6">
          <span>
              <span class='col_title'>状态</span>
              <label>
                <el-input type='text' v-model="status" readonly class="input_box" style='width:70%'/>
              </label>
          </span>
        </el-col>
      </el-row>

      <el-row :gutter="2" class="row">
        <el-col :span="6">
          <span>
            <span class='col_title'>规格型号</span>
            <label>
              <el-input type='text' placeholder="" v-model="spec" readonly class="input_box" style='width:70%'/>
            </label>
          </span>
        </el-col>
        <el-col :span="6">
          <span>
            <span class='col_title'>英文名称</span>
            <label>
              <el-input type='text' placeholder="" v-model="english" readonly class="input_box" style='width:70%'/>
            </label>
            </span>
        </el-col>
        <el-col :span="6">
            <span>
              <span class='col_title'>*使用状态</span>
              <el-input type='text' placeholder="" v-model="userstatus" readonly class="input_box" style='width:70%'/>
<!--                <el-select v-model="userstatus" placeholder="请选择"  class="input_box" style='width:70%;'>-->
<!--                  <el-option-->
<!--                    v-for="item in status_options"-->
<!--                    :key="item.value"-->
<!--                    :label="item.label"-->
<!--                    :value="item.value">-->
<!--                  </el-option>-->
<!--                </el-select>-->
            </span>
        </el-col>
        <el-col :span="6">
          <span>
              <span class='col_title'>资产编号</span>
            <el-input type='text' placeholder="请输入" v-model="capitalcode" class="input_box" style='width:70%'></el-input>
            </span>
        </el-col>
      </el-row>

      <el-row :gutter="2" class="row">
        <el-col :span="6">
            <span>
              <span class='col_title' style=''>ABC类</span>
              <el-select v-model="abc" placeholder="请选择"  class="input_box" style='width:70%;'>
                <el-option
                                  v-for="item in abc_options"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value">
                                </el-option>
              </el-select>
            </span>
        </el-col>
        <el-col :span="6">
            <span>
              <span class='col_title' style=''>财务分类</span>
              <el-select v-model="finance_type" placeholder="请选择"  class="input_box" style='width:70%;'>
                <el-option
                  v-for="item in finance_type_options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </span>
        </el-col>
        <el-col :span="6">
            <span>
              <span class='col_title' style=''>显示位置</span>
              <label>
                <el-input type='text' disabled placeholder="请选择" v-model="showpos" class="input_box" style='width:55%;'/>
              </label>
            </span>
          <el-upload
            ref="upload"
            action=""
            :show-file-list="false"
            :on-success="uploadSuccess"
            :on-error="uploadError"
            style="display: inline-block;width: 40px;height: 40px"
          >
            <el-button slot="trigger" size="small" style="width: 58px;height:38px;text-align: center;vertical-align: middle">明细</el-button>
          </el-upload>
        </el-col>
        <el-col :span="6">
            <span>
              <span class='col_title' style="margin-left: -10px">合同单价/万元</span>
              <label>
                <el-input class='input_box' placeholder="请输入" v-model="price" type='text' style='width:70%'/>
              </label>
            </span>
        </el-col>
      </el-row>

      <el-row :gutter="2" class="row">
        <el-col :span="6">
            <span>
              <span class='col_title'>其它费用(元)</span>
              <label>
                <el-input class='input_box' placeholder="请输入" v-model="installfee" type='text' style='width:70%'/>
              </label>
            </span>
        </el-col>
        <el-col :span="6">
            <span>
              <span class='col_title'>原值（元）</span>
              <label>
                <el-input class='input_box' placeholder="" readonly v-model="oldamount" type='text' style='width:70%'/>
              </label>
            </span>
        </el-col>
        <el-col :span="6">
            <span>
              <span class='col_title'>净值（元）</span>
              <label>
                <el-input class='input_box' placeholder="" readonly v-model="netvalue" type='text' style='width:70%'/>
              </label>
            </span>
        </el-col>
        <el-col :span="6">
            <span>
              <span class='col_title'>折旧起始</span>
              <label>
                <el-input class='input_box' placeholder="请输入" v-model="depreciationbegin" type='text' style='width:70%'/>
              </label>
            </span>
        </el-col>
      </el-row>

      <el-row :gutter="2" class="row">
        <el-col :span="6">
            <span>
              <span class='col_title'>残值率%</span>
              <label>
                <el-input class='input_box' placeholder="请输入" v-model="valueratio" type='text' style='width:70%'/>
              </label>
            </span>
        </el-col>
        <el-col :span="6">
            <span>
              <span class='col_title'>折旧年限</span>
              <label>
                <el-input class='input_box' placeholder="请输入" v-model="useryear" type='text' style='width:70%'/>
              </label>
            </span>
        </el-col>
        <el-col :span="6">
            <span>
              <span class='col_title'>月折旧率%</span>
              <label>
                <el-input class='input_box' placeholder="请输入" readonly v-model="month_depre" type='text' style='width:70%'/>
              </label>
            </span>
        </el-col>
        <el-col :span="6">
            <span>
              <span class='col_title'>月折旧额(元)</span>
              <label>
                <el-input class='input_box' placeholder="请输入" readonly v-model="monthdepre_money" type='text' style='width:70%'/>
              </label>
            </span>
        </el-col>
      </el-row>

    </div>
  </div>
</template>

<script>
  export default {
    components:{},
    data(){
      return{
        code:'001',//自编号
        name:'',//设备名称
        status:'',//状态
        spec:'',//规格型号
        english:'',//英文名称
        userstatus:'',//使用状态
        capitalcode:'',//设备位号
        finance_type:'',//财务分类
        abc:'',//ABC类
        showpos:'',//显示位置
        price:'',//合同单价/万元
        installfee:'',//其它费用（元）
        oldamount:'',//原值
        valueratio:'',//残值率%
        useryear:'',//折旧年限
        month_depre:'',//月折旧率
        monthdepre_money:'',//月折旧额%
        depreciationbegin:'',//折旧起始
        netvalue:'',//净值（元）



        abc_options:[
          {
            value: 'a',
            label: 'A'
          },
          {
            value: 'b',
            label: 'B'
          },
          {
            value: 'c',
            label: 'C'
          },
        ],

      };
    },
    methods:{
    }
  };
</script>

<style scoped>
  * {
    font-size: 14px;
    color: #777E8C;
  }

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

  .row {
    margin: 3px 2px;
  }

  .col_title {
    display: inline-block;
    min-width: 5rem;
    text-align: right;
  }

  .input_box {
    display: inline-block;
    width: 400px;
    height: 40px;
    margin-left: 8px;
    margin-bottom: 24px;
  }

  .options_item{
    float: left;
    width: 5rem;
    text-align: left;
  }
</style>
