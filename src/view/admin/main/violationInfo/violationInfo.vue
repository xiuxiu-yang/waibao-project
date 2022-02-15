<template>
  <div class="violationInfo">
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
import searchDialog from '@/components/searchDialog/searchDialog.vue'
import searchForm from '@/components/searchForm/searchForm.vue'

import tableConfig from './tableConfig'
import dialogConfig from './dialogConfig'
import searchConfig from './searchConfig'

import handlerSetting from '@/hooks/handlerSetting'

const adminStore = useAdmin()
const handlerConfirmCreate = (data: any) => {
  adminStore.createViolationInfoAction(data)
}
const handlerConfirmEdit = (data: any) => {
  adminStore.editViolationAction(data)
}

const handlerMoreDelete = (items: any[]) => {
  if (items.length) {
    const selectId: number[] = []
    items.forEach((item) => {
      selectId.push(item.breakId)
    })
    adminStore.deleteViolationAction(selectId)
  }
}

const deleteCallback = (row: any) => {
  adminStore.deleteViolationAction([row.breakId])
}
const {
  searchDialogRef,
  handlerDelete,
  handlerEdit,
  defaultData,
  handlerCreate,
  handlerSearch,
  handlerReset
} = handlerSetting(deleteCallback, tableConfig.tableName)
</script>

<style scoped lang="less"></style>
