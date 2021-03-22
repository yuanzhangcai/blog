import request from '@/utils/request';
export async function accountLogin(params) {
  return request('/user/login', {
    method: 'POST',
    data: params,
  });
  // return {
  //   status: 'error',
  //   type : 'account',
  //   currentAuthority: 'guest',
  // }
}
export async function getFakeCaptcha(mobile) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
