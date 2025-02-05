import {defineConfig} from 'sanity'

import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {colorInput} from '@sanity/color-input'
import {singletonTools} from 'sanity-plugin-singleton-tools';

import {schemaTypes} from './src/schemas'

export default defineConfig({
  name: 'default',
  title: 'griddy-template',

  projectId: 'jcexkvnt',
  dataset: 'production',

  plugins: [
    structureTool(), 
    visionTool(), 
    colorInput(), 
    singletonTools()
  ],

  schema: {
    types: schemaTypes,
  },
})
