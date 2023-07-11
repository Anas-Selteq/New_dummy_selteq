import Head from 'next/head'
import React from 'react'
import ExpertC from '../../Components/ExpertC'
import IotSoftwareDevJSON from "../../Static/caseStudies.json";

export async function getPostIdList() {
  return [
    {
      params: {
        id: "Expert-App",
      },
    },
    {
      params: {
        id: "live-chat-system",
      }
    },
    {
      params: {
        id: "Plexarr",
      }
    },
    {
      params: {
        id: "buzz",
      }
    },
    {
      params: {
        id: "Chelsford",
      }
    },
    {
      params: {
        id: "London-Franchise",
      }
    },
    {
      params: {
        id: "Digicon",
      }
    },
    {
      params: {
        id: "iReach",
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
  return {
    props: {
      obj: IotSoftwareDevJSON.find((itm) => itm.path === params.id),
    },
  };
}


const ExpertPage = ({obj}) => {
  console.log("<><>",obj)
  return (
    <div>
      <Head>
        <title>Expert On-demand Service App | Case Study Selteq</title>
        <meta name="description" content="See how Selteq helped Expert, an on-demand service app, streamlined their operations with our software solutions. Learn about our collaboration now." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ExpertC alldata={obj} />
    </div>
  )
}

export default ExpertPage
