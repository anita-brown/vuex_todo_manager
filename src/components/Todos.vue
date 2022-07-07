<template>
  <div>
    <h3>Todos</h3>
    <div class="todos">
      <div class="todo">
        <!-- {{ todo.title }} -->
        jhujkmlk
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Todos",
  // computed: mapGetters(["allTodos"]),
};
</script>
<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #115a19;
  padding: 1rem;
  color: #ccc;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer; 
}
</style>
