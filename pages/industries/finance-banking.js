import Head from 'next/head'
import styles from "../../styles/index.module.css";
import Bannersol from '../../Components/FinTech/Bannersol';
import Newheader from '@/Components/Newheader/Newheader';
import Newfooter from '@/Components/Newfooter/Newfooter';
import Banner from '@/Components/FinTech/Banner';
import Steps from '@/Components/FinTech/Steps';
import Solutionsmain from '@/Components/MobileDesigns/Solutions/Solutionsmain';
import Patientmonitoring from '@/Components/MobileDesigns/Solutions/Patientmonitoring';
import Pioneering from '@/Components/MobileDesigns/Solutions/Pioneering';
import Ourclients from '../../Components/FinTech/Ourclients';
import Ourclientsol from '@/Components/MobileDesigns/Solutions/Ourclientsol';

export default function Bankfinance() {
  return (
    <>
      <Head>
        <title>Custom Software Solutions for Financial Firms | Selteq</title>
        <meta name="description" content="Security, efficiency, reliability, Selteq’s banking and finance software solutions help you create true added value for your clients." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicon icon  */}
        <link rel="icon" href="/favicon.ico" />
        {/* bootstrap v4.0.0 cdn  */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
        {/* fontasome V5 cdn  */}
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"/>
        {/* font roboto  */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet"></link>
{/* poppins  */}
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>
      </Head>
      <main className={styles.main_height} >
        <div className='display_h'>
        {/* <Header/> */}
        <Newheader />
        <Banner />
        <Bannersol />
        <Steps />
        <Ourclients />
        <Newfooter/>
        </div>
        <div className='display_pc'>
        {/* <Header/> */}
        <Newheader />
        <Solutionsmain />
        <Patientmonitoring />
        <Pioneering />
        <Ourclientsol />
        <Newfooter/>
        </div>
      </main>
    </>
  )
}
