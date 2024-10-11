import "@/styles/globals.css";
import store from './stores/BookStore';
import { SessionProvider } from "next-auth/react"


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session} store={store}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
