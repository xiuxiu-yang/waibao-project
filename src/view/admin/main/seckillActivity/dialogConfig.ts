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
      label: '产品净值',
      field: 'worth',
      type: 'input',
      rules: [
        {
          required: true,
          message: '请输入产品净值',
          trigger: 'blur'
        }
      ]
    },
    {
      label: '开始时间',
      field: 'beginTime',
      type: 'datapicker',
      rules: [
        {
          required: true,
          message: '请输入开始时间',
          trigger: 'blur'
        },
        {
          validator(rule: any, value: any, callback: any) {
            const date = new Date(value)
            const now = Date.now()
            if (date.getTime() - now > 14 * 24 * 60 * 60 * 1000) {
              callback(new Error('距离现在时间不能超过两星期'))
            }
          },
          trigger: 'blur'
        }
      ]
    },
    {
      label: '结束时间',
      field: 'endTime',
      type: 'datapicker'
    },
    {
      label: 'url',
      field: 'url',
      type: 'url'
    },
    {
      label: '产品描述',
      field: 'productComment',
      type: 'textarea',
      rules: [
        {
          required: true,
          message: '请输入产品描述',
          trigger: 'blur'
        }
      ]
    }
  ],
  formTitle: '活动信息',
  colStyle: 24,
  labelPosition: 'left'
}
export default dialogConfig
