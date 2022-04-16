<template>
  <div class="navheader">
    <div class="breakcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>{{ breadcrumb }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="exit">
      <el-button type="text" @click="handlerExit">退出登入</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import localCache from '@/utils/localCache'

interface Ipath {
  path: String
  name: String
}
// eslint-disable-next-line no-undef
const props = defineProps<{
  path: Ipath[]
}>()
const router = useRouter()

const breadcrumb = computed(() => {
  const currentPath = useRoute().fullPath
  return props.path.find((item) => item.path === currentPath)?.name
})

const handlerExit = async () => {
  // await admin.adminExitAction()
  localCache.clearCache()
  router.push('/login/admin')
}
</script>

<style scoped lang="less">
.navheader {
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  :deep(.el-button) {
    color: black;
  }
}
</style>
