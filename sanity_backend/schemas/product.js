import { getExtension, getImageDimensions } from '@sanity/asset-utils'
import { createImageField } from "sanity-pills"

export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
          type: 'image',
      options: {
        hotspot: true,
      },
    },

    {
      name: 'coverImg',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
      validation: Rule => Rule.required(),
    },
   
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      type: 'blockContent',
      title: 'Description',

    },
    {
      name: 'extraDesc',
      type: 'blockContent',
      title: 'Extra Description Or Images',

    },
    {
      name: 'featureProduct',
      title: 'Feature This Product',
      type: 'boolean',

    }
  ]
}