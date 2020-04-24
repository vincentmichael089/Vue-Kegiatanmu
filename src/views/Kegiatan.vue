<template>
  <div class="about">
    <h3>Kegiatanmu</h3>  
    <AddTodo/>
    <FilterTodos />
    <Todos />
  </div>
</template>

<script>
import Todos from "../components/Todos.vue";
import AddTodo from "../components/AddTodo.vue"
import FilterTodos from "../components/FilterTodos.vue";

export default {
  name: "About",
  components: {
    Todos,
    AddTodo,
    FilterTodos
  }
};
</script>

<style>
</style>