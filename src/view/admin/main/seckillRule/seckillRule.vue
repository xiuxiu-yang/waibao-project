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
      @handlerRule="handlerRule"
    ></table-content>
    <search-dialog
      v-bind="dialogConfig"
      ref="searchDialogRef"
      :defaultData="defaultData"
      @handlerConfirmEdit="handlerConfirmEdit"
    ></search-dialog>
    <el-dialog v-model="dialogFormVisible" title="规则详情">
      <rule-detail
        :content="detail.ruleContent"
        :key="detail.ruleContent"
        ref="ruleDetailRef"
      ></rule-detail>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handlerChangeEdit">确认</el-button>
          <el-button type="primary" @click="dialogFormVisible = false"
            >取消</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAdmin } from '@/store'
import tableContent from '@/components/tableContent/tableContent.vue'
import searchDialog from '@/components/searchDialog/searchDialog.vue'
import searchForm from '@/components/searchForm/searchForm.vue'
import ruleDetail from '@/components/ruleDetail/ruleDetail.vue'

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

const dialogFormVisible = ref(false)
const detail = ref({ ruleContent: '', ruleId: 0 })
const ruleDetailRef = ref<any>(null)
const handlerRule = (row: any) => {
  dialogFormVisible.value = true
  detail.value = row
}
const handlerChangeEdit = () => {
  adminStore.editRuleAction({
    ...detail.value,
    ruleContent: ruleDetailRef.value.handlerEditRule()
  })
  const strArr = ruleDetailRef.value.handlerEditRule().split('-')
  const arr: string[] = []
  strArr.forEach((item: string, index: number) => {
    if (index % 2) {
      arr.push(item)
    }
  })
  adminStore.editSkillRuleAction(detail.value.ruleId, arr)
  dialogFormVisible.value = false
}
</script>

<style scoped lang="less"></style>
