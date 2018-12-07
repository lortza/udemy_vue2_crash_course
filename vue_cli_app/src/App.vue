<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Skills />
    <Languages />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Skills from './components/Skills.vue'
import Languages from './components/Languages.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    Skills,
    Languages
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #DAF7A6;
  padding: 20px;
} */

@import url('http://fonts.googleapis.com/css?family=Montserrat:400,700');
body {
  background-color: #eee;
  font-family: 'Montserrat', 'sans-serif';
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
}
body, html {
  margin: 0;
  height: 100%;
}
#app {
  width: 50%;
}
</style>
