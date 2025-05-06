
import { CollectionSlug, getPayload } from 'payload'
import config from '@payload-config'
import { getLocale } from 'next-intl/server'

export const getCollection = async (collection: CollectionSlug, page?: number) => {
  const payload = await getPayload({ config })
  const lang = await getLocale()
  const data = await payload.find({
    collection: collection,
    locale: lang as 'en' | 'it' | 'all' | undefined,
    page: page,
    sort: '-createdAt',
  })

  return data
}