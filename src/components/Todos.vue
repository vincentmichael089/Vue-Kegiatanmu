<template>
  <div>
    <div class="todos">
      <div
        class="todo"
        v-for="todo in allTodos"
        v-bind:key="todo.id"
        v-on:dblclick="onDoubleClick(todo)"
        v-bind:class="{'complete-card':todo.completed}"
      >
        {{todo.title}}
        <div class="todo-btn-wrapper">
            <button class="complete-todo" v-on:click="onDoubleClick(todo)">Selesai</button>
          <button class="delete-todo" v-on:click="deleteTodo(todo.id)">Hapus</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Todos",
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    onDoubleClick(todo) {
      const updatedTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      };

      this.updateTodo(updatedTodo);
    }
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  }
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.todo {
 display: flex;
 flex-flow: column nowrap;
  padding: 15px 15px 5px 15px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  height: 200px;
  margin: 0 10px 1.5em;
  background: #fff;
  box-shadow: 0 10px 29px 0 rgba(68, 88, 144, 0.1);
}

.todo-btn-wrapper{
    padding: 10px;
    position: relative;
    margin-top: auto;
}

.delete-todo {
  background: orangered;
  border: none;
  color: wheat;
  border-radius: 4px;
  border: 1px solid transparent;
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
  vertical-align: middle;
  margin-left: 2px;
}

.delete-todo:hover {
  background: red;
}

.complete-todo {
  background: #28a745;
  border: none;
  color: white;
  border-radius: 4px;
  border: 1px solid transparent;
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
  vertical-align: middle;
  margin-right: 2px;
}

.complete-todo:hover {
  background: green;
}

.complete-card {
  background: greenyellow;
}

@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }

  .todo {
    height: 100px;
  }
}

@media (max-width: 720px) {
  .todos {
    grid-template-columns: 2fr;
  }

  .todo {
    height: 100px;
  }
}
</style>
