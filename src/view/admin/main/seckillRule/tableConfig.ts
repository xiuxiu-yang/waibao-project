const tableConfig = {
  tableInfo: [
    {
      label: '规则名',
      prop: 'ruleName',
      minWidth: '90'
    },
    {
      label: '角色规则',
      prop: 'ruleRole',
      minWidth: '120',
      slotName: 'ruleRole'
    },
    {
      label: '规则描述',
      prop: 'ruleContent',
      minWidth: '90'
    },
    {
      label: '规则状态',
      prop: 'ruleStatus',
      minWidth: '90',
      slotName: 'ruleStatus'
    },
    {
      label: '规则详情',
      prop: 'ruleEdit',
      minWidth: '90',
      slotName: 'ruleEdit'
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
  tableTitle: '秒杀规则',
  tableName: 'rule',
  showCreateBtn: false,
  showEditBtn: true
}
export default tableConfig
