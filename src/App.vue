/* eslint-disable */

<template>
  <Header />

  <ProductList v-on:getPopup="getPopup"/>
  <Product
    :popup="isModalVisible"
    :productName="productName"
    :key="componentKey"
    ref="childComponent"
  />
  <ShopList />
</template>

<script>
import Product from './components/productCard'
import ProductList from './components/productList'
import ShopList from './components/ShopList'
import Header from './components/headerBlock'

export default {
  name: 'App',
  components: {
    Product,
    ProductList,
    ShopList,
    Header,
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