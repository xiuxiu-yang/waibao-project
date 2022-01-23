<template>
  <div class="loginPanel">
    <h2 class="loginTitle">用户登入</h2>
    <el-tabs type="border-card" stretch v-model="checkTab">
      <el-tab-pane name="account">
        <template #label>
          <span>
            <el-icon><user-filled /></el-icon>账号登入
          </span>
        </template>
        <login-account ref="loginAccountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span>
            <el-icon><cellphone /></el-icon>手机登入
          </span>
        </template>
        <login-phone ref="loginPhoneRef"></login-phone>
      </el-tab-pane>
    </el-tabs>
    <div class="loginBtn">
      <el-button type="primary" style="width: 100%" @click="handlerLogin"
        >登入</el-button
      >
    </div>
    <div class="register">
      <el-link type="primary" @click="handlerRegister">立即注册</el-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { UserFilled, Cellphone } from '@element-plus/icons-vue'

import loginAccount from './loginAccount.vue'
import loginPhone from './loginPhone.vue'

import throttle from '@/utils/throttle'

const loginPhoneRef = ref<InstanceType<typeof loginPhone>>()
const loginAccountRef = ref<InstanceType<typeof loginAccount>>()

const checkTab = ref('account')

// eslint-disable-next-line no-undef
const emit = defineEmits(['handlerToggle'])
const handlerRegister = () => {
  emit('handlerToggle')
}

const handlerLogin = throttle(() => {
  if (checkTab.value === 'account') {
    loginAccountRef.value?.handlerLoginAccount()
  } else {
    loginPhoneRef.value?.handlerLoginPhone()
  }
}, 1000)
</script>

<style scoped lang="less">
.loginPanel {
  width: 320px;
  .loginBtn {
    margin-top: 20px;
  }
  .register {
    display: flex;
    flex-direction: row-reverse;
    margin-top: 5px;
  }
  .loginTitle {
    text-align: center;
  }
}
</style>
