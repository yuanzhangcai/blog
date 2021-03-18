import request from 'umi-request';
import { baseUrl } from '@/utils/utils';

export async function visit() {
  return request(`${baseUrl}/visit`);
}
