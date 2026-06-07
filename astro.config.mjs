import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jescotraining.nl',
  integrations: [sitemap()],
  server: {
    port: parseInt(process.env.PORT ?? '4321'),
  },
});
