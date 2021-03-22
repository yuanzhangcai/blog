import request from '@/utils/request';
export async function accountLogin(params) {
  return request('/user/login', {
    method: 'POST',
    data: params,
  });
}

export async function accountLogout() {
  return request('/user/logout', {
    method: 'POST',
  });
}

export async function getFakeCaptcha(mobile) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
