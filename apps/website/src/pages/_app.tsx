import '@/styles/global.css'

import { ThemeProvider } from '@status-im/components'
import { Inter } from 'next/font/google'
import { QueryClient, QueryClientProvider } from 'react-query'

import type { Page, PageLayout } from 'next'
import type { AppProps } from 'next/app'

const queryClient = new QueryClient()

const inter = Inter({
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

type Props = AppProps & {
  Component: Page
}

export default function App({ Component, pageProps }: Props) {
  const getLayout: PageLayout = Component.getLayout || (page => page)

  return (
    <div id="app" className={inter.variable + ' font-sans'}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
      </QueryClientProvider>
    </div>
  )
}
