// import '@/styles/globals.css'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import '@/styles/global.css'
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const canonicalUrl = (
    `https://ypcethan.com` + (router.asPath === '/' ? '' : router.asPath)
  ).split('?')[0]

  return (
    <Layout>
      <DefaultSeo canonical={canonicalUrl} titleTemplate="Ethan Chen | %s" />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
