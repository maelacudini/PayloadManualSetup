import sharp from 'sharp'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { buildConfig } from 'payload'
import { Article } from './app/(payload)/_collections/article'

export default buildConfig({
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor(),

  // Define and configure your collections in this array
  collections: [
    Article
  ],

  // Implement email notifications, see https://payloadcms.com/docs/email/overview
  // email: {}

  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || '',
  // Whichever Database Adapter you're using should go here
  // Mongoose is shown as an example, but you can also use Postgres
  db: mongooseAdapter({
    url: process.env.NMONGODB_URI || '',
  }),

  /*
  i18n: {
    fallbackLanguage: DEFAULT_LOCALE,
    supportedLanguages: { en },
    translations: {}
  },
  */

  localization: {
    locales: [
      {
        label: 'English',
        code: 'en',
      },
      {
        label: 'Italian',
        code: 'it',
      },
    ],
    defaultLocale: 'en',
    fallback: true,
  },

  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // This is optional - if you don't need to do these things,
  // you don't need it!
  sharp,
})