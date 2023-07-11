import React from 'react'
import Aboutmain from '../Components/About/AboutMain'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Head from 'next/head'
import styles from "../styles/index.module.css";
import Newheader from '@/Components/Newheader/Newheader'
import Newfooter from '@/Components/Newfooter/Newfooter'
import Aboutus from '@/Components/MobileDesigns/Aboutus/Aboutus'
const About = () => {
  return (
    <>
    <Head>
      <title>Experts in ERP, LMS, ECRM & HIMS | Selteq</title>
      <meta name="description" content="Selteq develops the highest quality software using cutting edge technologies to create business solutions that are easy to use." />
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
    <main className={styles.main_height}>
      {/* <Header /> */}
      <div className='display_h'>
      <Newheader />
      <Aboutmain/>
      <Newfooter />
      </div>
      <div className='display_pc'>
      <Newheader />
      <Aboutus />
      <Newfooter />
      </div>
    </main>
  </>
  )
}

export default About
