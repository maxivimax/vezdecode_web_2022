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
let maxPrices = window.localStorage.getItem('maxPrices');

console.log(maxPrices)

const store = createStore({
  state() {
    return {
      cart: cart ? JSON.parse(cart) : [],
      cartCount: cartCount ? parseInt(cartCount) : 0,
      maxPrices: maxPrices ? maxPrices : [],
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

      let product = state.cart[index];
      state.cartCount -= 1;
      product.quantity -= 1;

      if (item.quantity == 0) {
        console.log("dsa")
        state.cart.splice(index, 1);
      }
      this.commit('saveCart');
    },
    saveCart(state) {
      window.localStorage.setItem('cart', JSON.stringify(state.cart));
      window.localStorage.setItem('cartCount', state.cartCount);
      window.localStorage.setItem('maxPrices', state.maxPrices);
    },
    toAuction(state, item) {
      let found = state.maxPrices.find(product => product.id == item["id"]);

      if (found) {
        found.price = item.price;
      } else {
        state.maxPrices.push(item);
      }
      this.commit('saveCart');
    }
  }
})

createApp(App).use(store).mount('#app')
