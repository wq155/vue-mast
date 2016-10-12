<style>
.section{
	margin: 5px 15px;
}
</style>
<template>
 	<section>
	  <p><label >输出：{{message}}</label></p>
	  <p><label>输入：</label><input v-model="message" type="text"></p>
 	</section>
</template>
<script>
export default {
  // data: {  该写法不能给定 初始值
  // 	message: 'Hello Vue.js!'
  // }
  data() {
  	return {
  	  message: 'Hello Vue.js!'
  	}
  }
}
</script>