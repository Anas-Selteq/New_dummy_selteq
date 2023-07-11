import Head from 'next/head'
import React from 'react'

function Contactus() {
  return (
   <>
      <Head>
       
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicon icon  */}
        <link rel="icon" href="/favicon.ico" />
        {/* bootstrap v4.0.0 cdn  */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        ></link>
        {/* fontasome V5 cdn  */}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossorigin="anonymous"
        />
      </Head>
      <div className='col-md-12 px-0'>
        <div className='col-md-12 px-0 pt-5'>
            <img className='img-fluid' src='https://1864597015.rsc.cdn77.org/selteqreact/images/touch.png' />
        </div>
        <div className='col-md-12 pt-4'>
            <img className='img-fluid' src='https://1864597015.rsc.cdn77.org/selteqreact/images/contacttt.png' />
        </div>
        <div className='col-md-12'>
            <img className='img-fluid' src='https://1864597015.rsc.cdn77.org/selteqreact/images/cust.png' />
        </div>
        <div className='col-md-12'>
            <img className='img-fluid' src='https://1864597015.rsc.cdn77.org/selteqreact/images/ukadd.png' />
        </div>
        <div className='col-md-12 pb-4'>
            <img className='img-fluid' src='https://1864597015.rsc.cdn77.org/selteqreact/images/usadd.png' />
        </div>
      </div>
      </>
  )
}

export default Contactus