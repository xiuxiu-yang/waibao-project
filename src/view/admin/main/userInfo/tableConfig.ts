const tableConfig = {
  tableInfo: [
    {
      label: '用户名',
      prop: 'roleName',
      minWidth: '90'
    },
    {
      label: '姓名',
      prop: 'name',
      minWidth: '120'
    },
    {
      label: '电话号码',
      prop: 'phoneNumber',
      minWidth: '90'
    },
    {
      label: '年龄',
      prop: 'age',
      minWidth: '90'
    },
    {
      label: '性别',
      prop: 'gender',
      minWidth: '90',
      slotName: 'gender'
    },
    {
      label: '地址',
      prop: 'address',
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
  tableName: 'userInfo',
  showCreateBtn: false,
  showEditBtn: true
}
export default tableConfig
