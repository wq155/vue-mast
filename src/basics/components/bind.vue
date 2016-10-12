<style>
  .class-a {
    color: white;
  }
</style>
<template>
	<section>
		<h2>class与style绑定：</h2>
		<p class="class-a" v-bind:class="classObj" v-bind:style="styleObj">
			Hello Vue.js!
		</p>
	</section>
</template>

<script>
export default {
  data() {
  	return {
  	  classObject: {
        'class-a': true,
        'class-b': false
      },
      styleObj: {
        fontSize: '30px', //驼峰
        'background-color': 'black' //短横分割
      }
  	}
  }
}
</script>