<template>
    <div>
      <!-- Include the BookList component here -->
      <BookList />
    </div>
  </template>
  
  <script>
  // Import BookList component
  import BookList from '@/components/BookList.vue'
  
  export default {
    name: 'BookListView',
    components: {
      // Register BookList component
      BookList
    }
  }
  </script>
  
  <style scoped>
    /*Add styles*/
  </style>
  