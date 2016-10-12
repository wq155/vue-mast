<template>
	<section>
		<h2>双向绑定：</h2>
		<p>{{ message1 }}</p>
  		<input v-model="message1">
	</section>
</template>

<script>
export default {
	data() {
		return {
			message1: 'Hello Vue.js!'
		}
	}
}
</script>