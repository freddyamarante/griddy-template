import { defineField } from 'sanity';

export default defineField({
  name: 'section',
  title: 'Section',
  type: 'document',
  fields: [
    defineField({
      name: 'identifier',
      title: 'Unique ID',
      type: 'slug',
      options: { source: 'title' }
    }),
    defineField({
      name: 'type',
      title: 'Section Type',
      type: 'string',
      options: {
        list: ['hero', 'features', 'contact', 'product-grid', 'custom']
      }
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image' },
      ]
    })
  ]
})