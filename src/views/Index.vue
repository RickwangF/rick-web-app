<template>
  <div class="container">
    <Button type="primary" @click="btnClicked">默认按钮</Button>
  </div>
</template>

<script>
import { Button } from 'vant'
import { mapActions } from 'vuex'
export default {
  name: 'Index',
  data () {
    return {
    }
  },
  components: {
    Button
  },
  methods: {
    ...mapActions(['setToken']),
    sendVerifyCode () {
      let params = {
        mobile: '18687103500',
        type: 1,
        getCode: 1,
        areaCode: 86
      }
      this.Api.login.getVerifyCode(params).then(data => {
        console.log(data)
      }).catch(error => {
        alert(error)
      })
    },
    requestLogin () {
      let params = {
        mobile: '12888888400',
        code: '8400',
        areaCode: '86'
      }
      let that = this
      this.Api.login.requestLogin(params).then(data => {
        console.log(data)
        let token = data.info.userToken
        console.log('token is ' + token)
        that.setToken(token)
      }).catch(error => {
        alert(error)
      })
    },
    btnClicked () {
      this.requestLogin()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
