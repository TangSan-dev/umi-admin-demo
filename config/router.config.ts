module.exports = {
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: '登录中心',
      component: '@/pages/login',
      exact: true,
    },
    {
      path: '/admin',
      name: '后台管理系统',
      component: '@/layout/index',
      // exact: true,
      routes: [
        {
          // exact: true,
          path: '/admin',
          name: '首页',
          component: '@/pages/home',
        },
        {
          component: '@/pages/404',
        },
      ],
    },
    {
      component: '@/pages/404',
    },
  ],
};
