<template>
  <div class="loginPhone">
    <el-form
      :model="loginPhone"
      label-width="80px"
      :rules="rules"
      ref="elFormPhoneRef"
    >
      <el-form-item label="手机号:" prop="phone">
        <el-input v-model="loginPhone.phone"></el-input>
      </el-form-item>
      <el-form-item label="验证码:" prop="code">
        <div class="code">
          <el-input v-model="loginPhone.code"></el-input>
          <el-button
            type="primary"
            :disabled="disabled"
            @click="handlerGetCode"
            >{{ btnText }}</el-button
          >
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

import getCode from '@/utils/getCode'

const loginPhone = reactive({
  phone: '',
  code: ''
})
const rules = reactive({
  phone: [
    {
      required: true,
      message: '请输入手机号',
      trigger: 'blur'
    }
  ],
  code: {
    required: true,
    message: '请输入验证码',
    trigger: 'blur'
  }
})

const disabled = ref(false)
const btnText = ref('获取验证码')
const elFormPhoneRef = ref()
const handlerGetCode = () => {
  elFormPhoneRef.value?.validateField('phone', (err: string) => {
    if (!err) {
      getCode(disabled, btnText)
    }
  })
}

const handlerLoginPhone = () => {
  elFormPhoneRef.value?.validate((isValid: boolean) => {
    if (isValid) {
      console.log(loginPhone)
    }
  })
}

// eslint-disable-next-line no-undef
defineExpose({
  handlerLoginPhone
})
</script>

<style scoped lang="less">
.loginPhone {
  .code {
    display: flex;
    button {
      margin-left: 10px;
    }
  }
}
</style>
