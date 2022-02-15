import axios from 'axios'

axios.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem('token')!)
  if (token && config.headers) {
    config.headers.token = token
  }

  return config
})

export function adminLoginRequest(data: Object) {
  return axios.post('/api/user/admin/login', data)
}

export function getSekillActivityRequest(page: {
  current: number
  size: number
}) {
  return axios.get('/api/product/get/all/info', {
    params: page
  })
}

export function getSekillResultRequest(page: {
  current: number
  size: number
}) {
  return axios.get('/api/seckill/result/get/info', {
    params: page
  })
}

export function getUserInfoRequest(page: { current: number; size: number }) {
  return axios.get('/api/user/get/user/info', {
    params: page
  })
}

export function getSekillRuleRequest(page: { current: number; size: number }) {
  return axios.get('/api/rule/get/all/info', {
    params: page
  })
}

export function getFilterResultRequest(page: {
  current: number
  size: number
}) {
  return axios.get('/api/first/filter/get/info', {
    params: page
  })
}

export function getViolationInfoRequest(page: {
  current: number
  size: number
}) {
  return axios.get('/api/break/rule/get/info', {
    params: page
  })
}

export function createViolationInfoRequest(data: any) {
  return axios.post('/api/break/rule/add/info', data)
}

export function deleteViolationRequest(data: number[]) {
  return axios.post('/api/break/rule/delete/info', data)
}

export function deleteFilterRequest(data: number[]) {
  return axios.post('/api/first/filter/delete/info', data)
}

export function deleteRuleRequest(data: number[]) {
  return axios.post('/api/rule/delete/by/id', data)
}

export function deleteResultRequest(data: number[]) {
  return axios.post('/api/seckill/result/delete/info', data)
}

export function deleteUserInfoRequest(data: number[]) {
  return axios.post('/api//user/delete/by/id', data)
}

export function deleteActivityRequest(data: number[]) {
  return axios.post('/api/product/delete/by/id', data)
}

export function editViolationRequest(data: any) {
  return axios.post('/api/break/rule/update/info', data)
}

export function editRuleRequest(data: any) {
  return axios.post('/api/rule/update/info', data)
}

export function editUserInfoRequest(data: any) {
  return axios.post('/api/user/update/info', data)
}
