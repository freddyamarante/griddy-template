// @ts-check
import { defineConfig } from 'astro/config';

import sanity from '@sanity/astro';
import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import { loadEnv } from "vite";

const { SANITY_PROJECT_ID, SANITY_DATASET } = loadEnv(process.env.NODE_ENV || '', process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: SANITY_PROJECT_ID,
      dataset: SANITY_DATASET,
      useCdn: true,
      studioBasePath: '/studio'
    }), 
    react()
  ],

  output: 'server',

  vite: {
    plugins: [tailwindcss()]
  }
});