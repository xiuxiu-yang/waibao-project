<template>
  <div class="seckillRule">
    <search-form
      v-bind="searchConfig"
      @handlerSearch="handlerSearch"
      @handlerReset="handlerReset"
    ></search-form>
    <table-content
      v-bind="tableConfig"
      @handlerDelete="handlerDelete"
      @handlerEdit="handlerEdit"
      @handlerMoreDelete="handlerMoreDelete"
    ></table-content>
    <search-dialog
      v-bind="dialogConfig"
      ref="searchDialogRef"
      :defaultData="defaultData"
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
const handlerMoreDelete = (items: any[]) => {
  if (items.length) {
    const selectId: number[] = []
    items.forEach((item) => {
      selectId.push(item.ruleId)
    })
    adminStore.deleteRuleAction(selectId)
  }
}

const deleteCallback = (row: any) => {
  adminStore.deleteRuleAction([row.ruleId])
}
const {
  searchDialogRef,
  handlerEdit,
  handlerDelete,
  defaultData,
  handlerSearch,
  handlerReset
} = handlerSetting(deleteCallback, tableConfig.tableName)

const handlerConfirmEdit = (data: any) => {
  adminStore.editRuleAction(data)
}
</script>

<style scoped lang="less"></style>
