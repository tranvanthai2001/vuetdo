<template>
  <div class="container">
    <h2 class="text-center mt-5">Todo App</h2>
    <div class="d-flex">
      <input v-model="name" type="text" placeholder="new item" class="form-control">
      <button @click="addTask" class="btn btn-success">Add</button>
    </div>
    <table class="table caption-top">
  <caption>List of users</caption>
  <thead>
    <tr>
      <th scope="col">Task</th>
      <th scope="col">Status</th>
      <th scope="col" >#</th>
      <th scope="col" >#</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(task, index) in tasks" :key="index">
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
import axios from 'axios'
export default {
  data() {
    return {
      name: '',
      edit : null,
      tasks: []
    }
  },
  async mounted () {
    try {
      const response = await axios.get('http://localhost:3000/data')
      this.tasks = response.data
    } catch (error) {
      console.log(error)
    }
    if(localStorage.tasks) {
      this.tasks = JSON.parse(localStorage.tasks)
  }
  },
  watch: {
    tasks: {
      handler(newtask) {
      localStorage.tasks = JSON.stringify(newtask)
      },
      deep: true 
    }
  },
  methods: {
    addTask() {
      if(this.name.length ===0) return;
      if(this.edit ===null) {
        this.tasks.push({
          first_name: this.name,
          last_name: this.name
        });
      }else {
        this.tasks[this.edit].first_name = this.name,
        this.edit = null
      }
      this.name =''
    },
    deleteTask(index) {
      this.tasks.splice(index, 1)
    },
    updateTask(index) {
      this.name = this.tasks[index].first_name,
        this.edit= index
      
    }
  }
}
</script>

<style>

</style>