<template>
	<section>
		<h2>列表：</h2>
		<ul>
	      <li v-for="todo in todos">
	        {{ todo.text }}
	      </li>
	    </ul>
	</section>
</template>

<script>
export default {
	data() {
		return {
			todos: [
		      { text: 'Learn JavaScript' },
		      { text: 'Learn Vue.js' },
		      { text: 'Build Something Awesome' }
		    ]
		}
	}
}
</script>