<template>
  <div>
  Autocomplete.vue안에있음!!

  <!-- class="md-chips" -->
  <md-field class="md-autocomplete" :class="[$mdActiveTheme, chipsClasses]">
    <slot />

      <p style="color: blue; font-size: 33px;">md radio  {{this.aaa}}_{{this.id}}</p>
      <div>
        <md-radio v-model="radio" value="accent">Accent <small>(Default)</small></md-radio>
        <md-radio v-model="radio" value="Primary" class="md-primary">Primary</md-radio>
      </div>

    <md-chip
      v-for="(chip, key) in value"
      :key="chip"
      :md-deletable="!mdStatic"
      :md-clickable="!mdStatic"
      :md-duplicated="duplicatedChip === chip"
      @keydown.enter="$emit('md-click', chip, key)"
      @click.native="$emit('md-click', chip, key)"
      @md-delete.stop="removeChip(chip)"
    >
      Autocomplete.vue안에있음!!2
      <slot name="md-chip" :chip="chip" v-if="$scopedSlots['md-chip']">
        {{
        chip
        }}
      </slot>
      <template v-else>{{ chip }}</template>
    </md-chip>
  Autocomplete.vue안에있음!!3
    <md-autocomplete
      ref="input"
      v-model.trim="this.value"
      v-if="!mdStatic && modelRespectLimit"
      :type="mdInputType"
      :id="12"
      :placeholder="this.mdPlaceholder"
      @input="handleInput"
      @keydown.enter="insertChip"
      @keydown.8="handleBackRemove"
    ></md-autocomplete>
      Autocomplete.vue안에있음!!4
  </md-field>
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
  // components: {
  //   MdField,
  //   MdInput,
  //   MdAutocomplete
  // },
  props: ['propmodel','info','mdPlaceholder', 'id', 'aaa', 'value'],
  // props: {
  //   propmodel: Array,
  //   info: String,
  //   mdPlaceholder : String,
  //   id: {
  //       type: [String, Number],
  //       default: () => "md-chipss-" + MdUuid()
  //     },
  //   aaa: String, 
  //   value: Array
  // },


  //   props: {
  //   value: Array,
  //   id: {
  //     type: [String, Number],
  //     default: () => "md-chips-" + MdUuid()
  //   },
  //   mdInputType: {
  //     type: [String, Number],
  //     ...MdPropValidator("md-input-type", [
  //       "email",
  //       "number",
  //       "password",
  //       "search",
  //       "tel",
  //       "text",
  //       "url"
  //     ])
  //   },
  //   mdPlaceholder: [String, Number],
  //   mdStatic: Boolean,
  //   mdLimit: Number,
  //   mdCheckDuplicated: {
  //     type: Boolean,
  //     default: false
  //   },
  //   mdFormat: {
  //     type: Function
  //   }
  // },

  data: () => ({
    radio: 'accent',
    customers: ['x'],
    customer: '',
        inputValue: "",
    duplicatedChip: null,
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
    computed: {
    chipsClasses() {
      return {
        "md-has-value": this.value && this.value.length
      };
    },
    modelRespectLimit() {
      return !this.mdLimit || this.value.length < this.mdLimit;
    },
    formattedInputValue() {
      if (!this.mdFormat) {
        return this.inputValue;
      }
      return this.mdFormat(this.inputValue);
    }
  },
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
    },
    insertChip({ target }) {
      console.log("enter 입력함");
      let inputValue = this.formattedInputValue;
      if (!inputValue || !this.modelRespectLimit) {
        return;
      }
      if (this.value.includes(inputValue)) {
        this.duplicatedChip = null;
        // to trigger animate
        this.$nextTick(() => {
          this.duplicatedChip = inputValue;
        });
        return;
      }
      this.value.push(inputValue);
      this.$emit("input", this.value);
      this.$emit("md-insert", inputValue);
      this.inputValue = "";
    },
    removeChip(chip) {
      const index = this.value.indexOf(chip);
      this.value.splice(index, 1);
      this.$emit("input", this.value);
      this.$emit("md-delete", chip, index);
      this.$nextTick(() => this.$refs.input.$el.focus());
    },
    handleBackRemove() {
      if (!this.inputValue) {
        this.removeChip(this.value[this.value.length - 1]);
      }
    },
    handleInput() {
      if (this.mdCheckDuplicated) {
        this.checkDuplicated();
      } else {
        this.duplicatedChip = null;
      }
    },
    checkDuplicated() {
      if (!this.value.includes(this.formattedInputValue)) {
        this.duplicatedChip = null;
        return false;
      }
      if (!this.mdCheckDuplicated) {
        return false;
      }
      this.duplicatedChip = this.formattedInputValue;
    }
  },
  watch: {
    value() {
      this.checkDuplicated();
    }
  }
};
</script>

<style lang="scss">

//@import "~components/MdAnimation/variables";
//@import "../../src/assets/variables";
@import "~vue-material/dist/components/MdAnimation/variables";
//@import "./src/assets/variables";
.md-chips.md-field {
  padding-top: 12px;
  flex-wrap: wrap;
  &.md-has-value {
    label {
      top: -6px;
    }
  }
  .md-chip {
    margin-bottom: 4px;
    &:last-of-type {
      margin-right: 8px;
    }
  }
  .md-input {
    min-width: 128px;
  }
}
</style>
