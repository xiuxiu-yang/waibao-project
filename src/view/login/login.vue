<template>
  <div class="login">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts"></script>

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
}
</style>
