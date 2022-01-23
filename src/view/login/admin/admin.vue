<template>
  <div class="adminLogin">
    <h2 class="loginTitle">后台管理</h2>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon><user-filled /></el-icon>管理员登入
          </span>
        </template>
        <el-form :model="admin" label-width="80px" :rules="rules">
          <el-form-item label="账号" prop="account">
            <el-input v-model="admin.account"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="admin.password" :show-password="true"></el-input>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
    <div class="loginBtn">
      <el-button type="primary" style="width: 100%" @click="handlerLogin"
        >登入</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

import { useRouter } from 'vue-router'

import { UserFilled } from '@element-plus/icons-vue'

import throttle from '@/utils/throttle'

const admin = reactive({
  account: '',
  password: ''
})
const rules = reactive({
  account: [
    {
      required: true,
      message: '请输入账号',
      trigger: 'blur'
    }
  ],
  password: {
    required: true,
    message: '请输入密码',
    trigger: 'blur'
  }
})

const router = useRouter()

const handlerLogin = throttle(() => {
  router.push('/admin')
}, 1000)
</script>

<style scoped lang="less">
.adminLogin {
  width: 320px;
  .loginTitle {
    text-align: center;
  }
  .loginBtn {
    margin-top: 20px;
  }
}
</style>
