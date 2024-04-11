
import { createStore } from 'vuex';


export default createStore({
    
      state: {
        books: [
            { id: 1, title: 'name of the wind', author: 'Patrick Rothfuss', price: 19.99 },
            { id: 2, title: 'the way of kings', author: 'Brandon Sanderson', price: 21.39 },
            { id: 3, title: 'the final empire', author: 'Brandon Sanderson', price: 11.33 },
            { id: 4, title: 'the long road home', author: 'Brandon Sanderson', price: 32.99 },
            { id: 5, title: 'the name of the wind', author: 'Patrick Rothfuss', price: 25.99 },
            { id: 6, title: 'Letting go', author: 'Philip Roth', price: 45.99 },
            { id: 6, title: 'Fear of Flying', author: 'Erica Jong', price: 65.99 },
            { id: 6, title: 'When Breath Becomes Air', author: 'Paul Kalanithi', price: 23.99 },
            { id: 6, title: 'The Adventures of Tom Sawyer', author: 'Mark Twain', price: 21.99 },
            { id: 6, title: 'In the Heart of the Sea', author: 'Nathaniel Philbrick', price: 22.99 },

        ],
        cart: [],
        isAuthenticated: false,
      },
      mutations: {
        addToCart(state, book) {
          state.cart.push(book);
        },
        removeFromCart(state, index) {
          state.cart.splice(index, 1);
        },
        updateAuthentication(state, status) {
          state.isAuthenticated = status;
        },
        emptyCart(state) {
          state.cart = [];
        },
      },
      actions: {
        purchase({ commit }) {
          setTimeout(() => {
            commit('emptyCart');
          }, 2000);
        },
        simulateAuthentication({ commit }) {
          setTimeout(() => {
            commit('updateAuthentication', true);
          }, 1000);
        },
      },
      getters: {
        availableBooks: state => state.books,
        cartItems: state => state.cart,
        cartTotal: state => {
          return state.cart.reduce((total, book) => total + book.price, 0);
        },
      },
    });
    