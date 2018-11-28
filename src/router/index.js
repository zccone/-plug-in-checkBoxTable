import Vue from 'vue';
import Router from 'vue-router';
import checkboxTable from '@/components/page/checkboxTable/index.vue';
import main from '@/components/page/index.vue';



Vue.use(Router);
//去缓存里面拿一个菜单
let ms_lujin = localStorage.getItem('ms_lujin');
//如果没有拿到就去登陆页面
ms_lujin === null ? ms_lujin = '/checkboxTable' : '/checkboxTable';


export default new Router(
  {

    routes: [
      {
        path: '/',
        name: 'checkboxTable', component: checkboxTable,
        meta: {title: '多选表格'},
      },
    ]
  })
