import { ref } from 'vue'

import { useAdmin } from '@/store'

import searchDialog from '@/components/searchDialog/searchDialog.vue'

export default function handlerSetting(
  // eslint-disable-next-line no-unused-vars
  deleteCallback?: (row: Object) => void,
  tableName?: string
) {
  const defaultData = ref({})
  const adminStore = useAdmin()
  const searchDialogRef = ref<typeof searchDialog>()
  const handlerDelete = (row: Object) => {
    if (deleteCallback) {
      deleteCallback(row)
    }
  }
  const handlerEdit = (row: Object) => {
    if (searchDialogRef.value) {
      defaultData.value = { ...row }
      searchDialogRef.value.dialogVisible = true
    }
  }
  const handlerCreate = () => {
    if (searchDialogRef.value) {
      defaultData.value = {}
      searchDialogRef.value.dialogVisible = true
    }
  }

  const handlerSearch = (value: any) => {
    if (tableName) {
      adminStore.getTableDataAction(tableName, value)
    }
  }

  const handlerReset = () => {
    if (tableName) {
      adminStore.getTableDataAction(tableName)
    }
  }

  return {
    searchDialogRef,
    handlerDelete,
    handlerEdit,
    defaultData,
    handlerCreate,
    handlerSearch,
    handlerReset
  }
}
