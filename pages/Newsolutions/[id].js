import Head from 'next/head'
import styles from "../../styles/index.module.css";
import Newheader from '@/Components/Newheader/Newheader';
import Newfooter from '@/Components/Newfooter/Newfooter';
import Banner from '@/Components/Solutionssection/Banner';
import Bannersol from '@/Components/Solutionssection/Bannersol';
import Steps from '@/Components/Solutionssection/Steps';
import Ourclients from '@/Components/Solutionssection/Ourclients';
import Solutionsmain from '@/Components/MobileDesigns/Solutionsection/Solutionsmain';
import Patientmonitoring from '@/Components/MobileDesigns/Solutionsection/Patientmonitoring';
import Pioneering from '@/Components/MobileDesigns/Solutionsection/Pioneering';
import Ourclientsol from '@/Components/MobileDesigns/Solutionsection/Ourclientsol';
import IotSoftwareDevJSON from "../../Static/newcolutionspages.json";
import Section2 from '@/Components/Solutionssection/Section2';

export async function getPostIdList() {
    return [
      {
        params: {
          id: "salesplex",
        }
      },
      {
        params: {
          id: "plexaar",
        }
      },
      {
        params: {
          id: "calendex",
        }
      },
      {
        params: {
          id: "ondelpms",
        }
      },
      {
        params: {
          id: "buzz",
        }
      },
      {
        params: {
          id: "formbiz",
        }
      },
      {
        params: {
          id: "stockpro",
        }
      },
      {
        params: {
          id: "ireach",
        }
      },
      {
        params: {
          id: "forwarde",
        }
      },
      {
        params: {
          id: "ondelafs",
        }
      },
      {
        params: {
          id: "expertpay",
        }
      },
      {
        params: {
          id: "eblurb",
        }
      },
      {
        params: {
          id: "onlog",
        }
      },
      {
        params: {
          id: "foggle",
        }
      },
      {
        params: {
          id: "doCloud",
        }
      }
    ];
  }
  
  export async function getStaticPaths() {
    const paths = await getPostIdList();
    return {
      paths,
      fallback: false,
    };
  }
  
  export async function getStaticProps({ params }) {
    //   const postData = await getPostDetails(params.id);
    return {
      props: {
        obj: IotSoftwareDevJSON.find((itm) => itm.path == params.id),
      },
    };
  }
export default function Newsolutions({obj}) {
    // console.log("<><><><><><", obj)
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
        <div className='col-md-12 px-0'>
          {/* <Header/> */}
          <Newheader />
          {obj ? 
          <>
         <Banner heading={obj}/>
         <Bannersol heading={obj} />
         {/* <Steps heading={obj}  />   */}
         <Section2 heading={obj} />
         </> :
         <>loading</>
        }
         
          {/* <Ourclients /> */}
          <Newfooter />
        </div>
        {/* <div className='display_pc'> */}
          {/* <Header/> */}
          {/* <Newheader />
          <Solutionsmain heading={obj} />
          <Patientmonitoring heading={obj} />
          <Pioneering heading={obj} />
          <Ourclientsol heading={obj} />
          <Newfooter /> */}
        {/* </div> */}
      </main>
    </>
  )
}
