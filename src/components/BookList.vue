<template>
    <div class="book-list">
      <h2>Available Books</h2>
      <input type="text" v-model="searchQuery" placeholder="Search books" class="search-input">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in filteredBooks" :key="book.id">
            <td>{{ book.title }}</td>
            <td>{{ book.author }}</td>
            <td>Php {{ book.price }}</td>
            <td><button @click="addToCart(book)">Add to Cart</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BookList',
    props: ['books'],
    data() {
      return {
        searchQuery: '',
      };
    },
    computed: {
      filteredBooks() {
        const query = this.searchQuery.trim().toLowerCase();
        if (!query) return this.books;
        return this.books.filter(book =>
          book.title.toLowerCase().includes(query) ||
          book.author.toLowerCase().includes(query)
        );
      },
    },
    methods: {
      addToCart(book) {
        this.$store.commit('addToCart', book);
      },
    },
  };
  </script>
  
  <style scoped>
  .book-list {
    margin: 20px;
  }
  
  .book-list h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
  }
  
  tr:hover {
    background-color: #f5f5f5;
  }
  
  .search-input {
    padding: 5px;
    width: 100%;
    margin-bottom: 10px;
  }
  </style>
  