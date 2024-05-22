export default {
  name: 'links',
  title: 'Links',
  type: 'document',

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Link Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'icon',
              title: 'Icon or Image',
              type: 'image',
              options: {
                hotspot: true,
                validation: (Rule) => Rule.required(),
              },
            },
          ],
        },
      ],
    },
  ],
}
