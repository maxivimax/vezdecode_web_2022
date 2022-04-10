import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import 'flowbite';
import './index.css'

const store = createStore({
  state() {
    return {
      cart: [],
      cartCount: 0
    }
  },
  mutations: {
    addToCart(state, item) {
      state.cart.push(item);
      state.cartCount++;
      
      console.log(item.title);
    }
  }
})

const app = createApp(App)
app.use(store)
app.mount('#app')
