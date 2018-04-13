var vm = new Vue({
  el: '#app',
  methods: {
    scrollTo(id) {
      location.href = `#${id}`
    }
  }
})
