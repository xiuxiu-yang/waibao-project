<template>
  <div class="tableContent">
    <div class="tableTitle">
      <div class="leftTitle">
        <strong>{{ props.tableTitle }}</strong>
        <el-button type="primary" size="small" @click="handlerMoreDelete"
          >批量删除</el-button
        >
      </div>
      <el-button
        type="text"
        v-if="showCreateBtn"
        :icon="Plus"
        size="small"
        @click="handlerCreate"
        >新建{{ props.tableTitle }}</el-button
      >
    </div>
    <ct-table
      :table-data="tableData"
      :table-info="props.tableInfo"
      @handler-select="handlerSelest"
    >
      <template #ruleStatus="scope">
        <el-switch
          :model-value="scope.row['ruleStatus']"
          size="small"
          active-text="开"
          inactive-text="关"
          active-value="1"
          inactive-value="0"
          @change="handlerSwitch(scope.row, $event, 'ruleStatus')"
        />
      </template>
      <template #showStatus="scope">
        <el-switch
          :model-value="scope.row['showStatus']"
          size="small"
          active-text="开"
          inactive-text="关"
          active-value="0"
          inactive-value="1"
          @change="handlerSwitch(scope.row, $event, 'showStatus')"
        />
      </template>
      <template #status="scope">
        <el-button
          :type="
            scope.row['productStatus'] == '0'
              ? 'info'
              : scope.row['productStatus'] == '1'
              ? 'primary'
              : 'success'
          "
          >{{
            scope.row['productStatus'] == '0'
              ? '未开始'
              : scope.row['productStatus'] == '1'
              ? '正在进行'
              : '已结束'
          }}</el-button
        >
      </template>
      <template #edit="scope">
        <el-button
          v-if="showEditBtn"
          type="text"
          :icon="Edit"
          size="small"
          @click="handlerEdit(scope.row)"
          >编辑</el-button
        >
        <el-popconfirm
          confirm-button-text="确认"
          cancel-button-text="取消"
          icon-color="red"
          title="你确定删除这条吗?"
          @confirm="handlerDelete(scope.row)"
        >
          <template #reference>
            <el-button type="text" :icon="Delete" size="small">删除</el-button>
          </template>
        </el-popconfirm>
      </template>
      <template #gender="scope">
        <span>{{ scope.row['gender'] === '0' ? '女' : '男' }}</span>
      </template>
      <template #ruleRole="scope">
        <span>{{
          scope.row['ruleRole'] === 0
            ? '管理员'
            : scope.row['ruleRole'] === 1
            ? '个体用户'
            : '企业客户'
        }}</span>
      </template>
      <template #infoStatus="scope">
        <span>{{ scope.row['status'] === '1' ? '生效' : '未生效' }}</span>
      </template>
      <template #passStatus="scope">
        <span>{{ scope.row['passStatus'] === '1' ? '通过' : '未通过' }}</span>
      </template>
      <template #ruleEdit="scope">
        <el-button type="text" size="small" @click="handlerRule(scope.row)"
          >规则详情</el-button
        >
      </template>
      <template #susTainTime="scope">
        <span>{{ scope.row.beginTime }} - {{ scope.row.endTime }}</span>
      </template>
      <template #random="scope">
        <el-button type="text" @click="handlerRandom(scope.row)"
          >修改链接</el-button
        >
      </template>
    </ct-table>
    <div class="tableFooter">
      <el-pagination
        v-model:currentPage="page.currentPage"
        v-model:page-size="page.pageSize"
        :page-sizes="[10, 20, 30, 40]"
        :small="true"
        layout="total, sizes, prev, pager, next, jumper"
        :total="adminStore[props.tableName].total"
        hide-on-single-page
      >
      </el-pagination>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Edit, Delete, Plus } from '@element-plus/icons-vue'
import { computed, reactive, ref, watch } from 'vue'
import { useAdmin } from '@/store'

import ctTable from '@/baseui/table.vue'

// eslint-disable-next-line no-undef
const props = defineProps<{
  tableName: string
  tableInfo: {
    prop: string
    label: String
    minWidth: String
    slotName?: string
  }[]
  tableTitle: String
  showEditBtn: Boolean
  showCreateBtn: Boolean
}>()

const adminStore = useAdmin()
adminStore.getTableDataAction(props.tableName)
const tableData = computed(() => adminStore[props.tableName].records)
// eslint-disable-next-line no-undef
const emit = defineEmits([
  'handlerDelete',
  'handlerEdit',
  'handlerCreate',
  'handlerMoreDelete',
  'handlerRule'
])
const handlerDelete = (row: Object) => {
  emit('handlerDelete', row)
}
const handlerEdit = (row: Object) => {
  emit('handlerEdit', row)
}
const handlerCreate = () => {
  emit('handlerCreate')
}
const handlerRule = (row: Object) => {
  emit('handlerRule', row)
}
const handlerRandom = async (row: any) => {
  await adminStore.adminRandomAction(row.productId)
}

const selectItems = ref()
const handlerSelest = (selection: any) => {
  selectItems.value = selection
}
const handlerMoreDelete = () => {
  if (selectItems.value) {
    emit('handlerMoreDelete', selectItems.value)
  }
}
const handlerSwitch = (row: any, newValue: boolean, field: string) => {
  row[field] = newValue
  if (Object.keys(row).length > 1) {
    if (field === 'showStatus') {
      adminStore.editActivityAction(row)
    } else if (field === 'ruleStatus') {
      adminStore.editRuleAction(row)
    }
  }
}

let page = reactive({
  currentPage: 1,
  pageSize: 10
})

watch(
  () => page,
  (newValue) => {
    page = newValue
    adminStore.getTableDataAction(props.tableName, {
      current: page.currentPage,
      size: page.pageSize
    })
  },
  {
    deep: true
  }
)

// eslint-disable-next-line no-undef
defineExpose({
  page
})
</script>

<style scoped lang="less">
.tableContent {
  .tableTitle {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    .leftTitle {
      strong {
        padding-right: 20px;
      }
    }
  }
  .tableFooter {
    display: flex;
    justify-content: center;
    padding-top: 20px;
  }
}
</style>
