import { defineStore } from 'pinia'

import {
  adminExitRequest,
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
  createActivityRequest,
  editViolationRequest,
  editRuleRequest,
  editUserInfoRequest,
  editActivityRequest,
  editSkillRuleRequest,
  adminRandomRequest,
  adminGetBankInfo
} from '@/request'

import localCache from '@/utils/localCache'
import router from '@/router'

const useAdmin = defineStore('admin', {
  state: () => {
    return {
      token: '',
      activity: {},
      result: {},
      userInfo: {
        records: []
      },
      rule: {
        records: []
      },
      primary: {},
      violation: {},
      bankInfo: {
        bankAccount: 0
      }
    }
  },
  getters: {},
  actions: {
    async adminExitAction() {
      await adminExitRequest()
    },
    async adminLoginAction(data: Object) {
      const loginAdminResult = await adminLoginRequest(data)
      if (loginAdminResult.data.code === 200) {
        const { token } = loginAdminResult.data.data
        if (token) {
          localCache.setItem('ad_token', token)
        }
        this.token = token
        router.push('/admin')
      } else {
        // eslint-disable-next-line no-undef
        ElMessage.error(loginAdminResult.data.data)
      }
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
    async editRuleAction(data: any) {
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
    },
    async createActivityAction(data: any) {
      await createActivityRequest(data)
      await this.getTableDataAction('activity')
    },
    async editActivityAction(data: any) {
      await editActivityRequest(data)
      await this.getTableDataAction('activity')
    },
    async editSkillRuleAction(ruleId: number, arr: string[]) {
      const data: any = {}
      if (ruleId === 1) {
        ;[
          data.overdueYear,
          data.overdueDay,
          data.overdueTimes,
          data.overdueMinMoney
        ] = arr
      } else if (ruleId === 3) {
        if (arr[0] === '无业') {
          data.workStatus = 0
        }
        if (arr[0] === '就业') {
          data.workStatus = 1
        }
      } else if (ruleId === 5) {
        ;[data.age] = arr
      }
      await editSkillRuleRequest({
        ruleId,
        ...data
      })
    },
    async adminRandomAction(productId: number) {
      await adminRandomRequest(productId)
    },
    async adminGetBankInfoAction() {
      const result = await adminGetBankInfo()
      this.bankInfo = result.data.data
    }
  }
})

export default useAdmin
