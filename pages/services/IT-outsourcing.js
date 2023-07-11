import Head from 'next/head'
import styles from '../../styles/index.module.css'
import Banner from '../../Components/Itdev/Banner'
import Solutions from '../../Components/Itdev/Solutions'
import Process from '../../Components/Itdev/Process'
import Digital from '../../Components/Itdev/Digital'
import Productup from '../../Components/Itdev/Productup'
import Newheader from '@/Components/Newheader/Newheader'
import Newfooter from '@/Components/Newfooter/Newfooter'
import Allbusscomp from '@/Components/MobileDesigns/Webdevmob/Allbusscomp'

const Software = () => {
  return (
    <>
      <Head>
        <title>Reliable IT Services & IT Support & Solutions | Selteq</title>
        <meta
          name="description"
          content="Selteq's IT services provide comprehensive solutions that streamline your business processes and enhance your overall productivity. Contact us today."
        />
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
        <Newheader />
        <Banner />
        <Solutions />
        <Process />
        <Digital />
        <Productup />
        <Allbusscomp />
        <Newfooter />
      </main>
    </>
  )
}

export default Software
