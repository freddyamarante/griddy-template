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
      name: 'colorScheme',
      title: 'Color Scheme',
      type: 'object',
      fields: [
        defineField({ name: 'textColor', title: 'Text Color', type: 'color' }),
        defineField({ name: 'backgroundColor', title: 'Background Color', type: 'color' }),
        defineField({ name: 'foregroundColor', title: 'Foreground Color', type: 'color' }),
        defineField({ name: 'primaryColor', title: 'Primary Color', type: 'color' }),
        defineField({ name: 'secondaryColor', title: 'Secondary Color', type: 'color' }),
        defineField({ name: 'accentColor', title: 'Accent Color', type: 'color' }),
        defineField({ name: 'highlightColor', title: 'Highlight Color', type: 'color' }),
        defineField({ name: 'errorColor', title: 'Error Color', type: 'color' }),
        defineField({ name: 'successColor', title: 'Success Color', type: 'color' }),
        defineField({ name: 'warningColor', title: 'Warning Color', type: 'color' }),
        defineField({ name: 'borderColor', title: 'Border Color', type: 'color' }),
        defineField({ name: 'cardBackgroundColor', title: 'Card Background Color', type: 'color' }),
      ]
    }),
  ],
  initialValue: {
    storeName: 'My Store',
    colorScheme: {
      textColor: '#000000',
      backgroundColor: '#FFFFFF',
      foregroundColor: '#F0F0F0',
      primaryColor: '#2563EB',
      secondaryColor: '#FF0080',
      accentColor: '#00D68F',
      highlightColor: '#FFD43B',
      errorColor: '#FF453A',
      successColor: '#32D74B',
      warningColor: '#FF9F0A'
    }
  },
  preview: {
    select: {
      title: 'storeName',
      media: 'logo'
    }
  }
});