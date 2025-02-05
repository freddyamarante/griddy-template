import {defineConfig} from 'sanity'

import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {colorInput} from '@sanity/color-input'

import {schemaTypes} from './src/studio/schemas'
import {structure} from './src/studio/structure'

export default defineConfig({
  name: 'default',
  title: 'griddy-template',

  projectId: 'jcexkvnt',
  dataset: 'development',

  plugins: [
    structureTool({structure}), 
    visionTool(), 
    colorInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})
