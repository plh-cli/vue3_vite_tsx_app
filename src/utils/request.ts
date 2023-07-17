import axios from "axios";
import router from '@/router';

let burl = import.meta.env.VITE_APP_BASE_URL;
if (import.meta.env.MODE === "development") {
    burl = "/api";
}
const service = axios.create({
    baseURL: burl,
    timeout: 60000,
});

// Request interceptors
service.interceptors.request.use(
    (config) => {
        // config.headers[token] = '123'
        return config;
    },
    (error) => {
        Promise.reject(error);
    },
);

// Response interceptors
service.interceptors.response.use(
    (response: any) => {
        const res = response.data;
        if (res.code) {
            if (res.code == 200) {
                return res;
            } else {
                return Promise.reject("error with code: " + res.code);
            }
        } else {
            return response;
        }
    },
    (error) => {
        console.log('error',error.msg);
        return Promise.reject(error);
    },
);

/*
 *  get请求
 *  url:请求地址
 *  params:参数
 * */
export function get(url = "", params = {}) {
    return new Promise((resolve, reject) => {
        service({
            url,
            method: 'get',
            params
        }).then(response => {
            resolve(response);
        }).catch(error => {
            reject(error);
        });
    });
}

/*
 *  post请求
 *  url:请求地址
 *  params:参数
 * */
export function post(url = "", params = {}, rest = {}) {
    return new Promise((resolve, reject) => {
        service({
            url,
            method: 'post',
            data: params,
            ...rest
        }).then(response => {
            resolve(response);
        }).catch(error => {
            reject(error);
        });
    });
}

/*
 *  文件上传
 *  url:请求地址
 *  params:参数
 * */
export function fileUpload(url = "", params = {}) {
    return new Promise((resolve, reject) => {
        service({
            url,
            method: 'post',
            data: params,
            headers: { 'Content-Type': 'multipart/form-data' }
        }).then(response => {
            resolve(response);
        }).catch(error => {
            reject(error);
        });
    });
}

export default {
    get,
    post,
    fileUpload,
};