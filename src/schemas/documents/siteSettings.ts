
import { defineField } from "sanity"

export default defineField({
  name: 'siteSettings',
  title: 'Site Settings',
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
        defineField({ name: 'primary', type: 'color' }),
        defineField({ name: 'secondary', type: 'color' }),
        defineField({ name: 'accent', type: 'color' })
      ]
    }),
    defineField({
      name: 'fonts',
      title: 'Fonts',
      type: 'object',
      fields: [
        defineField({ 
          name: 'primary', 
          type: 'string', 
          options: {
            list: ['Inter', 'Poppins', 'Roboto', 'Custom...']
          }
        }),
        defineField({ name: 'customFontUrl', type: 'url' })
      ]
    }),
    defineField({
      name: 'enabledSections',
      title: 'Enabled Sections',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'section' }] }]
    })
  ]
})
