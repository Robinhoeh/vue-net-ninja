// new Vue({
//   el: '#vue-app',
//   data:  {
//     name: 'Robin',
//     job: 'Dev',
//     website: 'https://www.google.com',
//     websiteTag: '<a href="https://www.google.com">Google</a>',
//     age: 25,
//     x: 0,
//     y: 0,
//     newName: '',
//     newAge: '',
//     oldName: '',
//     a: 0,
//     b: 0,
//     count: 0,
//     available: false,
//     nearby: false,
//     ready: false,
//     timeStamp: false,
//     timeOfDay: false,
//     error: true,
//     success: true,
//     characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
//       ninjas: [
//         { name: 'Ryu', age: 25 },
//         { name: 'Yoshi', age: 35 },
//         { name: 'Ken', age: 55 }
//       ]
//   },
//   methods: {
//     greet(timeOfDay) {
//       return `Good ${timeOfDay}, ${this.name}`
//     },
//     addAge(inc) {
//       this.age += inc
//     },
//     subtractAge(dec) {
//       this.age -= dec
//     },
//     updatePostion(e) {
//       this.x = e.offsetX
//       this.y = e.offsetY
//     },
//     click() {
//       alert('you clicked me, sorry this link goes nowhere')
//     },
//     logName() {
//       console.log('You entered ur name')
//     },
//     logAge() {
//       console.log('You entered ur age')
//     }
//   },
//   computed: {
//     addToA() {
//       return this.a + this.age
//     },
//     addToB() {
//       return this.b + this.age
//     },
//     totalCount() {
//       return this.count + this.age
//     },
//     compClasses() {
//       return {
//         available: this.available,
//         nearby: this.nearby
//       }
//     },
//     workStatus() {
//       return{
//         timeStamp: this.timeStamp,
//         timeOfDay: this.timeOfDay
//       }
//     }
//   }
// });


// var data = {
//   name: 'Yoshi'
// }


// greeting is name of component
Vue.component('greeting', {
  //template is the content of the component
  template:'<p>Hey there, i am {{ name }}. <button v-on:click="changeName">Change name</button></p>',
  //data function gives access to specific component
  //Won't update every component at same time, only specifc component interacted with
  data() {
    return {
      name: 'Yoshi'
    }
  },
  methods: {
    changeName () {
      this.name = 'Mario'
    }
  }
});

new Vue({
  el:'#vue-app-one'
});

new Vue({
  el:'#vue-app-two'
});

// VUE APP 3

new Vue({
  el:"#vue-app-three",
  data: {
    output: 'Your fav food',
    someCondition: false
  },
  created() {
    console.log('created', this.$refs.inputEl);
  },
  mounted() {
    console.log('mounted', this.$refs.inputEl);
  },
  methods: {
    readRefs() {
      // this.$refs allows access to all refs in instance
      // ref="refName"
      //attr you want to acccess of HTML element

      // with vue you just use refs instead of document.querySelector('#id') like
      // plain javascript


      // $refs does the same as document.getElementById or similar apis
      // $refs get loaded ONCE they are MOUNTED
      // When the DOM is rendered - Vue will store the refs in its own refs object
      // if wrrapped in conditon, it will not load if falsey

      
      this.someCondition = true;
      this.$nextTick(() => {
        console.log(this.$refs.inputEl.value);
        console.log(this.$refs.inputEl.tagName);
        console.log(this.$refs.inputEl.previousElementSibling);
        console.log(this.$refs);
        this.output = this.$refs.inputEl.value;
      })
    }
  }
});

