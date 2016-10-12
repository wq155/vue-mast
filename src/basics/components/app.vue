<style>
  .containt {
  	font-size: 14px;
  }
  .containt section {
  	margin: 5px 15px;
  	padding: 5px 10px;
  	background-color: #f0f0f0;
  }
</style>

<template>
  <section class="containt">
  	<two-way></two-way>
  	<list></list>
  	<condition></condition>
  	<deal></deal>
  	<bind></bind>
  </section>
</template>

<script>
import TwoWay from './two-way.vue'
import List from './list.vue'
import Condition from './condition.vue'
import Deal from './deal.vue'
import Bind from './bind.vue'

export default {
  components: {
  	TwoWay,
  	List,
  	Condition,
  	Deal,
  	Bind
  }
}
</script>