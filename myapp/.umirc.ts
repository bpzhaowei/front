import { defineConfig } from 'umi';

export default defineConfig({
  hash:true, /*禁止缓存*/
  metas:[
    {httpEquiv:'Cache-Control',content:'no-cache'},
    {httpEquiv:'Pragma',content:'no-cache'},
    {httpEquiv:'Expires',content:'no-cache'}
  ],
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index',
      routes:[
        { path: '/map1', component: '@/pages/map/map1' },
        { path: '/fadian', component: '@/pages/map/Fadian' },

        { path: '/three2', component: '@/pages/map/Three2' },
        { path: '/three3', component: '@/pages/map/Three3' },
        { path: '/three5', component: '@/pages/map/three5' },
        { path: '/font1', component: '@/pages/ex/font1' },
        { path: '/ThreeBim', component: '@/pages/three/ThreeBim' },
        { path: '/ThreeBim3', component: '@/pages/three/ThreeBim3' },
        { path: '/ThreeBim4', component: '@/pages/three/ThreeBim4' },
        { path: '/ThreeBim6', component: '@/pages/three/ThreeBim6' },
      ]

    },




  ],
  fastRefresh: {},
});

