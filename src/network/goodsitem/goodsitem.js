import { request } from "../network";
export function getgoodsitemdata(id){
    return request(
        {
            url: ('http://152.136.185.210:7878/api/hy66/detail?iid=' + id)
        }
    )
}