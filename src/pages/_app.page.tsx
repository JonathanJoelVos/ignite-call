import { globalStyles } from '@/styles/global'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
