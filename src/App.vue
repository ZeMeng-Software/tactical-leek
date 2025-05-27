<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      elevation="0"
      class="blur-bg linear-app-bar"
    >
      <v-img
        src="/logo.png"
        max-width="40"
        class="mr-3"
        alt="战术韭菜Logo"
        aria-hidden="true"
      ></v-img>
      <v-toolbar-title class="font-weight-bold text">战术韭菜</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon :href="config.socialLinks.bilibili" target="_blank" aria-label="B站">
        <v-icon>fab fa-bilibili</v-icon>
      </v-btn>
      <v-btn icon :href="config.socialLinks.douyin" target="_blank" aria-label="抖音">
        <v-icon>fas fa-video</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main class="background">
      <v-container fluid class="v-container">
        <BrandIntro />
        <v-row class="my-12">
          <v-col cols="12">
            <h2 class="text-center text-h4 font-weight-bold secondary--text">产品展示</h2>
          </v-col>
          <v-row justify="center">
            <ProductCard
              v-for="product in displayedProducts"
              :key="product.name"
              :product="product"
            />
          </v-row>
          <v-col cols="12" class="text-center mt-6">
            <v-btn
              color="accent"
              variant="flat"
              href="/products.html"
              append-icon="fas fa-arrow-right"
              class="px-6"
            >
              查看更多
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="my-12 highlight-section">
          <v-col cols="12">
            <h2 class="text-center text-h3 font-weight-bold secondary--text mb-6">测试数据</h2>
          </v-col>
          <v-row justify="center">
            <TestDataCard
              v-for="test in testData"
              :key="test.title"
              :test="test"
            />
          </v-row>
        </v-row>
        <v-row class="my-12">
          <v-col cols="12">
            <h2 class="text-center text-h4 font-weight-bold secondary--text">公告</h2>
          </v-col>
          <v-row justify="center">
            <AnnouncementCard
              v-for="announcement in displayedAnnouncements"
              :key="announcement.title"
              :announcement="announcement"
            />
          </v-row>
          <v-col cols="12" class="text-center mt-6" v-if="announcements.length > 2">
            <v-btn
              color="accent"
              variant="flat"
              href="/announcements.html"
              append-icon="fas fa-arrow-right"
              class="px-6"
            >
              查看更多
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="my-12">
          <v-col cols="12">
            <h2 class="text-center text-h4 font-weight-bold secondary--text">敬请期待</h2>
          </v-col>
          <v-col cols="12" class="text-center">
            <v-card class="blur-bg pa-6 mx-auto" max-width="600">
              <p class="text-body-1 text--text">
                更多精彩内容即将上线，敬请关注！
              </p>
            </v-card>
          </v-col>
        </v-row>
        <FooterSection />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { computed } from 'vue';
import { useProductStore } from './stores/products';
import { config } from './config';
import BrandIntro from './components/BrandIntro.vue';
import ProductCard from './components/ProductCard.vue';
import TestDataCard from './components/TestDataCard.vue';
import AnnouncementCard from './components/AnnouncementCard.vue';
import FooterSection from './components/FooterSection.vue';

const productStore = useProductStore();
const products = computed(() => productStore.products);
const testData = computed(() => productStore.testData);
const announcements = computed(() => productStore.announcements);
const displayedProducts = computed(() => products.value.slice(0, 4));
const displayedAnnouncements = computed(() => announcements.value.slice(0, 2));
</script>

<style scoped>
.background {
  background: var(--v-theme-background);
}

.linear-app-bar {
  transition: all 0.3s ease-in-out;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
</style>