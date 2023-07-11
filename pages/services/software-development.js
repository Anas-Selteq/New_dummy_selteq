import Head from 'next/head'
import styles from "../../styles/index.module.css";
import Banner from '../../Components/Banner';
import Solutions from '../../Components/Solutions';
import Process from '../../Components/Process';
import Digital from '../../Components/Digital';
import Newheader from '@/Components/Newheader/Newheader';
import Newfooter from '@/Components/Newfooter/Newfooter';
import Productrunning from '@/Components/Productrunning';
import Businessdev from '@/Components/Businessdev';

const Software = () => {
  return (
    <>
      <Head>
        <title>Custom Software Development Services | Selteq</title>
        <meta name="description" content="Looking for reliable software development solutions? Selteq offers cutting-edge technology and innovative solutions for your business needs." />
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
        {/* google font for mobile components  */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300&family=Roboto:wght@300;400&display=swap" rel="stylesheet" />

        {/* google font roboto  */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300&family=Poppins:wght@200;400&family=Roboto:wght@700&display=swap" rel="stylesheet" />

        {/* poppins  */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300&family=Poppins:wght@200;400&family=Roboto:wght@300;400&display=swap" rel="stylesheet" />
      </Head>
      <main className={styles.main_height}>
        <Newheader />
        <Banner />
        <Solutions />
        <Process />
        <Productrunning />
        <Digital />
        <Businessdev />
        <Newfooter />
      </main>
    </>
  )
}

export default Software
