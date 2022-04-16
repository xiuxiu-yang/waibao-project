const tableConfig = {
  tableInfo: [
    {
      label: '产品名',
      prop: 'productName',
      minWidth: '90'
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
      minWidth: '110',
      slotName: 'status'
    },
    {
      label: '展示状态',
      prop: 'showStatus',
      minWidth: '110',
      slotName: 'showStatus'
    },
    {
      label: '产品描述',
      prop: 'productComment',
      minWidth: '120'
    },
    {
      label: '持续时间',
      prop: 'susTainTime',
      minWidth: '300',
      slotName: 'susTainTime'
    },
    {
      label: '生成随机链接',
      prop: 'random',
      minWidth: '100',
      slotName: 'random'
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
