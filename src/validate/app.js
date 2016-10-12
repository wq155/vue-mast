import Vue from 'vue'
import Validate from './components/validate.vue'
import vueValidate from 'vue-validator'

Vue.use(vueValidate)

//全局注册 email校验
Vue.validator('email', function (val) {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)
})

new Vue({
	el: '#app',
	data: {
	  email: ''
	},
	components: {Validate}
})