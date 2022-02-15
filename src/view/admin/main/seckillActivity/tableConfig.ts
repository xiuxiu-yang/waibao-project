const tableConfig = {
  tableInfo: [
    {
      label: '产品名',
      prop: 'productName',
      minWidth: '90'
    },
    {
      label: '图片',
      prop: 'photoUrl',
      minWidth: '100'
    },
    {
      label: '产品数量',
      prop: 'productNumber',
      minWidth: '80'
    },
    {
      label: '产品价格',
      prop: 'productPrice',
      minWidth: '80'
    },
    {
      label: '产品状态',
      prop: 'productStatus',
      minWidth: '100',
      slotName: 'status'
    },
    {
      label: '产品描述',
      prop: 'productComment',
      minWidth: '120'
    },
    {
      label: '开始时间',
      prop: 'beginTime',
      minWidth: '170'
    },
    {
      label: '结束时间',
      prop: 'endTime',
      minWidth: '170'
    },
    {
      label: '编辑',
      prop: 'edit',
      minWidth: '130',
      slotName: 'edit'
    }
  ],
  tableTitle: '秒杀产品',
  tableName: 'activity',
  showCreateBtn: true,
  showEditBtn: true
}
export default tableConfig
