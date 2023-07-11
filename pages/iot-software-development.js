import Head from "next/head";
import React from "react";
import styles from "../styles/index.module.css";
import Newheader from "@/Components/Newheader/Newheader";
import Iotpc from "@/Components/iotpc/Iotpc";
import Iotmobile from "@/Components/MobileDesigns/Iotmobile/Iotmobile";
import Newfooter from "@/Components/Newfooter/Newfooter";
import { useRouter } from "next/router";
import IotSoftwareDevJSON from "../Static/softwaredevelopment.json";

function iot_software_dev() {
  const router = useRouter();
  const data = router.query === null ? 0 : router.query.data;
  return (
    <>
      <Head>
        <title>Ecommerce Platforms Built with Best | Selteq</title>
        <meta
          name="description"
          content="We’re a leading provider of ecommerce solutions & beautifully designed customer experience. Discover the perfect ecommerce solution for your business with Selteq."
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
        <div className="display_h">
          <Newheader />
          <Iotpc object={IotSoftwareDevJSON[data]} />
          <Newfooter />
        </div>
        <div className="display_pc">
          <Newheader />
          <Iotmobile object={IotSoftwareDevJSON[data]} />
          <Newfooter />
        </div>
      </main>
    </>
  );
}

export default iot_software_dev;
