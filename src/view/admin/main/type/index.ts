export interface IFormInfoType {
  label: string
  rules?: any[]
  field: string
  type: string
  options?: { label: string; value: number | string }[]
  placeholder?: string
  url?: string
}

export interface IDialogType {
  formInfo: IFormInfoType[]
  formTitle: string
  colStyle: number
  labelPosition: string
}
