<template>
  <li class="todo" :class="{ completed: todo.done, editing: editing }">
    <div class="view">
      <input class="toggle"
        type="checkbox"
        :checked="todo.done"
        @change="toggleTodo(todo)">
      <label v-text="todo.text" @dblclick="editing = true"></label>
      <button class="destroy" @click="deleteTodo(todo)"></button>
    </div>
    <input class="edit"
      v-show="editing"
      v-focus="editing"
      :value="todo.text"
      @keyup.enter="doneEdit"
      @keyup.esc="cancelEdit"
      @blur="doneEdit">
  </li>
</template>

<script>
import {
  toggleTodo,
  deleteTodo,
  editTodo
} from '../vuex/actions'

export default {
  props: ['todo'],
  vuex: {
    actions: {
      toggleTodo,
      deleteTodo,
      editTodo
    }
  },
  data () {
    return {
      editing: false
    }
  },
  directives: {
    'focus': function (value) {
      if (!value) {
        return;
      }
      var el = this.el;
      Vue.nextTick(function () {
        el.focus();
      });
    }
  },
  methods: {
    doneEdit (e) {
      const value = e.target.value.trim()
      if (!value) {
        this.deleteTodo(this.todo)
      } else if (this.editing) {
        this.editTodo(this.todo, value)
        this.editing = false
      }
    },
    cancelEdit (e) {
      e.target.value = this.todo.text
      this.editing = false
    }
  }
}
</script>