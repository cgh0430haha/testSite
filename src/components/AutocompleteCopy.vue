<template>
  <div>
  <md-autocomplete
    v-model="customer"
    :md-options="customers"
    @md-changed="getCustomers"
    @md-opened="getCustomers"
    @md-selected="getSelected"
  >
    <label>Customers</label>
  </md-autocomplete>
    <label>pppautocomplete</label>
    <md-autocomplete class="md-input" v-model="selectedCountry" :md-options="countries">
    </md-autocomplete>
    <!-- <label>Country</label> -->
  <!-- <label>aasdfas</label> -->
  </div>
</template>

<script>
/* eslint-disable */
// import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'
const GET_CUSTOMERS = [
  { client_id: 1, email: "example1@example.com" },
  { client_id: 2, email: "example2@example.com" }
];

export default {
  name: "autocomplete",
  data: () => ({
    customers: ['x'],
    customer: '',
      selectedCountry: null,
    selectedEmployee: null,
    currentProject: "Vue",
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
    item: ["Orange", "Apple", "Pineapple"],
    term: ["Orange", "Apple", "Pineapple"],

    fruits: ["Orange", "Apple", "Pineapple"]
  }),
  methods: {
    getCustomers(searchTerm) {
      console.log('getCustomers', searchTerm)
      this.customers = new Promise(resolve => {
        if (!searchTerm) {
          resolve(GET_CUSTOMERS.map(x => x.email));
        } else {
          const term = searchTerm.toLowerCase();
          this.customers = GET_CUSTOMERS.filter(({ email }) => {
            return email.toLowerCase().includes(term);
           }).map(x => x.email);
          resolve(this.customers);
        }
      });
    },

    getSelected() {
      console.log('getSelected', this.customer);
    }
  }
};
</script>
/*eslint-enable */