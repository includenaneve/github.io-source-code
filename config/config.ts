import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/basic/layout',
      routes: [
        { path: '/index', component: '@/pages/home/index' },
        {
          component: '@/pages/404'
        }
      ]
    },
  ],
});
