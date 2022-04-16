<template>
  <div class="form">
    <el-form
      :model="props.modelValue"
      ref="formRef"
      :label-position="props.labelPosition"
    >
      <el-row>
        <template v-for="item in props.formInfo" :key="item.field">
          <el-col :span="props.colStyle">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              style="padding: 0 20px"
              :prop="item.field"
              label-width="80px"
            >
              <template v-if="item.type === 'input'">
                <el-input
                  :modelValue="props.modelValue[`${item.field}`]"
                  @update:modelValue="handlerChange($event, item.field)"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'textarea'">
                <el-input
                  :modelValue="props.modelValue[`${item.field}`]"
                  @update:modelValue="handlerChange($event, item.field)"
                  type="textarea"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :model-value="props.modelValue[`${item.field}`]"
                  :placeholder="item.placeholder"
                  size="large"
                  style="width: 100%"
                  @update:modelValue="handlerChange($event, item.field)"
                >
                  <el-option
                    v-for="i in item.options"
                    :key="i.value"
                    :label="i.label"
                    :value="i.value"
                  >
                  </el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datapicker'">
                <el-date-picker
                  :model-value="props.modelValue[`${item.field}`]"
                  type="datetime"
                  placeholder="选择时间"
                  @update:modelValue="handlerChange($event, item.field)"
              /></template>
              <template v-else-if="item.type === 'url'">
                <div class="urlItem">
                  <el-input
                    :modelValue="props.modelValue[`urlF`]"
                    @update:modelValue="handlerChange($event, 'urlF')"
                  ></el-input>
                  <span>&nbsp;/&nbsp;</span>
                  <el-input
                    :modelValue="props.modelValue[`urlL`]"
                    @update:modelValue="handlerChange($event, 'urlL')"
                  ></el-input>
                </div>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import dayjs from 'dayjs'

import { IFormInfoType } from '@/view/admin/main/type'

// eslint-disable-next-line no-undef
const props = defineProps<{
  modelValue: Object
  formInfo: IFormInfoType[]
  colStyle: number
  labelPosition: string
}>()
// eslint-disable-next-line no-undef
const emits = defineEmits(['update:modelValue'])
const handlerChange = (target: string, field: string) => {
  if (field.endsWith('Time')) {
    target = dayjs(target).format('YYYY-MM-DD HH:mm:ss')
  }
  emits('update:modelValue', { ...props.modelValue, [field]: target })
}

const formRef = ref()

const handlerFormValidate = () => {
  let isValidate = true
  formRef.value.validate((isValid: boolean) => {
    isValidate = isValid
  })

  return isValidate
}

// eslint-disable-next-line no-undef
defineExpose({
  handlerFormValidate
})
</script>

<style scoped lang="less">
.form {
  .urlItem {
    display: flex;
    justify-content: space-between;
    span {
      font-weight: 500;
    }
  }
}
</style>
