<template>
  <v-col cols="12" sm="6">
    <v-card class="mx-auto blur-bg" elevation="0" rounded="xl">
      <v-card-title class="text-subtitle-1 font-weight-medium text--text">
        {{ announcement.title }}
      </v-card-title>
      <v-card-subtitle class="text--text">
        {{ announcement.date }}
      </v-card-subtitle>
      <v-card-text class="text-body-2 text--text">
        {{ announcement.content }}
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script setup>
defineProps({
  announcement: Object,
});
</script>

<style scoped>
.v-card {
  transition: transform 0.3s ease;
}

.v-card:hover {
  transform: translateY(-4px);
}
</style>