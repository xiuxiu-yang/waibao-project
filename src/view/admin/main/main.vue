<template>
  <div class="adminMain">
    <el-container class="content">
      <el-aside width="200px">
        <nav-aside></nav-aside>
      </el-aside>
      <el-container>
        <el-header height="40px">Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import navAside from '@/components/navAside/navAside.vue'
</script>

<style scoped lang="less">
.adminMain {
  height: 100%;
  .content {
    height: 100%;
    .el-aside {
      height: 100%;
      background-color: #545c64;
      display: flex;
      align-items: center;
    }
    .el-header {
      background-color: aqua;
    }
    .el-main {
      background-color: bisque;
    }
  }
}
</style>
