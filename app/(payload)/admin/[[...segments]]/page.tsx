import config from '@payload-config'
import type { Metadata } from 'next'
import { importMap } from '../importMap'
import { RootPage, generatePageMetadata } from '@payloadcms/next/views'

type Args = {
  params: Promise<{
    segments: string[]
  }>
  searchParams: Promise<{
    [key: string]: string | string[]
  }>
}

export const generateMetadata = ({ params, searchParams }: Args): Promise<Metadata> =>
  generatePageMetadata({
    config, params, searchParams 
  })

const Page = ({ params, searchParams }: Args) =>
  RootPage({
    config, params, searchParams, importMap 
  })

export default Page