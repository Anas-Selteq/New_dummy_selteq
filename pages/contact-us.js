import React from 'react'
import Contact from '../Components/Contact'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Newheader from '@/Components/Newheader/Newheader'
import Head from 'next/head'
import styles from "../styles/index.module.css";
import Newfooter from '@/Components/Newfooter/Newfooter'
import Newcontactus from '@/Components/Newcontactus/Newcontactus'
import Contactus from '@/Components/MobileDesigns/Contactus/Contactus'
import { useRouter } from 'next/router'
import ZendeskChat from '@/Components/ZendeskChat'

const ZENDESK_KEY = "d848880a-fdla-4d00-a24f-f2a7db538e45";


const ContactUs = () => {
  const router = useRouter();
  const medical = () => {
    router.push("/healthcare-and-medical")
  }

  const handleLoaded = () => {
    ZendeskAPI("messenger", "open");
  };

  return (
    <div>
      <Head>
        <title>Got A Question? Our Experts Are Ready to Help | Selteq</title>
        <meta name="description" content="Discover the best-of-breed software solutions for your business. Whatever your business challenge, Selteq is here to help." />
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
      <main className={styles.main_head}>
        <div className='col-md-12 px-0 display_h'>
          {/* <ZendeskChat/> */}
          <Newheader />
          <Newcontactus />
          <Newfooter />
        </div>
        <div className='col-md-12 px-0 display_pc'>
          <Newheader />
          <Contactus />
          <Newfooter />
        </div>

      </main>
    </div>
  )
}

export default ContactUs
