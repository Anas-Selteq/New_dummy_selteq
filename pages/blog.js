import React from 'react'
import Newheader from '@/Components/Newheader/Newheader'
import Head from 'next/head'
import styles from "../styles/index.module.css";
import Blogn from '@/Components/Blogn/Blogn'
import Newfooter from '@/Components/Newfooter/Newfooter'

const Blog = () => {
  return (
    <>
      {/* <Header/> */}
      <Head>
        <title>Selteq News, Blogs & Events | Software Solutions</title>
        <meta name="description" content="Discover industry insights and software solutions on Selteq's blog. Stay up-to-date with the latest trends, news and technologies in the tech world." />
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
      <Blogn/>
      <Newfooter/>
      </main>
    </>
  )
}

export default Blog
