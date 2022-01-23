<template>
  <div class="login">
    <div class="toggle" @click="toggleUser">
      <el-switch v-model="isadmin" inactive-text="管理员登入" />
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { useRouter } from 'vue-router'

const isadmin = ref(false)
const router = useRouter()
if (router.currentRoute.value.fullPath.endsWith('/admin')) {
  isadmin.value = true
}
const toggleUser = () => {
  if (isadmin.value) {
    router.push('/login/admin')
  } else {
    router.push('/login/user')
  }
}
</script>

<style scoped lang="less">
.login {
  width: 100%;
  height: 100%;
  background-image: url('@/assets/img/840.jpg');
  background-size: 100%;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  .toggle {
    display: flex;
    position: absolute;
    right: 40px;
    top: 20px;
    justify-content: space-between;
  }
}
</style>
