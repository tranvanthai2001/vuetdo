<template>
  <div>
    <router-view />

  </div>
</template>

<script>
import todoapp from "./components/todoapp.vue"
export default {
  name: "App",
  components: {
    todoapp
  },
};
</script>

<style>

</style>
