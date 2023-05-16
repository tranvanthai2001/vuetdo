<template>
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
</template>

<script>
export default {
  props: ["tasks"],
  methods: {
    deleteTask(index) {
      this.$emit("delete-task", index);
    },
    updateTask(index) {
      this.$emit("update-task", index);
    },
  },
};
</script>
