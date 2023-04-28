import '@/styles/globals.css'
import { StoreProvider } from '@/utils/Store'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function App({ Component, pageProps }) {
  return (
    <StoreProvider>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </StoreProvider>
  )
}
