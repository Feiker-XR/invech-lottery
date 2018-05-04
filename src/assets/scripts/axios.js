import axios from 'axios';

axios.default.timeout = 5000;

axios.defaults.baseURL = 'http://www.am.dd788799.com/';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 请求拦截
axios.interceptors.request.use(function (config) {

    console.log(config);
    return config;  // 处理请求之前的配置
}, function (error) {
    return Promise.reject(error);   // 请求失败的处理
});

// 响应拦截
axios.interceptors.response.use(function (response) {
    console.log(response);
    return response;         // 处理响应数据
}, function (error) {
    return Promise.reject(error);   // 处理响应失败
});
export default axios;