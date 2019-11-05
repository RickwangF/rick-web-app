import axios from 'axios'
import store from '../store/index'
import config from '../config/config'
import qs from 'qs'

const errorHandler = (status, other) => {
  switch (status) {
    case 401:
      // 未登录
      break
    case 403:
      // 登录失效
      break
    case 404:
      // 未找到资源
      break
    case 500:
      // 内部服务器错误
      break
    default:
      console.log(other)
  }
}

export default function Http (base = 'php', showLoading = true, showMsg = true) {
  let baseUrl = ''
  if (base === 'php') {
    if (process.env.NODE_ENV === 'production') {
      baseUrl = config.php.pro
    } else {
      baseUrl = config.php.dev
    }
  } else if (base === 'java') {
    if (process.env.NODE_ENV === 'production') {
      baseUrl = config.java.pro
    } else {
      baseUrl = config.java.dev
    }
  } else {
    baseUrl = base
  }

  delete config.php
  delete config.java
  config.baseUrl = baseUrl

  var instance = axios.create(config)
  instance.interceptors.request.use(
    config => {
      const token = store.state.user.token
      config.headers.userToken = token
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded'

      if (config.method.toLocaleLowerCase() === 'post' ||
        config.method.toLocaleLowerCase() === 'put' ||
        config.method.toLocaleLowerCase() === 'delete') {
        config.data = qs.stringify(config.data)
      }

      if (showLoading) {
        // 展示加载动画
      }
      return config
    },
    error => {
      if (showMsg) {
        return Promise.reject(error)
      }
    }
  )

  instance.interceptors.response.use(
    response => {
      if (!response || Object.keys(response).length === 0) {
        Promise.reject(Error('没有响应'))
      }

      let data = response.data
      if (!data) {
        data = response.request.responseText
      }

      if (data.code !== 0) {
        Promise.reject(Error(data.msg))
      }

      if (showLoading) {
        // 隐藏加载动画
      }

      return data
    }, error => {
      if (showMsg) {
        const { response } = error
        if (response) {
          errorHandler(response.status, response.data.msg)
        }
        Promise.reject(error)
      }
    }
  )

  return instance
}
