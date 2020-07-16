<template>
  <div>
    危险源标识
    <!-- <el-input 
    placeholder="测试vuex组件间传值"
    v-model="test_text"
    />
    <el-button type="medium" @click="confirm()">确认</el-button>-->
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      test_text: ""
    };
  },
  computed: {
    ...mapState({
      test: state => state.equipment.test
    })
  },
  mounted() {
    this.init();
  },
  methods: {
    ...mapActions("equipment", ["setTest"]),
    init() {},
    confirm() {
      this.setTest(this.test_text);
    }
  }
};
</script>
