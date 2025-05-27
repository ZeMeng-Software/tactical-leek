<template>
  <v-col cols="12" sm="6" md="3">
    <v-card
      class="mx-auto card-animation blur-bg"
      elevation="0"
      rounded="xl"
      role="link"
      :aria-label="`查看 ${product.name} 详情`"
    >
      <v-img
        :src="product.image"
        height="200"
        cover
        class="rounded-t-xl"
        :lazy-src="product.image"
      ></v-img>
      <v-card-title class="text-center text-subtitle-1 font-weight-medium text--text">
        {{ product.name }}
      </v-card-title>
      <v-card-actions class="justify-center pb-4">
        <v-btn
          color="accent"
          variant="flat"
          @click="goToLink"
          class="text-caption px-6"
          append-icon="fas fa-shopping-cart"
        >
          查看详情
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
    validator: (product) => 'name' in product && 'image' in product && 'link' in product,
  },
});

const goToLink = () => {
  if (props.product?.link) {
    window.open(props.product.link, '_blank', 'noopener,noreferrer');
  }
};
</script>

<style scoped>
.card-animation {
  transition: transform 0.3s ease;
}

.card-animation:hover {
  transform: translateY(-4px);
}
</style>