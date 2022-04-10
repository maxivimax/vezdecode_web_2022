/* eslint-disable */

<template>
  <Header v-on:getCart="getCart"/>

  <ProductList v-on:getPopup="getPopup" />
  <Product
    :popup="isCardVisible"
    :productName="productName"
    :key="componentKey"
    ref="childComponent"
  />
  <ShopList :key="componentKey" ref="childComponentCard" />
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
      this.componentKey += 1;
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