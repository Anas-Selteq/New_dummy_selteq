import Head from 'next/head'
import styles from "../../styles/index.module.css";
import Bannersol from '../../Components/Ecomm/Bannersol';
import Newheader from '@/Components/Newheader/Newheader';
import Newfooter from '@/Components/Newfooter/Newfooter';
import Banner from '@/Components/Ecomm/Banner';
import Steps from '@/Components/Ecomm/Steps';
import Pioneering from '@/Components/MobileDesigns/Ecommerecemob/Pioneering';
import Patientmonitoring from '@/Components/MobileDesigns/Ecommerecemob/Patientmonitoring';
import Solutionsmain from '@/Components/MobileDesigns/Ecommerecemob/Solutionsmain';
import Ourclients from '../../Components/FinTech/Ourclients';
import Ourclientsol from '@/Components/MobileDesigns/Solutions/Ourclientsol';

export default function Ecommerece() {
  return (
    <>
      <Head>
        <title>Ecommerce Platforms Built with Best | Selteq</title>
        <meta name="description" content="We’re a leading provider of ecommerce solutions & beautifully designed customer experience. Discover the perfect ecommerce solution for your business with Selteq." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicon icon  */}
        <link rel="icon" href="/favicon.ico" />
        {/* bootstrap v4.0.0 cdn  */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
        {/* fontasome V5 cdn  */}
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous" />
      </Head>
      <main className={styles.main_height} >
        <div className='display_h'>
          {/* <Header/> */}
          <Newheader />
          <Banner />
          <Bannersol />
          <Steps />
          <Ourclients />
          <Newfooter />
        </div>
        <div className='display_pc'>
          {/* <Header/> */}
          <Newheader />
          <Solutionsmain />
          <Patientmonitoring />
          <Pioneering />
          <Ourclientsol />
          <Newfooter />
        </div>
      </main>
    </>
  )
}
