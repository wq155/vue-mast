<template>
	<section>
		<h2>条件：</h2>
		<p v-if="ok">Yes</p>
		<p v-else>No</p>
	</section>
</template>

<script>
export default {
	data() {
		return {
			ok: true
		}
	}
}
</script>