import {request} from '../network'

export function getshujv() {
  return request({ url: 'http://152.136.185.210:7878/api/hy66/home/multidata'});
}
export function getgoods(type, page) {
  return request({
    url: 'http://152.136.185.210:7878/api/hy66/home/data?type='+type+'&page='+page,
    params: {
      type,
      page
    }
   
  });
}