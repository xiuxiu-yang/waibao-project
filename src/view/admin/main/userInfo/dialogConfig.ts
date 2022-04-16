const dialogConfig = {
  formInfo: [
    {
      label: '用户名',
      field: 'name',
      type: 'input',
      rules: [
        {
          required: true,
          message: '请输入用户',
          trigger: 'blur'
        }
      ]
    },
    {
      label: '电话号码',
      field: 'phoneNumber',
      type: 'input',
      rules: [
        {
          required: true,
          message: '请输入电话号码',
          trigger: 'blur'
        }
      ]
    },
    {
      label: '年龄',
      field: 'age',
      type: 'input',
      rules: [
        {
          required: true,
          message: '请输入年龄',
          trigger: 'blur'
        }
      ]
    },
    {
      label: '角色名',
      field: 'roleName',
      type: 'input',
      rules: [
        {
          required: true,
          message: '请输入角色',
          trigger: 'blur'
        }
      ]
    },
    {
      label: '性别',
      field: 'gender',
      type: 'select',
      placeholder: '请选择性别',
      options: [
        {
          label: '男',
          value: '1'
        },
        {
          label: '女',
          value: '0'
        }
      ],
      rules: [
        {
          required: true,
          message: '请选择性别',
          trigger: 'blur'
        }
      ]
    },
    {
      label: '地址',
      field: 'address',
      type: 'input',
      rules: [
        {
          required: true,
          message: '请输入地址',
          trigger: 'blur'
        }
      ]
    }
  ],
  formTitle: '用户信息',
  colStyle: 24,
  labelPosition: 'left'
}
export default dialogConfig
