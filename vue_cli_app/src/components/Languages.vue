<template>
  <div class="hello">
    <div class="holder">
      <p>{{ randomThing }}</p>
      <p>{{ btnState ? 'The button is disabled' : "Licky clicky" }}</p>
      <button v-on:click="changeName" v-bind:disabled="btnState">Change Name</button>

      <h2>Your Languages</h2>
      <ul>
        <li v-for="(item, index) in languages" :key='index'>{{ index + 1 }}. {{ item.name }} (level: {{ item.level }})</li>
      </ul>

      <p v-if="isMaster">You Golden-Tongued Beast, You</p>
      <p v-else>Start building up those skills!</p>

      <div v-bind:class="{ 'alert': showAlert, 'notice': showNotice }"></div>
      <div v-bind:class="yellowObject"></div>
      <div v-bind:style="{ backgroundColor: bgColor, width: bgWidth, height: bgHeight }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Languages',
  data(){
    return {
      btnState: true,
      randomThing: 'Random Tandem Elephants',
      languages: [
        { name: 'French', level: 2 },
        { name: 'Spanish', level: 3 },
        { name: 'English', level: 11 },
      ],
      showAlert: true,
      showNotice: false,
      yellowObject: {
        yellowey: true
      },
      bgColor: 'green',
      bgWidth: '100%',
      bgHeight: '50px',
    }
  },// data
  methods: {
    changeName(){
      return 'hola'
    },
    isMaster(){
      this.languages.length >= 5;
    },

  }//methods
}//export
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./Languages.css" scoped>

</style>
