import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/layout/Layout.vue';
import Equipment from '@/views/Equipment.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect:'/equipment',
      children: [{
        path: 'equipment',
        component: Equipment,
      }]
    }
  ]
});
