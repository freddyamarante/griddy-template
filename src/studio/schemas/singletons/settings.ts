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
  ],
  initialValue: {
    storeName: 'My Store',
  },
  preview: {
    select: {
      title: 'storeName',
      media: 'logo'
    }
  }
});