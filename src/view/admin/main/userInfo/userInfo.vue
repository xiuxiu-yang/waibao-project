<template>
  <div class="userInfo">
    <search-form
      v-bind="searchConfig"
      @handlerSearch="handlerSearch"
      @handlerReset="handlerReset"
    ></search-form>
    <table-content
      v-bind="tableConfig"
      @handler-edit="handlerEdit"
      @handler-delete="handlerDelete"
      @handlerMoreDelete="handlerMoreDelete"
    ></table-content>
    <search-dialog
      v-bind="dialogConfig"
      :defaultData="defaultData"
      ref="searchDialogRef"
      @handlerConfirmEdit="handlerConfirmEdit"
    ></search-dialog>
  </div>
</template>

<script setup lang="ts">
import { useAdmin } from '@/store'
import TableContent from '@/components/tableContent/tableContent.vue'
import searchDialog from '@/components/searchDialog/searchDialog.vue'
import searchForm from '@/components/searchForm/searchForm.vue'

import dialogConfig from './dialogConfig'
import tableConfig from './tableConfig'
import searchConfig from './searchConfig'

import handlerSetting from '@/hooks/handlerSetting'

const adminStore = useAdmin()

const handlerMoreDelete = (items: any[]) => {
  if (items.length) {
    const selectId: number[] = []
    items.forEach((item) => {
      selectId.push(item.userId)
    })
    adminStore.deleteUserInfoAction(selectId)
  }
}

const deleteCallback = (row: any) => {
  adminStore.deleteUserInfoAction([row.userId])
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
  delete data.createDate
  adminStore.editUserInfoAction(data)
}
</script>

<style scoped lang="less"></style>
