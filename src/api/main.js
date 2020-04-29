import request from '../utils/request';
var apiMall = 'https://api.smartstorechina.com';
// get
export function getSomeThings(params) {
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
//# sourceMappingURL=main.js.map