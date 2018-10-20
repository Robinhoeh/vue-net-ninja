new Vue({
  el: '#vue-app',
  data:  {
    name: 'Robin',
    job: 'Dev'
  },
  methods: {
    greet(timeOfDay) {
      return `Good ${timeOfDay}, ${this.name}`
    }
  }
});