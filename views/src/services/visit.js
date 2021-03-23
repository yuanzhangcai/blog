import request from '@/utils/request';

export async function pageVisit() {
  return request(`/visit`);
}
