import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://timsouris.github.io',
  base: '/',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
