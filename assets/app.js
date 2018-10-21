new Vue({
  el: '#vue-app',
  data:  {
    name: 'Robin',
    job: 'Dev',
    website: 'https://www.google.com',
    websiteTag: '<a href="https://www.google.com">Google</a>',
    age: 25,
    x: 0,
    y: 0
  },
  methods: {
    greet(timeOfDay) {
      return `Good ${timeOfDay}, ${this.name}`
    },
    addAge(inc) {
      this.age += inc
    },
    subtractAge(dec) {
      this.age -= dec
    },
    updatePostion(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    },
    click() {
      alert('you clicked me')
    }
  }
});