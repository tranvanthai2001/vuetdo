<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import todoapp from "./components/TodoApp.vue"
export default {
  name: "App",
  components: {
    todoapp
  },
};
</script>

<style>

</style>
