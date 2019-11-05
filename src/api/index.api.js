import login from './login.api'

const apiList = {
  login
}

export default function install (Vue) {
  Vue.prototype.Api = apiList
}
