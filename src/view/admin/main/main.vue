<template>
  <div class="adminMain">
    <el-container class="content">
      <el-aside width="200px">
        <nav-aside :path="path"></nav-aside>
      </el-aside>
      <el-container>
        <el-header height="40px">
          <nav-header :path="path"></nav-header>
        </el-header>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import navAside from '@/components/navAside/navAside.vue'
import navHeader from '@/components/navHeader/navHeader.vue'

const path = reactive([
  {
    path: '/admin/main/seckillActivity',
    name: '秒杀活动管理'
  },
  {
    path: '/admin/main/seckillResult',
    name: '秒杀结果管理'
  },
  {
    path: '/admin/main/userInfo',
    name: '用户信息管理'
  },
  {
    path: '/admin/main/seckillRule',
    name: '秒杀规则管理'
  },
  {
    path: '/admin/main/primarySelect',
    name: '初筛结果管理'
  },
  {
    path: '/admin/main/violationInfo',
    name: '违规信息管理'
  }
])
</script>

<style scoped lang="less">
.adminMain {
  height: 100%;
  .content {
    height: 100%;
    .el-aside {
      height: 100%;
      background-color: #545c64;
    }
    .el-header {
      background-color: aqua;
    }
  }
}
</style>
