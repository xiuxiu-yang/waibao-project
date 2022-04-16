<template>
  <div class="seckillActivity">
    <search-form
      v-bind="searchConfig"
      @handlerSearch="handlerSearch"
      @handlerReset="handlerReset"
    >
      <template #bankInfo>
        <div style="flex-grow: 1; text-align: right">
          <span
            style="
              color: rgb(245, 206, 119);
              margin-top: 6px;
              margin-right: 20px;
              display: inline-block;
              font-size: 18px;
              font-weight: 1000;
            "
          >
            银行剩余余额: ￥{{ adminStore.bankInfo.bankAccount }}
          </span>
        </div>
      </template>
    </search-form>
    <table-content
      v-bind="tableConfig"
      @handlerDelete="handlerDelete"
      @handlerEdit="handlerEdit"
      @handlerCreate="handlerCreate"
      @handlerMoreDelete="handlerMoreDelete"
      ref="tableContentRef"
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
import { ref } from 'vue'
import { useAdmin } from '@/store'
import tableContent from '@/components/tableContent/tableContent.vue'
import searchForm from '@/components/searchForm/searchForm.vue'
import searchDialog from '@/components/searchDialog/searchDialog.vue'

import tableConfig from './tableConfig'
import searchConfig from './searchConfig'
import dialogConfig from './dialogConfig'

import handlerSetting from '@/hooks/handlerSetting'

const tableContentRef = ref<typeof tableContent>()
const adminStore = useAdmin()
adminStore.adminGetBankInfoAction()
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
  adminStore.createActivityAction(data)
}
const handlerConfirmEdit = (data: any) => {
  adminStore.editActivityAction(data)
  tableContentRef.value!.page.currentPage = 1
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
