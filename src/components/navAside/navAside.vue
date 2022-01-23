<template>
  <div class="navaside">
    <div class="userInfo">
      <el-avatar :size="50" :src="circleUrl"></el-avatar>
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
import { ref, computed } from 'vue'

import { useRoute } from 'vue-router'

interface Ipath {
  path: String
  name: String
}
// eslint-disable-next-line no-undef
const props = defineProps<{
  path: Ipath[]
}>()

const circleUrl = ref(
  'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
)

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
    padding: 20px 0;
  }
  .el-menu-vertical {
    border-right: none;
    user-select: none;
    height: 100%;
  }
}
</style>
