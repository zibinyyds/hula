import Taro from "@tarojs/taro";

const baseUrl = "https://www.oklink.com/api/v5/explorer";
// export

const request = async (url, data = {}) => {
  const res = await Taro.request({
    url: `${baseUrl}${url}`,
    header: {
      "Ok-Access-Key": "b808c04f-37cd-47fd-aac8-8ffaf8a7c34c"
    },
    data
  });
  return res.data;
};

export const checkSession = async () => {
  Taro.checkSession({
    success: function() {
      return true;
      //session_key 未过期，并且在本生命周期一直有效
    },
    fail: function() {
      // session_key 已经失效，需要重新执行登录流程
      Taro.login(); //重新登录
    }
  });
};

export const login = async () => {
  const res = await Taro.login();
  if (res.code) {
    const {
      data: { session_key, openid }
    } = await request({
      path: "/user/login",
      data: { code: res.code }
    });
  } else {
    console.log("登录失败！" + res.errMsg);
  }
};

export default request;
