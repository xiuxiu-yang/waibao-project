import { defineStore } from 'pinia'
import { userGetCodeRequest, userRegisterRequest } from '@/request'
import { IRegisterType } from '@/request/user/type'

const useUser = defineStore('user', {
  state: () => ({}),
  actions: {
    async userRegisterAction(data: IRegisterType) {
      await userRegisterRequest(data)
    },
    async userGetCodeAction(phoneNumber: string) {
      await userGetCodeRequest(phoneNumber)
    }
  }
})

export default useUser
