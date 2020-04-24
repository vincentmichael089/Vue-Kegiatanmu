<template>
  <div class="filter-todo">
    <h3>Filter Kegiatan:</h3>

    <select v-on:change="filterTodos($event.target.value)">
      <option value="200">200</option>
      <option value="160">160</option>
      <option value="80">80</option>
      <option value="40">40</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "FilterTodos",
  methods: {
    ...mapActions(["filterTodos"])
  }
};
</script>

<style scoped>
.filter-todo {
  display: flex;
  padding: 10px;
}

h3 {
  padding-right: 10px;
}

select {
  padding: 0 10px 0 10px;
  border: 1px solid lightblue;
  outline: 0;
  border-radius: 0.25rem;
  font-size: 1rem;
  margin: 10px 0 10px 0;
}

</style>