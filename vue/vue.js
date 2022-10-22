const app = Vue.createApp({

});

app.component('contact', {
  data() {
    return {
      detailsAreVisible: false,
      id: 0,
      friends: [
        {
          id:     '1',
          name:   'Mihajlo Veljković',
          web:    'www.mihajloveljkovic.com',
          phone:  '+381 66 405 676',
          email:  'mihajloveljkovic1999@gmail.com',
        },
        {
          id:     '2',
          name:   'Petar Petrović',
          web:    'www.petar.com',
          phone:  '+381 66 123 455',
          email:  'petar@gmail.com',
        }
      ],
    };
  },

  template: `
    <li v-for="friend in friends">
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails(friend.id)">
        {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
      </button>
      <ul v-if="detailsAreVisible && id == friend.id">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Web:  </strong> {{ friend.web   }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
    </li>
  `,
      
  methods: {
    toggleDetails(id) {
      this.detailsAreVisible = !this.detailsAreVisible;
      this.id = id;
    },
  },
});

app.mount('#app');