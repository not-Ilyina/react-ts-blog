import axios from "axios";

const request = axios.create({
    baseURL: "",
    timeout: 10000,
    withCredentials: false,
});


request.interceptors.request.use((config) => {
    return config;
}, (err) => Promise.reject(err));

// 使用第二个拦截器
// instance.interceptors.request.use((config) => {
//     console.log(config, '1111111');
//     return config;
// }, (err) => Promise.reject(err));


export default request;