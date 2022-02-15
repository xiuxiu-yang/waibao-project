<template>
  <div class="search-dialog">
    <el-dialog
      v-model="dialogVisible"
      :title="`${props.formTitle}`"
      center
      width="25%"
      destroy-on-close
    >
      <ct-form
        v-model="formData"
        :form-info="props.formInfo"
        :col-style="props.colStyle"
        class="dialogForm"
        ref="ctFormRef"
      ></ct-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handlerDialogConfirm"
            >确定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

import { useAdmin } from '@/store'

import ctForm from '@/baseui/form.vue'
import { IFormInfoType } from '@/view/admin/main/type'

// eslint-disable-next-line no-undef
const props = defineProps<{
  formInfo: IFormInfoType[]
  colStyle: number
  formTitle: string
  defaultData: {} | Object
}>()

// eslint-disable-next-line no-undef
const emit = defineEmits(['handlerConfirmCreate', 'handlerConfirmEdit'])
const adminStore = useAdmin()
const dialogVisible = ref(false)
const formData = ref<any>({})
watch(
  () => props.defaultData,
  (newValue) => {
    formData.value = { ...newValue }
  }
)
props.formInfo.forEach((item) => {
  if (item.options && item.url) {
    adminStore.getTableDataAction(item.url).then(() => {
      if (item.url === 'userInfo') {
        adminStore.userInfo.records.forEach((i: any) => {
          item.options?.push({ label: i.name, value: i.userId })
        })
      } else if (item.url === 'rule') {
        adminStore.rule.records.forEach((i: any) => {
          item.options?.push({ label: i.ruleName, value: i.ruleId })
        })
      }
    })
  }
})

const ctFormRef = ref<InstanceType<typeof ctForm>>()
const handlerDialogConfirm = () => {
  if (ctFormRef.value?.handlerFormValidate()) dialogVisible.value = false
  if (Object.keys(props.defaultData).length) {
    const userItem = props.formInfo.find((item) => item.field === 'userId')
    const option = userItem?.options?.find(
      (item) => item.value === formData.value.userId
    )
    const ruleItem = props.formInfo.find((item) => item.field === 'ruleId')
    const option2 = ruleItem?.options?.find(
      (item) => item.value === formData.value.ruleId
    )
    emit('handlerConfirmEdit', {
      ...formData.value,
      userName: option?.label,
      ruleName: option2?.label
    })
  } else {
    emit('handlerConfirmCreate', formData.value)
  }
}

// eslint-disable-next-line no-undef
defineExpose({
  dialogVisible,
  formData
})
</script>

<style scoped lang="less">
.search-dialog {
  .dialogForm {
    margin: 0 auto;
  }
}
</style>
