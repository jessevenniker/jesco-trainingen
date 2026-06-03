import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jescotraining.nl',
  server: {
    port: parseInt(process.env.PORT ?? '4321'),
  },
});
