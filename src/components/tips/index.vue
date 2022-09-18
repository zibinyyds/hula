
<script setup>
import Taro from '@tarojs/taro'
definePageConfig({
  component: true
})
const handleClick = () => {
  Taro.navigateTo({
    url:
      "/pages/h5page/index?value=https://www.oklink.com"
  });
}

</script>

<template>
  <view class="tip-2">
    <nut-icon class="inner-tip" size="8" name="tips"></nut-icon>
    <view >数据来源于OKLink.com</view>
  </view>
</template>

<style lang="scss">
.tip-2 {
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 10px;
  line-height: 10px;
  width: 100%;
}
.inner-tip{
  padding: 1px;
}
</style>
