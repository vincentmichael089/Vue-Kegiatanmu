<template>
  <div>
    <div class="add">
      <div id="add-kegiatan">
        <form v-on:submit="onSubmit" id="form-kegiatan">
          <input type="text" v-model="title" placeholder=" Ketik kegiatanmu disini ..." />
          <input type="submit" value="Tambahkan Kegiatan" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit(e) {
      e.preventDefault();
      this.addTodo(this.title);
      console.log(this.title);
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  align-items: stretch;
}

input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid lightblue;
  outline: 0;
  margin: 10px 10px 0 0;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  vertical-align: middle;
}

input[type="submit"] {
  margin: 10px 10px 0 0;
  padding: 10px;
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
  flex: 2;
  border: 1px solid transparent;
  cursor: pointer;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
  vertical-align: middle;
}

input[type="submit"]:hover {
  background: green;
}

@media (max-width: 500px) {
  form {
    flex-direction: column;
    float: none;
    text-align: center;
    width: 100%;
    margin: 4px;
    padding: 0;
  }

  input[type="text"],
  input[type="submit"] {
    
    align-content: center;
    display: inline-block;
    margin-right: 24px;
  }
}
</style>