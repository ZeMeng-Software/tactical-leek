<template>
  <v-footer color="primary" class="blur-bg py-8">
    <v-container>
      <v-row>
        <v-col cols="12" md="4" class="text-center">
          <h3 class="text-h6 font-weight-bold text">加入战术韭菜社区</h3>
          <p class="mt-2 text-body-2 text--text">
            欢迎加入我们的社区，分享你的热情
          </p>
          <v-btn
            color="accent"
            variant="flat"
            :href="config.socialLinks.community"
            target="_blank"
            append-icon="fas fa-users"
            class="px-6"
          >
            加入社区
          </v-btn>
        </v-col>
        <v-col cols="12" md="4" class="text-center">
          <h3 class="text-h6 font-weight-bold text">联系我们</h3>
          <p class="mt-2 text-body-2 text--text">
            有任何问题？随时联系我们！
          </p>
          <v-btn
            color="accent"
            variant="flat"
            :href="config.socialLinks.contact"
            append-icon="fas fa-envelope"
            class="px-6"
          >
            联系我们
          </v-btn>
        </v-col>
        <v-col cols="12" md="4" class="text-center">
          <h3 class="text-h6 font-weight-bold text">关注我们</h3>
          <p class="mt-2 text-body-2 text--text">
            在B站和抖音上查看我们的最新动态！
          </p>
          <v-btn
            color="accent"
            variant="flat"
            :href="config.socialLinks.bilibili"
            target="_blank"
            append-icon="fab fa-bilibili"
            class="mx-2 px-6"
          >
            B站
          </v-btn>
          <v-btn
            color="accent"
            variant="flat"
            :href="config.socialLinks.douyin"
            target="_blank"
            append-icon="fas fa-video"
            class="mx-2 px-6"
          >
            抖音
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
import { config } from '../config';
</script>