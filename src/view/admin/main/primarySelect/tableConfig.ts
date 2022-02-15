const tableConfig = {
  tableInfo: [
    {
      label: '用户名',
      prop: 'userName',
      minWidth: '90'
    },
    {
      label: '通过状态',
      prop: 'passStatus',
      minWidth: '120',
      slotName: 'passStatus'
    },
    {
      label: '创建时间',
      prop: 'createDate',
      minWidth: '170'
    },
    {
      label: '编辑',
      prop: 'edit',
      minWidth: '130',
      slotName: 'edit'
    }
  ],
  tableTitle: '初筛结果',
  tableName: 'primary',
  showCreateBtn: false,
  showEditBtn: false
}
export default tableConfig
