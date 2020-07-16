const state = {
  test: 'test',
  buttons: [
    {id: 7, text: '返回', active: true},
    {id: 6, text: '放弃', active: false},
    {id: 5, text: '确定', active: false},
    {id: 4, text: '删除', active: true},
    {id: 3, text: '复制', active: true},
    {id: 2, text: '取消', active: true},
    {id: 1, text: '更改', active: true},
    {id: 0, text: '新增', active: true}
  ],
  equipment: {
    // 自编号
    code: '',
    // 关键部位-->关键设备(是-1，否-0)
      //?-->?
    // 树结构图片路径
    pic_path: '',
    // 真实设备
    realequip: '1',
    // 设备名称
    name: '',
    // 状态
    status: '1',
    // 设备用途
    purpose: '',
    // 规格型号
    spec: '',
    // 使用状态
    userstatus: '',
    // 车辆编号
    english: '',
    // 设备类别
    type: '',
    // 对应物资号
    prodid: '',
    // 国别-->合同号
      //country-->?
    // 制造厂家
    factory: '',
    // 设备功率-->单位
      //productplace-->?
    // 出厂编号
    fact_no: '',
    // 出厂日期
    fact_date: '',
    // 设备重量
    quantity: 0,
    // 生产能力
    throughput: '',
    // 发动机型号-->介质
      //mototype-->?
    // 识别码-->材质
      // motoid-->?
    // 供应商
    suppid: '',
    suppname: '',
    // 初装地点
    firstplace: '',
    // 购买人
    puroperator: '',
    // 购买日期
    purdate: '',
    // 建档日期-->到货日期
      // standdate-->?
    // 启用日期-->投运时间
      // userdate-->?
    // 使用部门-->车间
      // userdepart-->?
    // 负责班组-->岗位
      // userduty-->?
    // 使用负责人
    principal: '',
    // 登记人
    operator: '',
    // 登记时间
    indate: '',
    // 修改人
    modifier: '',
    // 修改时间
    modidate: '',
    // 取消人
    cancle: '',
    // 取消时间
    cancledate: '',
    // 备注
    remark: '',
    // 取消原因
    modicause: ''
  },

};

const getters = {};

const actions = {
  setTest (context, test) {
    context.commit('stageTest', test);
  }
};

const mutations = {
  stageTest (state, test) {
    state.test = test;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
