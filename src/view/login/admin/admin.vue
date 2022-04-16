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
          <el-form-item label="账号" prop="loginAccount">
            <el-input v-model="admin.loginAccount"></el-input>
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

import { UserFilled } from '@element-plus/icons-vue'
import { useAdmin } from '@/store'

import throttle from '@/utils/throttle'

const admin = reactive({
  loginAccount: '',
  password: ''
})
const rules = reactive({
  loginAccount: [
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

const adminStore = useAdmin()

const handlerLogin = throttle(() => {
  adminStore.adminLoginAction(admin)
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
