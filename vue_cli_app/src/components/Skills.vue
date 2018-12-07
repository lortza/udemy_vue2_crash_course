<template>
  <div class="hello">
    <div class="holder">
      <form @submit.prevent="addSkill">
        <input type="text" placeholder="Enter a skill you have" v-model="newSkill" v-validate="'min: 5'" name="newSkill" >
        <input type="checkbox" id="checkbox" v-model="checked">
        character count: {{ newSkill.length }}
      </form>
      <p>{{ newSkill }}</p>
      <ul>
        <li v-for="(item, index) in skills" :key='index'>{{ item.name }} (level: {{ item.level }})</li>
      </ul>

      <p v-if="skills.length >= 1">You have many skillz! Hooray!</p>
      <p v-else>Start building up those skills!</p>


    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data(){
    return {
      newSkill: '',
      checked: false,
      skills: [
        { name: 'Vue.js', level: 1 },
        { name: 'React', level: 2 },
        // { name: 'Javascript', level: 3 },
        // { name: 'Rails', level: 5 },
        // { name: 'Ruby', level: 5 },
      ],
    }
  },
  methods: {
    addSkill() {
      this.skills.push({name: this.newSkill, level: 1});
      this.newSkill = '';
    }
  }
}//export
</script>

<style scoped>
  .holder {
    background: #fff;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  ul li {
    padding: 20px;
    font-size: 1.3 em;
    background-color: #E0edf4;
    border-left: 5px solid #3EB3F6;
    margin-bottom: 2px;
    color: #3e5252;
  }

  p {
    text-align: center;
    padding: 30px 0;
    color: gray;
  }

  container {
    box-shadow: 0px 0px 40px lightgray;
  }

  input {
    width: calc(100% - 40px);
    border: 0;
    outline: 0;
    padding: 20px;
    font-size: 13.em;
    background-color: #323333;
    color: #687f7f;
  }
</style>
