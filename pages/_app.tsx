import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store, wrapper } from '@/store/store'

function App({ Component, pageProps }: AppProps) {
  const { store } = wrapper.useWrappedStore(pageProps)
  return (
    <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
  )
}

export default App