import type { CollectionConfig } from 'payload'

export const Article: CollectionConfig = {
  slug: 'article',
  auth: false,
  access: { read: () => true, },
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
      required: true,
    },
  ],
  timestamps: true,
  upload: false,
}