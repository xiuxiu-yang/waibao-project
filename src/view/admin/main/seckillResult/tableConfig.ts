const tableConfig = {
  tableInfo: [
    {
      label: '用户名',
      prop: 'userName',
      minWidth: '90'
    },
    {
      label: '产品名',
      prop: 'productName',
      minWidth: '90'
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
  tableTitle: '秒杀结果',
  tableName: 'result',
  showCreateBtn: false,
  showEditBtn: false
}
export default tableConfig
