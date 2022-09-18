import Taro from "@tarojs/taro";
import qs from 'qs'

export const switchPage = (url, data) => {

  const URl = `${url}?${qs.stringify(data)}`
  Taro.navigateTo({
    url: URl
  });
};
