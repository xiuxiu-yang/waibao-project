<template>
  <div class="navaside">
    <div class="userInfo">
      <h1>银行后台管理</h1>
    </div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical"
      :default-active="active"
      router
      text-color="#fff"
    >
      <template v-for="(item, index) in props.path" :key="index">
        <el-menu-item :index="item.path">{{ item.name }}</el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { useRoute } from 'vue-router'

interface Ipath {
  path: String
  name: String
}
// eslint-disable-next-line no-undef
const props = defineProps<{
  path: Ipath[]
}>()

const active = computed(() => {
  const currentPath = useRoute().fullPath
  return props.path.find((item) => item.path === currentPath)?.path
})
</script>

<style scoped lang="less">
.navaside {
  width: 100%;
  text-align: center;
  .userInfo {
    height: 100px;
    color: wheat;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .el-menu-vertical {
    border-right: none;
    user-select: none;
    height: 100%;
  }
}
</style>
