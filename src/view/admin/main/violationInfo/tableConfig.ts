const tableConfig = {
  tableInfo: [
    {
      label: '用户名',
      prop: 'userName',
      minWidth: '90'
    },
    {
      label: '规则名',
      prop: 'ruleName',
      minWidth: '120'
    },
    {
      label: '状态',
      prop: 'status',
      minWidth: '90',
      slotName: 'infoStatus'
    },
    {
      label: '开始时间',
      prop: 'beginTime',
      minWidth: '170'
    },
    {
      label: '编辑',
      prop: 'edit',
      minWidth: '130',
      slotName: 'edit'
    }
  ],
  tableTitle: '违规信息',
  tableName: 'violation',
  showCreateBtn: true,
  showEditBtn: true
}
export default tableConfig
