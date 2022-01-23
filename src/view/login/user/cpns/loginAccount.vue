<template>
  <div class="loginAccount">
    <el-form
      :model="loginAccount"
      label-width="80px"
      :rules="rules"
      ref="elFormAccountRef"
    >
      <el-form-item label="账号" prop="account">
        <el-input v-model="loginAccount.account"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="loginAccount.password"
          :show-password="true"
        ></el-input>
      </el-form-item>
    </el-form>
    <div class="loginSetting">
      <el-checkbox v-model="check">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const loginAccount = reactive({
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

const check = ref(true)
const elFormAccountRef = ref()
const router = useRouter()
const handlerLoginAccount = () => {
  elFormAccountRef.value?.validate((isValid: boolean) => {
    if (isValid) {
      router.push('/user')
    }
  })
}
// eslint-disable-next-line no-undef
defineExpose({
  handlerLoginAccount
})
</script>

<style scoped lang="less">
.loginAccount {
  .loginSetting {
    margin: 0 10px 0 20px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
