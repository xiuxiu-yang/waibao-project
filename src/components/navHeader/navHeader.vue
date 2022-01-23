<template>
  <div class="navheader">
    <div class="breakcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>{{ breadcrumb }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
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
const breadcrumb = computed(() => {
  const currentPath = useRoute().fullPath
  return props.path.find((item) => item.path === currentPath)?.name
})
</script>

<style scoped lang="less">
.navheader {
  display: flex;
  align-items: center;
  height: 100%;
}
</style>
