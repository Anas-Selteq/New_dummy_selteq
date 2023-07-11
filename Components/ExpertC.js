import React, { useEffect } from 'react'
import CaseStudies from './Expert/CaseStudies'
import Casestudy from './Expert/Casestudy'
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'
import styles from "../styles/index.module.css";
import Newheader from './Newheader/Newheader'
import Newfooter from './Newfooter/Newfooter'
import Expert from './MobileDesigns/Expert/Expert'
import { useRouter } from 'next/router'



export default function ExpertC ({alldata}){
 
  const router = useRouter();
    const contactus = () => {
        router.push("/contact-us")
    }
  return (
    <>
      <Head>
       
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
      <main className={styles.main_height}>
        <div className='display_h'>
        <Newheader />
        <Casestudy compdata={alldata}/>
        <CaseStudies compdata={alldata}/>
        <Newfooter />
        </div>
        <div className='display_pc'>
        <Newheader />
        <Expert compdata={alldata} />
        <Newfooter />
        </div>
      </main>
    </>
  )
}

