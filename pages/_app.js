import '@/styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
    
    <Script id="1"  strategy='lazyOnload' src={`https://www.googletagmanager.com/gtag/js?id=UA-152360047-5`}  />
    <Script id="2" strategy='lazyOnload' >
    {
      `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'UA-152360047-5');
      `
    }
      </Script>
  <Component {...pageProps} />
  </>
  )
}
