import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles';
import { aliases, fa } from 'vuetify/iconsets/fa';
import '@fortawesome/fontawesome-free/css/all.css';
import './style.css';
import AllAnnouncements from './components/AllAnnouncements.vue';
import { createPinia } from 'pinia';

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#FFFFFF',
          secondary: '#007AFF',
          accent: '#34C759',
          background: '#F2F2F7',
          text: '#1C1C1E',
          blur: 'rgba(255, 255, 255, 0.7)',
        },
      },
    },
  },
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: { fa },
  },
});

const app = createApp(AllAnnouncements);
app.use(vuetify);
app.use(createPinia());
app.mount('#app');