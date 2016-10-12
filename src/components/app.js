import Vue from 'vue'
import App from './App.vue'
// 定义
var MyComponent = Vue.extend({
  template: '<div>A custom ssss component!</div>'
})

new Vue({
  el: '#app',
  components: { MyComponent, App }
})
