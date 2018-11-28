import axios from 'axios';
import {Loading} from 'element-ui';
import {Message} from 'element-ui';
import {MessageBox} from 'element-ui';
import router from './../router';

axios.defaults.timeout = 30000;
axios.defaults.baseURL = '';


//http request 拦截器
axios.interceptors.request.use(
    config => {
        // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
        config.data = JSON.stringify(config.data);

        // let tokenId = localStorage.getItem('tokenId');
        config.headers = {
            /* 'Content-Type':'application/x-www-form-urlencoded'*/
            'Content-Type': 'application/json',
        };
        return config;
    },
    error => {
        return Promise.reject(err);
    }
);


//http response 拦截器
axios.interceptors.response.use(
    response => {
        if (response.data.errCode === 2) {
            console.log("过期")
            router.push({
                path: "/login",
                querry: {redirect: router.currentRoute.fullPath}//从哪个页面跳转
            })
        }
        return response;
    },
    error => {
        return Promise.reject(error)
    }
);


/**
 * 封装get方法
 * @param url
 * @param params
 * @returns {Promise}
 */

export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        const loading = this.$loading({
            lock: true,
            text: '加载中',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        });

        axios.get(url, {
            params: params
        })
            .then(response => {

                landing(url, params, response.data);
                resolve(response.data);
                setTimeout(() => {
                    loading.close();
                }, 1000);
            })
            .catch(err => {
                reject(err);
                setTimeout(() => {
                    loading.close();
                    msag(err)
                }, 1000);

            })
    })
}

/**
 * 封装delete方法
 * @param url
 * @param params
 * @returns {Promise}
 */

export function Delete(url, params = {}) {
  return new Promise((resolve, reject) => {
    const loading = this.$loading({
      lock: true,
      text: '加载中',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    });

    axios.delete(url, {
      params: params
    })
      .then(response => {

        landing(url, params, response.data);
        resolve(response.data);
        setTimeout(() => {
          loading.close();
        }, 1000);
      })
      .catch(err => {
        reject(err);
        setTimeout(() => {
          loading.close();
          msag(err)
        }, 1000);

      })
  })
}



/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data) {
    return new Promise((resolve, reject) => {
        //j进度条
        const loading = this.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        });

        axios.post(url, data).then(response => {

            //关闭进度条
            resolve(response.data);
            setTimeout(() => {
                landing(url, data, response.data);
                loading.close();
            }, 1000);


        }, err => {
            setTimeout(() => {
                loading.close();
                msag(err)
            }, 1000);

            reject(err)
        })
    })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.patch(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                msag(err)
                reject(err)
            })
    })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                msag(err)
                reject(err)
            })
    })
}


//失败提示
function msag(err) {
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                alert(err.response.data.error.details);
                break
            case 401:
               alert("未授权，请登录");
                break

            case 403:
               alert("拒绝访问");
                break

            case 404:
                alert("请求地址出错");
                break

            case 408:
               alert("请求超时");
                break

            case 500:
               alert("服务器内部错误");
                break

            case 501:
               alert("服务未实现");
                break

            case 502:
               alert("网关错误");
                break

            case 503:
               alert("服务不可用");
                break

            case 504:
               alert("网关超时");
                break

            case 505:
               alert("HTTP版本不受支持");
                break
            default:
        }
    }
}


/**
 * 查看返回的数据
 * @param url
 * @param params
 * @param data
 */
function landing(url, params, data) {

    // console.log("接口请求地址=====>", url);
    // console.log("接口传递参数=====>", params);
    // console.log("接口返回数据=====>", data);


    if (data.code === -1) {
        MessageBox.alert(data.msg, '提示', {
            confirmButtonText: '确定',
            callback: action => {
                console.log("跳转到登录页")
                window.location.replace(window.location.origin + '/#/login');
                location.reload();
                /* router.replace('/login');
		//人为制造一个错误，引发js 异常机制。中断执行
		 $ddd.dd();*/
            }
        });
    }
}
