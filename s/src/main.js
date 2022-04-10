// import { createApp } from 'vue'
// import App from './App.vue'
// import 'flowbite';
// import './index.css'

// createApp(App).mount('#app')

import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import 'flowbite';
import './index.css'

let cart = window.localStorage.getItem('cart');
let cartCount = window.localStorage.getItem('cartCount');

const store = createStore({
  state() {
    return {
      cart: cart ? JSON.parse(cart) : [],
      cartCount: cartCount ? parseInt(cartCount) : 0,
    }
  },
  mutations: {
    addToCart(state, item) {
      let found = state.cart.find(product => product.id == item.id);

      if (found) {
        found.quantity++;
        found.totalPrice = found.quantity * found.price;
      } else {
        state.cart.push(item);

        item['quantity'] = 1
      }

      state.cartCount++;
      this.commit('saveCart');
    },
    removeFromCart(state, item) {
      let index = state.cart.indexOf(item);

      if (index > -1) {
        let product = state.cart[index];
        state.cartCount -= product.quantity;

        state.cart.splice(index, 1);
        this.commit('saveCart');
      }
    },
    saveCart(state) {
      window.localStorage.setItem('cart', JSON.stringify(state.cart));
      window.localStorage.setItem('cartCount', state.cartCount);
    }
  }
})

createApp(App).use(store).mount('#app')
