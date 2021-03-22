import request from 'umi-request';

export async function register(params) {
  return request("/user/register", {
    method: 'POST',
    data: params
  });

  // return request('/api/register', {
  //   method: 'POST',
  //   data: params,
  // });
}
