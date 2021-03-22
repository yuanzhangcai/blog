// import request from 'umi-request';
import request from '@/utils/request';
export async function queryCurrent() {
  return request("/user/info", {
    method : "post",
    data : {"user" : "zacyuan"},
    // requestType : "form"
  });
  // return {
  //   name: '傲雨醉松',
  //   avatar: 'https://zacyuan.cn/images/header.gif',
  //   userid: '00000001',
  //   email: 'zacyuan@qq.com',
  //   signature: '不以物喜，不以己悲。',
  //   title: '后端开发',
  //   group: '蚂蚁集团－某某某事业群－某某平台部－某某技术部－UED',
  //   tags: [
  //     {
  //       key: '0',
  //       label: '80后',
  //     },
  //     {
  //       key: '1',
  //       label: '技术宅',
  //     },
  //     {
  //       key: '2',
  //       label: '精神小伙',
  //     },
  //     {
  //       key: '3',
  //       label: '江西人',
  //     },
  //     {
  //       key: '4',
  //       label: '数码控',
  //     },
  //     {
  //       key: '5',
  //       label: '匠人',
  //     },
  //     {
  //       key: '7',
  //       label: '半栈',
  //     },
  //   ],
  //   notifyCount: 12,
  //   unreadCount: 11,
  //   country: 'China',
  //   geographic: {
  //     province: {
  //       label: '上海市',
  //       key: '330000',
  //     },
  //     city: {
  //       label: '嘉定区',
  //       key: '330100',
  //     },
  //   },
  //   address: '西湖区工专路 77 号',
  //   phone: '0752-268888888',
  // };
}
export async function queryFakeList(params) {
  // return request('/api/fake_list', {
  //   params,
  // });
  return [
            {
                "id": "1",
                "owner": "zacyuan",
                "title": "开端",
                "avatar": "",
                "cover": "",
                "status": "active",
                "percent": 51,
                "logo": "",
                "href": "",
                "updatedAt": "2020-10-09 13:54",
                "createdAt": "2020-10-09 13:54",
                "subDescription": "那是一种内在的东西， 他们到达不了，也无法触及的",
                "description": "在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。",
                "activeUser": 103942,
                "newUser": 1074,
                "star": 0,
                "like": 0,
                "message": 0,
                "content": "个人博客的开启。（系统正在一步一步建设中。。。）"
            }
        ]
}
