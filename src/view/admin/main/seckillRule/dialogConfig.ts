import { IDialogType } from '../type'

const dialogConfig: IDialogType = {
  formInfo: [
    {
      label: '规则名',
      field: 'ruleName',
      type: 'input',
      rules: [
        {
          required: true,
          message: '请选择用户',
          trigger: 'blur'
        }
      ]
    },
    {
      label: '使用对象',
      field: 'ruleRole',
      type: 'select',
      options: [
        {
          label: '管理员',
          value: 0
        },
        {
          label: '个体客户',
          value: 1
        },
        {
          label: '企业客户',
          value: 2
        }
      ],
      rules: [
        {
          required: true,
          message: '请选择用户',
          trigger: 'blur'
        }
      ]
    }
  ],
  formTitle: '秒杀规则',
  colStyle: 24,
  labelPosition: 'left'
}
export default dialogConfig
