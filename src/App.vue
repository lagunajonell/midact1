<template>
  <div id="app" class="container">
    <div v-if="!isAuthenticated" class="login-container">
      <button @click="authenticate" class="login-button">Login</button>
    </div>
    <div v-else class="content">
      <BookList :books="books" class="column" />
      <BookCart class="column" />
    </div>
  </div>
</template>

<script>
import BookList from './components/BookList.vue';
import BookCart from './components/BookCart.vue';

export default {
  name: 'App',
  components: {
    BookList,
    BookCart,
  },
  computed: {
    isAuthenticated() {
      return this.$store.state.isAuthenticated;
    },
    books() {
      return this.$store.getters.availableBooks;
    },
  },
  methods: {
    authenticate() {
      this.$store.dispatch('simulateAuthentication');
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.content {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
}

.column {
  flex: 1;
  margin-right: 20px;
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
  }
  
  .column {
    margin-right: 0;
    margin-bottom: 20px;
  }
}

.login-container {
  margin-top: 100px;
}

.login-button {
  padding: 15px 30px;
  font-size: 18px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #0056b3;
}
</style>
