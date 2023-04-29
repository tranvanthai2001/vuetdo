<template>
  <div class="container">
    <div class="task">
      <div>
        <h1>To do app</h1>
      </div>
      <div class="form">
        <input 
          v-model="name"
          type="text" 
          placeholder="New Task"
        />
        <button @click="addtask"><i class="fas fa-plus"></i></button>
      </div>
      <div class="taskItems">
        <ul>
          <li v-for="(tak,index) in task" :key="tak.id">
            <button>{{ tak.first_name }}</button>
            <button @click="deleteonetak(index)"><i class="far fa-trash-alt"></i></button>
          </li>
        </ul>
      </div>
      <div class="clearBtns">
        <button @click="deleteTask">Clear all</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data: function () {
    return {
      task: [],
      name: ''
    };
  },
  async mounted () {
    try {
      const response = await axios.get('https://reqres.in/api/users?page=1')
      this.task = response.data.data
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    deleteTask: function () {
      return this.task =[]
    },
    deleteonetak(index) {
      return this.task.splice(index, 1)
    },
    addtask() {
      if(this.name) {
        this.task.push({first_name: this.name}),
        this.name = ''
      }
    }
  },

};
</script>
<style scoped>
.container {
  max-width: 480px;
  margin: 0 auto;
}
.task {
  background-color: aqua;
  padding: 20px 50px;
  border-radius: 16px;
}
h1 {
  text-align: center;
}
button {
  cursor: pointer;
  border: none;
  outline: none;
}
.form {
  position: relative;
}
.form button {
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  background-color: #fff;
}
.form button i {
  color: green;
  font-size: 20px;
}
input {
  width: 100%;
  border: none;
  padding: 15px 0;
  border-radius: 10px;
}
input:focus {
  outline: none;
}
ul {
  list-style: none;
  padding-left: 0px !important;
}
ul button {
  background-color: aqua;
}
.taskItems ul li {
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
}
.clearBtns button {
  padding: 10px 7px;
  border-radius: 5px;
  color: green;
}
.clearBtns button:hover {
  background-color: orange;
  transition: all 0.3s linear;
}

</style>