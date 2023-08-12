<template>
  <div id="app">
    <SkeletonLoader />
  </div>
</template>

<script>
import SkeletonLoader from "./components/SkeletonLoader.vue";
import "./assets/global.css";

export default {
  name: "App",
  components: {
    SkeletonLoader,
  },
};
</script>

<style>
#app {
  text-align: center;
  color: var(--font-color);
  background-color: var(--bg-color);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
}
</style>
