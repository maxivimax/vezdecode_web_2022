<template>
  <ProductList v-on:getPopup="getPopup"/>
  <Product
    :popup="isModalVisible"
    :productName="productName"
    :key="componentKey"
    ref="childComponent"
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
      isModalVisible: true,
      productName: "senya",
      componentKey: 0,
    };
  },
  methods: {
    getPopup(productName) {
      this.productName = productName;
      this.isModalVisible = true;
      this.$refs.childComponent.show();
      this.componentKey += 1;  
      console.log(productName)
    },
    showModal() {
      this.$refs.childComponent.show();
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
}
</script>

<style>
</style>