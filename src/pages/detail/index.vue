<template>
  <nut-tabs style="height:100vh" @change="getList" v-model="value" title-scroll direction="vertical">
    <nut-tabpane v-for="item in Object.keys(siderEnums)" :title="item">
      <nut-cell-group :title="item">
        <nut-cell v-for="inner in Object.keys(list)" :title="enums[inner]" :desc="list[inner]"></nut-cell>
      </nut-cell-group>
    </nut-tabpane>
  </nut-tabs>
</template>

<script setup>
import { useDidShow, useRouter } from '@tarojs/taro'
import request from '../../api/index';
import enums from '../../config/enums';
import { reactive, ref } from "vue"
definePageConfig({
  navigationBarTitleText: '发现',
  usingComponents: {}
})

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

  request(`/blockchain/${siderEnums[e.title]}`, {
    chainShortName
  }).then(res => {
    list.value = res.data[0]
  })
}

const value = ref(0);
const list = ref([]);

useDidShow(() => {
  getList({ title: '持币地址基础信息' })
})

</script>
