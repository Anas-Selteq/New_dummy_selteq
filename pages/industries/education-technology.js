import Head from 'next/head'
import styles from "../../styles/index.module.css";
import Newheader from '@/Components/Newheader/Newheader';
import Newfooter from '@/Components/Newfooter/Newfooter';
import Banner from '@/Components/Edtec/Banner';
import Bannersol from '@/Components/Edtec/Bannersol';
import Steps from '@/Components/Edtec/Steps';
import Solutionsmain from '@/Components/MobileDesigns/EdTechmob/Solutionsmain';
import Patientmonitoring from '@/Components/MobileDesigns/EdTechmob/Patientmonitoring';
import Pioneering from '@/Components/MobileDesigns/EdTechmob/Pioneering';
import Ourclients from '../../Components/FinTech/Ourclients';
import Ourclientsol from '@/Components/MobileDesigns/Solutions/Ourclientsol';

export default function EdTechm() {
  return (
    <>
      <Head>
        <title>Best Learning Management Software to Grow Your Institute | Selteq</title>
        <meta name="description" content="We have a goal to make a difference in educational industry. We provide innovative easy-to-use and affordable software solutions to institutions" />
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
