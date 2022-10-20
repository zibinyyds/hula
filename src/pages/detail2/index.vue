<template>
  <view class="container">
    <nut-collapse class="collapse" v-model:active="activeNames" icon="down-arrow">
      <nut-collapse-item v-for="(item,index) in Object.keys(siderEnums)" :title="item" :name="index+1">
        <nut-cell-group v-if="list[siderEnums[item]]">
          <!-- {{ list[siderEnums[item]] ? Object.keys(list[siderEnums[item]]) : '' }} -->
          <nut-cell v-for="inner in Object.keys(list[siderEnums[item]])" :title="enums[inner]"
            :desc="list[siderEnums[item]][inner]">

          </nut-cell>
        </nut-cell-group>
      </nut-collapse-item>
    </nut-collapse>
  </view>
</template>
<script setup>
import { useDidShow, useRouter } from '@tarojs/taro'
import request from '../../api/index';
import enums from '../../config/enums';
import { reactive } from "vue"
definePageConfig({
  navigationBarTitleText: '发现',
  usingComponents: {}
})
const activeNames = reactive([1, 2]);
const siderEnums = {
  "持币地址基础信息": "address",
  "区块基础信息": "block",
  "最佳手续费或Gas费": "fee",
  "算力基础信息": "hashes",
  "公链详情信息": "info",
  "挖矿基础信息": "mine",
  "链上交易信息": "transaction",
}

const chainShortName = useRouter().params.chainShortName;
const getList = (e) => {
  const path = siderEnums[e.title]
  request(`/blockchain/${path}`, {
    chainShortName
  }).then(res => {
    console.log(res);
    list[path] = res.data[0]
  })
}

const list = reactive({});

useDidShow(() => {
  Object.keys(siderEnums).forEach((item) => {
    getList({ title: item })
  })
})

</script>

<style lang="scss">
.collapse {
  background: transparent;
  padding: 10px;
  border-radius: 12px;
}
</style>