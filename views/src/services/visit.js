import request from 'umi-request';

export async function visit() {
  return request(`/visit`);
}
