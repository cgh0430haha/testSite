<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
    <autocomplete
    ></autocomplete>
    <!-- :id="1"   v-model="projects" :md-limit="10" md-placeholder="Add project..."  -->

    ~~~
    <autocomplete
    :prop-model="this.projects"
    :value="this.projects"
    aaa="Add 햇는데 project..."
    id="1"
    >
        <template slot="md-chip" slot-scope="{ chip }">
          {{ chip }} <small v-if="chip === currentProject">(걸려들었지롱)</small>
        </template>
        <div class="md-helper-text">Up to tototototo 10 projects</div>
      </autocomplete>
  </div>
</template>

<script>
/* eslint-disable */
// import BootstrapVue from "bootstrap-vue";
//import axios from "axios";
//import moment from "moment";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
import Autocomplete from "./Autocomplete";
//import MdChipss from "./MdChipss";
//import VueMaterial from "vue-material";
// Vue.use(BootstrapVue);
//Vue.use(VueMaterial);

export default {
  name: 'HelloWorld',
  data () {
    return {
      currentProject: "vue",
    projects: ["Vue Material", "Element UI", "Quasar"],
      msg: 'Welcome to Your Vue.js App',
      // selectedEmployee: null,
      // employees: [
      //   'Jim Halpert',
      //   'Dwight Schrute',
      //   'Michael Scott',
      //   'Pam Beesly',
      //   'Angela Martin',
      //   'Kelly Kapoor',
      //   'Ryan Howard',
      //   'Kevin Malone',
      //   'Creed Bratton',
      //   'Oscar Nunez',
      //   'Toby Flenderson',
      //   'Stanley Hudson',
      //   'Meredith Palmer',
      //   'Phyllis Lapin-Vance'
      // ]
    }
  }
    ,
  components: {
    Autocomplete,
    //MdChipss
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
