// import request from 'umi-request';
import request from '@/utils/request';

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
