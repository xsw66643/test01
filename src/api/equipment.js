import http from '@/util/http';
const request = 'http://148.70.32.76:8081/equipment';
const equipmentApi = {
  // 获取所有设备的所有信息列表
  getEquipList () {
    return http.get(`${request}/list`);
  },
  
  // 获取所有设备的部分需展示信息列表
  getCandN () {
    return http.get(`${request}/getCandN`);
  },

  // 根据设备编号code获取设备信息
  getEByCode (ECode) {
    return http.get(`${request}/getEByCode/` + ECode);
  }
};
export default equipmentApi;
