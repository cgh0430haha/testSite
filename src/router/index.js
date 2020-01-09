import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Autocomplete from '@/components/Autocomplete'
// import MdChipss from '@/components/MdChipss'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
    // ,
    // {
    //   path: '/Autocomplete',
    //   name: 'Autocomplete',
    //   component: Autocomplete
    // }
    // ,
    // {
    //   path: '/MdChipss',
    //   name: 'MdChipss',
    //   component: MdChipss
    // }
  ]
})
