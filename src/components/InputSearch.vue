<template>
  <div>
    <button @click="addBtn" class="btn btn-success">Add</button>
  </div>
</template>

<script>
export default {
  methods: {
    addBtn: function () {
      this.$emit("button-add");
    },
  },
};
</script>

<style></style>
