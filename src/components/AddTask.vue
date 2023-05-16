<template>
  <div class="d-flex">
    <input
      v-model="name"
      type="text"
      placeholder="new item"
      class="form-control"
    />
    <button @click="addTask" class="btn btn-success">Add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    addTask() {
      if (this.name.length === 0) return;
      this.$emit("add-task", this.name);
      this.name = "";
    },
  },
};
</script>
