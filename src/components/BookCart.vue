<template>
  <div class="cart">
    <h2>Shopping Cart</h2>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(book, index) in cart" :key="index">
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>${{ book.price }}</td>
          <td><button @click="removeFromCart(index)">Remove</button></td>
        </tr>
      </tbody>
    </table>
    <p>Total: ${{ total }}</p>
    <button @click="purchase" class="purchase-btn">Purchase</button>
  </div>
</template>

<script>
export default {
  name: 'BookCart',
  computed: {
    cart() {
      return this.$store.getters.cartItems;
    },
    total() {
      return this.$store.getters.cartTotal;
    },
  },
  methods: {
    removeFromCart(index) {
      this.$store.commit('removeFromCart', index);
    },
    purchase() {
      this.$store.dispatch('purchase');
      alert('Transaction complete! Thank you for your purchase.');
    },
  },
};
</script>

<style scoped>
.cart {
  margin: 20px;
}

.cart h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}

button {
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

button:hover {
  background-color: #c82333;
}

.purchase-btn {
  background-color: #28a745;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

.purchase-btn:hover {
  background-color: #218838;
}
</style>
