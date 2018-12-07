<template>
  <div class="hello">
    <div class="holder">
      <form @submit.prevent="addSkill">
        <input type="text" placeholder="Enter a skill you have" v-model="newSkill" v-validate="'min:5'" name="skillInput" >

        <transition enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
        <!-- <transition name="alert-in"> -->
          <p class="alert" v-if="errors.has('skillInput')">{{ errors.first('skillInput') }}</p>
        </transition>

        <input type="checkbox" id="checkbox" v-model="checked">
        character count: {{ newSkill.length }}
      </form>
      <p>{{ newSkill }}</p>
      <ul>
        <transition-group name="skillsList" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
          <li v-for="(item, index) in skills" :key='index'>
            {{ item.name }} (level: {{ item.level }})
            <i class="fa fa-minus-circle" v-on:click="removeSkill(index)"></i>
          </li>
        </transition-group>
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
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.skills.push({name: this.newSkill, level: 1});
          this.newSkill = '';
        // } else {
        //   console.log('Not valid');
        }
      });
    },
    removeSkill(id){
      this.skills.splice(id,1);
    }
  }
}//export
</script>

<style scoped>
  @import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css";

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

  ul li i {
    float: right;
    cursor: pointer;
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
    width: 100%;
    border: 0;
    outline: 0;
    padding: 20px;
    font-size: 13.em;
    background-color: #323333;
    color: #687f7f;
  }

  .alert {
    background-color: #C70039;
    color: white;
    width: 100%;
    padding: 10px 0px;
    border-radius: 0;
  }

  .alert-in-enter-active {
    animation: bounce-in .5s;
  }

  .alert-in-leave-active {
    animation: bounce-in .5s reverse;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
