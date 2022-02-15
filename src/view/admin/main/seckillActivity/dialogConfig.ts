import { IDialogType } from '../type'

const dialogConfig: IDialogType = {
  formInfo: [
    {
      label: '产品名',
      field: 'productName',
      type: 'input',
      rules: [
        {
          required: true,
          message: '请输入产品名',
          trigger: 'blur'
        }
      ]
    },
    {
      label: '产品数量',
      field: 'productNumber',
      type: 'input',
      rules: [
        {
          required: true,
          message: '请输入产品数量',
          trigger: 'blur'
        }
      ]
    },
    {
      label: '产品价格',
      field: 'productPrice',
      type: 'input',
      rules: [
        {
          required: true,
          message: '请输入产品价格',
          trigger: 'blur'
        }
      ]
    },
    {
      label: '产品描述',
      field: 'productComment',
      type: 'input',
      rules: [
        {
          required: true,
          message: '请输入产品描述',
          trigger: 'blur'
        }
      ]
    },
    {
      label: '展示状态',
      field: 'showStatus',
      type: 'select',
      placeholder: '请选择是否展示',
      options: [
        {
          label: '展示',
          value: 0
        },
        {
          label: '不展示',
          value: 1
        }
      ],
      rules: [
        {
          required: true,
          message: '请选择状态',
          trigger: 'blur'
        }
      ]
    }
  ],
  formTitle: '活动信息',
  colStyle: 24
}
export default dialogConfig
