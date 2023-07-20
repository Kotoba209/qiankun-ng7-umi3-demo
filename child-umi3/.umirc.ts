import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  plugins: [
  ],
  qiankun: {
    // master: {
    //   defer: false, // 是否异步渲染
    //   jsSandbox: true, // 是否启用 js 沙箱
    //   prefetch: true, // 是否启用 prefetch 特性
    // },
    slave: {},
  },
  publicPath: '/main/micro/',
  routes: [
    {
      path: 'main',
      component: '@/layouts/index',
      routes: [
        { path: 'micro/pageA', component: '@/pages/groupA/pageA/index' },
        { path: 'micro/pageB', component: '@/pages/groupA/pageB/index' },
      ],
    }
  ],
  fastRefresh: {},
  antd: {},
});
