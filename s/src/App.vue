/* eslint-disable */

<template>
  <Header v-on:getCart="getCart"/>
  <ProductList v-on:getPopup="getPopup" />
  <Product
    :productName="productName"
    ref="childComponent"
  />
  <ShopList :key="componentKey" ref="childComponentCard" />
</template>

<script>
import Product from './components/productCard'
import ProductList from './components/productList'
import ShopList from './components/shopList'
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
      isCardVisible: true,
      productName: "senya",
      componentKey: 0,
    };
  },
  methods: {
    getPopup(productName) {
      this.productName = productName;
      this.isModalVisible = true;
      this.$refs.childComponent.show();
    },
    getCart() {
      this.isCardVisible = true;
      this.$refs.childComponentCard.resetIsShowing();
    }
  }
}
</script>

<style>
</style>