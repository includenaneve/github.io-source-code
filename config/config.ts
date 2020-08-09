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
        {
          component: '@/pages/404'
        }
      ]
    },
  ],
});
