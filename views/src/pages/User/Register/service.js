import request from 'umi-request';
import { baseUrl } from '@/utils/utils';

export async function register(params) {
  const url = baseUrl + "/user/register"
  return request(url, {
    method: 'POST',
    data: params,
  });

  // return request('/api/register', {
  //   method: 'POST',
  //   data: params,
  // });
}
