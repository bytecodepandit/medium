import React, { useEffect, ReactElement, ReactNode }  from "react";
import type { NextPage } from 'next'
import { AppProps } from "next/app";
import { useRouter } from "next/dist/client/router";
import "../styles/styles.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)
  const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url: URL) => {
            console.log('hello url', url)
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);

  return (
    getLayout(<Component {...pageProps}/>)
  )
}
