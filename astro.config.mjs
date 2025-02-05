// @ts-check
import { defineConfig } from 'astro/config';

import sanity from '@sanity/astro';
import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: 'jcexkvnt',
      dataset: 'development',
      useCdn: false,
      studioBasePath: '/studio'
    }), 
    react()
  ],

  output: 'server',

  vite: {
    plugins: [tailwindcss()]
  }
});