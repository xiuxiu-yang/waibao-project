<template>
  <div class="register">
    <el-card style="background-color: rgba(255, 255, 255, 0.5)">
      <div class="goBack">
        <el-button :icon="Back" circle @click="handlerLogin"></el-button>
      </div>
      <h3 class="registerTitle">注册用户</h3>
      <el-form
        :model="register"
        label-width="80px"
        :rules="rules"
        ref="elFormRef"
      >
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="register.phone"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="register.password"
            :show-password="true"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="password">
          <el-input
            v-model="register.confirmPassword"
            :show-password="true"
          ></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <div class="code">
            <el-input v-model="register.code"></el-input>
            <el-button
              type="primary"
              :disabled="disabled"
              @click="handlerGetCode"
              >{{ btnText }}</el-button
            >
          </div>
        </el-form-item>
      </el-form>
    </el-card>
    <div class="resgiterBtn">
      <el-button type="primary" style="width: 100%" @click="handlerRegister"
        >注册</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

import { Back } from '@element-plus/icons-vue'

import throttle from '@/utils/throttle'
import getCode from '@/utils/getCode'

const register = reactive({
  phone: '',
  password: '',
  confirmPassword: '',
  code: ''
})

const rules = {
  phone: [
    {
      required: true,
      message: '请输入手机号',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    }
  ],
  confirmPassword: [
    {
      required: true,
      message: '请再次输入密码',
      trigger: 'blur'
    }
  ],
  code: [
    {
      required: true,
      message: '请输入验证码',
      trigger: 'blur'
    }
  ]
}

const disabled = ref(false)
const btnText = ref('获取验证码')
const elFormRef = ref()
const handlerGetCode = () => {
  elFormRef.value?.validateField('phone', (err: string) => {
    if (!err) {
      getCode(disabled, btnText)
    }
  })
}

const handlerRegister = throttle(() => {
  console.log('register')
}, 1000)

// eslint-disable-next-line no-undef
const emit = defineEmits(['handlerToggle'])
const handlerLogin = () => {
  emit('handlerToggle')
}
</script>

<style scoped lang="less">
.register {
  width: 320px;
  position: relative;
  .goBack {
    position: absolute;
    top: 10px;
    left: 10px;
    opacity: 0.5;
  }
  .registerTitle {
    text-align: center;
    margin-top: 0;
  }
  .code {
    display: flex;
    button {
      margin-left: 10px;
    }
  }
  .resgiterBtn {
    margin-top: 20px;
  }
}
</style>
