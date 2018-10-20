new Vue({
  el: '#vue-app',
  data:  {
    name: 'Robin',
    job: 'Dev',
    website: 'https://www.google.com',
    websiteTag: '<a href="https://www.google.com">Google</a>'
  },
  methods: {
    greet(timeOfDay) {
      return `Good ${timeOfDay}, ${this.name}`
    }
  }
});