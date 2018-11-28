let urlhttp = "http://";

let domain = "10.78.57.85:9000/";
//项目后台发布名称
let Backstage = "api/services/EERP/";


//服务器域名
let host = domain + Backstage;
export default {
    getHttpmain() {
        return httpurl.url;
    },
};
//登录
global.LOGINBYAD = urlhttp + host + "User/LoginByAd";

//获得供应商列表
global.COMMONGETVENDORLIST = urlhttp + host + "Common/GetVendorList";
