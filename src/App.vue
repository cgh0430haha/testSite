/* eslint-disable */
<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <router-view />
    <!-- <md-autocomplete
      v-model="customer"
      :md-options="customers"
      @md-changed="getCustomers"
      @md-opened="getCustomers"
      @md-selected="getSelected"
    >
      <label>Customers</label>
    </md-autocomplete> -->
      <br><br>
      <div>
        <p style="color: blue; font-size: 33px;">md autocomplete</p>
        <md-autocomplete v-model="selectedEmployee" :md-options="employees" md-dense>
          <label>Employees</label>
        </md-autocomplete>
      </div>

      <p style="color: blue; font-size: 33px;">md chips</p>
    <div>
      여기서부터인데....
      <md-chips v-model="projects" :md-limit="10" md-placeholder="Add project...">
        <template slot="md-chip" slot-scope="{ chip }">
          {{ chip }} <small v-if="chip === currentProject">(걸려들었지롱)</small>
        </template>

        <div class="md-helper-text">Up to 10 projects</div>
      </md-chips>
    </div>
    <br><br><br><br>
  </div>
</template>

<script>
/* eslint-disable */
import Vue from 'vue'
import { MdRadio, MdAutocomplete, MdChips } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
//import MdChipss2 from "./MdChipss2"; 
Vue.use(MdRadio)
Vue.use(MdChips)
Vue.use(MdAutocomplete)

const GET_CUSTOMERS = [

  { client_id: 1, email: "example1@example.com" },
  { client_id: 2, email: "example2@example.com" }
];

export default {
  /* eslint-disable */

  name: "App",
  data: () => ({
    radio: 'accent',
    customers: ["x"],
    customer: "abc, cdd, aef",
      selectedCountry: null,
    selectedEmployee: null,
    currentProject: "vue",
    projects: ["Vue Material", "Element UI", "Quasar"],
    countries: [
      "Algeria",
      "Argentina",
      "Brazil",
      "Canada",
      "Italy",
      "Japan",
      "United Kingdom",
      "United States"
    ],
    employees: [
        'Jim Halpert',
        'Dwight Schrute',
        'Michael Scott',
        'Pam Beesly',
        'Angela Martin',
        'Kelly Kapoor',
        'Ryan Howard',
        'Kevin Malone',
        'Creed Bratton',
        'Oscar Nunez',
        'Toby Flenderson',
        'Stanley Hudson',
        'Meredith Palmer',
        'Phyllis Lapin-Vance'
      ],
      currentProject: 'Vue',
      projects: [
        'Vue Material',
        'Element UI',
        'Quasar'
      ],
    item: ["Orange", "Apple", "Pineapple"],
    term: ["Orange", "Apple", "Pineapple"],

    fruits: ["Orange", "Apple", "Pineapple"]
  }),
  methods: {
    getCustomers( searchTerm) {
      console.log('getCustomers', searchTerm)
      this.customers = new Promise(resolve => {
        if (!searchTerm) {
          resolve(GET_CUSTOMERS.map(x => x.email))
        } else {
          const term = searchTerm.toLowerCase()
          this.customers = GET_CUSTOMERS.filter(({ email }) => {
            return email.toLowerCase().includes(term)
          }).map(x => x.email)
          resolve(this.customers)
        }
      })
    },
    getSelected(){
      console.log('getSelected', this.customer)
    }
  },
  components: {
    //MdChipss
  }
}
</script>

<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
/*eslint-enable */