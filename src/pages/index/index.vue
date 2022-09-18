<template>
  <view class="container">
    <view :style='style'></view>
    <nut-tabs type="smile" background="#fff" v-model="state.tabValue" title-scroll title-gutter="10">
      <nut-tabpane class="tabpane" v-for="item in state.list" :title="item.chainShortName">
        <nut-cell-group>
          <nut-cell v-for="inner in Object.keys(item)" @click="inner == 'chainShortName' ? goDetail(item[inner]) : ''"
            :is-link="inner == 'chainShortName' ? true: false" :title="enums[inner]" :desc="item[inner]"></nut-cell>
        </nut-cell-group>
      </nut-tabpane>
    </nut-tabs>
    <tips class="tips" />
  </view>
</template>



<script setup>
import { reactive, ref } from 'vue';
import Taro, { useDidShow, usePullDownRefresh } from '@tarojs/taro'
import tips from '../../components/tips/index.vue'
import { switchPage } from '../../utils';
import moment from "moment"
import enums from '../../config/enums'
import { useAppStore } from '../../store/index'
import request from '../../api/index'

definePageConfig({
  navigationBarTitleText: '首页',
  // navigationStyle: "custom",
  enablePullDownRefresh: true,
  backgroundTextStyle: "dark",
  usingComponents: {}
})
usePullDownRefresh(() => {
  getList().then(() => {
    Taro.stopPullDownRefresh();
  })
  console.log('onPullDownRefresh')
})

const appStore = useAppStore();
console.log(appStore.top);

const style = reactive({
  height: appStore.top + 'px',
  background: "#fff",
  position: 'fixed',
  top: 0,
});

const state = reactive({
  tabValue: 0,
  list: []
});

const goDetail = (chainShortName) => {
  console.log(chainShortName);
  switchPage('../detail/index', { chainShortName })
}

const getList = async () => {
  request('/blockchain/summary').then(res => {
    const data = res.data.map(item => {
      return {
        ...item,
        lastBlockTime: moment(item.lastBlockTime - 1).format('YYYY-MM-DD hh:mm:ss'),
        circulatingSupplyProportion: Number(item.circulatingSupplyProportion * 100).toFixed(2) + "%",
        transactions: Number(item.transactions).toLocaleString(),
        lastHeight: Number(item.lastHeight).toLocaleString(),
        circulatingSupply: Number(item.circulatingSupply).toLocaleString(),
      }
    })
    console.log(data);
    state.list = data;
  })
}


useDidShow(async () => {
  await getList();
})


// const state = reactive({
//   tab1value: '0',
//   list4: Array.from(new Array(10).keys()),
// });


</script>

<style lang="scss">
.tabpane {
  background: transparent;
  padding: 10px;
}

.tips {
  position: fixed;
  bottom: 2px;
}
</style>
