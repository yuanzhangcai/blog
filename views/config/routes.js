export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './User/login',
          },
        ],
      },
      {
        path: '/admin',
        component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/admin',
            component: '../layouts/BasicAdmin',
            authority: ['admin', 'user'],
            routes: [
              {
                path: '/admin',
                redirect: '/admin/dashboard',
              },
              {
                name: '首页',
                icon: 'HomeOutlined',
                path: '/admin/dashboard',
                component: './Admin/Dashboard',
              },
              {
                path: '/admin/article',
                name: '文章',
                icon: 'CopyOutlined',
                routes: [
                  {
                    path: '/',
                    redirect: '/admin/article/add',
                  },
                  {
                    name: '基础表单',
                    icon: 'smile',
                    path: '/admin/article/add',
                    component: './Admin/Article/Add',
                  },
                ],
              },
              {
                path: '/admin/comment',
                name: '评论',
                icon: 'CommentOutlined',
                routes: [
                  {
                    path: '/',
                    redirect: '/admin/comment/list',
                  },
                ],
              },
              {
                path: '/admin/user',
                name: '用户',
                icon: 'TeamOutlined',
                routes: [
                  {
                    path: '/',
                    redirect: '/admin/user/list',
                  },
                ],
              },
              {
                path: '/admin/center',
                name: '个人中心',
                icon: 'SettingOutlined',
                routes: [
                  {
                    path: '/',
                    redirect: '/admin/center/list',
                  },
                ],
              },
              {
                component: './404',
              },
            ],
          },
        ],
      },
      {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            authority: ['admin', 'user'],
            routes: [
              {
                path: '/',
                redirect: '/home',
              },
              {
                name: 'home',
                icon: 'home',
                path: '/home',
                component: './Home',
              },
              {
                name: 'article',
                icon: 'smile',
                path: '/article',
                hideInMenu: true,
                component: './Article',
              },
              {
                component: './404',
              },
            ],
          },
        ],
      },
    ],
  },
];
