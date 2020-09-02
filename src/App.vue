<template>
  <div id="app">
    <navbar></navbar>
    <div class="router-view">
      <router-view />
    </div>
  </div>
</template>

<script>
import navbar from "./components/Navbar";
export default {
  name: "App",
  components: { navbar },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-view {
  width: 100%;
  padding: 0;
  margin: 50px 0 0 0;
  overflow-x: hidden;
  display: block;
  color: #000;
}
</style>
