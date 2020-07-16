import Vue from 'vue';
import Vuex from 'vuex';
import equipment from './equipment.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    equipment,
  }
});
