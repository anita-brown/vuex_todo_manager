<template>
  <div>
    <h3>Todos</h3>
     <div class="todos">
    <div class="todo" v-for="todo in allTodos" :key="todo.id">{{todo.title}}</div>
  </div>
  </div>
 
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Todos",
  computed: mapGetters(['allTodos'])
};
</script>
<style></style>
