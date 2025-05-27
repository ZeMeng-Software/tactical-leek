<template>
  <v-col cols="12" sm="6" md="6">
    <v-card
      class="mx-auto blur-bg pa-6 test-data-card"
      elevation="0"
      rounded="xl"
      @click="goToLink"
      role="link"
      :aria-label="`查看 ${test.title} 测试数据`"
    >
      <v-row align="center" justify="center">
        <v-col cols="12" class="text-center">
          <v-icon :icon="test.icon" size="64" color="secondary" class="mb-4"></v-icon>
          <h3 class="text-h5 font-weight-bold text--text">{{ test.title }}</h3>
        </v-col>
      </v-row>
    </v-card>
  </v-col>
</template>

<script setup>
const props = defineProps({
  test: {
    type: Object,
    required: true,
    validator: (test) => 'title' in test && 'link' in test && 'icon' in test,
  },
});

const goToLink = () => {
  if (props.test?.link) {
    window.open(props.test.link, '_blank', 'noopener,noreferrer');
  }
};
</script>

<style scoped>
.test-data-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.test-data-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}
</style>