import React, { useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/index.module.css'
import Video from '../Components/Landingpage/Video'
import Youdream from '../Components/Landingpage/Youdream'
import Webdevsec from '../Components/Landingpage/Webdevsec'
import Parallex from '../Components/Landingpage/parallex'
import Industries from '../Components/Landingpage/Industries'
import Newheader from '@/Components/Newheader/Newheader'
import Newfooter from '@/Components/Newfooter/Newfooter'
import Videosec from '@/Components/Landingpage/Videosec'
import Workflownew from '@/Components/Landingpage/Workflownew'
import Letsconnect from '@/Components/Letsconnect/Letsconnect'
import OurPartners from '@/Components/OurPartners/OurPartners'
import ServicesSlider from '@/Components/ServicesSlider/ServicesSlider'

// export async function getStaticProps() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//   const posts = await res.json()

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   }
// }

export default function Home({ posts }) {
  React.useEffect(() => {
    console.log(posts)
  }, [])

  return (
    <>
      <Head>
        <title>Adaptable IT Solutions for Modern Business | Selteq</title>
        <meta
          name="description"
          content="Selteq delivers secure, agile and scalable software & app solutions which help organizations to dramatically improve their business performance."
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
        {/* ruda font  */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Ruda:wght@800&display=swap"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />

      </Head>
      <main className={styles.main_height}>
        {/* <Header /> */}
        <Newheader />
        <Video />
        <Youdream />
        {/* <ServicesSlider/> */}
        <Webdevsec />
        <Parallex />
        <Videosec />
        <OurPartners />
        <Industries />
        <Workflownew />
        <Letsconnect />
        <Newfooter />
      </main>
    </>
  )
}
