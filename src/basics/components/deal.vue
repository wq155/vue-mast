<template>
	<section>
    <h2>处理用户输入：</h2>
		<p>{{ message }}</p>
  	<button v-on:click="reverseMessage">Reverse Message</button>
	</section>
</template>

<script>
export default {
  data() {
  	return {
  	  message: 'Hello Vue.js!'
  	}
  },
  methods: {
  	reverseMessage () {
  		this.message = this.message.split('').reverse().join('')
  	}
  }
}
</script>