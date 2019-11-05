<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {

    }
  },
  mounted () {
    const user = {
      uid: 1231231234,
      bid: 1231231234,
      phone: '13312341234',
      avatar: '',
      version: ''
    }
    this.setUser(user)
    const token = '321321321321'
    this.setToken(token)
  },
  methods: {
    ...mapActions(['setUser', 'setToken'])
  }
}
</script>

<style lang="scss">

</style>
