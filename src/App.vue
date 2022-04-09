<template>
  <ProductList />
  <button
      type="button"
      class="btn"
      @click="showModal()"
    >
      Open Modal!
    </button>
  <Product
    :values="isModalVisible"
    :product="senya"
  />
</template>

<script>
import Product from './components/productCard'
import ProductList from './components/productList'

export default {
  name: 'App',
  components: {
    Product,
    ProductList
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
}
</script>

<style>
</style>