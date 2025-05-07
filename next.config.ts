import { withPayload } from '@payloadcms/next/withPayload'
import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { reactCompiler: false, },
  eslint: { dirs: ['app', 'context', 'lib', 'utils'], },
}

const withNextIntl = createNextIntlPlugin(
  './lib/i18n/request.tsx'
);

const withNextIntlConfig = withNextIntl(nextConfig)

export default withPayload(withNextIntlConfig)