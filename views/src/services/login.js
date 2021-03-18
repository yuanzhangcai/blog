import request from '@/utils/request';
export async function fakeAccountLogin(params) {
  // return request('/api/login/account', {
  //   method: 'POST',
  //   data: params,
  // });
  return {
    status: 'error',
    type : 'account',
    currentAuthority: 'guest',
  }
}
export async function getFakeCaptcha(mobile) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
