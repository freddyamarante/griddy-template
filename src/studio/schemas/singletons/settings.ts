// schemas/settings.ts
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'storeName',
      title: 'Store Name',
      type: 'string'
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'spaceBetweenSections',
      title: 'Space Between Sections',
      type: 'number',
      validation: Rule => Rule.min(0).max(1000)
    })
  ],
  initialValue: {
    storeName: 'My Store',
    spaceBetweenSections: 40
  },
  preview: {
    select: {
      title: 'storeName',
      media: 'logo'
    }
  }
});