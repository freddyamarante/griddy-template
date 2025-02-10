import {defineField} from 'sanity';

export default defineField({
  type: 'object',
  name: 'sectionSettings',
  fields: [
    defineField({
      name: 'hide',
      title: 'Hide section',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'padding',
      title: 'Padding',
      type: 'padding',
    }),
    defineField({
      type: 'code',
      name: 'customCss',
      title: 'Custom CSS',
      options: {
        language: 'css',
        languageAlternatives: [
          {
            title: 'CSS',
            value: 'css',
          },
        ],
      },
    }),
  ],
  initialValue: {
    hide: false,
    padding: {
      top: 60,
      bottom: 60,
    },
  }
});
