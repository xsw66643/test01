<template>
  <div class="wrapper">
    <div class="mainPanel" style="margin-top: 20px">
      <el-row :gutter="2" class="row">
        <el-col :span="8">
          <span>
            <span class="col_title">*自编号</span>
            <label>
              <el-input
                v-model="code"
                class="input_box"
                type="text"
                placeholder="请输入"
                style="max-width: 70%"
              />
            </label>
          </span>
        </el-col>
        <el-col :span="8">
          <span>
            <span class="col_title">*设备类别</span>
            <el-select
              slot="reference"
              v-model="type"
              class="input_box"
              placeholder="请选择"
              style="width:70%;"
            >
              <el-option
                v-for="item in type_options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
                <span class="options_item">{{item.value}}</span>
                <span class="options_item">{{item.label}}</span>
              </el-option>
            </el-select>
          </span>
        </el-col>
        <el-col :span="8">
          <span>
            <span class="col_title">*使用状态</span>
            <el-select v-model="userstatus" placeholder="请选择" class="input_box" style="width:70%;">
              <el-option
                v-for="item in status_options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </span>
        </el-col>
      </el-row>

      <el-row :gutter="2" class="row">
        <el-col :span="16">
          <span>
            <span class="col_title">*设备名称</span>
            <label>
              <el-input
                v-model="name"
                class="input_box"
                placeholder="请输入"
                type="text"
                style="width:85%;"
              />
            </label>
          </span>
        </el-col>
        <el-col :span="8">
          <span>
            <span class="col_title">*设备用途</span>
            <el-select
              slot="reference"
              v-model="purpose"
              class="input_box"
              placeholder="请选择"
              style="width:70%;"
            >
              <el-option
                v-for="item in purpose_options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
                <span class="options_item" style="width: 10rem">{{item.label}}</span>
                <span class="options_item">{{item.value}}</span>
              </el-option>
            </el-select>
          </span>
        </el-col>
      </el-row>

      <el-row :gutter="2" class="row">
        <el-col :span="8">
          <span>
            <span class="col_title">*车间</span>
            <el-select
              slot="reference"
              v-model="userdepart"
              class="input_box"
              placeholder="请选择"
              style="width:70%;"
            >
              <el-option
                v-for="item in workshop_options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
                <span class="options_item" style="width: 10rem">{{item.label}}</span>
              </el-option>
            </el-select>
          </span>
        </el-col>
        <el-col :span="8">
          <span>
            <span class="col_title">规格型号</span>
            <label>
              <el-input
                type="text"
                placeholder="请输入"
                v-model="spec"
                class="input_box"
                style="width:70%"
              />
            </label>
          </span>
        </el-col>
        <el-col :span="8">
          <span>
            <span class="col_title" style>对应物资号</span>
            <label>
              <el-input
                type="text"
                disabled
                placeholder
                v-model="prodid"
                class="input_box"
                style="width:70%;"
              />
            </label>
          </span>
        </el-col>
      </el-row>

      <el-row :gutter="2" class="row">
        <el-col :span="8">
          <span>
            <span class="col_title">合同号</span>
            <label>
              <el-input
                class="input_box"
                placeholder="请输入"
                v-model="country"
                type="text"
                style="width:70%"
              />
            </label>
          </span>
        </el-col>
        <el-col :span="8">
          <span>
            <span class="col_title">出厂编号</span>
            <label>
              <el-input
                class="input_box"
                placeholder="请输入"
                v-model="fact_no"
                type="text"
                style="width:70%"
              />
            </label>
          </span>
        </el-col>
        <el-col :span="8">
          <span>
            <span class style="margin-left: -18px">树结构图片路径</span>
            <label>
              <el-input
                type="text"
                placeholder="请选择"
                readonly
                v-model="pic_path"
                class="input_box"
                disabled
                style="width: 62%"
              />
            </label>
            <!--                <button class="row_btn">...</button>-->
            <!--            <el-input type='file' style='width:80px;'>...</el-input>-->
            <el-upload
              ref="upload"
              action
              :show-file-list="false"
              :on-success="uploadSuccess"
              :on-error="uploadError"
              style="display: inline-block;width: 40px;height: 40px"
            >
              <el-button
                slot="trigger"
                size="small"
                style="width: 2.5rem;height:38px;text-align: center;vertical-align: middle"
              >...</el-button>
            </el-upload>
          </span>
        </el-col>
      </el-row>

      <el-row :gutter="2" class="row">
        <el-col :span="8">
          <span>
            <span class="col_title">车辆编号</span>
            <label>
              <el-input
                class="input_box"
                type="text"
                v-model="english"
                placeholder="请输入"
                style="width:70%"
              />
            </label>
          </span>
        </el-col>
        <el-col :span="8">
          <span>
            <span class="col_title" style>单位</span>
            <label>
              <el-input
                type="text"
                class="input_box"
                v-model="productplace"
                placeholder="请输入"
                style="width:16%"
              />
            </label>
          </span>
          <!--        </el-col>-->
          <!--        <el-col :span="4">-->
          <span>
            <span class="col_title">设备重量</span>
            <label>
              <el-input
                type="text"
                placeholder="请输入"
                v-model="quantity"
                class="input_box"
                style="width:16%"
              />
            </label>
          </span>
          <span>
            <span class="col_title" style>真实设备</span>
            <label>
              <el-checkbox style=" vertical-align:-2px" v-model="really_equip" />
            </label>
          </span>
        </el-col>
        <el-col :span="8">
          <span>
            <span class="col_title">状态</span>
            <label>
              <el-input type="text" v-model="status" readonly class="input_box" style="width:16%" />
            </label>
          </span>
          <span>
            <span class="col_title">材质</span>
            <label>
              <el-input
                type="text"
                placeholder="请输入"
                v-model="motoid"
                class="input_box"
                style="width:16%"
              />
            </label>
          </span>

          <!--        </el-col>-->
          <!--        <el-col :span="2">-->
          <span>
            <span style class="col_title">关键部位</span>
            <label>
              <el-checkbox style v-model="key_part" />
            </label>
          </span>
        </el-col>
      </el-row>

      <el-row :gutter="2" class="row">
        <el-col :span="12">
          <span>
            <span class="col_title">供应商</span>
            <label>
              <el-input
                type="text"
                placeholder="请输入"
                v-model="suppid"
                class="input_box"
                style="width:17%"
              />
            </label>
          </span>
          <label>
            <el-input
              type="text"
              placeholder
              disabled
              v-model="suppname"
              class="input_box"
              style="width:55%"
            />
          </label>
        </el-col>
        <el-col :span="12">
          <span>
            <span class="col_title" style>介质</span>
            <label>
              <el-input
                type="text"
                placeholder="请输入"
                v-model="mototype"
                class="input_box"
                style="width:75%"
              />
            </label>
          </span>
          <!--            <span>-->
          <!--              <span class='col_title'>技术资料</span>-->
          <!--              <label>-->
          <!--                <input type='text' class="input_box" style='width:25%'/>-->
          <!--              </label>-->
          <!--            </span>-->
          <!--          <button class="row_btn">明细</button>-->
        </el-col>
      </el-row>

      <el-row :gutter="2" class="row">
        <el-col :span="6">
          <span>
            <span class="col_title">出厂日期</span>
            <label>
              <el-date-picker
                type="date"
                v-model="fact_date"
                placeholder="请选择"
                class="input_box"
                style="width: 50%"
              />
            </label>
          </span>
        </el-col>
        <el-col :span="6">
          <span>
            <span class="col_title" style>生产能力</span>
            <label>
              <el-input
                type="text"
                v-model="throughput"
                placeholder="请输入"
                class="input_box"
                style="width:50%"
              />
            </label>
          </span>
        </el-col>
        <el-col :span="6">
          <span>
            <span class="col_title">初装地点</span>
            <label>
              <el-input
                type="text"
                v-model="firstplace"
                placeholder="请输入"
                class="input_box"
                style="width:50%"
              />
            </label>
          </span>
        </el-col>
        <el-col :span="6">
          <span>
            <span class="col_title">制造厂家</span>
            <label>
              <el-input
                class="input_box"
                v-model="factory"
                placeholder="请输入"
                type="text"
                style="width:50%;"
              />
            </label>
          </span>
        </el-col>
      </el-row>

      <el-row :gutter="2" class="row">
        <el-col :span="6">
          <span>
            <span class="col_title">购买人</span>
            <label>
              <el-input
                class="input_box"
                v-model="puroperator"
                placeholder="请输入"
                style="width:50%"
                type="text"
              />
            </label>
          </span>
        </el-col>
        <el-col :span="6">
          <span>
            <span class="col_title">购买日期</span>
            <label>
              <el-date-picker
                type="date"
                v-model="purdate"
                placeholder="请选择"
                class="input_box"
                style="width:50%"
              />
            </label>
          </span>
        </el-col>
        <el-col :span="6">
          <span>
            <span class="col_title">到货日期</span>
            <label>
              <el-date-picker
                type="date"
                v-model="standdate"
                placeholder="请选择"
                class="input_box"
                style="width:50%"
              />
            </label>
          </span>
        </el-col>
        <el-col :span="6">
          <span>
            <span class="col_title">投运时间</span>
            <label>
              <el-date-picker
                type="date"
                v-model="userdate"
                placeholder="请选择"
                class="input_box"
                style="width:50%"
              />
            </label>
          </span>
        </el-col>
      </el-row>

      <el-row :gutter="2" class="row">
        <el-col :span="6"></el-col>
        <el-col :span="6">
          <span>
            <span class="col_title" style>岗位</span>
            <label>
              <el-input
                type="text"
                v-model="userdutr"
                placeholder="请输入"
                class="input_box"
                style="width:50%"
              />
            </label>
          </span>
        </el-col>
        <el-col :span="6">
          <span>
            <span class="col_title">使用负责人</span>
            <el-select
              slot="reference"
              v-model="principal"
              class="input_box"
              placeholder="请选择"
              style="width:50%;"
            >
              <el-option
                v-for="item in principal_options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
                <span class="options_item" style="width: 5rem">{{item.value}}</span>
                <span class="options_item" style="width: 5rem">{{item.label}}</span>
              </el-option>
            </el-select>
          </span>
        </el-col>
        <el-col :span="6">
          <span>
            <span class="col_title">登记人</span>
            <label>
              <el-input
                type="text"
                v-model="operator"
                placeholder="请输入"
                class="input_box"
                style="width:50%"
              />
            </label>
          </span>
        </el-col>
        <el-col :span="6">
          <span>
            <span class="col_title">登记时间</span>
            <label>
              <el-date-picker
                type="date"
                v-model="indate"
                placeholder="请选择"
                class="input_box"
                style="width:50%"
              />
            </label>
          </span>
        </el-col>
      </el-row>

      <el-row :gutter="2" class="row">
        <el-col :span="6">
          <span>
            <span class="col_title">修改人</span>
            <label>
              <el-input
                type="text"
                placeholder="请输入"
                v-model="modifier"
                class="input_box"
                style="width:50%"
              />
            </label>
          </span>
        </el-col>
        <el-col :span="6">
          <span>
            <span class="col_title">修改日期</span>
            <label>
              <el-date-picker
                type="date"
                placeholder="请选择"
                v-model="modidate"
                class="input_box"
                style="width:50%"
              />
            </label>
          </span>
        </el-col>
        <el-col :span="6">
          <span>
            <span class="col_title">取消人</span>
            <label>
              <el-input
                type="text"
                placeholder="请输入"
                v-model="cancle"
                class="input_box"
                style="width:50%"
              />
            </label>
          </span>
        </el-col>
        <el-col :span="6">
          <span>
            <span class="col_title">取消时间</span>
            <label>
              <el-date-picker
                type="date"
                v-model="cancledate"
                placeholder="请选择"
                class="input_box"
                style="width:50%"
              />
            </label>
          </span>
        </el-col>
      </el-row>

      <el-row :gutter="2" class="row">
        <el-col :span="12">
          <span>
            <span class="col_title" style="vertical-align:top">备注</span>
            <label>
              <el-input
                type="textarea"
                v-model="remark"
                placeholder="请输入"
                style="width:75%; height:90px"
                class="input_box"
              ></el-input>
            </label>
          </span>
        </el-col>
        <el-col :span="12">
          <span>
            <span class="col_title" style="vertical-align:top">取消原因</span>
            <label>
              <el-input
                type="textarea"
                v-model="modicause"
                placeholder="请输入"
                style="width:75%; height:90px"
                class="input_box"
              ></el-input>
            </label>
          </span>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      code: "001", //自编号
      type: "", //设备类别
      userstatus: "", //使用状态
      name: "", //设备名称
      purpose: "", //设备用途
      userdepart: "", //车间
      spec: "", //规格型号
      prodid: "", //对应物资号
      country: "", //合同号
      fact_no: "", //出厂编号
      pic_path: "", //树结构图片路径
      english: "", //车辆编号
      productplace: "", //单位
      quantity: "", //设备重量
      really_equip: "", //真实设备
      status: "正常", //状态
      motoid: "", //材质
      key_part: "", //关键部位----
      suppid: "", //供应商id
      suppname: "", //供应商name
      mototype: "", //介质
      fact_date: "", //出厂日期
      throughput: "", //生产能力
      firstplace: "", //初装地点
      factory: "", //制造厂家
      puroperator: "", //购买人
      purdate: "", //购买日期
      standdate: "", //到货日期
      userdate: "", //投运时间
      userdutr: "", //岗位
      principal: "", //使用负责人
      operator: "", //登记人
      indate: "", //登记时间
      modifier: "", //修改人
      modidate: "", //修改日期
      cancle: "", // 取消人
      cancledate: "", //取消时间
      remark: "", //备注
      modicause: "", //取消原因

      status_options: [
        {
          value: "选项1",
          label: "在用"
        },
        {
          value: "选项2",
          label: "停用"
        },
        {
          value: "选项3",
          label: "维修"
        }
      ],
      type_options: [
        {
          value: "0001",
          label: "生产设备"
        },
        {
          value: "1000",
          label: "其它"
        }
      ],
      purpose_options: [
        {
          value: "0001",
          label: "净化设备"
        },
        {
          value: "0002",
          label: "尿素设备"
        },
        {
          value: "0003",
          label: "合成压缩"
        },
        {
          value: "0004",
          label: "气化车间设备"
        },
        {
          value: "0005",
          label: "煤储运设备"
        },
        {
          value: "QT00",
          label: "其它"
        }
      ],
      workshop_options: [
        {
          value: "0001",
          label: "净化"
        },
        {
          value: "0002",
          label: "合成"
        },
        {
          value: "0003",
          label: "气化"
        }
      ],
      principal_options: [
        {
          value: "admin",
          label: "管理员"
        },
        {
          value: "001",
          label: "test"
        }
      ]
    };
  },
  methods: {
    uploadSuccess(file) {
      this.pic_path = file.name;
    },
    uploadError(file) {
      // this.pic_path='上传失败';
      this.pic_path = file.name;
    }
  }
};
</script>

<style scoped>
* {
  font-size: 14px;
  color: #777e8c;
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
  /* border-right: 1px solid #ccc; */
  text-align: left;
}

.row {
  margin: 3px 2px;
}

.col_title {
  display: inline-block;
  width: 5rem;
  text-align: right;
}

.row_btn {
  width: auto;
  height: 25px;
}

.input_box {
  display: inline-block;
  width: 400px;
  height: 40px;
  margin-left: 8px;
  margin-bottom: 24px;
}

.options_item {
  float: left;
  width: 5rem;
  text-align: left;
}
</style>
