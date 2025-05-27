<template>
  <v-container fluid class="v-container">
    <v-row class="my-12">
      <v-col cols="12">
        <h2 class="text-center text-h4 font-weight-bold secondary--text">所有产品</h2>
      </v-col>
      <v-row justify="center">
        <ProductCard
          v-for="product in products"
          :key="product.name"
          :product="product"
        />
      </v-row>
    </v-row>
  </v-container>
</template>

<script setup>
import { useProductStore } from '../stores/products';
import ProductCard from './ProductCard.vue';

const productStore = useProductStore();
const products = productStore.products;
</script>