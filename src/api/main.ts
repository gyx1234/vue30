import request from '../utils/request';
let apiMall = 'https://api.smartstorechina.com'
// get
export function getSomeThings(params:any) {
    return request({
        url: 'https://api.smartstorechina.com/1.0/XcxProduct/getTypes',
    });
}

// post
// export function postSomeThings(params:any) {
//     return request({
//         url: '/1.0/XcxProduct/getTypes',
//         methods: 'post',
//         data: params
//     });
// }
