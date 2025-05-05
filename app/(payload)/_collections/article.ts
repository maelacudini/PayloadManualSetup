import type { CollectionConfig } from 'payload'

export const Article: CollectionConfig = {
  slug: 'article',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}