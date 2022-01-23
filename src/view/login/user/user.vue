<template>
  <div class="userLogin">
    <keep-alive>
      <component
        :is="isLogin ? loginPanel : loginRegister"
        @handlerToggle="handlerToggle"
      ></component>
    </keep-alive>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import loginPanel from './cpns/loginPanel.vue'
import loginRegister from './cpns/loginRegister.vue'

const isLogin = ref(true)
const handlerToggle = () => {
  isLogin.value = !isLogin.value
}
</script>

<style scoped lang="less"></style>
