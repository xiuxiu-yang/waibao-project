<template>
  <div class="table">
    <el-table
      :data="props.tableData"
      style="width: 100%"
      border
      @selection-change="handlerSelect"
    >
      <el-table-column type="selection" width="55" align="center" />
      <template v-for="item in props.tableInfo" :key="item.prop">
        <el-table-column
          :label="item.label"
          :minWidth="item.minWidth"
          :prop="item.prop"
          align="center"
          show-overflow-tooltip
        >
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}</slot
            >
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line no-undef
const props = defineProps<{
  tableData?: Object[]
  tableInfo: {
    prop: string
    label: String
    minWidth: String
    slotName?: string
  }[]
}>()
// eslint-disable-next-line no-undef
const emit = defineEmits(['handlerSelect'])
const handlerSelect = (selection: any) => {
  emit('handlerSelect', selection)
}
</script>

<style scoped lang="less"></style>
