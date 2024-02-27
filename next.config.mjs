import createNextIntlPlugin from 'next-intl/plugin';
/** @type {import('next').NextConfig} */


const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ["puppeteer-core"],
      },
};

export default withNextIntl(nextConfig);