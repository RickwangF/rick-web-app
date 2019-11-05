import http from '../request/http'

export default {
  getVerifyCode (params) {
    return http().post('authorizations/sendSms', params)
  },
  requestLogin (params) {
    return http().post('authorizations/login', params)
  }
}
