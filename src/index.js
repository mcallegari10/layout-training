import Vue from 'vue'

import Techs from './components/Techs'

import { getTechs } from './services/techsServices'

import './index.pug'
import './index.scss'

const vm = new Vue({
  el: '#app',
  data: {
    platforms: [],
    filterValue: '',
    filteredTechs: []
  },
  created() {
    getTechs().then(response => {
      this.platforms = response.data
    })
  },
  methods: {
    filterTechs() {
      const techs = this.platforms.map(platform => platform.techs)
      const flattenedTechs = [].concat.apply([], techs)
      this.filteredTechs = flattenedTechs.filter(
        tech => tech.name.toLowerCase().includes(this.filterValue.toLowerCase())
      )
    }
  },
  components: { Techs }
})
