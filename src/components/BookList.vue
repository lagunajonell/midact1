<template>
    <div>
        <h1>Online Book Store!</h1>
        <input type="text" v-model="searchQuery" placeholder="Search here">
        <button @click="search">Search</button>
        <button @click="resetSearch">Reset</button>
        <br>  
    <table>
        <thead>
            <tr>
                    <th>Book No</th>
                    <th>Book Title</th>
                    <th>Author</th>
                    <th>Genre</th>
                    <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <!-- Table -->
            <tr v-for="book in displayBooks" :key="book.id">
                    <td>{{ book.id }}</td>
                    <td>{{ book.title }}</td>
                    <td>{{ book.author }}</td>
                    <td>{{ book.genre }}</td>
                    <td>{{ book.price }}</td>
                    <td><button @click="addToCart(book)">Add To Cart</button></td>
            </tr>
        </tbody>
    </table>
    </div>
</template>

<script>
 // Import Stored Data
</script>

<style scoped>

</style>
