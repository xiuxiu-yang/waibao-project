import { IDialogType } from '../type'

const dialogConfig: IDialogType = {
  formInfo: [
    {
      label: '规则名',
      field: 'ruleId',
      url: 'rule',
      type: 'select',
      options: [],
      placeholder: '请选择规则',
      rules: [
        {
          required: true,
          message: '请选择规则',
          trigger: 'blur'
        }
      ]
    },
    {
      label: '用户名',
      field: 'userId',
      url: 'userInfo',
      type: 'select',
      options: [],
      placeholder: '请选择用户',
      rules: [
        {
          required: true,
          message: '请选择用户',
          trigger: 'blur'
        }
      ]
    }
  ],
  formTitle: '违规信息',
  colStyle: 24
}
export default dialogConfig
