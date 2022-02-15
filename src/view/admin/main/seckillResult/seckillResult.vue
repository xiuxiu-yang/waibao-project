<template>
  <div class="seckillResult">
    <search-form
      v-bind="searchConfig"
      @handlerSearch="handlerSearch"
      @handlerReset="handlerReset"
    ></search-form>
    <table-content
      v-bind="tableConfig"
      @handlerMoreDelete="handlerMoreDelete"
      @handlerDelete="handlerDelete"
    ></table-content>
  </div>
</template>

<script setup lang="ts">
import { useAdmin } from '@/store'

import tableContent from '@/components/tableContent/tableContent.vue'
import searchForm from '@/components/searchForm/searchForm.vue'

import tableConfig from './tableConfig'
import searchConfig from './searchConfig'

import handlerSetting from '@/hooks/handlerSetting'

const adminStore = useAdmin()

const handlerMoreDelete = (items: any[]) => {
  if (items.length) {
    const selectId: number[] = []
    items.forEach((item) => {
      selectId.push(item.resultId)
    })
    adminStore.deleteResultAction(selectId)
  }
}

const deleteCallback = (row: any) => {
  adminStore.deleteResultAction([row.resultId])
}
const { handlerDelete, handlerSearch, handlerReset } = handlerSetting(
  deleteCallback,
  tableConfig.tableName
)
</script>

<style scoped lang="less"></style>
