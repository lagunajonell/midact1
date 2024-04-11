<template>
  <nav>
    <router-link to="/HomeView">Home</router-link> |
    <router-link to="/">Login</router-link> |
    <router-link to="/BookList">BookList</router-link> | 
  </nav>
  <router-view/>
</template>

<script>

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
