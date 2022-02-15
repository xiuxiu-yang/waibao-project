<template>
  <div class="searchForm">
    <ct-form
      :col-style="props.colStyle"
      :form-info="props.formInfo"
      v-model="formData"
    ></ct-form>
    <el-button type="primary" @click="handlerReset">重置</el-button>
    <el-button type="primary" @click="handlerSearch">搜索</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import ctForm from '@/baseui/form.vue'

// eslint-disable-next-line no-undef
const props = defineProps<{
  formInfo: {
    label: string
    field: string
    type: string
  }[]
  colStyle: number
}>()

// eslint-disable-next-line no-undef
const emit = defineEmits(['handlerSearch', 'handlerReset'])

const formData = ref({})

const handlerSearch = () => {
  emit('handlerSearch', formData.value)
}
const handlerReset = () => {
  formData.value = {}
  emit('handlerReset')
}
</script>

<style scoped lang="less">
.searchForm {
  padding-top: 20px;
  display: flex;
  background-color: rgb(245, 245, 245);
  overflow: hidden;
}
</style>
