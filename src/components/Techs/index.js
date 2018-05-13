import Vue from 'vue'

import './styles.scss'

export default Vue.component('techs', {
  props: {
    platform: {
      type: Object,
      required: true
    }
  },
  template: `
    <div class="platform">
      <h1 class="platform-title">
        {{ platform.platform }}
      </h1>
      <div class="tools">
        <div class="tech" v-for="tech in platform.techs" :key="tech.name">
          <img class="logo" :src="tech.logo" :alt="tech.name" />
          <h1 class="title">
            {{ tech.name }}
          </h1>
          <span class="release">
            Release: {{ tech.release }}
          </span>
          <p class="description">
            {{ tech.description }}
          </p>
        </div>
      </div>
    </div>
  `
})
