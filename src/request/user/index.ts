import axios from 'axios'
import { IRegisterType } from './type'

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token && config.headers) {
    config.headers.token = JSON.parse(token)
  }

  return config
})

export function userRegisterRequest(data: IRegisterType) {
  return axios.post('/api/user/register', data)
}

export function userGetCodeRequest(phoneNumber: string) {
  return axios.post('/api/user/get/check/code', { phoneNumber })
}

// 判断有无未支付的订单
export const reqCheckPay = () => {
  return axios.get('/api/get/seckill/check/order')
}

// 取消订单 /get/seckill/dispay
export const reqCanclePay = (productId: number) => {
  return axios.get('/api/get/seckill/dispay', {
    params: {
      productId
    }
  })
}

export const reqNumList = () => {
  return axios.get('/api/get/seckill/show/product/number')
}

// 获取所有产品
export const reqProductList = () => {
  return axios.get('/api/get/seckill/show/productions')
}

export const reqBreakRuleDetailInfo = (recordId: number, ruleId: number) =>
  axios.get('/api/break/rule/get/desc', {
    params: { recordId, ruleId }
  })

export const reqCharge = (
  url: string,
  productId: number,
  productName: string
) => axios.post(`/api/${url}`, { productId, productName })

export const reqPay = (payInfo: any) =>
  axios.post('/api/get/seckill/pay', payInfo)

export const reqRank = (
  productStatus: any,
  productPrice: number,
  worth: number,
  key: any
) =>
  axios.get('/api/get/seckill/user/get/all/info', {
    params: { productStatus, productPrice, worth, key }
  })

export const reqOrder = (productId: number) =>
  axios.get('/api/get/seckill/get/order', {
    params: { productId }
  })

export const reqBreakRulesList = () =>
  axios.get('/api/personal/get/break/rules')

export const reqBuyList = () => axios.get('/api/personal/get/product')

export const reqInformation = () => axios.get('/api/user/login/get/info')

export const reqChangeInfo = (newInfo: any) =>
  axios.post('/api/user/update/info', newInfo)

export const reqRulesList = () => axios.get('/api/get/seckill/show/rules')
