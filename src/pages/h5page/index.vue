<template>
  <web-view :src="srcValue"></web-view>
</template>
<script setup>
import { useDidShow, useRouter} from '@tarojs/taro'
import { ref } from 'vue';

const srcValue = ref('')

const value = useRouter().params.value

useDidShow(() => {

  console.log(value);
  srcValue.value = value
})

</script>
