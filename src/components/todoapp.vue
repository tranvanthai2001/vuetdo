<template>
  <div class="container">
    <h2 class="text-center mt-5">Todo App</h2>
    <add-task v-on:add-task="addTask" />
    <task-list
      :tasks="tasks"
      v-on:delete-task="deleteTask"
      v-on:update-task="updateTask"
    />
  </div>
</template>

<script>
import AddTask from "./AddTask.vue";
import TaskList from "./TaskList.vue";
import axios from "axios";

export default {
  components: {
    AddTask,
    TaskList,
  },
  data() {
    return {
      edit: null,
      tasks: [],
    };
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
    addTask(name) {
      if (name.length === 0) return;
      if (this.edit === null) {
        this.tasks.push({
          first_name: name,
          last_name: name,
        });
      } else {
        (this.tasks[this.edit].first_name = name), (this.edit = null);
      }
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    updateTask(index) {
      this.edit = index;
      this.name = this.tasks[index].first_name;
    },
  },
};
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>
