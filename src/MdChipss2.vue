<template>
  <div>
    md chipss????
  </div>
</template>

<script>
/* eslint-disable */
import Vue from 'vue'
import VueMaterial from 'vue-material'
Vue.use(VueMaterial)

export default {
  name: "MdChipss",
  data (){
    return {
      inputValue: "",
      duplicatedChip: null
    }
  },
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
}();
</script>
