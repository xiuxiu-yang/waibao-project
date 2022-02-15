<template>
  <div class="seckillActivity">
    <search-form
      v-bind="searchConfig"
      @handlerSearch="handlerSearch"
      @handlerReset="handlerReset"
    ></search-form>
    <table-content
      v-bind="tableConfig"
      @handlerDelete="handlerDelete"
      @handlerEdit="handlerEdit"
      @handlerCreate="handlerCreate"
      @handlerMoreDelete="handlerMoreDelete"
    ></table-content>
    <search-dialog
      v-bind="dialogConfig"
      ref="searchDialogRef"
      :defaultData="defaultData"
      @handlerConfirmCreate="handlerConfirmCreate"
      @handlerConfirmEdit="handlerConfirmEdit"
    ></search-dialog>
  </div>
</template>

<script setup lang="ts">
import { useAdmin } from '@/store'
import tableContent from '@/components/tableContent/tableContent.vue'
import searchForm from '@/components/searchForm/searchForm.vue'
import searchDialog from '@/components/searchDialog/searchDialog.vue'

import tableConfig from './tableConfig'
import searchConfig from './searchConfig'
import dialogConfig from './dialogConfig'

import handlerSetting from '@/hooks/handlerSetting'

const adminStore = useAdmin()
const handlerMoreDelete = (items: any[]) => {
  if (items.length) {
    const selectId: number[] = []
    items.forEach((item) => {
      selectId.push(item.productId)
    })
    adminStore.deleteActivityAction(selectId)
  }
}
const deleteCallback = (row: any) => {
  adminStore.deleteActivityAction([row.productId])
}
const handlerConfirmCreate = (data: any) => {
  console.log(data)
}
const handlerConfirmEdit = (data: any) => {
  console.log(data)
}
const {
  searchDialogRef,
  defaultData,
  handlerCreate,
  handlerDelete,
  handlerEdit,
  handlerSearch,
  handlerReset
} = handlerSetting(deleteCallback, tableConfig.tableName)
</script>

<style scoped lang="less"></style>
