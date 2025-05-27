<template>
  <v-container class="intro-section my-12">
    <v-row align="center" class="pa-6 blur-bg rounded-xl">
      <v-col cols="12" md="6" class="text-center">
        <v-img
          src="/logo.png"
          max-width="300"
          class="mx-auto logo-animation"
          alt="战术韭菜Logo"
          aria-hidden="true"
        ></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <h1 class="text-h4 font-weight-bold text">战术韭菜</h1>
        <p class="mt-4 text-body-1 text--text">
          战术韭菜是专注于wargame领域的品牌，始终秉持为玩家提供高品质产品的理念，不断研发创新。我们深知玩家对wargame的热爱与追求，因此致力于打造让玩家满意、信赖的产品。旗下品牌七宝水弹深耕高端水弹产品，力争做最优质的水弹，服务每一位有追求的wargame玩家。
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup></script>

<style scoped>
.intro-section {
  background: var(--v-theme-blur);
}

.logo-animation {
  transition: transform 0.5s ease-in-out;
}

.logo-animation:hover {
  transform: scale(1.05);
}

@media (max-width: 960px) {
  .v-img {
    max-width: 200px;
  }
}
</style>