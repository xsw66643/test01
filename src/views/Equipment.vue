<template>
  <div class="equipment-view">
    <equip-list />
    <Panel />
  </div>
</template>

<script>
import EquipList from "@/components/equipment/EquipList.vue";
import Panel from "@/components/equipment/panel/Panel.vue";

export default {
  name: "Equipment",
  components: {
    EquipList,
    Panel
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.equipment-view {
  // background-color: white;
  // border: solid 1px;
}
</style>>
