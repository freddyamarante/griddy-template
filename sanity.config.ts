import {defineConfig} from 'sanity'

import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {colorInput} from '@sanity/color-input'
import {codeInput} from '@sanity/code-input'
import {sanityCommerce, type SanityCommercePluginConfig,} from '@commercelayer/sanity-plugin-commerce';
import {inlineSvgInput} from '@focus-reactive/sanity-plugin-inline-svg-input'

import {schemaTypes} from './src/studio/schemas'
import {structure} from './src/studio/structure'

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || '';
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || '';

if (!projectId || !dataset) {
  throw new Error('Missing environment variable(s)');
}

const sanityCommerceConfig: SanityCommercePluginConfig = {
  productLabel: 'Coffee',
  variantLabel: 'Coffee Variant',
  taxonomyLabel: 'Category System',
  taxonLabel: 'Category',
  productAttributes: [{ name: 'origin', title: 'Origin', type: 'string' }],
  variantAttributes: [
    {
      name: 'roastLevel',
      title: 'Roast Level',
      type: 'string',
      options: {
        list: [
          { title: 'Light', value: 'light' },
          { title: 'Medium', value: 'medium' },
          { title: 'Dark', value: 'dark' },
        ],
      },
    },
  ],
};

export default defineConfig({
  name: 'default',
  title: 'griddy-template',

  projectId,
  dataset,

  plugins: [
    structureTool({structure}), 
    inlineSvgInput(),
    visionTool(), 
    colorInput(),
    codeInput(),
    sanityCommerce(sanityCommerceConfig)
  ],

  schema: {
    types: schemaTypes,
  },
})
