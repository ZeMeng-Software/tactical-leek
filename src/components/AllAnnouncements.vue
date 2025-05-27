<template>
  <v-container fluid class="v-container">
    <v-row class="my-12">
      <v-col cols="12">
        <h2 class="text-center text-h4 font-weight-bold secondary--text">所有公告</h2>
      </v-col>
      <v-row justify="center">
        <AnnouncementCard
          v-for="announcement in announcements"
          :key="announcement.title"
          :announcement="announcement"
        />
      </v-row>
    </v-row>
  </v-container>
</template>

<script setup>
import { useProductStore } from '../stores/products';
import AnnouncementCard from './AnnouncementCard.vue';

const productStore = useProductStore();
const announcements = productStore.announcements;
</script>