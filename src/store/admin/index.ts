import { defineStore } from 'pinia'

import {
  adminLoginRequest,
  getSekillActivityRequest,
  getSekillResultRequest,
  getUserInfoRequest,
  getSekillRuleRequest,
  getFilterResultRequest,
  getViolationInfoRequest,
  deleteViolationRequest,
  deleteFilterRequest,
  deleteRuleRequest,
  deleteResultRequest,
  deleteUserInfoRequest,
  deleteActivityRequest,
  createViolationInfoRequest,
  editViolationRequest,
  editRuleRequest,
  editUserInfoRequest
} from '@/request'

import localCache from '@/utils/localCache'

const useAdmin = defineStore('admin', {
  state: () => {
    return {
      token: '',
      activity: {},
      result: {},
      userInfo: {},
      rule: {},
      primary: {},
      violation: {}
    }
  },
  getters: {},
  actions: {
    async adminLoginAction(data: Object) {
      const loginAdminResult = await adminLoginRequest(data)
      const { token } = loginAdminResult.data.data
      localCache.setItem('token', token)
      this.token = token
    },
    async getTableDataAction(
      url: String,
      page: { current: number; size: number; key?: string } = {
        current: 1,
        size: 10
      }
    ) {
      switch (url) {
        case 'activity': {
          const sekillActivityResult = await getSekillActivityRequest(page)
          this.activity = sekillActivityResult.data.data
          break
        }
        case 'result': {
          const sekillResult = await getSekillResultRequest(page)
          this.result = sekillResult.data.data
          break
        }
        case 'userInfo': {
          const userInfoResult = await getUserInfoRequest(page)
          this.userInfo = userInfoResult.data.data
          break
        }
        case 'rule': {
          const sekillRuleResult = await getSekillRuleRequest(page)
          this.rule = sekillRuleResult.data.data
          break
        }
        case 'primary': {
          const primaryResult = await getFilterResultRequest(page)
          this.primary = primaryResult.data.data
          break
        }
        default: {
          const violationResult = await getViolationInfoRequest(page)
          this.violation = violationResult.data.data
          break
        }
      }
    },
    async deleteFilterAction(data: number[]) {
      await deleteFilterRequest(data)
      await this.getTableDataAction('primary')
    },
    async deleteRuleAction(data: number[]) {
      await deleteRuleRequest(data)
      await this.getTableDataAction('rule')
    },
    async editRuleAction(data: number[]) {
      await editRuleRequest(data)
      await this.getTableDataAction('rule')
    },
    async deleteViolationAction(data: number[]) {
      await deleteViolationRequest(data)
      await this.getTableDataAction('violation')
    },
    async editViolationAction(data: any) {
      await editViolationRequest(data)
      await this.getTableDataAction('violation')
    },
    async deleteResultAction(data: number[]) {
      await deleteResultRequest(data)
      await this.getTableDataAction('result')
    },
    async deleteUserInfoAction(data: number[]) {
      await deleteUserInfoRequest(data)
      await this.getTableDataAction('userInfo')
    },
    async editUserInfoAction(data: number[]) {
      await editUserInfoRequest(data)
      await this.getTableDataAction('userInfo')
    },
    async deleteActivityAction(data: number[]) {
      await deleteActivityRequest(data)
      await this.getTableDataAction('activity')
    },
    async createViolationInfoAction(data: any) {
      await createViolationInfoRequest(data)
      await this.getTableDataAction('violation')
    }
  }
})

export default useAdmin
