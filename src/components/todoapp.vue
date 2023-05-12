<template>
  <div class="container">
    <h2 class="text-center mt-5">Todo App</h2>
    <div class="d-flex">
      <input
        v-model="name"
        type="text"
        placeholder="new item"
        class="form-control"
      />
      <InputSearch @button-add="addTask" />
    </div>
    <table class="table caption-top">
      <caption>
        List of users
      </caption>
      <thead>
        <tr>
          <th scope="col">Task</th>
          <th scope="col">Status</th>
          <th scope="col">#</th>
          <th scope="col">#</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(task, index) in tasks"
          :key="index"
          v-bind:class="{ completed: task.completed }"
        >
          <input type="checkbox" v-model="task.completed" />

          <th>{{ task.first_name }}</th>
          <td>{{ task.last_name }}</td>
          <td>
            <div>
              <span @click="updateTask(index)" class="fa fa-pen"></span>
            </div>
          </td>
          <td>
            <div @click="deleteTask(index)">
              <span class="fa fa-trash"></span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import InputSearch from "./InputSearch.vue";
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      edit: null,
      tasks: [],
    };
  },
  components: {
    InputSearch,
  },
  async mounted() {
    try {
      const response = await axios.get("http://localhost:3000/data");
      this.tasks = response.data;
    } catch (error) {
      console.log(error);
    }
    // if (localStorage.tasks) {
    //   this.tasks = JSON.parse(localStorage.tasks);
    // }
    this.tasks = JSON.parse(localStorage.tasks);
  },
  watch: {
    tasks: {
      handler(newtask) {
        localStorage.tasks = JSON.stringify(newtask);
      },
      deep: true,
    },
  },
  computed: {
    isComplete() {
      return this.tasks.filter((task) => task.completed).length;
    },
  },
  methods: {
    addTask() {
      if (this.name.length === 0) return;
      if (this.edit === null) {
        this.tasks.push({
          first_name: this.name,
          last_name: this.name,
        });
      } else {
        (this.tasks[this.edit].first_name = this.name), (this.edit = null);
      }
      this.name = "";
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    updateTask(index) {
      (this.name = this.tasks[index].first_name), (this.edit = index);
    },
  },
};
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>
