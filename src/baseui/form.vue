<template>
  <div class="form">
    <el-form :model="props.modelValue" ref="formRef">
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
              <template v-else-if="item.type === 'select'">
                <el-select
                  v-model="props.modelValue[`${item.field}`]"
                  :placeholder="item.placeholder"
                  size="large"
                >
                  <el-option
                    v-for="i in item.options"
                    :key="i.value"
                    :label="i.label"
                    :value="i.value"
                    @update:modelValue="handlerChange($event, item.field)"
                  >
                  </el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'upload'"></template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { IFormInfoType } from '@/view/admin/main/type'

// eslint-disable-next-line no-undef
const props = defineProps<{
  modelValue: Object
  formInfo: IFormInfoType[]
  colStyle: number
}>()
// eslint-disable-next-line no-undef
const emits = defineEmits(['update:modelValue'])
const handlerChange = (target: string, field: string) => {
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

<style scoped lang="less"></style>
